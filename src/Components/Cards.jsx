import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Cards() {
  return <View style={container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 20,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: 10,
    width: "126%",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
});
