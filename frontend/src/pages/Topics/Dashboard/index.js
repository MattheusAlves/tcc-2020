import React, { useEffect, useState, useLayoutEffect, Component } from "react";
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import TouchableCollors, { styles } from "./style";
import api from "../../../services/api";


export class Dashboard extends Component {
  // const columns = 3;
  // const colors = [];
  // let cont = 0;

  constructor(props) {
    super(props)
    this.state = {
      disciplines: [{}],
      opacity: [0],
      allColors: []
    }
    this.colors = []
    this.cont = 0
    this.columns = 3
    this.loadColors = this.loadColors.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)

  }
  componentDidMount() {
    console.log("entrou use effect")
    const loadData = () => {
      api.get("/disciplines/list").then((disciplinesArray) => {
        console.log("execute get")
        if (disciplinesArray) {
          console.log("Entrou if disciplines array")
          const arrayLength = disciplinesArray.data.disciplines.length
          this.loadColors(arrayLength).then((colors) => {
            console.log("vai setar estado")
            this.setState({ disciplines: disciplinesArray.data.disciplines })
            // Disciplines(disciplinesArray.data.disciplines)
          }).catch(function (err) {
            console.log(err)
          })
        }
      }).catch(function (error) {
        console.log("deu erro")
        console.log(error);
      });
    }
    console.log(this.state.disciplines.length)
    if (this.state.disciplines.length <= 1) {
      console.log("chamou load data")
      loadData()
    }
  }

  loadColors(length) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < length; i++) {
        this.colors.push(this.pickColor(this.colors));
      }
      console.log("color length:", this.colors.length)
      this.colors.length === length ? resolve(this.colors) : ''
    })

  }
  pickColor(colors) {

    console.log("Vetor de cores", colors)

    const selectColor = TouchableCollors();
    console.log("selected color", selectColor);
    if (
      selectColor === colors[colors.length - 1] ||
      selectColor === colors[colors.length - 2] ||
      selectColor === colors[colors.length - 3] ||
      selectColor === colors[colors.length - 4]
    ) {
      return this.pickColor(colors);
    }
    return selectColor
  }


  createRows(data, columns) {
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

  onPressButton(num) {
    // setOpacity([1, 2, 3, 4]);
    // console.log(opacity)
    console.log("press button")
    this.setState({ opacity: num })

  }

  getOpacity(num) {
    if (this.state.opacity.indexOf(num) > -1) {
      console.log("entrou if opacity")
      return 0.3
    }
    return 1
  }


  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>

          {this.state.disciplines.length > 1 ? (
            <FlatList
              data={this.createRows(this.state.disciplines, this.columns)}
              keyExtractor={(item) => item._id}
              numColumns={this.columns}
              renderItem={({ item }) => {
                if (item.empty) {
                  return <View key={() => Math.floor(Math.random() * item.id)}
                    style={[styles.item, styles.itemEmpty]} />;
                }
                item.num = this.cont;
                this.cont++;
                return (
                  <TouchableOpacity
                    onPress={() => this.onPressButton(item.num)}
                    style={[
                      styles.item, { backgroundColor: this.state.allColors[item.num], opacity: this.getOpacity(item.num) }
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
              <Text>Network error</Text>
            )}
        </View>
      </SafeAreaView>
    );
  }
}
// export default Dashboard;
