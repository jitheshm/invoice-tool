import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    userInfo: {
        name: string;
        verified: boolean;
    };
}

const initialState: UserState = {
    userInfo: {
        name: '',
        verified: false,
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ name: string; verified: boolean }>) => {
            state.userInfo = action.payload;
        },
        logout: (state) => {
            state.userInfo = { name: '', verified: false };
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;