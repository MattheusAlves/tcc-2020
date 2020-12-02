import React, {useEffect, useState, useReducer} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StatusBar,
  Dimensions,
} from 'react-native';
import {Card, Title, Button} from 'react-native-paper';
import Svg, {Path} from 'react-native-svg';
import {ScrollView} from 'react-native-gesture-handler';

import {styles} from './style';
import api from '../../../services/api';
import Dialog from '../../../components/Dialog';
import SearchHeader from '../../../components/AutoCompInput';
import {useAuth} from '../../../contexts/auth';

function getWave() {
  const svgPath = [
    'M0,224L30,224C60,224,120,224,180,234.7C240,245,300,267,360,245.3C420,224,480,160,540,138.7C600,117,660,139,720,128C780,117,840,75,900,80C960,85,1020,139,1080,149.3C1140,160,1200,128,1260,96C1320,64,1380,32,1410,16L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z',
    'M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,170.7C672,160,768,96,864,90.7C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    'M0,64L34.3,64C68.6,64,137,64,206,80C274.3,96,343,128,411,122.7C480,117,549,75,617,53.3C685.7,32,754,32,823,42.7C891.4,53,960,75,1029,117.3C1097.1,160,1166,224,1234,218.7C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z',
    'M0,160L34.3,133.3C68.6,107,137,53,206,69.3C274.3,85,343,171,411,170.7C480,171,549,85,617,90.7C685.7,96,754,192,823,202.7C891.4,213,960,139,1029,133.3C1097.1,128,1166,192,1234,213.3C1302.9,235,1371,213,1406,202.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z',
    'M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,74.7C672,107,768,181,864,208C960,235,1056,213,1152,213.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    'M0,192L48,165.3C96,139,192,85,288,53.3C384,21,480,11,576,26.7C672,43,768,85,864,90.7C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    'M0,64L48,64C96,64,192,64,288,101.3C384,139,480,213,576,208C672,203,768,117,864,74.7C960,32,1056,32,1152,53.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    'M0,256L48,234.7C96,213,192,171,288,144C384,117,480,107,576,106.7C672,107,768,117,864,138.7C960,160,1056,192,1152,181.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    'M0,32L48,48C96,64,192,96,288,144C384,192,480,256,576,250.7C672,245,768,171,864,128C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    'M0,0L48,26.7C96,53,192,107,288,117.3C384,128,480,96,576,69.3C672,43,768,21,864,10.7C960,0,1056,0,1152,37.3C1248,75,1344,149,1392,186.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  ];
  const selectPath = Math.floor(Math.random() * Math.random() * svgPath.length);
  return svgPath[selectPath].toString();
}
function WaveCard(props) {
  const svg = (
    <Svg
      width="100%"
      height="100%"
      // key={props.data[i]._id + 2}
      style={styles.svg}
      viewBox="0 0 640 180">
      <Path fill="#3D7AFD" fillOpacity="1" d={props.wave} />
    </Svg>
  );
  return svg;
}

function RenderComponent(props) {
  const Component = [];
  for (let i = 0; i < props.data.length; i++) {
    Component.push(
      <Card
        style={[styles.item, {opacity: props.style.indexOf(i) > -1 ? 0.3 : 1}]}
        onPress={() => props._onPress(i, props.data[i]._id)}
        key={props.data[i]._id}>
        <WaveCard wave={props.wave[i].toString()} />

        <Card.Content style={styles.cardContent} key={props.data[i]._id + 2}>
          <View style={styles.textContainer} key={props.data[i]._id + 3}>
            <Title
              style={[styles.cardText, {opacity: 1}]}
              key={props.data[i]._id + 4}>
              {props.data[i].disciplineName}
            </Title>
          </View>
        </Card.Content>
      </Card>,
    );
  }
  return Component;
}

function reducer(state, action) {
  switch (action.type) {
    case 'incrementLimit':
      return {limit: state.limit + 26};
    case 'decrementLimit':
      return {limit: state.limit - 26};
    default:
      throw new Error();
  }
}

const Dashboard = ({route, navigation}) => {
  const [opacity, setOpacity] = useState([]);
  const [wave, setWave] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [selectDiscipline, setSelectDiscipline] = useState([]);
  const [dialogState, setDialogState] = useState(false);
  const [dialogMessage, setDialogMessage] = useState(
    'Suas disciplinas de interesse foram atualizadas',
  );
  const [dialogTitle, setDialogTitle] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [state, dispatch] = useReducer(reducer, {limit: 26});
  const [disciplineToSearch, setDisciplineToSearch] = useState('');
  const {user, updateUser} = useAuth();
  const _showDialog = () => setDialogState(true);
  const _hideDialog = () => setDialogState(false);

  useEffect(() => {
    async function getData() {
      api
        .get('/disciplines/list', {
          params: {
            limit: state.limit,
          },
        })
        .then((disciplinesArray) => {
          if (disciplinesArray) {
            const arrayLength = disciplinesArray.data.disciplines.length;
            console.log('array length', arrayLength);
            getWaveArray(arrayLength);
            setDisciplines([...disciplinesArray.data.disciplines]);
          }
        })
        .catch(function (error) {
          if (!error.response) {
            setDialogTitle('Erro!');
            setDialogMessage('Network Error: sem conexão.');
            _showDialog();
            if (!dialogState) {
              setTimeout(() => {
                setRefresh(!refresh);
              }, 7000);
            }
          } else console.log(error);
        });
    }

    async function searchDiscipline() {
      await api
        .get('/search/disciplines', {
          params: {
            disciplineName: disciplineToSearch.disciplineName,
            limit: state.limit,
          },
        })
        .then((result) => {
          setDisciplines([...result.data]);
        })
        .catch((error) => console.log(error));
    }
    disciplineToSearch &&
    disciplineToSearch.disciplineName &&
    disciplineToSearch.disciplineName.length > 2
      ? searchDiscipline()
      : getData();
    setOpacity([]);
    refresh ? setRefresh(false) : '';
  }, [refresh, disciplineToSearch, state.limit]);

  function _onPressCard(num, id) {
    console.log('press button');
    if (opacity.indexOf(num) > -1) {
      console.log('id', id);
      setOpacity([...opacity.filter((item) => item != num)]);
      setSelectDiscipline([...selectDiscipline.filter((item) => item != id)]);
      console.log('removeu do array');
      console.log(selectDiscipline);
    } else {
      setOpacity([...opacity, num]);
      setSelectDiscipline([...selectDiscipline, id]);
    }
  }
  function saveDisciplines() {
    console.log(selectDiscipline);
    if (selectDiscipline.length >= 1) {
      api
        .put(`/update/disciplines/${user._id}`, {
          disciplines: selectDiscipline,
        })
        .then((response) => {
          setDialogTitle('Concluído!');
          setDialogMessage(
            `${response.data.length} disciplinas de interesse foram atualizadas.`,
          );
          _showDialog();
          setSelectDiscipline([]);
          setOpacity([]);
          updateUser();
        })
        .catch((error) => {
          //status code 402 = User already has all these disciplines
          if (error.response.status === 402) {
            setDialogTitle('Ops!');
            setDialogMessage('Você já possui todas estas disciplinas');
            _showDialog();
            setSelectDiscipline([]);
            setOpacity([]);
          } else if (error.response.status === 400) {
            console.log(error);
            setDialogTitle('Ops!');
            setDialogMessage('Erro inesperado');
            _showDialog();
            setSelectDiscipline([]);
            setOpacity([]);
          }
        });
    } else {
      setDialogTitle('Erro!');
      setDialogMessage('Selecione pelo menos uma disciplina');
      _showDialog();
    }
  }

  function getWaveArray(arrayLength) {
    const waveArray = [];
    for (let i = 0; i < arrayLength; i++) {
      waveArray.push(getWave());
    }
    setWave([...waveArray]);
  }
  const onScrollBottom = async (e) => {
    const windowHeight = Dimensions.get('window').height;
    const height = e.nativeEvent.contentSize.height;
    const offset = e.nativeEvent.contentOffset.y;
    if (windowHeight + offset >= height && !refresh) {
      setRefresh(true);
      dispatch({type: 'incrementLimit'});
    }
  };

  return (
    <>
      <Dialog
        dialogState={dialogState}
        title={dialogTitle}
        message={dialogMessage}
        onDismiss={() => _hideDialog()}
      />
      {disciplines.length >= 1 ? (
        <>
          <View style={styles.appContainer}>
            <StatusBar
              barStyle="light-content"
              backgroundColor="rgba(59,89,152,.2)"
            />
            <SearchHeader addCategory={setDisciplineToSearch} />
            <View style={styles.viewHeader}>
              <Text style={styles.textHeader}>
                Escolha suas áreas de interesse
              </Text>
            </View>

            <ScrollView
              contentContainerStyle={styles.scrollViewItems}
              style={styles.scrollView}
              onScroll={(e) => {
                refresh ? '' : onScrollBottom(e);
              }}
              scrollEventThrottle={500}>
              <RenderComponent
                wave={wave}
                data={disciplines}
                style={opacity}
                _onPress={_onPressCard}
              />
            </ScrollView>

            <Button
              mode="contained"
              dark
              loading={false}
              style={{backgroundColor: '#285BC8'}}
              onPress={() => saveDisciplines()}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Salvar</Text>
            </Button>
          </View>
        </>
      ) : (
        <View style={styles.viewError}>
          <ActivityIndicator size="large" color="#666" />
        </View>
      )}
    </>
  );
};

export default Dashboard;
