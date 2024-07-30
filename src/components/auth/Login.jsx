import { Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

export default function Login({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center px-5 ">
      <View className="absolute top-0 left-0">
        <Image source={require("../../../assets/images/auth-shape.png")} />
      </View>
      <View>
        <Image source={require("../../../assets/images/auth-img.png")} />
      </View>
      <View className="w-full mt-5">
        <Input title={"Email Adresi"} />
      </View>
      <View className="w-full mt-5">
        <Input title={"Şifre"} />
      </View>
      <View className="w-full mt-5">
        <Button title={"Giriş Yap"} />
      </View>
      <View className="flex-row gap-1 w-full mt-5">
        <Text>Hala bir hesabınız yok mu? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="font-bold text-cyan-500 underline">Kayıt Olun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
