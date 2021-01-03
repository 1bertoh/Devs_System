import { combineReducers, createStore } from 'redux'
import Foto1 from "../devs_pics/dev1.jpg";
import Foto2 from "../devs_pics/dev2.jpg";
import Foto3 from "../devs_pics/dev3.jpg";
import Foto4 from "../devs_pics/dev4.jpg";
import Foto5 from "../devs_pics/dev5.jpg";
import Foto6 from "../devs_pics/dev6.jpg";
import Foto7 from "../devs_pics/dev7.jpg";
import Foto8 from "../devs_pics/dev8.jpg";
import Foto9 from "../devs_pics/dev9.jpg";
import Foto10 from "../devs_pics/dev10.jpg";


const INITIAL_STATE = {
    devs: [],
    devId: null,
    myCommentEmailUser: [],
    myComment: [],
    myCommentTitle: [],
    devPics: [ Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, Foto7, Foto8, Foto9, Foto10,]

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
                myCommentEmailUser: [ ...state.myCommentEmailUser, action.emailUser],
                myComment: [ ...state.myComment, action.comment],
                myCommentTitle: [ ...state.myCommentTitle, action.title],
            };
        default:
            return state;
    }
}

const store = createStore(combineReducers({getDevs, getDevId, getComment}));

export default store;