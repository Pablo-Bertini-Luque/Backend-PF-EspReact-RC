import React, { useEffect, useReducer, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthReducer } from "../reducers/AuthReducers";
import { padelApiUrl } from "../../config/padelpertuttiApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { types } from "../types/Types";
import { CustomModal } from "../components/CustomModal";
import { View } from "react-native";

const initialState = {
  user: null,
  isLogged: false,
  errorMessage: "",
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const [activeErrorModal, setActiveErrorModal] = useState(false);

  const handleCloseModal = () => {
    setActiveErrorModal(false);
  };

  const login = async (email, contraseña) => {
    try {
      const user = await padelApiUrl.post("/auth/login", { email, contraseña });
      await AsyncStorage.setItem("x-token", user.data.token);
      dispatch({
        type: types.auth.login,
        payload: {
          user: user.data.usuario,
        },
      });
    } catch (error) {
      dispatch({
        type: types.auth.error,
        payload: {
          errorMessage: error.response.data.msg,
        },
      });
      setActiveErrorModal(true);
    }
  };

  const logout = () => {
    dispatch({
      type: types.auth.logout,
      payload: false,
    });
  };

  return (
    <>
      <AuthContext.Provider
        value={{ state, login, logout, handleCloseModal, activeErrorModal }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
