import { create } from "zustand";

const useCartsStore = create((set) => ({
  carts: [
    {
      id: 1,
      productId: 2,
      quantity: 2,
    
    },
    {
      id: 2,
      productId: 3,
      quantity: 1,
     
    },
  ],
  increaseQuantity: (cartId) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === cartId ? { ...el, quantity: el.quantity + 1 } : { ...el }
      ),
    })),

  decreaseQuantity: (cartId) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === cartId ? { ...el, quantity: el.quantity - 1 } : { ...el }
      ),
    })),
    removeCart : (cartId) => set((state) => ({
      carts : state.carts.filter(el => el.id !== cartId)
    })),
    addCart: (newCart) => set( (state) => ({
      carts : [...state.carts, newCart]
    }))
}));

export default useCartsStore;
