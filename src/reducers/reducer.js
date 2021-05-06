import * as types from '../actions/types'
import jwt_decode from "jwt-decode";


const initialState = {
    images: [],
    search: {
        search_by: 'title',
        search_value: ''
    },
    current_user: {
        id: ''
    },
    showCreate: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            //keep the bearer for making requests but chop it for the decode
            localStorage.setItem('token', action.payload);
            let code = action.payload.replace("Bearer", "");
            let jwt = jwt_decode(code);
            localStorage.setItem('uid', jwt.sub);
            return {
                ...state,
                current_user: {
                    id: jwt.sub
                }
            }
        case types.GET_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.payload
            }
        case types.SET_SEARCH_VALUE:
            return {
                ...state,
                search: {
                    ...state.search,
                    search_value: action.payload
                }
            }

        case types.SET_SEARCH_BY:
            return {
                ...state,
                search: {
                    ...state.search,
                    search_by: action.payload
                }
            }
        case types.TOGGLE_CREATE_MODAL:
            return {
                ...state,
                showCreate: action.payload
            }

        default:
            return state
    }
}
