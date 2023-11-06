import { createStore } from 'redux';

const initialState = {
    data: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: [...state.data, ...action.payload]
            };
        case 'ADD_TO_DATA':
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case 'CLEAR_DATA':
            return {
                ...state,
                data: state.data = []
            };
        case 'DELETE_ROW':
            return {
                ...state,
                data: state.data.filter(item => item.name !== action.payload)
            };

        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;