import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const jsonServerUrl = 'http://localhost:5000';

export const loginUser=createAsyncThunk(
    'user/loginUser',
    async(userCredentials)=>{
        try {
            const response = await axios.post(`${jsonServerUrl}/users`, userCredentials);
            const user = response.data; // Assuming the JSON Server returns the user data
            localStorage.setItem('user', JSON.stringify(user));
            return user;
          } catch (error) {
            throw error; // Let Redux handle the error
          }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
      loading: false,
      user: null,
      error: null
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.user = null;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.user = null;
          console.log(action.error.message);
          if (action.error.message === 'Request failed with status code 401') {
            state.error = 'Access Denied! Invalid Credentials';
          } else {
            state.error = action.error.message;
          }
        });
    }
  });
  

export default userSlice.reducer;
