import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { backend } from "../../utils/Constants"

export const signup = createAsyncThunk("signup", async (data) => {
  try {
    const response = await axios.post(`${backend}/api/signup`, data,{
     
    })
    // Store user data in localStorage
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data))
      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
      }
    }
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
})

export const login = createAsyncThunk("login", async (data) => {
  try {
    const response = await axios.post(`${backend}/api/login`, data, {
      withCredentials: true, // This allows cookies to be sent
    })

    // Store user data in localStorage
    if (response.data && response.data.user) {
      localStorage.setItem("user", JSON.stringify(response.data.user))
      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
      }
    }

    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
})

export const logout = createAsyncThunk("logout", async () => {
  try {
    const response = await axios.post(
      `${backend}/api/logout`,
      
      {
        withCredentials: true, // Allows cookies to be sent
      },
    )

    // Clear localStorage
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
})

export const update = createAsyncThunk("update", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${backend}/api/update`, data, {
      withCredentials: true,
      headers: data instanceof FormData ? { "Content-Type": "multipart/form-data" } : {},
    })

    return response.data
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Update failed")
  }
})

export const deleteuser = createAsyncThunk("deleteUser", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${backend}/api/delete`, {
      withCredentials: true,
      
    })

    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    return response.data
  } catch (err) {
    console.log(err)

    return rejectWithValue(err.response?.data?.message || "Delete failed")
  }
})

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload
    },
    resetSuccess: (state) => {
      state.success = false // Reset success after navigation
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Signup reducers
      .addCase(signup.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
        state.success = true
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Signup failed"
      })

      // Login reducers
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload?.user
        state.success = true
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Login failed"
      })

      // Logout reducers
      .addCase(logout.pending, (state) => {
        state.loading = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false
        state.users = null
        state.success = true
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Logout failed"
      })

      // Update reducers
      .addCase(update.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(update.fulfilled, (state, action) => {
        state.loading = false
        // Merge the existing user data with the updated fields
        state.users = { ...state.users, ...action.payload.user }
            localStorage.setItem("user", JSON.stringify(state.users))

        // state.users = action.payload
        console.log(state.users)
        state.success = true
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "Update failed"
      })
      .addCase(deleteuser.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(deleteuser.fulfilled, (state, action) => {
        state.loading = false
       
        state.users = null // Clear user data from state

        // state.users = action.payload
        console.log(state.users)
        state.success = true
      })
      .addCase(deleteuser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "Update failed"
      })
  },
})

export const { setUser, resetSuccess, clearError } = userSlice.actions

export default userSlice.reducer

