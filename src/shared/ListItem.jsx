import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Checkbox from "expo-checkbox";

export default function ListItem() {
  const [isChecked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!isChecked);
  };
  return (
    <TouchableOpacity
      onPress={handleChange}
      className={`flex-row justify-between items-center bg-white p-3 rounded-md mb-4 ${
        isChecked && "border-cyan-600 border"
      }`}
    >
      <View className="flex-row gap-5 items-center  ">
        <View>
          <MaterialIcons name="directions-run" size={24} color="#0891b2" />
        </View>
        <View>
          <Text className="text-sm">Sabah Sporu</Text>
          <Text
            className={`mt-1 text-gray-700 font-light text-xs ${
              isChecked && "line-through text-gray-400"
            }`}
          >
            Sabah 08.00'da yürüyüş yapılacak.
          </Text>
        </View>
      </View>
      <View>
        <Checkbox value={isChecked} onValueChange={setChecked} />
      </View>
    </TouchableOpacity>
  );
}
