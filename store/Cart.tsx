import React, { Dispatch, useContext, useReducer } from "react";

export type CartState = {
  [key: string]: CartItemType;
};

export type CartAction = {
  item: TProduct;
  type: "add" | "remove";
  quantity?: number;
};

const defaultState = {} as CartState;

const CartItemsContext = React.createContext(defaultState);
const CartDispatchContext = React.createContext(
  (() => {}) as Dispatch<CartAction>
);

export type CartItemType = TProduct & { quantity: number };

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducers, defaultState);

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  );
};

function cartReducers(
  state: CartState,
  { item, type, quantity: qtyToAdd = 1 }: CartAction
) {
  const existingCartItem = state[item.id];

  switch (type) {
    case "add":
      if (existingCartItem != undefined) {
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity: existingCartItem.quantity + qtyToAdd,
          },
        };
      }
      return {
        ...state,
        [item.id]: {
          ...item,
          quantity: qtyToAdd,
        },
      };
    case "remove":
      if (existingCartItem == undefined) {
        return state;
      }
      if (existingCartItem.quantity > 1) {
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity: existingCartItem.quantity - 1,
          },
        };
      }

      const newCartItems = { ...state };
      delete newCartItems[item.id];
      return newCartItems;
    default: {
      throw new Error(`Unhandled action type : ${type}`);
    }
  }
}

export const useCartMutations = () => {
  const dispatch = useContext(CartDispatchContext);

  function addToCart(product: TProduct | undefined, quantity?: number) {
    const newProduct = product as TProduct;
    dispatch({
      type: "add",
      item: newProduct,
      quantity,
    });
  }
  function removeFromCart(product: TProduct) {
    dispatch({
      type: "remove",
      item: product,
    });
  }

  return { addToCart, removeFromCart };
};

export const useCart = () => {
  const itemsById = useContext(CartItemsContext);
  const items = Object.values(itemsById);
  const itemsCount = items.length;
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return { itemsById, items, itemsCount, subtotal, count };
};

export default CartProvider;
