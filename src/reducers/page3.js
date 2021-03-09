import { SET_AREA, SET_CITY, SET_DOT } from "../actions/actionTypes";

function city(state = "請先選擇地區", action) {
  switch (action.type) {
    case SET_CITY: {
      return action.payload.city;
    }
    default:
      return state;
  }
}
function area(state = "縣市", action) {
  switch (action.type) {
    case SET_AREA: {
      return action.payload.area;
    }
    default:
      return state;
  }
}
function dot(state = 1, action) {
  switch (action.type) {
    case SET_DOT: {
      return action.payload.dot;
    }
    default:
      return state;
  }
}

export { city, area, dot };
