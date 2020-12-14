// El reducer es el encargado de modificar el estado global
import { ADD, DECREASE } from "./types";

// Creamos el reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        count: state.count + 1
      };

    case DECREASE:
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
};
