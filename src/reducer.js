export const initialState = {
    frame: 0,
    frames: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_QUANTITY':
            return {
                ...state,
                frames: action.payload
            }
            break;

        case 'NEXT':
            return {
                ...state,
                frame: state.frame + 1
            }
            break;
        default:
            return state;
    }
}

export default reducer;