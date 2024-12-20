import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IError {
    [key: string]: string | IError; 
}

interface ErrorState {
    errors: IError;
}

const initialState: ErrorState = {
    errors: {},
};

// Define the slice
const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setErrors(state, action: PayloadAction<IError>) {
            state.errors = action.payload;
        },
        clearErrors(state) {
            state.errors = {};
        },
    },
});

export const { setErrors, clearErrors } = errorSlice.actions;
export default errorSlice.reducer;
