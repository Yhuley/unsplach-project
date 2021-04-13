import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from "react-redux";
import { store } from "./src/redux/redux/index";
import Navigation from "./src/infrastructure/navigation";

export default function App() {
    return (
        <>
            <Provider store={store}>
                <Navigation />
            </Provider>
            <StatusBar style="auto" />
        </>
    );
};
