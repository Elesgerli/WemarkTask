import { configureStore } from "@reduxjs/toolkit";
import { clientService } from "./clientService";

export const makeStore = () => {
    return configureStore({
        reducer: {
            [clientService.reducerPath]: clientService.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(clientService.middleware),
    });
};