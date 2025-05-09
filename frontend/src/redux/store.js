import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import productReducer from "./Slices/productSlice";
import cartReducer from "./Slices/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // LocalStorage

// Persist Config
const persistConfig = {
  key: "root",
  storage,
};

// Combine Reducers
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart:cartReducer
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);
