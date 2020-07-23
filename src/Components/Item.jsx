import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Body, Right } from "native-base";

export default function componentName({ title, price, id, from, date }) {
  return (
    <View style={styles.card}>
      <ListItem>
        <Body>
          <Text style={{ fontWeight: "700", fontSize: 17, marginLeft: 10 }}>
            {title}
          </Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>{from}</Text>
        </Body>
        <Right>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
            }}
          >
            {price}
          </Text>
          <Text>{date}</Text>
        </Right>
      </ListItem>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f4f4f4",
    marginBottom: 10,
    borderRadius: 10,
    marginVertical: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // alignItems: "center",
    // marginTop: 40,
    // marginLeft: 10,
    // width: "30%",
    // height: 100,
    // shadowColor: "#000",
    // shadowOpacity: 1,
    // shadowOffset: {
    //   width: 5,
    //   height: 5,
    // },
  },
});
