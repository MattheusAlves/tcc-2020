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

const useStateCallbackWrapper = (initilValue, loadColors) => {
  const [state, setState] = useState(initilValue);
  useEffect(() => loadColors(), [state]);
  return [state, setState];
};

function Dashboard() {
  const [disciplines, setDisciplines] = useState([{}]) //useStateCallbackWrapper([{}],loadColors);
  const [opacity, setOpacity] = useState();
  const [allColors, setAllColors] = useState();
  const columns = 3;
  const colors = [];
  let cont = 0;

  useEffect(() => {
    function loadData() {
      api.get("/disciplines/list").then(function (disciplinesArray) {
        if (disciplinesArray) {
          setDisciplines(disciplinesArray.data.disciplines)
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
    loadData()
  }, []);
  useLayoutEffect(() => {
    if (disciplines.length > 1) {
      loadColors().then(function (colors) {
        console.log("setou cores", colors)
      })
    }
  }, [disciplines])

  const loadColors = () => {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < disciplines.length; i++) {
        colors.push(pickColor(colors));
      }
      console.log("color length:", colors.length)
      console.log("disciplines length:", disciplines.length)
      colors.length === disciplines.length ? resolve(colors) : ''
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
  function _onPressButton(id, cont) {
    // let value = []
    // value[cont] = 0.5
    // setOpacity(value)

    // console.log(opacity)
    // console.log(opacity[cont])
    console.log(allColors);
  }
  function pickColor(colors) {
    console.log("Vetor de cores", colors)
    //const length = allColors.length;
    const selectColor = TouchableCollors();
    console.log("selected color", selectColor);
    // if (
    //   selectColor === colors[colors.length - 1] ||
    //   selectColor === colors[colors.length - 2] ||
    //   selectColor === colors[colors.length - 3] ||
    //   selectColor === colors[colors.length - 4]
    // ) {
    //  return pickColor();
    // }
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
              if (item.empty)
                return <View style={[styles.item, styles.itemEmpty]} />;
              item.num = cont;
              cont++;
              return (
                <TouchableOpacity
                  onPress={() => _onPressButton(item._id)}
                  style={[
                    styles.item
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
