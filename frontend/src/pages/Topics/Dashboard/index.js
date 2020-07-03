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


class Dashboard extends Component {
  // const columns = 3;
  // const colors = [];
  // let cont = 0;

  constructor(props) {
    super(props)
    this.state = {
      disciplines: [{}],
      opacity: [],
      allColors: []
    }
    this.colors = []
    this.cont = 0
    this.columns = 3
    this.onPressButton = this.onPressButton.bind(this)
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
            this.setState({ disciplines: disciplinesArray.data.disciplines, allColors: colors })
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

  componentWillUnmount() {
    this.cont = 0
    // this.setState = {
    //   disciplines: [{}],
    //   opacity: [],
    //   allColors: []
    // }
  }
  componentDidUpdate() {
    console.log("component did update exec")
    this.cont = 0

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
    const selectColor = TouchableCollors();
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
    console.log("data:", data)
    return data; // [F]
  }

  onPressButton(num) {
    this.cont = 0
    console.log("num onpress", num)
    if (this.state.opacity.indexOf(num) > -1) {
      console.log("entrou if on press")
      this.setState({ opacity: this.state.opacity.splice(this.state.opacity.indexOf(num), 1) })
    } else if (this.state.opacity.indexOf(num) === -1) {
      this.setState({ opacity: [...this.state.opacity, num] })
    }
  }

  getOpacity(num) {
    if (this.state.opacity.indexOf(num) > -1) {
      return 0.3
    }
    return 1
  }
handleRefreshe(){
  console.log("handleRefresh")
}

  render() {
    this.count = 0
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {console.log("atualizou")}
          {this.state.disciplines.length > 1 || this.state.opacity.length > 1 ? (
            <FlatList
              extraData={this.state.opacity}
              data={this.createRows(this.state.disciplines, this.columns)}
              keyExtractor={(item) => item._id}
              numColumns={this.columns}
              // onRefresh={true}
              renderItem={(item, index) => {
                if (item.item.empty) {
                  return <View key={() => Math.floor(Math.random() * item.item._id)}
                    style={[styles.item, styles.itemEmpty]} />;
                }
                item.num = this.cont
                ++this.cont
                console.log(item.num)
                return (
                  <TouchableOpacity
                    onPress={() => this.onPressButton(item.num)}
                    style={[
                      styles.item, {
                        backgroundColor: this.state.allColors[item.num],
                        opacity: this.getOpacity(item.num)
                      }
                    ]}
                    key={() => Math.floor(Math.random() * item.item._id)}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefreshe}>
                    <View style={styles.textView}
                      key={() => Math.floor(Math.random() * item.item._id)}>
                      <Text
                        style={styles.text}
                        key={() => Math.floor(Math.random() * item.item._id)}>
                        {item.item.disciplineName}
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
export default Dashboard;
