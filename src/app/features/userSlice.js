import { createSlice } from '@reduxjs/toolkit';
const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    fetchUsersSuccess: (state, action) => {
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
      
  },
});
export const { fetchUsersSuccess } = usersSlice.actions;
export default usersSlice;
