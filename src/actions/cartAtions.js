import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from '../constants/cartConstant';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  // const { data } = await axios.post(`https://verdant-store.herokuapp.com/product/cart`)
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.id,
      name: data.title,
      image: data.image,
      price: data.price,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const cartShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem('shippingAddress', JSON.stringify(data));
};
