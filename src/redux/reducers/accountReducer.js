export default function (state = [], action) {
    switch (action.type) {
        case "LOGIN_ACCOUNT":
            return {
                token: action.token,
                user: action.user
            };
        case "LOGOUT_ACCOUNT":
            return {
                token: null,
                user: null
            };
        default:
            return state
    }
}