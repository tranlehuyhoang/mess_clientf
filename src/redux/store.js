import { createStore } from 'redux';

const initialState = {
    show: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SHOW':
            return {
                ...state,
                show: true
            };
        case 'SET_HIDE':
            return {
                ...state,
                show: false
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;