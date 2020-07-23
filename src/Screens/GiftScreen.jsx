import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function GiftScree() {
  return (
    <View style={styles.container}>
      <Text>Gift Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
