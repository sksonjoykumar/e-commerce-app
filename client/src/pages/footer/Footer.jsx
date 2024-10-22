import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#1D2A35] mt-10">
      <div className="px-6 md:px-20 py-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start text-center md:text-left  gap-10">
          <div className="left flex justify-between gap-6 w-auto md:w-2/4 text-white">
            <ul>
              <h1 className="font-semibold text-xl mb-1">Programs</h1>
              <li>
                <Link className="text-sm text-gray-300 hover:text-[#0EADC6] transition-all duration-300">
                  Corporate
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-300 hover:text-[#0EADC6] transition-all duration-300">
                  One to One
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-300 hover:text-[#0EADC6] transition-all duration-300">
                  Consulting
                </Link>
              </li>
            </ul>
            <ul>
              <h1 className="font-semibold text-xl mb-1">Service</h1>
              <li>
                <Link className="text-sm text-gray-300 hover:text-[#0EADC6] transition-all duration-300">
                  Training
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-300 hover:text-[#0EADC6] transition-all duration-300">
                  Coaching
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-300 hover:text-[#0EADC6] transition-all duration-300">
                  Consulting
                </Link>
              </li>
            </ul>
            <ul>
              <h1 className="font-semibold text-xl mb-1">Contact</h1>
              <li>
                <Link className="text-sm text-gray-300 hover:text-[#0EADC6] transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-300 hover:text-[#0EADC6] transition-all duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-300 hover:text-[#0EADC6] transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="right md:ml-20">
            <div className="">
              <h1 className="font-semibold text-xl mb-1 text-white">
                Newsletter
              </h1>
              <div className=" w-auto lg:w-[400px] flex gap-2 mt-3">
                <input
                  type="email"
                  name="email"
                  className="py-2 px-2 rounded-sm text-sm w-full border-none outline-none"
                  placeholder="Enter email address"
                />
                <button
                  type="button"
                  className="bg-[#EF4444] px-2 rounded-sm text-white text-sm"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="social mt-5">
              <ul className="flex gap-3 justify-center items-center md:justify-start md:items-start">
                <li className="border border-gray-300 p-1.5 rounded-sm hover:scale-105 transition-all duration-200">
                  <a
                    href="https://www.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp color="#25D366" size="25" className="" />
                  </a>
                </li>
                <li className="border border-gray-300 p-1.5 rounded-sm hover:scale-105 transition-all duration-200">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube color="#FF0000" size="25" />
                  </a>
                </li>
                <li className="border border-gray-300 p-1.5 rounded-sm hover:scale-105 transition-all duration-200">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook color="#1877F2" size="25" />
                  </a>
                </li>
                <li className="border border-gray-300 p-1.5 rounded-sm hover:scale-105 transition-all duration-200">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin color="#0077B5" size="25" />
                  </a>
                </li>
                <li className="border border-gray-300 p-1.5 rounded-sm hover:scale-105 transition-all duration-200">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter color="#1DA1F2" size="25" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-white mt-4">
              <p className="text-sm">Mobile: +917892474250</p>
              <p className="text-sm">E-mail: shopping@gmail.com</p>
            </div>
          </div>
        </div>
        <p className="text-center text-sm  text-gray-300 mt-4">
          ©2024 shopping.com all right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
