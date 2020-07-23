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
import Dash from "../Components/Dash";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Receive Money",
    price: "$23,424",
    from: "Harry James",
    date: "09/09",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Pay Electric Bills",
    price: "-$45",
    from: "From USD wallet",
    date: "09/09",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Booking Flight",
    price: "-$45",
    from: "From Japn wallet",
    date: "09/09",
  },
];

export default function HomeScreen({ navigation }) {
  let { container, cardText, card } = styles;
  return (
    <Container>
      <Dash />
      <View style={{ flex: -0, marginTop: 5, marginRight: 10, marginLeft: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={card}>
            <View style={{ marginTop: 10, alignItems: "center" }}>
              <MaterialCommunityIcons name='email' size={25} color='#800080' />
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 15 }}>
                Recharge
              </Text>
              <Text>Money</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={card}>
            <View style={{ marginTop: 10, alignItems: "center" }}>
              <MaterialCommunityIcons
                name='settings-outline'
                size={25}
                color='#800080'
              />
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 15 }}>
                Transfer
              </Text>
              <Text>Money</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={card}>
            <View style={{ marginTop: 10, alignItems: "center" }}>
              <MaterialCommunityIcons name='menu' size={25} color='#800080' />
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 15 }}>
                Exchange
              </Text>
              <Text>Money</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 10, marginLeft: 20 }}>
          Recent Transactions
        </Text>
        <Text style={{ fontSize: 10, marginRight: 40 }}>More</Text>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              price={item.price}
              id={item.id}
              from={item.from}
              date={item.date}
            />
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  cardText: {
    fontSize: 15,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 3,
    marginLeft: 10,
    width: "30%",
    height: 100,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
});
