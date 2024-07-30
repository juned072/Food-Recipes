import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-[88vh] flex flex-col items-center justify-center bg-gray-100 text-gray-700 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg shadow-md text-center w-full max-w-lg">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-red-500">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block border border-red-500 hover:bg-red-600 hover:text-white py-2 px-4 rounded  transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
