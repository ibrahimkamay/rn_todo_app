import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";

export default function PriceItem({ item: { title, price } }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <Pressable
      className={`border mt-3 border-gray-400 px-4 py-3 rounded-lg ${
        isChecked && "border-cyan-600"
      }`}
      onPress={() => setChecked(!isChecked)}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-x-1">
          <Text>Icon</Text>
          <Text className="text-base font-bold">{title}</Text>
        </View>
        <View>
          <Text className="text-based font-bold">{price}</Text>
        </View>
      </View>
    </Pressable>
  );
}
