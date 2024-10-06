import React from "react";

function PlanetInfo(props) {
  return (
    <div className="bg-white p-6 rounded-md">
      <h1 className="text-accent text-2xl mb-4">{props.planet.pl_name}</h1>
      <div className="flex flex-col space-y-3">
        <div className="flex justify-between">
          <p className="text-black text-lg">Host star:</p>
          <p className="text-black text-lg">{props.planet.hostname}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-lg">1 Year length:</p>
          <p className="text-black text-lg">{ (props.planet.pl_orbper != -1) ? props.planet.pl_orbper : "Unknown"}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-lg whitespace-nowrap mr-5">
            Distance to Earth:
          </p>
          <p className="text-black text-lg">{ (props.planet.sy_dist != -1) ? props.planet.sy_dist : "Unknown" }</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-lg">Size:</p>
          <p className="text-black text-lg">{ (props.planet.pl_rade != -1) ? props.planet.pl_rade : "Unknown"}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-lg">Stars:</p>
          <p className="text-black text-lg">{props.planet.sy_snum}</p>
        </div>
      </div>
    </div>
  );
}

export default PlanetInfo;
