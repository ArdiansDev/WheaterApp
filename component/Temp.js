import React from "react";
import { TextInput, Button, StyleSheet, Text, View, Image } from "react-native";
import { Component, useState, useEffect } from "react";
import axios from "axios";
// import { text } from "./input";

class Suhu extends Component {
  state = {
    data: [],
    Kota: [],
    Cuaca: [],
    Suhu: [],
    Input: "jakarta",
  };
  // handleNameInput = (e) => {
  //   this.setState({ Input: e.target.value });
  // };
  handleButton = () => {
    const kota = this.state.Input;

    console.log(this.state.Input);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=e8129b03971613906e15d399b8982bce`
      )
      .then((result) => {
        // console.log(result);
        this.setState({
          data: result.data,
          Kota: result.data.name,
          Cuaca: result.data.weather[0].icon,
          Suhu: (0.1 * result.data.main.temp).toFixed(0) + "°C",
          Input: "",
        });
      });
  };
  componentDidMount() {
    const kota = this.state.Input;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=e8129b03971613906e15d399b8982bce`
      )
      .then((result) => {
        console.log(result);
        this.setState({
          data: result.data,
          Kota: result.data.name,
          Cuaca: result.data.weather[0].icon,
          Suhu: (0.1 * result.data.main.temp).toFixed(0) + "°C",
        });
      });
  }
  render() {
    // const { data } = this.state;
    return (
      <View>
        <Button title="Press me" onPress={this.handleButton} />
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            this.setState({ Input: text });
          }}
          // onChangeText={(text) => setInput(text)}
          // value={this.value}
        ></TextInput>
        <Text style={styles.Suhu}>{this.state.Suhu}</Text>
        <Text style={styles.Kota}>{this.state.Kota}</Text>
        <Image
          source={{ uri: "http://openweathermap.org/img/wn/10d@2x.png" }}
          style={styles.Icon}
        ></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    marginTop: 90,
    color: "black",
    backgroundColor: "#c4c4c4",
    opacity: 0.5,
    width: 356,
    height: 52,
    borderRadius: 20,
  },
  Suhu: {
    fontSize: 96,
    color: "#e5e5e5",
    marginLeft: 30,

    top: 350,
  },
  Kota: {
    fontSize: 24,
    color: "#e5e5e5",
    // backgroundColor: "black",
    top: 400,
    left: 50,
  },
  Icon: {
    width: 150,
    height: 150,
    top: 350,
    left: 265,
  },
});

export default Suhu;
