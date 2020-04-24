// account actions types
const accountActionsTypes ={
    LOGIN_ACCOUNT:"LOGIN_ACCOUNT",
    LOGOUT_ACCOUNT:"LOGOUT_ACCOUNT"
};

//account actions creators
export function loginAccount(token, user) {
    return {
        type:accountActionsTypes.LOGIN_ACCOUNT,
        token,
        user
    }
}

export function logoutAccount() {
    return {
        type:accountActionsTypes.LOGOUT_ACCOUNT,
    }
}
