export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_AUTH':
            return {
                ...state,
                auth: action.auth,
                msg: action.msg
            }
        default:
            return state;
    }
}