import { types } from "../types/Types";

export const TurnsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.turns.loadTurns:
      return {
        ...state,
        turn: action.payload.turns,
        errorMessage: "",
      };
    case types.turns.errorsTurns:
      return {
        ...state,
        turn: "",
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
};
