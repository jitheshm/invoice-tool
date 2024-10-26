import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import invoiceReducer from "./features/invoice/invoiceSlice";
import errorReducer from "./features/errors/errorSlice";

const persistConfig = {
    key: "invoice", // Apply persistence only to the invoice state
    storage,
};

const persistedInvoiceReducer = persistReducer(persistConfig, invoiceReducer);

const store = configureStore({
    reducer: {
        invoice: persistedInvoiceReducer, // Use persisted reducer for invoice
        errors: errorReducer, // Plain reducer for errors (no persistence)
    },
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
