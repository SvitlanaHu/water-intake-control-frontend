import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSettingModalOpen: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        closeSettingModal(state) {
            state.isSettingModalOpen = false;
        },
        openSettingModal(state) {
            state.isSettingModalOpen = true;
        },
    }
})


export const { closeSettingModal, openSettingModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;