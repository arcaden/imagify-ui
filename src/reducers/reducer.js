import * as types from '../actions/types'
import jwt_decode from "jwt-decode";


const initialState = {
    images: [],
    search: {
        search_by: 'title',
        serach_value: ''
    },
    current_user: {
        id: ''
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            //keep the bearer for making requests but chop it for the decode
            localStorage.setItem('token', action.payload);
            let code = action.payload.replace("Bearer","");
            let jwt = jwt_decode(code);
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
        default:
            return state
    }
}
