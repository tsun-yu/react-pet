import { SET_AREA, SET_CITY, SET_DOT } from "./actionTypes";

export const setCity = (city) => {
  return { type: SET_CITY, payload: { city } };
};
export const setArea = (area) => {
  return { type: SET_AREA, payload: { area } };
};
export const setDot = (dot) => {
  return { type: SET_DOT, payload: { dot } };
};
