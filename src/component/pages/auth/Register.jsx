import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginOption, setLoginOption] = useState("email");
  const [selectedCountry, setSelectedCountry] = useState("");
  const options = countryList().getData();
  const [value, setValue] = useState("");

  const [referralCode, setReferralCode] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const changeHandler = (value) => {
    setValue(value);
  };

  const handleReferralCodeChange = (e) => {
    setReferralCode(e.target.value);
  };

  const handleAgreedTermsChange = () => {
    setAgreedTerms(!agreedTerms);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginOptionChange = (option) => {
    setLoginOption(option);
  };

  const handleRequestCode = () => {
    // Logic to request verification code
    console.log("Verification code requested");
  };

  const handleSignup = () => {
    // Logic to handle signup
    console.log("Signup button clicked");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-opacity-50 bg-cover bg-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Create your Account
        </h1>
        <h5 className="text-sm mb-8 text-center bg-white font-bold text-[#17202A] text-[12px]">
          Create a secure account with us to start trading
        </h5>

        <div className="mb-4">
          <button
            className={`mr-4 px-4 py-2 w-1/4 h-1/3 rounded ${
              loginOption === "email"
                ? "bg-orange-400 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => handleLoginOptionChange("email")}
          >
            Email
          </button>
          <button
            className={`mr-4 px-4 py-2 w-1/4 h-1/3 rounded ${
              loginOption === "phone"
                ? "bg-orange-400 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => handleLoginOptionChange("phone")}
          >
            Phone
          </button>
        </div>

        {loginOption === "phone" && (
          <div className="mb-4">
            <label htmlFor="phoneInput" className="block text-sm mb- text-left">
              Phone number
            </label>
            <div className="flex items-center">
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
                classes="w-1/4 border rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="tel"
                id="phoneInput"
                className="w-3/4 border rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your phone"
              />
            </div>
          </div>
        )}

        {loginOption === "email" && (
          <div className="mb-4">
            <label
              htmlFor="emailInput"
              className="block text-sm mb-2 text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="emailInput"
              className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:border-blue-500"
              placeholder="Enter email"
            />
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="passwordInput"
            className="block text-sm mb-2 text-left"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="passwordInput"
              className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              className="absolute top-1/1 right-0 mt-3 mr-3 transform -translate-y-1/1"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeIcon className="h-6 w-6 text-gray-500" />
              ) : (
                <EyeOffIcon className="h-6 w-6 text-gray-500" />
              )}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1 text-[12px]">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="referralCodeInput"
            className="block text-sm mb-2 text-left"
          >
            Referral Code (optional)
          </label>
          <input
            type="text"
            id="referralCodeInput"
            className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:border-blue-500"
            placeholder="Enter referral code"
            value={referralCode}
            onChange={handleReferralCodeChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2 ">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 mr-1 rounded-lg"
              checked={agreedTerms}
              onChange={handleAgreedTermsChange}
            />
            I agree to Apex Network Terms of use and Privacy policy
          </label>
        </div>

        <div className="mb-4">
          <label
            htmlFor="verificationCodeInput"
            className="block text-sm mb-2 text-left text-[12px]"
          >
            Verification Code
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="verificationCodeInput"
              className="w-3/4 border rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
            />
            <button
              className="w-3/2 bg-gray-500 text-white px-4 py-2 rounded-r text-left text-[12px]"
              onClick={handleRequestCode}
            >
              Request Code
            </button>
          </div>
        </div>

        <button
          className="bg-orange-500 text-white py-2 px-4 rounded-xl w-full mb-4"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <div className="text-center text-sm">
          <p>Already have an account?</p>
          <Link className="text-orange-400" to="/login">
            {" "}
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
