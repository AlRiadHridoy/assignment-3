import {
  ADDPRODUCT,
  BILLAMOUNT,
  DELETE,
  TOGOLECARTQTY,
  ADDTOCART,
} from "./actionType";

import initialState from "./initialState";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case ADDTOCART:
      const findCart = state.carts.find((item) => {
        return item.id === action.payload.id;
      });
      if (findCart) {
        if (state.products[action.payload.id].stock === 0) {
          return state;
        }
        // Carts
        const tempCarts = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.quantity * item.price,
            };
          }
          return item;
        });
        // Products
        const tempProducts = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              stock: item.stock - 1,
            };
          }
          return item;
        });
        return {
          ...state,
          products: [...tempProducts],
          carts: [...tempCarts],
        };
      } else {
        const pro = state.products;
        const { id } = action.payload;
        pro[id] = {
          ...pro[id],
          stock: pro[id].stock - 1,
          prevItem: pro[id].stock,
        };
        return {
          ...state,
          products: [...pro],
          carts: [
            ...state.carts,
            { ...action.payload, quantity: 1, totalPrice: 0 },
          ],
        };
      }

    case TOGOLECARTQTY:
      const toggleCart = state.carts.map((cart) => {
        if (cart.id === action.payload.id) {
          if (action.payload.type === "INC") {
            if (state.products[cart.id].stock < 1) {
              return cart;
            }

            return { ...cart, quantity: cart.quantity + 1 };
          } else {
            if (cart.quantity === 0) {
              return cart;
            }
            return { ...cart, quantity: cart.quantity - 1 };
          }
        }
        return cart;
      });
      const toggleProduct = state.products.map((product, index) => {
        if (product.id === action.payload.id) {
          if (action.payload.type === "DEC") {
            const TempID = state.carts.filter((cart) => cart.id === product.id);
            if (TempID.quantity === 0) {
              return product;
            }
            return { ...product, stock: product.stock + 1 };
          } else {
            if (product.stock === 0) {
              return product;
            }
            return { ...product, stock: product.stock - 1 };
          }
        }
        return product;
      });

      return {
        ...state,
        products: [...toggleProduct],
        carts: [...toggleCart],
      };

    case BILLAMOUNT:
      return {
        ...state,
        carts: state.carts.map((cart) => {
          return { ...cart, totalPrice: cart.price * cart.quantity };
        }, 0),
        billAmount: state.carts.reduce((prev, next) => {
          return (prev += next.quantity * next.price);
        }, 0),
      };

    case DELETE:
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.payload),
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return { ...product, stock: product.prevItem };
          }
          return product;
        }),
      };
    default:
      return state;
  }
};
export default reducer;
