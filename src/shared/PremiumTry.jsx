import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Section from "./Section";

export default function PremiumTry() {
  return (
    <View className="mt-5 mx-5 px-6 rounded-lg py-4 bg-cyan-600 ">
      <Text className="text-white text-lg font-bold">
        Premium'a Geçmenin Tam Zamanı
      </Text>
      <Text className="text-opacity-5 text-white mt-1">
        Premium ile tariflerinizi ön plana çıkarın
      </Text>
      <TouchableOpacity className="px-6 py-2 bg-white self-start rounded-full mt-3 ">
        <Text className="text-sm font-bold">7 gün ücretsiz</Text>
      </TouchableOpacity>
    </View>
  );
}
