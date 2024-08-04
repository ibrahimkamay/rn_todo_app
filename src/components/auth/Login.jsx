import { Image, Text, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { loginForm } from "../../utils/const/authForm";

export default function Login({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center px-5 ">
      <View className="absolute top-0 left-0">
        <Image source={require("../../../assets/images/auth-shape.png")} />
      </View>
      <View>
        <Image source={require("../../../assets/images/auth-img.png")} />
      </View>
      <View className="w-full">
        <FlatList
          data={loginForm}
          renderItem={({ item }) => (
            <View className="w-full mt-5 relative">
              <Input item={item} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
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
