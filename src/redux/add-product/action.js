import { ADDPRODUCT, ADDTOCART, BILLAMOUNT, DELETE, TOGOLECARTQTY } from "./actionType";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

export const addToCart = (card) => {
  return {
    type: ADDTOCART,
    payload: card,
  };
};
export const deleteToCart = (cardId) => {
  return {
    type: DELETE,
    payload: cardId,
  };
};
export const togleCartQty = ({ id, type }) => {
  return {
    type: TOGOLECARTQTY,
    payload: {
      id,
      type,
    },
  };
};
export const billAmount = () => {
  return {
    type: BILLAMOUNT,
  };
};
