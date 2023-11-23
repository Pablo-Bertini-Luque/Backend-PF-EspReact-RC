import React, { useContext } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGral } from "../../css/Theme";
import { CustomconInput } from "../../components/CustomImputs";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const { login, state } = useContext(AuthContext);

  const isLogin = () => {
    console.log("Aca enviamos la info para login");
    login("test1@test1sfasfasfas.com", "123456");
  };

  return (
    <SafeAreaView style={stylesGral.safeAreaView}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require("../../../assets/splash.png")}
          />
          <Text style={styles.text}>Padel per Tutti</Text>
        </View>
        <View style={{ flex: 1, marginTop: 50 }}>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            placeholderTextColor="grey"
          />
          <CustomconInput />
        </View>
        <View style={styles.button}>
          <View>
            <Button title="Ingresar" onPress={isLogin} />
          </View>
          <View style={{ marginTop: 40 }}>
            <Button title="Registrarse" color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    alignSelf: "center",
    width: 150,
  },
});
