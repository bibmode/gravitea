import { useContext, useEffect, useRef } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
