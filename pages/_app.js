import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CookieBanner from "../components/CookieBanner";
import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

function MyApp({ Component, pageProps }) {
  const gtmParams = { id: "GTM-KF6WXHW" };
  return (
    <GTMProvider state={gtmParams}>
      <Component {...pageProps} />
      <CookieBanner />
    </GTMProvider>
  );
}

export default MyApp;
