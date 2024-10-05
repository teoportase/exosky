import React from "react";
import Image from "next/image";

import planet1 from "@/app/images/venus-transparent.png";
import planet2 from "@/app/images/planet.png";
import planet3 from "@/app/images/mars.png";
import planet4 from "@/app/images/mercury-transparent.png";

//maybe make this automatic for planets we have

function Planet({ count }) {
  count = 8; //how many planets to load
  const planetImages = [planet1, planet2, planet3, planet4]; //array with all the planet images

  //function to choose a random planets

  return (
    <div className="grid lg:grid-flow-col lg:auto-cols-max grid-cols-2 gap-16">
      {Array.from({ length: count }).map((_, index) => {
        // Pick a random planet for each div rendering
        const randomPlanet =
          planetImages[Math.floor(Math.random() * planetImages.length)];

        return (
          <div className="size-32" key={index}>
            <a href="/" className="">
              <Image
                src={randomPlanet}
                alt={`planetIcon-${index}`}
                className="transition-all duration-300 hover:scale-125"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Planet;
