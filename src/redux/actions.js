// Importamos los tipos que creamos
import { ADD, DECREASE } from "./types";

// Creamos las acciones
export const addCounter = (payload) => ({
  type: ADD,
  payload
});

export const decreaseCounter = (payload) => ({
  type: DECREASE,
  payload
});
