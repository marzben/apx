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
    console.log("Verification code requested");
  };

  const handleSignup = () => {
    console.log("Signup button clicked");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-opacity-50 bg-cover bg-center background_img mt-20">
      <div className="bg-white p-8 rounded-lg w-full max-w-md text-center">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-header dark:text-neutral">
          Create your Account
        </h1>
        <div className="w-full">
          <h6 className="text-xs mb-8 bg-white font-bold text-[#17202A] text-[12px] ">
            Create a secure account with us to start trading
          </h6>
        </div>

        <div className="mb-4">
          <button
            className={`mr-4 px-4 py-2 w-1/4 h-4/5 rounded-lg ${
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

        {/* <div className="mb-4">
          <label className="block text-sm mb-2 ">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 mr-1 rounded-lg"
              checked={agreedTerms}
              onChange={handleAgreedTermsChange}
            />
            I agree to Apex Network Terms of use and Privacy policy
          </label>
        </div> */}

        <div class="flex items-center mb-5">
          <input
            id="remember-me"
            class="h-4 w-4 text-primary-2 focus:ring-primary-2 border-gray-300 rounded dark:bg-transparent dark:checked:bg-primary-1 dark:border-gray-1 dark:focus:ring-0"
            name="remember-me"
            type="checkbox"
          />
          <label
            class="ml-2 block text-sm text-gray-900 dark:text-dark-white"
            for="remember-me"
          >
            {" "}
            I agree to Apex Network{" "}
            <Link
              class="text-amber-600 hover:underline "
              to="https://apexnetwork.co/terms-and-conditions"
            >
              Terms of use
            </Link>{" "}
            and{" "}
            <Link
              class="text-amber-600 hover:underline"
              to="https://apexnetwork.co/privacy-policy"
            >
              Privacy policy
            </Link>
          </label>
        </div>

        <div className="mb-5">
          <label
            for="one-time-password"
            class="dark:text-white text-start font-medium text-sm mb-2 lg:mb-3 block"
          >
            {" "}
            Verification code will be sent via{" "}
            <span class="capitalize text-amber-600">email</span>
          </label>
          <div class="h-full">
            <div class="border-gray-300 dark:border-dark rounded-xl flex relative border focus-within:outline-none focus-within:ring-primary-1 focus-within:border-primary-2 transition duration-150 ease-in-out overflow-hidden h-[48px]">
              <div class="flex justify-center items-center"></div>
              <div class="flex flex-1 flex-nowrap">
                <input
                  id="one-time-password"
                  aria-label="one-time-password"
                  autocomplete="one-time-code"
                  class="py-4 appearance-none block border-none ring-0 w-full outline-none text-body disabled:text-secondary disabled:dark:text-gray-0 focus:outline-none placeholder-content-4 text-sm disabled:bg-gray-3 disabled:dark:bg-content-6 disabled:cursor-not-allowed dark:text-dark-white dark:bg-transparent"
                  disabled=""
                  inputmode="numeric"
                  min="1"
                  minlength="1"
                  name="one-time-password"
                  placeholder="Enter code"
                  required=""
                  type="text"
                  step="any"
                />
              </div>
              <button
                class="ease-in duration-200 flex text-[0.9375] justify-center items-center px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold font-heading text-white bg-black bg-opacity-80 transition enabled:hover:bg-opacity-100 focus:outline-none disabled:cursor-not-allowed h-[48px] rounded-l-none rounded-r-md flex max-w-[8.5rem] w-full px-4 disabled:hover:opacity-95 font-medium text-sm disabled:cursor-not-allowed dark:disabled:opacity-100 dark:disabled:bg-content-0 dark:disabled:text-content-6 dark:enabled:bg-primary-1 dark:enabled:border-l-primary-1 border-l-neutral-3 enabled:border-l-black dark:disabled:border-l-content-0 disabled:bg-gray-3 disabled:text-content-0"
                disabled=""
                name="request_code_button"
                type="button"
              >
                Request Code{" "}
              </button>
            </div>
            <div class="relative w-full">
              <div>
                <div class="flex items-center gap-1">
                  <div class="text-[12px] text-gray-500 w-full top-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mb-4">
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
        </div> */}

        <button
          className="bg-orange-500 text-white py-2 px-4 rounded-xl w-full mb-4"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <div className="text-center text-sm flex justify-center">
          <p>Already have an account?</p>
          <Link className="text-orange-400 ml-3" to="/login">
            {" "}
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
