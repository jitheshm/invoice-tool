import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import invoiceReducer from "./features/invoice/invoiceSlice";
import errorReducer from "./features/errors/errorSlice";
import userReducer from "./features/user/userSlice";

const invoicePersistConfig = {
    key: "invoice",
    storage,
};

const userPersistConfig = {
    key: "user",
    storage,
};

const persistedInvoiceReducer = persistReducer(invoicePersistConfig, invoiceReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
    reducer: {
        invoice: persistedInvoiceReducer,
        errors: errorReducer,
        user: persistedUserReducer,
    },
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
