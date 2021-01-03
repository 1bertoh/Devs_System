import { combineReducers, createStore } from 'redux'

const INITIAL_STATE = {
    devs: [],
    devId: null,
    myCommentEmailUser: [],
    myComment: [],
    myCommentName: []
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

function getComment(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_COMMENT":
            return {
                ...state,
                myCommentEmailUser: [action.emailUser, ...state.myCommentEmailUser],
                myComment: [action.comment, ...state.myComment],
                myCommentName: [action.name, ...state.myComment],
            };
        default:
            return state;
    }
}

const store = createStore(combineReducers({getDevs, getDevId, getComment}));

export default store;