"use client";

import React, { useState } from "react";
import Image from "next/image";

import PlanetInfo from "./PlanetInfo";

import planet1 from "@/app/images/venus-transparent.png";
import planet2 from "@/app/images/planet.png";
import planet3 from "@/app/images/mars.png";
import planet4 from "@/app/images/mercury-transparent.png";

//maybe make this automatic for planets we have

function Planet(props) {
  const [isShown, setIsShown] = useState(false);
  console.log(isShown);

  let planetData = [];

  for (let i; (i = 0); i < props.number - 1) {
    planetData.push(Data[i]);
  }

  return (
    <div>
      <div className="grid lg:grid-flow-col lg:auto-cols-max grid-cols-2">
        <div className="size-32">
          <a href="/stars" className="">
            <Image
              src={planet1}
              alt="planet"
              className="transition-all duration-300 hover:scale-125"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            />
          </a>
        </div>
      </div>
      <div className={isShown ? "visible" : "hidden"}>
        <PlanetInfo planet={props.planet} />
      </div>
    </div>
  );
}

export default Planet;
