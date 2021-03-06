import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CookieBanner from "../components/CookieBanner";
import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { useEffect } from "react";
import ConsentBanner from "../components/ConsentBanner";
import useCookieConsent from "../hooks/useCookieConsent";
import cn from "classnames";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function MyApp({ Component, pageProps }) {
  const debug = false;
  const {
    validCookie,
    cookieConsent,
    updateCookies,
    acceptAllCookies,
    rejectAllCookies,
  } = useCookieConsent();
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     gsap.registerPlugin(ScrollTrigger);
  //   }
  // }, []);
  const gtmParams = { id: "GTM-KF6WXHW" };
  return (
    <GTMProvider state={gtmParams}>
      <Component {...pageProps} />
      {!validCookie && (
        <ConsentBanner
          className={cn(
            "fixed flex flex-col p-5 text-white bottom-5 left-[-100%] bg-[#202020]",
            !validCookie ? "animate-slide-in" : "animate-slide-out"
          )} // need to to animate on closing without refresh
          cookieConsent={cookieConsent}
          onAccept={acceptAllCookies}
          onUpdate={updateCookies}
          onReject={rejectAllCookies}
        />
      )}
      <CookieBanner />
      {/* <CookieConsent
        containerClasses="text-xl text-center"
        location="bottom"
        buttonText="Sure man!!"
        cookieName="analytics_storage"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent> */}
    </GTMProvider>
  );
}

export default MyApp;
