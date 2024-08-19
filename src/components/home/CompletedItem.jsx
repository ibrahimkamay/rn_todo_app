import { Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export default function CompletedItem() {
  return (
    <View className="bg-cyan-600 p-3 rounded-lg mr-3 w-32 ">
      <View className="flex-row justify-between items-center">
        <View className="p-2 bg-white rounded self-start">
          <MaterialCommunityIcons name="run-fast" size={24} color="black" />
        </View>
        <Feather name="arrow-right" size={24} color="white" />
      </View>
      <View className="mt-11">
        <Text className="text-white">Spor Günüm</Text>
        <Text className="text-white">20.08.2024, Sal</Text>
      </View>
    </View>
  );
}
