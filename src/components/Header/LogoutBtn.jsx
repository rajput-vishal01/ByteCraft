import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-bock font-medium px-5 py-[6px] duration-200 hover:bg-red-400 rounded-full bg-red-200"
      onClick={logoutHandler}>
      <i class="ri-logout-circle-r-line"></i>
    </button>
  );
}

export default LogoutBtn;
