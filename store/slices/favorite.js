import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        items: [],
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find(item => item === id);
            if (item) {
                // delete
                state.items = state.items.filter(item => item !== id);
            } else {
                // add new
                state.items = [...new Set([id, ...state.items])];
            }

            return state
        },
    },
})

export const { toggleFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer