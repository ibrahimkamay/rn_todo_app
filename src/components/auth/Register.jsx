import { Text, View, Image, FlatList } from "react-native";
import React, { useState } from "react";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { registerForm } from "../../utils/const/authForm";

export default function Register({ navigation }) {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  useEffect((=> {}, [formInfo]))
  return (
    <View className="flex-1 items-center justify-end px-5 py-10 space-y-16">
      <View className="absolute top-0 left-0">
        <Image source={require("../../../assets/images/auth-shape.png")} />
      </View>
      <View className="gap-10 ">
        <Text className="text-2xl text-center font-bold">
          To Do App'e Hoşgeldiniz
        </Text>
        <Text className="text-center">
          Task oluşturmana yardımcı olmamız için ilk adımı tamamlayın.
        </Text>
      </View>
      <View className="w-full">
        <FlatList
          data={registerForm}
          renderItem={({ item }) => (
            <View className="w-full mt-5">
              <Input
                item={item}
                setFormInfo={setFormInfo}
                formInfo={formInfo}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View className="w-full mt-14">
        <Button title={"Kayıt Ol"} />
      </View>
    </View>
  );
}
