import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CompletedItem from "./CompletedItem";

export default function Completed() {
  return (
    <View className="m-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-base font-bold">Önceki Listelerim</Text>
        <TouchableOpacity>
          <Text className="underline text-sm text-cyan-600">Temizle</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-3 flex-row">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CompletedItem />
          <CompletedItem />
          <CompletedItem />
          <CompletedItem />
        </ScrollView>
      </View>
    </View>
  );
}
