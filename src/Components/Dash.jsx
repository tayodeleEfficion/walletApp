import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Button,
  Container,
  CardItem,
  Content,
  Thumbnail,
  Text,
  CheckBox,
  Body,
  Right,
  Left,
  Image,
  Icon,
} from "native-base";
import Animated from "react-native-reanimated";
import Card from "../Components/Cards";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import Item from "../Components/Item";

export default function Dash() {
  return (
    <Container>
      <Animated.View style={styles.topView}>
        <LinearGradient
          colors={["#800080", "#df5e88", "#800080"]}
          style={{ ...styles.box }}
        >
          <View style={styles.insideView}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "500",
                fontSize: 10,
              }}
            >
              USD wallet
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: "#fff",
                marginTop: 10,
                fontWeight: "600",
              }}
            >
              $12,000
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontWeight: "500",
                marginTop: 60,
              }}
            >
              Wallet No
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 10,
                fontWeight: "500",
                marginTop: 5,
              }}
            >
              1234 5678 9012 3273
            </Text>
          </View>
        </LinearGradient>

        <View style={{ marginLeft: -280, marginTop: 10 }}>
          <Text style={{ color: "#024242", fontSize: 10 }}>Functions</Text>
        </View>
      </Animated.View>
    </Container>
  );
}
const styles = StyleSheet.create({
  topView: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  box: {
    width: "100%",
    height: 189,
    borderRadius: 15,
    flexDirection: "row",
    padding: 22,
  },
  insideView: {
    width: "70%",
    alignItems: "flex-start",
  },
});
