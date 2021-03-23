import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Component, useState, useEffect } from "react";
import axios from "axios";
export default function Quote() {
  const [data, setdata] = useState([]);
  const [Body, setBody] = useState([]);
  const [Author, setAuthor] = useState([]);
  const [Number, setNumber] = useState("");

  const angka = Math.floor(Math.random() * 100 + 1);
  const callApi = () => {
    setNumber(angka);
    axios
      .get(`https://type.fit/api/quotes`)
      .then((result) => {
        setdata(result.data);
        // console.log(Number);
        // console.log(data);
        setBody(data[Number].text);
        setAuthor(data[Number].author);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    callApi();
  }, []);

  const handleButton = () => {
    callApi();
  };
  return (
    <View style={styles.Layout}>
      <Text style={styles.Quote}>{Body}</Text>
      <Text style={styles.Author}>{Author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Layout: {
    top: 300,
    right: 10,
    left: 10,

    position: "absolute",
    alignContent: "center",
    justifyContent: "center",
  },
  Quote: {
    textAlign: "center",
    color: "#e5e5e5",
    fontSize: 14,
    alignItems: "center",
  },
  Author: {
    textAlign: "center",
    color: "#e5e5e5",
    fontSize: 12,
    top: 0,
    alignItems: "flex-end",
  },
});
