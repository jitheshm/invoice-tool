"use client"
import { persistor, store } from '@/lib/store';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface StoreProviderProps {
    children: ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
);

export default StoreProvider;
