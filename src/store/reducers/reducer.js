import * as actionTypes from '../../action'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEW_NOTE:
            return {
                ...state, 
                notes: state.notes.concat({ id: new Date(), text: action.data }),
            };
        case actionTypes.REMOVE_NOTE:
            const updatedArray = state.notes.filter(
                    (item) => item.id !== action.item
                    );
                return {
                    ...state,
                    notes: updatedArray
                };
        
        default:
            // do nothing
    }
    return state;
};

const initialState = {
    notes: [
        
    ],
};

export default reducer;