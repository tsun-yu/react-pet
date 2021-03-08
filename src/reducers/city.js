import { SET_CITY } from "../actions/actionTypes";

export default function city(state = "", action) {
  switch (action.type) {
    case SET_CITY: {
      console.log(action.payload.component);
      return action.payload.component;
    }
    default:
      return state;
  }
}
