import React from "react";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Quote from "./Quote";

export default function Suhu() {
  const [data, setdata] = useState([]);
  const [Kota, setKota] = useState("jakarta");
  const [Cuaca, setCuaca] = useState([]);
  const [Suhu, setSuhu] = useState([]);
  const [Input, setInput] = useState("");
  const callWeather = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${Kota}&appid=e8129b03971613906e15d399b8982bce`
      )
      .then((result) => {
        setdata(result.data);
        setKota(result.data.name);
        setCuaca(result.data.weather[0].icon);
        setSuhu((result.data.main.temp - 273.15).toFixed(0) + "°C");
      });
  };
  const clearbutton = () => {
    setInput("");
  };
  const handleButton = () => {
    setKota(Input);
    // callWeather();
    Keyboard.dismiss();
    // console.log(data.weather[0]w.main);
    setInput("");
  };
  useEffect(() => {
    callWeather();
  }, [Kota]);
  return (
    <View style={{ height: "100%" }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TextInput style={styles.input} onChangeText={(text) => setInput(text)}>
          {Input}
        </TextInput>
        <TouchableOpacity style={styles.buttonclear} onPress={clearbutton}>
          <FontAwesomeIcon icon={faTimes} size={30} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleButton}>
          <FontAwesomeIcon icon={faSearch} size={35} color={"#c4c4c4"} />
        </TouchableOpacity>
      </View>
      {/* <Text>{data.weather[0].main}</Text> */}
      {/* <Quote /> */}

      <View style={{ flexDirection: "row", paddingLeft: 30 }}>
        <View style={{ flexDirection: "column-reverse" }}>
          <Text style={styles.Suhu}>{Suhu}</Text>
          <Text style={styles.Kota}>{Kota}</Text>
        </View>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${Cuaca}@2x.png `,
          }}
          style={styles.Icon}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonclear: {
    width: 30,
    height: 30,
    top: 100,
    right: 20,
  },
  button: {
    width: 30,
    height: 30,
    top: 100,
    marginLeft: 30,
  },
  input: {
    left: 20,
    textAlign: "center",
    marginTop: 90,
    color: "black",
    backgroundColor: "#c4c4c4",
    opacity: 0.5,
    width: 300,
    height: 52,
    borderRadius: 20,
  },
  Suhu: {
    fontSize: 48,
    color: "#e5e5e5",
  },
  Kota: {
    fontSize: 24,
    color: "#e5e5e5",
  },
  Icon: {
    width: 100,
    height: 100,
  },
});
