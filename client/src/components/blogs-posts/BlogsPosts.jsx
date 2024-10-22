import React from "react";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import { Link } from "react-router-dom";

function BlogsPosts() {
  return (
    <div className="mt-10">
      <div>
        <h1 className=" text-xl md:text-3xl font-bold text-gray-800">
          Our popular Blogs
        </h1>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-7">
        <Link to={"blogs"}>
          <img
            src={blog1}
            alt="blog-img"
            className="rounded-md cursor-pointer hover:scale-105 transition-all duration-300 h-auto lg:h-64 w-auto"
          />
          <h1 className="mt-3 text-xl md:text-xl lg:text-1xl font-bold text-gray-700">
            Sony Camera
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            non a odit vitae, molestias aliquam...
          </p>
        </Link>
        <Link to={"blogs"}>
          <img
            src={blog2}
            alt="blog-img"
            className="rounded-md cursor-pointer hover:scale-105 transition-all duration-300 h-auto lg:h-64 w-auto"
          />
          <h1 className="mt-3 text-xl md:text-xl lg:text-1xl font-bold text-gray-700">
            Laptop Buying
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            non a odit vitae, molestias aliquam...
          </p>
        </Link>
        <Link to={"blogs"}>
          <img
            src={blog3}
            alt="blog-img"
            className="rounded-md cursor-pointer hover:scale-105 transition-all duration-300 h-auto lg:h-64 w-auto"
          />
          <h1 className="mt-3 text-xl md:text-xl lg:text-1xl font-bold text-gray-700">
            Books
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            non a odit vitae, molestias aliquam...
          </p>
        </Link>
        <Link to={"blogs"}>
          <img
            src={blog4}
            alt="blog-img"
            className="rounded-md cursor-pointer hover:scale-105 transition-all duration-300 h-40 lg:h-64 w-full object-cover"
          />
          <h1 className="mt-3 text-xl md:text-xl lg:text-1xl font-bold text-gray-700">
            Books
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            non a odit vitae, molestias aliquam...
          </p>
        </Link>
      </div>
    </div>
  );
}

export default BlogsPosts;
