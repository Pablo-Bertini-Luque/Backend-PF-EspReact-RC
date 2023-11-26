import { stylesGral } from "../../css/Theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductsList } from "../../components/ProductsList";
import { useContext, useEffect } from "react";
import { TurnsContext } from "../../contexts/TurnsContext";
import { EmptyTurns } from "../StackNavigatorSession/EmptyTurns";

export const Home = ({ navigation, route }) => {
  const { state, getAllTurnos } = useContext(TurnsContext);

  useEffect(() => {
    getAllTurnos();
  }, []);

  const stateTurns = Object.keys(state.turn);

  if (stateTurns.length === 0) {
    return (
      <SafeAreaView style={stylesGral.safeAreaView}>
        <EmptyTurns />
      </SafeAreaView>
    );
  }

  if (stateTurns.length >= 1) {
    return (
      <SafeAreaView style={stylesGral.safeAreaView}>
        <ProductsList navigation={navigation} route={route} data={state.turn} />
      </SafeAreaView>
    );
  }
};
