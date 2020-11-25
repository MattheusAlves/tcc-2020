import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Accordian = (props) => {
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
      <TouchableOpacity style={styles.row} onPress={() => toggleExpanded()}>
        <Text style={[styles.title, styles.font]}>{props.title}</Text>
        <Icon
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={30}
          color="darkgray"
        />
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded && (
        <View style={styles.child}>
          <Text>{data}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: 'gray',
    },
    parentHr:{
        height:1,
        color: 'white',
        width:'100%'
    },
    child:{
        backgroundColor: 'gray',
        padding:16,
    }

})

export default Accordian;
