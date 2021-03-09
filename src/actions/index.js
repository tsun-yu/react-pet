import { SET_AREA, SET_CITY, SET_DOT, SET_PET } from "./actionTypes";

export const setCity = (city) => {
  return { type: SET_CITY, payload: { city } };
};
export const setArea = (area) => {
  return { type: SET_AREA, payload: { area } };
};
export const setDot = (dot) => {
  return { type: SET_DOT, payload: { dot } };
};
export const setPet = (pet) => {
  return { type: SET_PET, payload: { pet } };
};
