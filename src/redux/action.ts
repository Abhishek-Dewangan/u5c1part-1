import axios from "axios";
export const GET_DATA = "GET_DATA";
export const ADD_CART = "ADD_CART";
export const CART_DATA = "CART_DATA";

export const getProductsData = (dispatch:any) => {
  axios.get("http://localhost:8080/products").then((res) =>
    dispatch({
      type: GET_DATA,
      payload: res.data,
    })
  );
};

export const addProducts = async (dispatch:any,img:any,category:any,desc:any,id:any,price:any,product_name:any,rating:any) => {
    let r = await fetch("http://localhost:8080/cart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
       img,
       category,
       desc,
       id,
       price,
       product_name,
       rating,
      }),
    });
    let res = await fetch("http://localhost:8080/cart");
    let data = await res.json();
    dispatch({
      type: ADD_CART,
      payload: data,
    })
  };
  export const getCartData = (dispatch:any) => {
    axios
      .get("http://localhost:8080/cart")
      .then((res) =>
        dispatch({
          type: CART_DATA,
          payload: res.data,
        })
      )
  };
