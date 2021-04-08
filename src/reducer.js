export const initialState = {
  frame: 0,
  frames: [],
  framesSvg: {},
};

function reducer(state, action) {
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case "LOAD_SVG":
      newState["framesSvg"][state.frame] = action.payload;
      return newState;
      break;
    case "SET_QUANTITY":
      return {
        ...state,
        frames: action.payload,
      };
      break;

    case "NEXT":
      return {
        ...state,
        frame: state.frame + 1,
      };
      break;
    default:
      return state;
  }
}

export default reducer;
