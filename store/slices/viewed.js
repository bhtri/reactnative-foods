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
        }
    },
})

export const { addNewProductView } = viewedSlice.actions

export default viewedSlice.reducer