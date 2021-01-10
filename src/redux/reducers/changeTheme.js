const INITIAL_STATE = {
    theme: "dark",
};

export default function changeTheme(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                theme: action.payload.theme,
            };
        default:
            return state;
    }
}