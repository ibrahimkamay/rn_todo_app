import { Text, TextInput, TouchableHighlightBase, View } from "react-native";
import { useState } from "react";
import React from "react";

export default function Input({
  item: { title, typeOf },
  setFormInfo,
  formInfo,
}) {
  const changeFormInfo = (value, typeOf) => {
    setFormInfo((prevList) => ({ ...prevList, [typeOf]: value }));
  };

  return (
    <View className="w-full h-12 bg-white rounded border border-gray-200 ">
      <TextInput
        placeholder={title}
        className="h-full  px-5 "
        onChangeText={(value) => {
          changeFormInfo(value, typeOf);
        }}
        value={formInfo.typeOf}
      />
    </View>
  );
}
