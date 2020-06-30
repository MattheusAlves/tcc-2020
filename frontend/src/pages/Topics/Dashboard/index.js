import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import TouchableCollors, { styles } from "./style";
import api from "../../../services/api";
import { colors } from "react-native-elements";

function Dashboard() {
  const [disciplines, setDisciplines] = useState([{}]);
  const [opacity, setOpacity] = useState();
  const [allColors, setAllColors] = useState([""]);
  const columns = 3;
  const latest = [];
  let cont = 0;

  useEffect(() => {
    async function loadData() {
     await api
        .get("/disciplines/list").then(function(disciplinesArray){
            if (disciplinesArray) {
                setDisciplines(disciplinesArray.data.disciplines);
                setAllColors(loadColors())
                return
              }
        })
        .catch(function (error) {
          console.log(error);
        });
      
    }
    loadData()

     function loadColors() {
      const colors = [];
      console.log(disciplines.length)
      console.log(disciplines)
      for (let i = 0; i <= disciplines.length - 1; i++) {
          console.log("entrou if")
          
         colors.push(pickColor(colors));
         console.log('colors if:',colors)
      }
      console.log(colors)
      return colors
     
    }
    
  }, []);

  function createRows(data, columns) {
    const rows = Math.floor(data.length / columns); // [A]
    let lastRowElements = data.length - rows * columns; // [B]
    while (lastRowElements !== columns) {
      // [C]
      data.push({
        // [D]
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true,
      });
      lastRowElements += 1; // [E]
    }
    return data; // [F]
  }
  function _onPressButton(id, cont) {
    // let value = []
    // value[cont] = 0.5
    // setOpacity(value)

    // console.log(opacity)
    // console.log(opacity[cont])
    console.log(allColors);
  }
  function pickColor(colors) {
    const length = allColors.length;
    const selectColor = TouchableCollors();
    console.log("selected color", selectColor);
    if (
      selectColor === colors[length - 1] ||
      selectColor === colors[length - 2] ||
      selectColor === colors[length - 3] ||
      selectColor === colors[length - 4]
    ) {
      pickColor();
    }
    return selectColor;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {disciplines.length > 1 ? (
          <FlatList
            data={createRows(disciplines, columns)}
            keyExtractor={(item) => item._id}
            numColumns={columns}
            renderItem={({ item }) => {
              if (item.empty)
                return <View style={[styles.item, styles.itemEmpty]} />;
              item.num = cont;
              cont++;
              return (
                <TouchableOpacity
                  onPress={() => _onPressButton(item._id, item.num)}
                  style={[
                    styles.item,
                    {
                      backgroundColor: colors[item.num],
                      opacity: 1, //opacity[item.num]
                    },
                  ]}
                  key={() => Math.floor(Math.random() * 5)}
                >
                  <Text
                    style={styles.text}
                    key={() => Math.floor(Math.random() * 5)}
                  >
                    {item.disciplineName}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <Text>Network error</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;
