export const initialState = {
    frame:0
}

function reducer(state, action) {
    switch(action.type) {
        case 'NEXT':
            return {...state,
                frame: state.frame + 1
            }
        break;
        default:
            return state;
    }
}

export default reducer;