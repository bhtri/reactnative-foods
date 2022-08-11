import { createSlice } from '@reduxjs/toolkit'

export const viewedSlice = createSlice({
    name: 'viewed',
    initialState: {
        items: [],
    },
    reducers: {
        addNewProductView: (state, action) => {
            const { id } = action.payload;
            state.items = [...new Set([id, ...state.items])];

            return state;
        },
        removeProductView: (state, action) => {
            const { id } = action.payload;
            state.items = state.items.filter(item => item !== id);
        },
        removeAllProductView : (state, action) => {
            state.items = []
        }
    },
})

export const { addNewProductView, removeProductView, removeAllProductView } = viewedSlice.actions

export default viewedSlice.reducer