import React, { useContext } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGral } from "../../css/Theme";
import { TurnsContext } from "../../contexts/TurnsContext";
import { AuthContext } from "../../contexts/AuthContext";

export const MyTurns = () => {
  const { state: stateAuth } = useContext(AuthContext);
  const { state: stateTurns } = useContext(TurnsContext);

  console.log(stateAuth);
  console.log(stateTurns);

  return (
    <SafeAreaView style={stylesGral.safeAreaView}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 50 }}>
            Pagina en mantenimiento
          </Text>
          <View>
            <Image source={require("../../../assets/Mantenimiento.png")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
