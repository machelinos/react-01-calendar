import { configureStore } from '@reduxjs/toolkit'
import { authSlice, uiSlice, calendarSlice } from './';

    export const store = configureStore({
        reducer: {
            auth: authSlice.reducer,
            ui: uiSlice.reducer,
            calendar: calendarSlice.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            {
                // Pobably should change logic on the Dates properties that are being saved to redux so this check should not be set to false
                serializableCheck: false
            }
        )
    })
