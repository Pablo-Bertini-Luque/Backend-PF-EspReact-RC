import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGral } from "../../css/Theme";

export const MyTurns = () => {
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
