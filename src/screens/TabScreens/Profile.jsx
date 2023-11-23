import React, { useContext, useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={stylesGral.safeAreaView}>
      <View style={{ flex: 4 }}>
        <Text>{user.nombre}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button title="Cerrar sesión" onPress={logout} />
      </View>
    </SafeAreaView>
  );
};
