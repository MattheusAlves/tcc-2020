import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import defaultStyles from '../styles';

const Accordion = (props) => {
  const [data, setData] = useState(props.data);
  const [expanded, setExpanded] = useState(false);

  if (Platform.OS == 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity
        style={[defaultStyles.settingOptionWrapper, styles.row]}
        onPress={() => toggleExpanded()}>
        <GetIcon title={props.title} />
        <Text style={[defaultStyles.settingOption]}>{props.title}</Text>
        <View style={{flexDirection: 'column', flex: 1}}>
          <IconMaterial
            name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={30}
            color="darkgray"
            style={{alignSelf: 'flex-end'}}
          />
        </View>
      </TouchableOpacity>
      {expanded && (
        <TextInput
          style={styles.child}
          value={props.value}
          placeholder={props.label}
          onChangeText={(text) => props.setText(text)}
          // onEndEditing={(e) => props.setText(e.nativeEvent.text)}
          onSubmitEditing={() => props.submit()}
          numberOfLines={2}
          autoFocus={true}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    paddingRight: 18,
    alignItems: 'center',
  },
  child: {
    padding: 16,
    height: 60,
    marginHorizontal: 12,
    marginTop: 5,
    backgroundColor: 'rgba(61,122,253,.9)',
    color: 'white',
    borderRadius: 4,
    fontSize: 24,
    zIndex:0,
  },
});

const GetIcon = (props) => {
  let SelectedIcon;
  switch (props.title) {
    case 'Atualizar a Bio':
      SelectedIcon = (
        <IconMaterialCommunity
          name="bio"
          size={38}
          color="white"
          style={styles.icon}
        />
      );
      break;
    case 'Nome':
      SelectedIcon = (
        <IconAwesome5
          name="user-edit"
          size={29}
          color="white"
          style={styles.icon}
        />
      );
      break;
    case 'Linkedin':
      SelectedIcon = (
        <Icon
          name="linkedin-square"
          size={40}
          color="white"
          styles={styles.icon}
        />
      );
      break;
    case 'Github':
      SelectedIcon = (
        <Icon name="github" size={42} color="white" styles={styles.icon} />
      );
      break;
    case 'Telefone':
      SelectedIcon = (
        <Icon
          name="phone-square"
          size={42}
          color="white"
          styles={styles.icon}
        />
      );
      break;
    case 'Formação Acadêmica':
      SelectedIcon = (
        <IconAwesome5 name="graduation-cap" size={31} color="white" />
      );
      break;
    default:
      SelectedIcon = Icon;
      console.log('Erro');
  }
  return SelectedIcon;
};

export default Accordion;
