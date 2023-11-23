import { stylesGral } from "../../css/Theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductsList } from "../../components/ProductsList";

export const Home = ({ navigation, route }) => {
  return (
    <SafeAreaView style={stylesGral.safeAreaView}>
      <ProductsList navigation={navigation} route={route} />
    </SafeAreaView>
  );
};
