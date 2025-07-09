import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { AppContext } from "../context/AppContext";
import clsx from "clsx";

const LoginPage = () => {
  const [authMode, setAuthMode] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const { login } = useContext(AppContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (authMode === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    login(authMode === "Sign up" ? "signup" : "login", {
      fullName,
      email,
      password,
      bio,
    });
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      {/* Left logo */}
      <img src={assets.logo_big} alt="Logo" className="w-[min(30vw,250px)]" />

      {/* Form */}
      <form
        onSubmit={onSubmitHandler}
        className="border-2 bg-white/10 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {authMode}
          {isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              alt="Back"
              className="w-5 cursor-pointer"
            />
          )}
        </h2>

        {/* Full Name (Sign up only before submit) */}
        {authMode === "Sign up" && !isDataSubmitted && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            className="p-2 border border-gray-500 rounded-md focus:outline-none text-black bg-white"
            type="text"
            placeholder="Full Name"
            required
          />
        )}

        {/* Email + Password (before submit) */}
        {!isDataSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none text-black bg-white focus:ring-2 focus:ring-indigo-500"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none text-black bg-white focus:ring-2 focus:ring-indigo-500"
            />
          </>
        )}

        {/* Bio (after first submit during sign up) */}
        {authMode === "Sign up" && isDataSubmitted && (
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            rows={4}
            className="p-2 border border-gray-500 rounded-md focus:outline-none text-black bg-white focus:ring-2 focus:ring-indigo-500"
            placeholder="Provide a short bio..."
            required
          />
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!agreed}
          className={clsx(
            "py-3 rounded-md text-white",
            agreed
              ? "bg-gradient-to-r from-purple-400 to-violet-600 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          )}
        >
          {authMode === "Sign up" ? "Create Account" : "Login Now"}
        </button>

        {/* Checkbox */}
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        {/* Switch Login/Signup */}
        <div className="flex flex-col gap-2">
          {authMode === "Sign up" ? (
            <p className="text-sm text-gray-300">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setAuthMode("Login");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-400 cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-300">
              Create an account{" "}
              <span
                onClick={() => {
                  setAuthMode("Sign up");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-400 cursor-pointer"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
