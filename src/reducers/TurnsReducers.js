import { types } from "../types/Types";

export const TurnsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.turns.loadTurns:
      return {
        ...state,
        turn: action.payload.turns,
        errorMessage: "",
      };
    case types.turns.newTurns:
      return {
        ...state,
        turn: [...state.turn, action.payload.newTurn],
        errorMessage: null,
      };
    case types.turns.errorsTurns:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
};
