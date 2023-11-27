import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import { CustomModal } from "./CustomModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ButtonCreateNewTurn = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [activeErrorModal, setActiveErrorModal] = useState(false);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("x-token");
    if (token) {
      console.log("Hay token");
    } else {
      setActiveErrorModal(true);
      setText("Para poder crear un turno, debe haber iniciado sesion");
    }
  };

  const handleCloseModal = () => {
    setActiveErrorModal(false);
  };

  return (
    <>
      <View>
        <Button title="Crear turno" onPress={checkToken} />
      </View>
      <CustomModal
        text={text}
        activeErrorModal={activeErrorModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};
