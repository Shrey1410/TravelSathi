import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface User {
    providerId: string;
    email: string | null;
}

interface AuthState {
    isLoggedIn : boolean;
    user : User | null
}

const initialState: AuthState = {
  isLoggedIn : false,
  user : null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action : PayloadAction<AuthState>) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
    },
    logout: (state) => {
        state.isLoggedIn = false;
        state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;