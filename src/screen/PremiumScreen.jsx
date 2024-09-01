import { Text, View, Image, ScrollView } from "react-native";
import React from "react";
import PremiumContent from "../components/premium/PremiumContent";
import Header from "../components/premium/Header";

export default function PremiumScreen() {
  return (
    <View className="h-full">
      <Header />
      <PremiumContent />
    </View>
  );
}
