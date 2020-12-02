import React, {useState} from 'react';
import {View, Text, StyleSheet, LayoutAnimation,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Accordion(props) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.row}
        onPress={() => toggleExpanded()}>
        <Icon  name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={35} />
        <Text style={styles.title}>{props.title}</Text>
        <View style={{flexDirection: 'column', flex: 1}}>
          <Icon
            name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={30}
            color="darkgray"
            style={{alignSelf: 'flex-end'}}
          />
        </View>
      </TouchableOpacity>
      {expanded && props.children}
    </View>
  );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal:10,
        marginTop:4
      },
      title:{
          fontSize:18,
          fontWeight: 'bold',
          paddingVertical:5,
          paddingHorizontal:10,
          color:'gray',
          textAlign:'center',
          textTransform: 'uppercase',
          alignSelf:'center'
      },
})
