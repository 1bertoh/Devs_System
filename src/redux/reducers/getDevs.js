const INITIAL_STATE = {
    devs: [],
};

export default function getDevs(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_DEVS":
            console.log(action)
            return { ...state, devs: action.devs };
            
        default:
            return state;
    }
}

