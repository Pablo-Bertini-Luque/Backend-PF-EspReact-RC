import React, { useContext, useEffect, useState } from "react";
import { Text, View, Button, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGral } from "../../css/Theme";
import { AuthContext } from "../../contexts/AuthContext";
import { padelApiUrl } from "../../../config/padelpertuttiApi";

export const Profile = ({ idUser }) => {
  const { logout, state } = useContext(AuthContext);
  const [user, setUser] = useState({});

  const getUser = async () => {
    const res = await padelApiUrl.get(`/usuarios/${idUser}`);
    const { usuario } = await res.data;
    setUser(usuario);
  };

  console.log(state.isLogged);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={stylesGral.safeAreaView}>
      <View style={style.containerImage}>
        <Image source={{ uri: user.avatar }} style={style.image} />
      </View>
      <View style={style.containerText}>
        <Text style={style.text}>Nombre: {user.nombre}</Text>
        <Text style={style.text}>Posición: {user.posicion}</Text>
      </View>
      <View style={stylesGral.button}>
        <Button title="Cerrar sesión" onPress={logout} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerImage: {
    flex: 3,
    alignSelf: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 50,
  },
  containerText: {
    flex: 1,
    marginLeft: 15,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "blue",
  },
});
