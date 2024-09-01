import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";

import React from "react";

export default function Notification({ setModalVisible }) {
  return (
    <View className="w-full h-full bg-[#00000040]">
      <View className="w-80 h-full bg-white absolute right-0">
        <View className="p-3 ">
          <View className="flex-row justify-between items-center">
            <Text>Duyurular</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="p-2 bg-gray-100 self-start rounded-full"
            >
              <AntDesign name="close" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View className="mt-5">
            <TouchableOpacity className="flex-row justify-between items-center bg-gray-100 p-3 rounded-lg border-gray-200">
              <View className="flex-row items-center justify-center gap-x-3">
                <Ionicons name="mail" size={20} color="black" />
                <View>
                  <Text className="text-sm">Yeni güncelleme geldi </Text>
                  <Text className="text-xs mt-1 text-gray-500">v1.4.3</Text>
                </View>
              </View>
              <Entypo name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
