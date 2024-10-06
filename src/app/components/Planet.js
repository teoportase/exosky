"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";

import PlanetInfo from "./PlanetInfo";

import planet1 from "@/app/images/venus-transparent.png";
import planet2 from "@/app/images/planet.png";
import planet3 from "@/app/images/mars.png";
import planet4 from "@/app/images/mercury-transparent.png";
import planet5 from "@/app/images/purpleplanet.png";
import planet6 from "@/app/images/yellowplanet.png";

//maybe make this automatic for planets we have

function Planet(props) {
  const [isShown, setIsShown] = useState(false);
  const [planetImage, setPlanetImage] = useState();

  const planets = [planet1, planet2, planet3, planet4, planet5, planet6];

  useEffect(() => {
    // Set a random planet image when the component renders
    const randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    setPlanetImage(randomPlanet);
  }, []);

  const visibleStyle = {
    zIndex: 9999,
    position: "absolute",
  };

  const hiddenStyle = {
    display: "none",
  };

  return (
    <div>
      <div className="grid lg:grid-flow-col lg:auto-cols-max grid-cols-2">
        <div className="size-32">
          <Link
            href={{
              pathname: "/stars",
              query: { hostname: props.planet.hostname },
            }}
          >
            <Image
              src={planetImage}
              alt="planet"
              className="transition-all duration-300 hover:scale-125"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            />
          </Link>
        </div>
      </div>
      <div style={isShown ? visibleStyle : hiddenStyle}>
        <PlanetInfo planet={props.planet} />
      </div>
    </div>
  );
}

export default Planet;
