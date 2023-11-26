import React, { useReducer, useState } from "react";
import { TurnsContext } from "../contexts/TurnsContext";
import { TurnsReducer } from "../reducers/TurnsReducers";
import { padelApiUrl } from "../../config/padelpertuttiApi";
import { types } from "../types/Types";

const initialState = {
  turn: "",
  errorMessage: "",
};

export const TurnsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TurnsReducer, initialState);
  const [activeErrorModal, setActiveErrorModal] = useState(false);

  const handleCloseModal = () => {
    setActiveErrorModal(false);
  };

  const getAllTurnos = async () => {
    try {
      const allTurns = await padelApiUrl.get("/turnos");

      dispatch({
        type: types.turns.loadTurns,
        payload: {
          turns: allTurns.data.turnos,
        },
      });
    } catch (error) {
      dispatch({
        type: types.turns.errorsTurns,
        payload: {
          errorMessage: error.response.data.msg,
        },
      });
      setActiveErrorModal(true);
    }
  };

  return (
    <TurnsContext.Provider
      value={{ state, handleCloseModal, activeErrorModal, getAllTurnos }}
    >
      {children}
    </TurnsContext.Provider>
  );
};
