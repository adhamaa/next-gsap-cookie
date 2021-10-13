import React from "react";
import Link from "next/link";
import Modal from "./Modal";
import useCookie from "../hooks/useCookie";

export default function CookieBanner({ user }) {
  const [isOpen, setIsOpen] = React.useState((user = true));
  const [cookie_consent, updateCookie, removeCookie] = useCookie(
    "cookie_consent",
    "false"
  );
  const [ad_storage, updateAd, removeAd] = useCookie("ad_storage", "false");
  console.log('ad_storage:', ad_storage)
  console.log("cookie_consent:", cookie_consent);

  const writeCookie = () => {
    updateCookie("true");
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed p-4 bg-gray-100 shadow-lg z-90 bottom-4 right-1 lg:right-4">
          <h2 className="block mb-4 text-lg font-bold leading-tight text-gray-600 lg:text-xl">
            Cookie Policy
          </h2>
          <div className="lg:flex lg:space-x-5">
            <p className="mb-5 font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi
              corrupti deserunt.&nbsp;
              <Link href="/cookiePolicy">
                <a className="underline">Cookie Policy</a>
              </Link>
            </p>
            <Modal />
            <button
              onClick={writeCookie}
              className="w-full px-6 py-3 mb-1 mr-1 text-xs font-bold tracking-widest text-gray-700 uppercase transition-all duration-150 ease-linear bg-gray-300 rounded lg:w-48 hover:bg-gray-200 hover:underline"
            >
              I agree
            </button>
          </div>
        </div>
      )}
    </>
  );
}
