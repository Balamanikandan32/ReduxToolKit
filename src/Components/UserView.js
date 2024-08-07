import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Features/Users/userSlice";

const UserView = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []); // changes this line due to return statement which affect use effect
  return (
    <div>
      <h2>Users</h2>
      {loading ? (
        <>Loading</>
      ) : users ? (
        users?.map((item, index) => <li key={index}>{item.name}</li>)
      ) : (
        <>{error}</>
      )}
    </div>
  );
};

export default UserView;
