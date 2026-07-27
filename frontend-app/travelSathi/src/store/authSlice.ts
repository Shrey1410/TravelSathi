import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

interface AuthState {
    user: User | null,
    token: string | null,
    userId: string | null,
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId')
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action : PayloadAction<AuthState>) => {
        
    },
    logout: (state) => {

    },
  },
});

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer