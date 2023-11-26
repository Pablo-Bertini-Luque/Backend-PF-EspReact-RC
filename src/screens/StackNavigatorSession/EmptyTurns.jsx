import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGral } from "../../css/Theme";

export const EmptyTurns = () => {
  return (
    <SafeAreaView style={stylesGral.safeAreaView}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>No hay turnos disponibles</Text>
          <View style={styles.button}>
            <Button title="Crear nuevo turno" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },

  text: {
    fontSize: 24,
    fontWeight: "700",
    height: 100,
    textAlign: "center",
  },

  button: {
    marginTop: 30,
    borderRadius: 10,
    alignItems: "center",
  },
});
