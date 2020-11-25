import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {TextInput, Snackbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {format, parseISO} from 'date-fns';

import api from '../../../services/api';
import styles from './styles';
import Svg from './components/Svg';
import AutoCompInput from '../../../components/AutoCompInput';

const Create = () => {
  const [classes, setClasses] = useState(new Map());
  const [priceReal, setPriceReal] = useState(new Map());
  const [priceCentavos, setPriceCentavos] = useState(new Map());
  const [snackVisibility, setSnackVisibility] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const loadClasses = () => {
      api
        .get('/classes/by/teacher/5fadbf0dd3e8254a4cd71fe6')
        .then((result) => {
          result.data.forEach((classe) => {
            classes.set(classe._id, {
              discipline: classe.discipline.disciplineName,
              saves: true,
              createdAt: format(
                parseISO(classe.createdAt),
                'dd/MM/yyyy hh:mm:ss',
              ),
            });
            let price = classe.hourClassPrice;
            price = price.split('.');
            priceReal.set(classe._id, price[0]);
            priceCentavos.set(classe._id, price[1]);
          });
        })
        .then(() => {
          setClasses(new Map(classes));
          setPriceReal(new Map(priceReal));
          setPriceCentavos(new Map(priceCentavos));
        })
        .catch((err) => console.log(err));
    };
    loadClasses();
  }, [refresh]);

  const onDismissSnackBar = () => setSnackVisibility(false);

  const handleRefresh = () => {
    setClasses(new Map());
    setPriceReal(new Map());
    setPriceCentavos(new Map());
    setRefresh(!refresh);
  };

  const addDiscipline = (response) => {
    //<disciplineId,disciplineName>
    setClasses(new Map(classes.set(response.id, response.disciplineName)));
  };

  const removeDiscipline = async (key) => {
    const classe = classes.get(key);
    if (classe.saves === true) {
      deleteClass(key);
    }
    classes.delete(key);
    setClasses(new Map(classes));
  };

  const setReal = (key, real) => {
    if (classes.get(key).saves && !classes.get(key).update) {
      classes.set(key, {
        discipline: classes.get(key).discipline,
        saves: classes.get(key).saves,
        createdAt: classes.get(key).createdAt,
        update: true,
      });
      setClasses(new Map(classes));
    }
    setPriceReal(new Map(priceReal.set(key, real)));
  };
  const setCentavos = (key, centavos) => {
    if (classes.get(key).saves && !classes.get(key).update) {
      classes.set(key, {
        discipline: classes.get(key).discipline,
        saves: classes.get(key).saves,
        createdAt: classes.get(key).createdAt,
        update: true,
      });
    }
    setClasses(new Map(classes));
    setPriceCentavos(new Map(priceCentavos.set(key, centavos)));
  };

  const deleteClass = async (id) => {
    await api
      .delete(`/class/delete/${id}`)
      .then(() => {
        console.log('Aula removida!');
        setSnackMessage('Aula removida');
        setSnackVisibility(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveClasses = async () => {
    Array.from(classes).forEach(([key, discipline]) => {
      if (!priceReal.has(key) || !priceCentavos.has(key)) {
        setSnackMessage('Preencha o preço das aulas');
        setSnackVisibility(true);
        return;
      }
      if (discipline.saves && discipline.update) {
        api
          .put(
            `/classes/update/5fadbd24d224723b64ad913f/5fadbf0dd3e8254a4cd71fe6`,
            {
              classId: key, //classId
              hourClassPrice: `${priceReal.get(key)}.${priceCentavos.get(key)}`,
            },
          )
          .then((result) => {
            return true;
          })
          .catch((err) => {
            console.log(err);
            return false;
          });
      } else if (
        !discipline.saves &&
        priceReal.has(key) &&
        priceCentavos.has(key)
      ) {
        api
          .post(
            `/classes/create/5fadbd24d224723b64ad913f/5fadbf0dd3e8254a4cd71fe6`,
            {
              discipline: key, //<disciplineId
              hourClassPrice: `${priceReal.get(key)}.${priceCentavos.get(key)}`,
            },
          )
          .then((result) => {
            return true;
          })
          .catch((err) => {
            console.log(err);
            return false;
          });
      }
    });
    setSnackMessage('As disciplinas foram cadastradas/atualizadas');
    setSnackVisibility(true);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(59,89,152,1)" />
      <AutoCompInput addCategory={addDiscipline} />
      <ScrollView>
        <Svg style={{alignSelf: 'center', marginTop: 15}} />
        <View style={styles.form}>
          <Text style={styles.chooseDisciplinesText}>
            Escolha as Discipinas que irá lecionar
          </Text>
          {Array.from(classes).length > 0 &&
            Array.from(classes).map(([key, classe]) => (
              <View
                style={[
                  styles.classWrapper,
                  {borderWidth: classe.saves ? 1 : 0},
                ]}
                key={key}>
                {classe.saves && (
                  <View style={styles.savedClassesInformation}>
                    <Text style={styles.createdAt}>
                      {`Criado em ${classe.createdAt}`}
                    </Text>
                    <Text style={styles.classActive}>Ativo</Text>
                  </View>
                )}
                <View style={styles.disciplineWrapper}>
                  <Text style={styles.discipline}>
                    {classe.saves ? classe.discipline : classe}
                  </Text>
                  <TouchableOpacity
                    style={styles.closeIconWrapper}
                    onPress={() => removeDiscipline(key)}>
                    <Icon
                      name="close"
                      size={45}
                      color="red"
                      style={styles.closeIcon}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.classHourPriceWrapper}>
                  <TextInput
                    style={[styles.classHourPrice, styles.classHourPriceReais]}
                    label="R$"
                    placeholder="Reais"
                    onChangeText={(text) => setReal(key, text)}
                    keyboardType="numeric"
                    value={priceReal.get(key)}
                  />
                  <TextInput
                    style={[styles.classHourPrice, styles.classHourPriceCent]}
                    label="Centavos"
                    placeholder="Centavos"
                    onChangeText={(text) => setCentavos(key, text)}
                    keyboardType="numeric"
                    value={priceCentavos.get(key)}
                  />
                </View>
              </View>
            ))}
        </View>
      </ScrollView>

      <Snackbar
        visible={snackVisibility}
        onDismiss={onDismissSnackBar}
        style={{zIndex: 20, elevation: 10}}
        duration={4000}
        action={{
          label: 'OK!',
          onPress: () => {
            // Do something
          },
        }}>
        {snackMessage}
      </Snackbar>
      <TouchableOpacity
        style={[styles.registerClassWrapper]}
        onPress={() => saveClasses()}>
        <Text style={styles.registerClass}>Cadastrar/Atualizar Aulas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Create;
