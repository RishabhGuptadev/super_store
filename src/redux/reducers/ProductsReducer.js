import types from "../types";

export const ProductsReducer = (state, action) => {
    if (action.type === types.GET_ALL_PRODUCTS_REQUEST) { 
        return {...state, loading : true}
    }

if (action.type === types.GET_ALL_PRODUCTS_SUCCESS) { 
    return {...state, products : action.payload, loading : false}
}
return {...state}
}