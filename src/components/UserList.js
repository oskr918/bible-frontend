import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsersSuccess}  from '../app/features/userSlice';
import { fetchUsers } from '../api';
const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.users)  
  useEffect(() => {
    (async () => {
        const response = await fetchUsers();
        dispatch(fetchUsersSuccess(response.data));
      })();
  }, [dispatch]);

  return (
    <div>
    </div>
  );
};

export default UserList;
