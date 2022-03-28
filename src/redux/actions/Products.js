import types from "../types"
import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
    dispatch({type : types.GET_ALL_PRODUCTS_REQUEST});
    await axios({
        method : "GET", 
        url : 'https://fakestoreapi.com/products'
    }).then((response) => {
        dispatch({type : types.GET_ALL_PRODUCTS_SUCCESS, payload : response.data})
        console.log("this is the response", response);
    });
}