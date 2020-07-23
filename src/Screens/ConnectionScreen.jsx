import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ConnectionScree() {
  return (
    <View style={styles.container}>
      <Text>Connection Screen</Text>
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
