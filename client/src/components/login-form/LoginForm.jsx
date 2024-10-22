import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline, IoKeyOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

function LoginForm() {
  const [type, setType] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // togglePassword function
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  // handleOnChange function
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // submitForm function
  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
    console.log(formData);
  };
  return (
    <div>
      <div className="">
        <div className="h-[60vh] w-full mx-auto flex justify-center items-center flex-col">
          <h1 className="text-center font-gelasio text-4xl font-semibold text-gray-700 mb-10">
            {type === "sing-in" ? "Welcome Back" : "Join us today"}
          </h1>
          <form onSubmit={handleSubmit} className="max-w-[400px]">
            <div className="relative">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleOnChange}
                required
                className="border py-2 pl-9 w-[350px] focus:outline-none rounded-md shadow-sm"
              />
              <FaRegUser size={20} className="absolute left-2 top-2.5" />
            </div>
            <div className="relative mt-4">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleOnChange}
                required
                className="border py-2 pl-9 w-[350px] focus:outline-none rounded-md shadow-sm"
              />
              <MdOutlineMail size={25} className="absolute left-2 top-2" />
            </div>
            <div className="relative mt-4">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleOnChange}
                required
                className="border py-2 pl-9 w-[350px] focus:outline-none rounded-md shadow-sm"
              />
              <IoKeyOutline size={22} className="absolute left-2 top-2" />
              {passwordVisible ? (
                <IoEyeOutline
                  size={25}
                  className="absolute right-2 top-2 cursor-pointer"
                  onClick={togglePassword}
                />
              ) : (
                <IoEyeOffOutline
                  size={25}
                  className="absolute right-2 top-2 cursor-pointer"
                  onClick={togglePassword}
                />
              )}
            </div>
            <div className="mt-5 flex justify-center">
              <button
                type="submit"
                className="bg-[#1D2A35] text-white px-6 py-1.5 rounded-3xl text-md"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
