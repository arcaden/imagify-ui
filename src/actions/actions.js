
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

export const setSearchValue = (searchValue) => {
    return {
        type: types.SET_SEARCH_VALUE,
        payload: searchValue
    };
}

export const setSearchBy = (searchBy) => {
    return {
        type: types.SET_SEARCH_BY,
        payload: searchBy
    };
}

export const toggleCreateModal = (showModal) => {
    return {
        type: types.TOGGLE_CREATE_MODAL,
        payload: showModal
    };
}


export const getImages = () => {
    return dispatch => {
        axios.get(`https://shopify-images-backend.herokuapp.com/api/images`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(res => {
                dispatch(getImageSuccess(res.data))
            })
            .catch(err => {
                toast.error(err)
            });
    };
};

export const getPersonal = () => {
    return dispatch => {
        axios.get(`https://shopify-images-backend.herokuapp.com/api/personal`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(res => {
                dispatch(getImageSuccess(res.data))
            })
            .catch(err => {
                toast.error(err)
            });
    };
};


export const createImage = ({ title, description, public_view, img_file }) => {
    const formData = new FormData();
    formData.append('title', title)
    formData.append('description', description)
    formData.append('public_view', public_view)
    formData.append('img_file', img_file)
    console.log(formData)

    return dispatch => {
        axios
            .post(`https://shopify-images-backend.herokuapp.com/api/images`, formData, {
                headers: {
                    Authorization: localStorage.getItem('token'),
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(res => {
                dispatch(getImages());
            })
            .catch(err => {
                toast.error('There was an error uploading your image')
            });
    };
};

export const updateImage = ({ title, description, public_view, tags, id }) => {
    return dispatch => {
        axios
            .put(`https://shopify-images-backend.herokuapp.com/images/${id}`, {
                title,
                description,
                public_view,
                tags
            },
                {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
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
                dispatch(getImages());
            })
            .catch(err => {
                toast.error("There was a problem logging in, check your username and password")
            })
    }
}

export const search = (search_by, search_value) => {
    return dispatch => {
        axios
            .post(`https://shopify-images-backend.herokuapp.com/api/images/search`, {
                search_by,
                search_value
            }, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then(res => {
                dispatch(getImageSuccess(res.data))
            })
            .catch(err => {
                toast.error("There was a fetching images")
            })
    }
}

export const register = ({ email, password, name }) => {
    return dispatch => {
        axios
            .post(`https://shopify-images-backend.herokuapp.com/signup`, {
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