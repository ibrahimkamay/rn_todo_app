import React from "react";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import Loader from "../shared/Loader";
import { useSelector } from "react-redux";

export default function StackNavigator() {
  const isLogin = false;
  const { loader } = useSelector((state) => state.general);
  return (
    <>
      {isLogin ? <UserStack /> : <AuthStack />}
      {loader && <Loader loader={loader} />}
    </>
  );
}
