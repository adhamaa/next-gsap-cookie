import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CookieBanner from "../components/cookieBanner";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookieBanner />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
