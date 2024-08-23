import { CREATE_BLOG, DELETE_BLOG } from "./ActionType";

let initialState = {
    blogs: []
}

export const BlogReducer = (state = initialState, { type, payload }) => {


    switch (type) {
        case CREATE_BLOG:

            return { ...state, blogs: [...state.blogs, payload] }

        case DELETE_BLOG:
            return { ...state, blogs: state.blogs.filter((ele) => ele.id != payload) }

        default:
            return state
    }
}