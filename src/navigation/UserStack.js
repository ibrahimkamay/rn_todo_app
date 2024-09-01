import React from "react";
import { Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome5, Zocial } from "@expo/vector-icons";

import {
  HomeScreen,
  TaskScreen,
  Profile,
  AddTaskScreen,
  CompletedScreen,
  PremiumScreen,
} from "../screen";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text className="font-bold text-[11px] text-cyan-600">
                  Home
                </Text>
              ) : (
                <Text className="font-bold text-[11px] text-gray-400">
                  Home
                </Text>
              ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Feather name="home" size={24} color="#0891b2" />
              ) : (
                <Feather name="home" size={24} color="#a8a29e" />
              ),
            tabBarBadge: 3,
          }}
          name="Home"
          component={PremiumScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text className="text-[11px] text-cyan-600">Task</Text>
              ) : (
                <Text className="text-[11px] text-gray-400">Task</Text>
              ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="tasks" size={24} color="#0891b2" />
              ) : (
                <FontAwesome5 name="tasks" size={24} color="#a8a29e" />
              ),
          }}
          name="Task"
          component={TaskScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: () => (
              <Text className="text-[11px] text-cyan-600">Add Task</Text>
            ),
            tabBarIcon: () => (
              <AntDesign name="pluscircle" size={30} color="#0891b2" />
            ),
          }}
          name="addTask"
          component={AddTaskScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text className="text-[11px] text-cyan-600">Completed</Text>
              ) : (
                <Text className="text-[11px] text-gray-400">Completed</Text>
              ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="checkcircle" size={24} color="#0891b2" />
              ) : (
                <AntDesign name="checkcircle" size={24} color="#a8a29e" />
              ),
            tabBarBadge: 4,
          }}
          name="Competed"
          component={CompletedScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text className="text-[11px] text-cyan-600">Profile</Text>
              ) : (
                <Text className="text-[11px] text-gray-400">Profile</Text>
              ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Zocial name="guest" size={24} color="#0891b2" />
              ) : (
                <Zocial name="guest" size={24} color="#a8a29e" />
              ),
            tabBarBadge: 1,
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
