import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backend } from "../../utils/Constants";

// Add product
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      Object.entries(productData).forEach(([key, value]) => {
        if (key === "images") {
          value.forEach((file) => {
            formData.append("images", file);
          });
        } else if (key === "bestSeller") {
          const booleanValue = value === "Yes" ? true : false;
          formData.append("bestSeller", booleanValue);
        } else {
          formData.append(key, value);
        }
      });

      const response = await axios.post(
        `${backend}/api/products/addproduct`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete product
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${backend}/api/products/deleteproduct/${id}`, {
        withCredentials: true,
      });
      return { id, ...response.data };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Get user products
export const getUserProducts = createAsyncThunk(
  "product/getUserProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backend}/api/products/getuserproduct`, {
        withCredentials: true,
      });
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      Object.entries(productData).forEach(([key, value]) => {
        if (key === "images" && value.length > 0) {
          value.forEach((file) => {
            formData.append("images", file);
          });
        } else if (key === "bestSeller") {
          const booleanValue = value === "Yes" ? true : false;
          formData.append("bestSeller", booleanValue);
        } else {
          formData.append(key, value);
        }
      });

      const response = await axios.put(`${backend}/api/products/updateproduct/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


// Get all products
export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backend}/api/products/getproducts`, {
        withCredentials: true,
      });
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Get product by ID
export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backend}/api/products/getproduct/${id}`, {
        withCredentials: true,
      });
      return response.data.product;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Unknown error" });
    }
  }
);

// Sell stock (Update stock quantity)
export const sellStock = createAsyncThunk(
  'product/sellStock',
  async ({ productId, quantitySold }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backend}/api/products/stocksold`,
        { productId, quantitySold },
        { withCredentials: true }
      );
      return response.data.updatedProduct;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: 'Error selling stock' });
    }
  }
);

// Product slice
const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],       // Store for all products
    userProducts: [],      // Store for user's products
    selectedProduct: null, // Store for selected product
    loading: false,        // Loading state for requests
    error: null,           // Error state for requests
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add product
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts.push(action.payload.product);
       
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to add product";
      })
      // Delete product
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = state.allProducts.filter(
          (product) => product._id !== action.payload.id
        );
        state.userProducts = state.userProducts.filter(
          (product) => product._id !== action.payload.id
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to delete product";
      })
      // Update product
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload.updatedProduct;
      
        // Update in allProducts
        state.allProducts = state.allProducts.map((product) =>
          product._id === updated._id ? updated : product
        );
      
        //  Also update in userProducts
        state.userProducts = state.userProducts.map((product) =>
          product._id === updated._id ? updated : product
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to update product";
      })
      // Get user products
      .addCase(getUserProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.userProducts = action.payload;
      })
      .addCase(getUserProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch user products";
      })
      // Get all products
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch all products";
      })
      // Get product by ID
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.selectedProduct = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch product by ID";
      })
      // Sell stock (Update stock quantity)
      .addCase(sellStock.pending, (state) => {
        state.loading = true;
      })
      .addCase(sellStock.fulfilled, (state, action) => {
        state.loading = false;
        // Update the product stock after selling
        state.allProducts = state.allProducts.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
      })
      .addCase(sellStock.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to update stock";
      });
  },
});

export default productSlice.reducer;
