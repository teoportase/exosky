"use client";

import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";

import PlanetInfo from "./PlanetInfo";

import planet1 from "@/app/images/venus-transparent.png";
import planet2 from "@/app/images/planet.png";
import planet3 from "@/app/images/mars.png";
import planet4 from "@/app/images/mercury-transparent.png";

//maybe make this automatic for planets we have

function Planet(props) {
  const [isShown, setIsShown] = useState(false);

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
              src={planet1}
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
