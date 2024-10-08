import { Text, View } from "react-native";
import React from "react";

export default function Button({ title }) {
  return (
    <View className="bg-cyan-500 h-12 items-center rounded justify-center">
      <Text className="text-white text-lg font-bold">{title}</Text>
    </View>
  );
}
