import { Text, View, Image } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View className="h-2/5 bg-cyan-600  justify-center px-5 relative">
      <View className="bg-white self-start px-4 py-2 rounded">
        <Text>Todo Track</Text>
      </View>
      <View className="mt-4">
        <Text className="text-white text-xl tracking-widest font-bold w-2/3 ">
          Premium avantajlarını doyasıya yaşa{" "}
        </Text>
      </View>
      <View className="h-48 w-48  absolute right-3 -z-10">
        <Image
          className="w-full h-full "
          style={{ resizeMode: "contain" }}
          source={require("../../../assets/images/pre-screen.png")}
        />
      </View>
    </View>
  );
}
