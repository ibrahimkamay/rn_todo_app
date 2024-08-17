import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Section from "../../shared/Section";
import ListItem from "../../shared/ListItem";

export default function List() {
  return (
    <Section>
      <View className="flex-row justify-between">
        <Text className="text-base"> Yapılacaklar Listesi</Text>
        <TouchableOpacity className="flex-row items-center gap-2 ">
          <Feather name="plus-circle" size={18} color="#0891b2" />
          <Text className="text-cyan-600 text-sm">Task Ekle</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-5">
        <ListItem />
        <ListItem />
        <ListItem />
      </View>
    </Section>
  );
}
