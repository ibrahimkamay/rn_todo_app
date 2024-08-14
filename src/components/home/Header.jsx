import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View className="flex-row bg-white items-center justify-between px-4 py-4">
      <View className="flex-row gap-4 items-center">
        <View className="p-2 border rounded-full">
          <MaterialCommunityIcons name="human" size={38} color="black" />
        </View>
        <View className="space-y-1">
          <Text>Hoşgeldin İbrahim</Text>
          <Text className="text-gray-500 text-sm">Üye</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
