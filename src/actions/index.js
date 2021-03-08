import { SET_CITY } from "./actionTypes";

export const setCity = (component) => {
  return { type: SET_CITY, payload: { component } };
};
