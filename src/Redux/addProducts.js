import { createSlice } from "@reduxjs/toolkit";
import { myProduct } from "../products";

export const productSlice = createSlice({
  name: "myProduct",
  initialState: {
    value: myProduct,
  },
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      if (newProduct) {
        state.value.push(newProduct);
      }
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
