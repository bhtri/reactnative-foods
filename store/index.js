import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './slices/favorite';

export default store = configureStore({
    reducer: {
        favorite: favoriteReducer,
    },
});