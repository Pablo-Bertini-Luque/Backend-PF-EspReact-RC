import { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGral } from "../../css/Theme";
import { padelApiUrl } from "../../../config/padelpertuttiApi";

export const InfoTurn = ({ route, navigation }) => {
  const { idTurn } = route.params;

  const [detailsTurn, setDetailsTurn] = useState("");

  const getTurn = async () => {
    const turn = await padelApiUrl.get(`/turnos/${idTurn}`);
    const data = turn.data;
    setDetailsTurn(data);
  };

  useEffect(() => {
    getTurn();
  }, []);

  console.log(detailsTurn);

  return (
    <SafeAreaView style={stylesGral.safeAreaView}>
      <View style={styles.container}>
        <View style={{ flex: 3 }}>
          <Image
            source={require("../../../assets/ImagenInfoTurn.jpeg")}
            style={styles.image}
          />
          <Text style={styles.text}>Lugar: {`${detailsTurn.turno.lugar}`}</Text>
          <Text style={styles.text}>
            Hora del turno: {`${detailsTurn.turno.hora}`}
          </Text>
          <Text style={styles.text}>
            Categoria de los jugadores: {`${detailsTurn.turno.categoria}`}
          </Text>
          <Text style={styles.text}>
            Tipo de cancha: {`${detailsTurn.turno.tipoCancha}`}
          </Text>
          <Text style={styles.text}>
            Creador del Turno: {`${detailsTurn.UsuarioCreadordelTurno}`}
          </Text>
        </View>
        <View style={styles.button}>
          <Button title="Unirse a la partida" />
          <Pressable
            style={{ marginTop: 25 }}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ fontSize: 17 }}>Volver a inicio</Text>
          </Pressable>
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
  image: {
    width: 170,
    height: 170,
    borderWidth: 50,
  },
  text: {
    marginBottom: 10,
    height: 30,
  },
  button: {
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});
