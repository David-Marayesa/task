import { configureStore } from '@reduxjs/toolkit';
import allReducers from './reducer';

const store = configureStore({
    reducer: allReducers
});

export default store;




