import React, { useContext, useEffect } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGral } from "../../css/Theme";
import { Login } from "../Auths/Login";
import { Profile } from "./Profile";
import { AuthContext } from "../../contexts/AuthContext";

export const Session = () => {
  const { state } = useContext(AuthContext);

  if (state.isLogged) {
    return (
      <SafeAreaView style={stylesGral.safeAreaView}>
        <Profile idUser={state.user.uid} />
      </SafeAreaView>
    );
  }

  if (!state.isLogged) {
    return (
      <SafeAreaView style={stylesGral.safeAreaView}>
        <Login />
      </SafeAreaView>
    );
  }
};