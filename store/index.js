import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './slices/favorite';
import viewedReducer from './slices/viewed';

export default store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        viewed: viewedReducer,
    },
});