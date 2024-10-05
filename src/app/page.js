"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js";
    script.onload = () => {
      const A = window.A;
      A.init.then(() => {
        const aladin = A.aladin("#aladin-lite-div", {
          survey: "P/DSS2/color",
          fov: 1,
          target: "12 20 42.91 +17 47 35.71",
        });
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="aladin-lite-div"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    ></div>
  );
}
