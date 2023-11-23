import { Button, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGral } from "../../css/Theme";

export const InfoTurn = ({ route, navigation }) => {
  const { idTurn } = route.params;

  return (
    <SafeAreaView style={stylesGral.safeAreaView}>
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center",
        }}
      >
        <View>
          <Text
            style={{ backgroundColor: "green", marginBottom: 10, height: 100 }}
          >
            `Esta es la pagina que contendra la descripcion del turnos`
          </Text>
          <View style={styles.button}>
            <Button title="Unirse a la partida" />
          </View>
          <View style={styles.button}>
            <Button
              title="Volver a inicio"
              color="black"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});
