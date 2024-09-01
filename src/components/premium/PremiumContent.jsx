import { ScrollView, Text, View, Dimensions } from "react-native";
import React from "react";
import PriceList from "./PriceList";
import PremiumProperty from "./PremiumProperty";
import Button from "../../shared/Button";

export default function PremiumContent() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <View className="mx-5 bg-white -mt-5 flex-1 rounded-lg p-4 ">
      <PriceList />
      <PremiumProperty />
      <View className="mt-5">
        <Button title={"Devam Et"} />
      </View>
    </View>
  );
}
