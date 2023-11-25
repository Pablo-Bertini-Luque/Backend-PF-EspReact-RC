import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGral } from "../../css/Theme";
import { Login } from "../Auths/Login";
import { Profile } from "../TabScreens/Profile";
import { AuthContext } from "../../contexts/AuthContext";

export const Session = ({ navigation }) => {
  const { state } = useContext(AuthContext);

  if (state.isLogged) {
    return (
      <SafeAreaView style={stylesGral.safeAreaView}>
        <Profile />
      </SafeAreaView>
    );
  }

  if (!state.isLogged) {
    return (
      <SafeAreaView style={stylesGral.safeAreaView}>
        <Login navigation={navigation} />
      </SafeAreaView>
    );
  }
};
