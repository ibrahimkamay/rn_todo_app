import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/home/Header";
import List from "../components/home/List";
import PremiumTry from "../shared/PremiumTry";
import Completed from "../components/home/Completed";
import { ScrollView } from "react-native";
import Notification from "../components/home/Notification";
import Modal from "../shared/Modal";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <SafeAreaView className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header setModalVisible={setModalVisible} />
        <List />
        <PremiumTry />
        <Completed />
      </ScrollView>
      <Modal
        animation={"fade"}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      >
        <Notification setModalVisible={setModalVisible} />
      </Modal>
    </SafeAreaView>
  );
}
