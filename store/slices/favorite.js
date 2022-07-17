import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        items: [],
    },
    reducers: {
        toggleFavorite: (state, action) => {
            console.log('action', action)
            return state
        },
    },
})

export const { toggleFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer