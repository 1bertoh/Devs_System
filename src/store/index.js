import { combineReducers, createStore } from 'redux'

const INITIAL_STATE = {
    devs: [],
    devId: null,
}

//reducer
function getDevs(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "GET_DEVS":
            return { ...state, devs: action.devs };
        default:
            return state;
    }

}

function getDevId(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_DEVID":
            return { ...state, devId: action.id };
        default:
            return state;
    }
}

const store = createStore(combineReducers({getDevs, getDevId}));

export default store;