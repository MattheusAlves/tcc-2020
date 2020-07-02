import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import TouchableCollors, { styles } from "./style";
import api from "../../../services/api";


function Dashboard() {
  const [disciplines, setDisciplines] = useState([{}])
  const [opacity, setOpacity] = useState([]);
  const [allColors, setAllColors] = useState();
  const columns = 3;
  const colors = [];
  let cont = 0;

  useEffect(() => {
    console.log(opacity)
    console.log("entrou use effect")
    function loadData() {
      api.get("/disciplines/list").then(function (disciplinesArray) {
        if (disciplinesArray) {
          const arrayLength = disciplinesArray.data.disciplines.length
          loadColors(arrayLength).then(function (colors) {
            setAllColors(colors)
            setDisciplines(disciplinesArray.data.disciplines)
          }).catch(function (err) {
            console.log(err)
          })
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
    if (disciplines.length <= 1) {
      loadData()
    }
  }, [disciplines]);

  const loadColors = (length) => {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < length; i++) {
        colors.push(pickColor(colors));
      }
      console.log("color length:", colors.length)
      colors.length === length ? resolve(colors) : ''
    })
  }


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

  const onPressButton = (num) => {
    setOpacity([1, 2, 3, 4])
    console.log(opacity)

  }

  function getOpacity(num) {
    if (opacity.indexOf(num) > -1) {
      console.log("entrou if opacity")
      return 0.3
    }
    return 1
  }

  function pickColor(colors) {
    console.log("Vetor de cores", colors)

    const selectColor = TouchableCollors();
    console.log("selected color", selectColor);
    if (
      selectColor === colors[colors.length - 1] ||
      selectColor === colors[colors.length - 2] ||
      selectColor === colors[colors.length - 3] ||
      selectColor === colors[colors.length - 4]
    ) {
      return pickColor(colors);
    }
    return selectColor
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
              if (item.empty) {
                return <View key={() => Math.floor(Math.random() * item.id)}
                  style={[styles.item, styles.itemEmpty]} />;
              }
              item.num = cont;
              cont++;
              return (
                <TouchableOpacity
                  onPress={() => onPressButton(item.num)}
                  style={[
                    styles.item, { backgroundColor: allColors[item.num], }// opacity: getOpacity(item.num) }
                  ]}
                  key={() => Math.floor(Math.random() * item.id)}>
                  <View style={styles.textView}
                    key={() => Math.floor(Math.random() * item.id)}>
                    <Text
                      style={styles.text}
                      key={() => Math.floor(Math.random() * item.id)}>
                      {item.disciplineName}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
            <Text key={() => Math.floor(Math.random() * item.id)}>Network error</Text>
          )}
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;
