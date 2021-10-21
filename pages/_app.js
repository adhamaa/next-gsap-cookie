import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CookieBanner from "../components/CookieBanner";
import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";
import CookieConsent, { Cookies } from "react-cookie-consent";

import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     gsap.registerPlugin(ScrollTrigger);
  //   }
  // }, []);
  const gtmParams = { id: "GTM-KF6WXHW" };
  return (
    <GTMProvider state={gtmParams}>
      <Component {...pageProps} />
      {/* <CookieBanner /> */}
      <CookieConsent
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
      </CookieConsent>
    </GTMProvider>
  );
}

export default MyApp;
