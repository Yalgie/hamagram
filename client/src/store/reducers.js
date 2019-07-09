export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_AUTH':
            return {
                ...state,
                auth: action.auth,
                msg: action.msg,
                path: action.path,
                username: action.username
            }
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state;
    }
}