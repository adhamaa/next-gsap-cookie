import React from "react";

const CookieBanner = () => {
  return (
    <div className="fixed p-4 bg-red-400 border-t-4 shadow-lg bottom-4 right-1 lg:right-4">
      <h2 className="block mb-4 text-lg font-bold leading-tight text-gray-600 lg:text-xl">
        Cookie Policy
      </h2>
      <div className="lg:flex lg:space-x-5">
        <p className="mb-5 font-medium text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          maximus condimentum libero. Nulla tempus metus sit amet sagittis
          tempus. Donec maximus odio nibh, ut congue ante dictum suscipit.
        </p>
        <button className="w-full px-3 py-1 mb-5 mr-2 text-xs font-bold tracking-widest text-gray-700 uppercase bg-gray-300 rounded lg:w-48 hover:bg-gray-200 hover:underline">
          I agree
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
