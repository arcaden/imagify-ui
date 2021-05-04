
import * as types from './types'
import { toast } from 'react-toastify';
const axios = require('axios');

export const loginSuccess = (headers) => {
        return {
          type: types.LOGIN_SUCCESS,
          payload: headers.authorization
        };
}

export const getImageSuccess = (images) => {
    return {
      type: types.GET_IMAGES_SUCCESS,
      payload: images
    };
}

export const updateImageSuccess = (image) => {
    return {
      type: types.GET_IMAGES_SUCCESS,
      payload: image
    };
}

export const addImageSuccess = (image) => {
    return {
        type: types.GET_IMAGES_SUCCESS,
        payload: image
      };  
}

export const getImages = ({title, description, public_view, tags}) => {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/Images`)
            .then(res => {
                dispatch(getImageSuccess(res.data))
            })
            .catch(err => {
                toast.error(err)
            });
    };
};

export const createImage = ({title, description, public_view, img_file}) => {
    return dispatch => {
        axios
            .post(`https://jsonplaceholder.typicode.com/Images`, {
                title,
                description,
                public_view,
                img_file
            })
            .then(res => {
                dispatch(addImageSuccess(res.data))
            })
            .catch(err => {
                toast.error(err)
            });
    };
};

export const updateImage = ({title, description, public_view, tags}) => {
    return dispatch => {
        axios
            .post(`https://jsonplaceholder.typicode.com/Images`, {
                title,
                description,
                public_view,
                tags
            })
            .then(res => {
                dispatch(updateImageSuccess(res.data))
            })
            .catch(err => {
                toast.error("There was a problem updating your image")
            });
    };
};

export const login = ({ email, password }) => {
    return dispatch => {
        axios
            .post(`https://shopify-images-backend.herokuapp.com/login`, {
                user: {
                    email,
                    password
                }
            })
            .then(res => {
                dispatch(loginSuccess(res.headers))
            })
            .catch(err => {
                toast.error("There was a problem logging in, check your username and password")
            })
    }
}

export const register = ({ email, password, name }) => {
    return dispatch => {
        axios
            .post(`http://127.0.0.1:3001/signup`, {
                user: {
                    email,
                    password,
                    name
                }
            })
            .then(res => {
                dispatch(loginSuccess(res.headers))
            })
            .catch(err => {
                toast.error("There was a problem signing up, emails must be unique")
            })
    }
}