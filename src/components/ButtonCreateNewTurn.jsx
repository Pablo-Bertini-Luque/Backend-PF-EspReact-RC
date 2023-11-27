import React, { useState } from "react";
import { Button, View } from "react-native";
import { CustomModal } from "./CustomModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ButtonCreateNewTurn = ({ navigation }) => {
  const [text, setText] = useState("");
  const [activeErrorModal, setActiveErrorModal] = useState(false);

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem("x-token");
      if (token) {
        navigation.navigate("CreateTurn");
      } else {
        setActiveErrorModal(true);
        setText("Para poder crear un turno, debe haber iniciado sesion");
      }
    } catch (error) {
      setActiveErrorModal(true);
      setText("Ocurrió el siguiente error: " + error);
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
