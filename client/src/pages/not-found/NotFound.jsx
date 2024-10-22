import React from "react";
import notFound from "../../assets/images/not.jpg";

function NotFound() {

  return (
    <div className="flex justify-center items-center mt-20">
      <img
        src={notFound}
        alt="not-found"
        className="w-auto h-auto md:w-[60%] md:h-[500px] rounded-md"
      />
    </div>
  );
}

export default NotFound;
