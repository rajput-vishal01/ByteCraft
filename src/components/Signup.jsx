import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");


//don't name this fn as handlesubmit in react-hook-from handlesubmit is sort of a event
  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) dispatch(authLogin(currentUser));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EEF0F2]">
      <div className="w-full max-w-lg bg-[#FAFAFF] rounded-xl p-8 shadow-lg border border-[#DADDD8]">
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold text-[#1C1C1C]">
          Sign up to create an account
        </h2>
        <p className="mt-2 text-center text-sm text-[#1C1C1C]/70">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-[#1C1C1C] hover:underline transition-all duration-200">
            Sign In
          </Link>
        </p>
        {error && (
          <p className="text-red-600 mt-4 text-center text-sm font-medium">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit(create)} className="mt-6">
          <div className="space-y-4">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button
              type="submit"
              className="w-full bg-[#1C1C1C] text-[#FAFAFF]">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
