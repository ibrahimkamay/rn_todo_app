import { Text, View, Image } from "react-native";
import React from "react";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

export default function Register() {
  return (
    <View className="flex-1 items-center justify-end px-5 py-10 space-y-16">
        <View className="absolute top-0 left-0">
          <Image source={require("../../../assets/images/auth-shape.png")} />
        </View>
      <View className="gap-10 ">
          <Text className="text-2xl text-center font-bold">To Do App'e Hoşgeldiniz</Text>
          <Text className="text-center">Task oluşturmana yardımcı olmamız için ilk adımı tamamlayın.</Text>
      </View>
      <View className="w-full">
        <View className="w-full mt-5">
            <Input title={"Tam adınızı giriniz"} />
          </View>
          <View className="w-full mt-5">
            <Input title={"E-mail adresi giriniz"} />
          </View>
          <View className="w-full mt-5">
            <Input title={"Şifrenizi giriniz"} />
          </View>
          <View className="w-full mt-5">
            <Input title={"Tekrar şifrenizi giriniz"} />
          </View>
      </View>
        <View className="w-full mt-14">
          <Button title={"Kayıt Ol"} />
        </View>
  </View>
  );
}
