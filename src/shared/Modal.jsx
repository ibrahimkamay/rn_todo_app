import { Modal } from "react-native";
import React from "react";

export default function CustomModal({
  children,
  setModalVisible,
  animation,
  modalVisible,
}) {
  return (
    <Modal
      animationType={animation}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      {children}
    </Modal>
  );
}
