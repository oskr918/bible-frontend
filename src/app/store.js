import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../app/features/userSlice';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  users: usersSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  // ... otros parámetros de configuración ...
});

export default store;
