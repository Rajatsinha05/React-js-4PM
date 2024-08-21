import { LOGOUT, SIGNUP } from "./ActionType";

let initialState = {
    users: [],
    user: {},
    isLogin: false,
}

export const UserReucer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SIGNUP:

            return { ...state, users: [...state.users, payload], isLogin: true, user: payload }

        case LOGOUT:
            return { ...state, user: {}, isLogin: false }

        default:
            return state
    }

}