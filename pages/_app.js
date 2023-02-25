import { useState } from "react";
import Nav from "../components/Nav";
import TransitionEffect1 from "../components/TransitionEffect1";
import TransitionEffect2 from "../components/TransitionEffect2";
import TransitionEffect3 from "../components/TransitionEffect3";
import "../styles/styles.css";
import "../styles/transition.css";

function MyApp({ Component, pageProps }) {
  const [transitionEffect, setTransitionEffect] = useState(1);
  return (
    <div className="app-container">
      <Nav onClick={setTransitionEffect} current={transitionEffect} />
      {transitionEffect === 1 && (
        <TransitionEffect1>
          <Component {...pageProps} />
        </TransitionEffect1>
      )}
      {transitionEffect === 2 && (
        <TransitionEffect2>
          <Component {...pageProps} />
        </TransitionEffect2>
      )}
      {transitionEffect === 3 && (
        <TransitionEffect3>
          <Component {...pageProps} />
        </TransitionEffect3>
      )}
    </div>
  );
}

export default MyApp;
