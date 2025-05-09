// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { backend } from "../../utils/Constants";


// // Add to Cart API call
// export const addToCart = createAsyncThunk(
//   'cart/addToCart',
//   async ({ productId, quantity }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${backend}/api/cart/postcart`, {  productId, quantity }, {
//         withCredentials: true,
        
      
        
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const fetchCartItems = createAsyncThunk(
//   'cart/fetchCartItems',
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${backend}/api/cart/getcart`,{   withCredentials: true,});
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Remove from Cart API
// export const removeFromCart = createAsyncThunk(
//   'cart/removeFromCart',
//   async ({ productId }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${backend}/api/cart/deletecart`, {  productId }, {
//         withCredentials: true,
    
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const updateCart = createAsyncThunk('cart/updateCart', async ({ productId, quantity }) => {
//   const response = await axios.put(`${backend}/api/cart/updatecart`, { productId, quantity },{withCredentials:true});
//   return response.data;
// });

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     carts: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addToCart.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.loading = false;
//         state.carts = action.payload;
//         console.log(action.payload);
//       })
//       .addCase(addToCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(fetchCartItems.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchCartItems.fulfilled, (state, action) => {
//         state.loading = false;
//         state.carts = action.payload;
//         console.log(action.payload);
//       })
//       .addCase(fetchCartItems.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(removeFromCart.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(removeFromCart.fulfilled, (state, action) => {
//         state.loading = false;
//         state.carts = action.payload;
//         console.log(action.payload);
//       })
//       .addCase(removeFromCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//   },
// });

// export default cartSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { backend } from "../../utils/Constants";

// // Add to cart
// export const addToCart = createAsyncThunk('cart/addToCart', async ({ productId, quantity }, { rejectWithValue }) => {
//   try {
//     const res = await axios.post(`${backend}/api/cart/postcart`, { productId, quantity }, { withCredentials: true });
//     return res.data.cartItem;
//   } catch (err) {
//     return rejectWithValue(err.response.data);
//   }
// });

// // Fetch cart
// export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async (_, { rejectWithValue }) => {
//   try {
//     const res = await axios.get(`${backend}/api/cart/cart`, { withCredentials: true });
//     return res.data;
//   } catch (err) {
//     return rejectWithValue(err.response.data);
//   }
// });

// // Update cart
// export const updateCart = createAsyncThunk('cart/updateCart', async ({ productId, quantity }, { rejectWithValue }) => {
//   try {
//     const res = await axios.put(`${backend}/api/cart/updatecart`, { productId, quantity }, { withCredentials: true });
//     return res.data.cartItem;
//   } catch (err) {
//     return rejectWithValue(err.response.data);
//   }
// });

// // Remove from cart
// export const removeFromCart = createAsyncThunk('cart/removeFromCart', async ({ productId }, { rejectWithValue }) => {
//   try {
//     const res = await axios.delete(`${backend}/api/cart/deletecart`, {
//       data: { productId },
//       withCredentials: true,
//     });
//     return productId; // return the id to filter out in reducer
//   } catch (err) {
//     return rejectWithValue(err.response.data);
//   }
// });

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     carts: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addToCart.fulfilled, (state, action) => {
//         const existing = state.carts.find(item => item.productId._id === action.payload.productId._id);
//         if (existing) {
//           existing.quantity += action.payload.quantity;
//         } else {
//           state.carts.push(action.payload);
//         }
//         state.loading = false;
//       })
//       .addCase(fetchCartItems.fulfilled, (state, action) => {
//         state.carts = action.payload;
//         state.loading = false;
//       })
//       .addCase(updateCart.fulfilled, (state, action) => {
//         const index = state.carts.findIndex(item => item.productId._id === action.payload.productId._id);
//         if (index !== -1) {
//           state.carts[index].quantity = action.payload.quantity;
//         }
//         state.loading = false;
//       })
//       .addCase(removeFromCart.fulfilled, (state, action) => {
//         state.carts = state.carts.filter(item => item.productId._id !== action.payload);
//         state.loading = false;
//       });
//   }
// });

// export default cartSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backend } from "../../utils/Constants";

// Add to Cart API call
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ productId, quantity }, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const existingItem = state.cart.carts.find(item => item.productId === productId);

      if (existingItem) {
        // Update the quantity if the item already exists in the cart
        const updatedCart = state.cart.carts.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return updatedCart;
      }

      // If the item doesn't exist, add it to the cart
      const response = await axios.post(`${backend}/api/cart/postcart`, { productId, quantity }, { withCredentials: true });
      return response.data; // Return updated cart
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch Cart Items API call
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backend}/api/cart/cart`, { withCredentials: true });
      return response.data; // Return cart items
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Remove from Cart API call


// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: [], // The cart items, initially empty
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle Add to Cart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload || []; // Update the cart state
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Handle Fetch Cart Items
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload || []; // Set cart items
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
 
 
  },
});

export default cartSlice.reducer;

