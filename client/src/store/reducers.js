// Updates state based on what was passed from the actions

export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_AUTH':
            return {
                ...state,
                auth: action.auth,
                msg: action.msg,
                username: action.username
            }
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        case 'SET_HAMSTERS':
            return {
                ...state,
                hamsters: action.hamsters
            }
        case 'SET_REDIRECT':
            return {
                ...state,
                path: action.path,
            }
        default:
            return state;
    }
};
