import { ActivityIndicator, Text, View } from "react-native";
import React, { useEffect } from "react";
import { setLoader } from "../redux/generalSlice";
import { useDispatch } from "react-redux";

export default function Loader({ loader }) {
  const dispatch = useDispatch();
  useEffect(() => {
    let timeout;
    timeout: setTimeout(() => {
      dispatch(setLoader());
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [loader]);
  return (
    <View className="absolute w-full h-full bg-[#ffffff7f] justify-center items-center">
      <ActivityIndicator size="large" color="#0ea5e9" />
      <Text>Loader...</Text>
    </View>
  );
}
