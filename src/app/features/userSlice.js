import { createSlice } from '@reduxjs/toolkit';
const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    fetchFavoritesSuccess: (state, action) => {
      return action.payload;
    },
    addUserSuccess: (state, action) => {
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password
        },
      ];
    },
    isUserRegisteredSuccess: (state, action) => {
      return [
        ...state,
        {
          email: action.payload.email,
          password: action.payload.password
        },
      ];
    },
      addFavoriteSuccess: (state, action) => {
        return[
          ...state,
          {
            versiculo: action.payload.versiculo
          }
        ]
      }
  },
});
export const { fetchFavoritesSuccess } = usersSlice.actions;
export default usersSlice;