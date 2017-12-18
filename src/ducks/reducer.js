import axios from 'axios';

const initialState = {
    user: {},
    products: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';


// reducer function 43D
export default function reducer(state = initialState, action) {
    switch (action.type) {

        // redux promise middleware  43K
        // actions 43E
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})

            case GET_ALL_PRODUCTS + "_FULFILLED":
            return state.products

            case ADD_PRODUCT + '_FULFILLED':
            return {...state,
                products: [...state.products, action.payload]}

            case DELETE_PRODUCT + "_FULFILLED":
                return {...state,
                    products: [...state.products, action.payload]}

            default: 
            return state;
    }
}

// ACTION CREATORS   43 F

// export function getUserInfo() {
//     const user = axios.get('/auth/me').then(res => res.data)
//     return {
//         type: GET_USER_INFO,
//         payload: user
//     }
// }

export function getAllProducts() {
    axios.get('/api/products').then(res => res.data);
    return {
        type: GET_ALL_PRODUCTS,
        payload: axios.get('/api/products').then(res => res.data)
        
    }
}


export function addProduct(product_name, product_price) {
    const product = axios.post('/api/products').then(res => res.data);
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export function deleteProduct(id) {
    return {
        type: DELETE_PRODUCT,
        payload: axios.delete(`/api/products/${id}`).then(res => res.data)
    }
}               

export function updateProduct(product_name, product_price, id) {
    return {
        type: UPDATE_PRODUCT,
        payload: axios.put(`/api/products/${id}`).then(res => res.data)
    }
}               



