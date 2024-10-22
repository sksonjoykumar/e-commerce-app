import React from "react";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function Toast({ bottomRight }) {
  return (
    <ToastContainer
      position={bottomRight}
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
}

export default Toast;
