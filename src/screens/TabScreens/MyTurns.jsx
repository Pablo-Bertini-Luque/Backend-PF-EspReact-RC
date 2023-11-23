import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGral } from "../../css/Theme";

export const MyTurns = () => {
  return (
    <SafeAreaView style={stylesGral.safeAreaView}>
      <View>
        <View>
          <Text>Estos son mis turnos</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
