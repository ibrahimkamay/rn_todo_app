import { ScrollView, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function PremiumProperty() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
      <Text className="text-base font-medium">Premium Özellikleri</Text>
      <View className="mt-5">
        <View className="flex-row gap-2 items-center">
          <AntDesign name="right" size={16} color="black" />
          <Text>Liste sayını sınırsız yap.</Text>
        </View>
      </View>
      <View className="mt-5">
        <View className="flex-row gap-2 items-center">
          <AntDesign name="right" size={16} color="black" />
          <Text>Liste sayını sınırsız yap.</Text>
        </View>
      </View>
      <View className="mt-5">
        <View className="flex-row gap-2 items-center">
          <AntDesign name="right" size={16} color="black" />
          <Text>Liste sayını sınırsız yap.</Text>
        </View>
      </View>
      <View className="mt-5">
        <View className="flex-row gap-2 items-center">
          <AntDesign name="right" size={16} color="black" />
          <Text>Liste sayını sınırsız yap.</Text>
        </View>
      </View>
    </ScrollView>
  );
}
