const INITIAL_STATE = {
    myCommentEmailUser: [],
    myComment: [],
    myCommentTitle: [],
};

export default function getComment(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_COMMENT":
            return {
                ...state,
                myCommentEmailUser: [
                    ...state.myCommentEmailUser,
                    action.payload.emailUser,
                ],
                myComment: [...state.myComment, action.payload.comment],
                myCommentTitle: [...state.myCommentTitle, action.payload.title],
            };
        default:
            return state;
    }
}