import { Text, TextInput, View } from "react-native";
import React from "react";

export default function Input({ title }) {
  return (
    <View className="w-full h-12 bg-white rounded border border-gray-200 ">
      <TextInput placeholder={title} className="h-full  px-5 " />
    </View>
  );
}
