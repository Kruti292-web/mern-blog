import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentState: null,
    error: null,
    loading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state)  => {
        state.loading = true;
        state.error = null;
    },
    signInSuccess: (state , action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
    },
    signInFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
 
})

export const { signInFailure, signInStart, signInSuccess, clearError } = userSlice.actions;

export default userSlice.reducer;