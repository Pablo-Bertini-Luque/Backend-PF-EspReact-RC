import React, { useState } from "react";
import { padelApiUrl } from "../../config/padelpertuttiApi";

export const useGetTurn = () => {
  const [detailsTurn, setDetailsTurn] = useState(null);
  const [textModalError, setTextModalError] = useState("");
  const [activeErrorModal, setActiveErrorModal] = useState(false);

  const handleCloseModal = () => {
    setActiveErrorModal(false);
  };

  const getTurn = async (id) => {
    try {
      const turn = await padelApiUrl.get(`/turnos/${id}`);
      const data = turn.data;
      setDetailsTurn(data);
    } catch (error) {
      setTextModalError(error.data);
      setActiveErrorModal(true);
    }
  };
  return {
    detailsTurn,
    textModalError,
    activeErrorModal,
    handleCloseModal,
    getTurn,
  };
};
