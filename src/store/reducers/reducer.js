import * as actionTYpes from '../../action'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTYpes.NEW_NOTE:
        return {
            ...state, notes: state.notes.concat({ id: new Date(), value: action.data })
            ,
        };
    }
    return state;
};

const initialState = {
    notes: [
        {id: 1, text: 'this is my first note'},
        {id: 2, text: 'this is my second note'}
    ],
};

export default reducer;