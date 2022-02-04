import { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        getDirection: true,
        lerp: 0.2,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
      onClick={() => console.log(scroll)}
    >
      <main data-scroll-container ref={containerRef}>
        <Component {...pageProps} />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default MyApp;
