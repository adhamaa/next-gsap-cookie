import React, { useState } from "react";
import Modal2 from "../components/Modal2";

export default function CookieBanner({ user }) {
  const [isOpen, setIsOpen] = useState((user = true));

  return (
    <>
      {isOpen && (
        <div className="fixed p-4 bg-gray-100 border-t-4 shadow-lg z-90 bottom-4 right-1 lg:right-4">
          <h2 className="block mb-4 text-lg font-bold leading-tight text-gray-600 lg:text-xl">
            Cookie Policy
          </h2>
          <div className="lg:flex lg:space-x-5">
            <p className="mb-5 font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi
              corrupti deserunt.
            </p>
            <Modal2 />
            <button className="w-full px-6 py-3 mb-1 mr-1 text-xs font-bold tracking-widest text-gray-700 uppercase transition-all duration-150 ease-linear bg-gray-300 rounded lg:w-48 hover:bg-gray-200 hover:underline">
              I agree
            </button>
          </div>
        </div>
      )}
    </>
  );
}
