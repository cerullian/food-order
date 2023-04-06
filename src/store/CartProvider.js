import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
    // if (state.items.includes(action.item)) {
    //   const newAmount = state.items.find(item => item === action.item).amount + action.item.amount;
    //   return {...state, items: [...state.items, {...action.item, amount: newAmount}]}
    // } else {
    //   return {...state, items: [action.item, ...state.items]}
    // }
  }
  if (action.type === "REMOVE") {
    // const newAmount = state.items.find(item => item.id === action.id).amount - action.id.amount;
    // if (newAmount > 0) {
    //   return {...state, items: [...state.items, {...action.id, amount: newAmount}]}
    // } else {
    //   return {...state, items: state.items.filter(item => item.id !== action.id)}
    // }
  }
  return defaultCartState
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
