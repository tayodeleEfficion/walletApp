import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Transaction from "../src/Screens/AddTransactionscreen";
import HomeScreen from "../src/Screens/HomeScreens";
import ConnectionScreen from "../src/Screens/ConnectionScreen";
import GiftScreen from "../src/Screens/GiftScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

import ExploreScreen from "../src/Screens/ExploreScree";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color='#800080' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Explore'
        component={ConnectionScreen}
        options={{
          tabBarLabel: "Connect",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='cast-connected'
              color='#800080'
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Transactions'
        component={Transaction}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-card' color='#800080' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='menu'
        component={Transaction}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='briefcase-account-outline'
              color='#800080'
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='gift'
        component={GiftScreen}
        options={{
          tabBarLabel: "Gift",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='gift' color='#800080' size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
