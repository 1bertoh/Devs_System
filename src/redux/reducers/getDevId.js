const INITIAL_STATE = {
    devId: null
}

export default function getDevId(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_DEVID":
            return { ...state, devId: action.payload.id };
        default:
            return state;
    }
}