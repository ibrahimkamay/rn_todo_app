import { TextInput, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserValidationInput,
  signInWithEmailAndPassword,
} from "../redux/userSlice";

export default function Input({ item: { title, typeOf } }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // buradaki state store'daki tüm state'i temsil eder. user.value ise user reducer'ındaki value'yi temsil eder.
  const changeFormInfo = (value, typeOf) => {
    // setFormInfo((prevList) => ({ ...prevList, [typeOf]: value }));
    dispatch(
      setUserValidationInput({
        typeOf,
        value,
      })
    );
  };

  return (
    <View className="w-full h-12 bg-white rounded border border-gray-200 ">
      <TextInput
        placeholder={title}
        className="h-full  px-5 "
        onChangeText={(value) => {
          changeFormInfo(value, typeOf);
        }}
        value={user[typeOf]}
      />
    </View>
  );
}
