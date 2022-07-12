import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isModalOpen: false
    },
    reducers: {
        onOpenDateModal: (state)=>{
            state.isModalOpen = true;
        },
        onCloseDateModal: (state)=>{
            state.isModalOpen = false;
        }
    }
})

export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;
