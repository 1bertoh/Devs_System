

export default function myComment(comment) {
    return {
        type: 'GET_COMMENT',
        payload: comment
    }
}