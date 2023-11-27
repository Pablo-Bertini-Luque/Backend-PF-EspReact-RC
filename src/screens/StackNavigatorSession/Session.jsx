import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGral } from "../../css/Theme";
import { Login } from "../Auths/Login";
import { Profile } from "../TabScreens/Profile";
import { AuthContext } from "../../contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Session = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const [checkToken, setCheckToken] = useState("");

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
