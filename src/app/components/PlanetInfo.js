import React from "react";

function isUnknown(property) {
  return property != -1 ? property : "Unknown";
}

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
          <p className="text-black text-lg">{ isUnknown(props.planet.pl_orbper) }</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-lg whitespace-nowrap mr-5">
            Distance to Earth:
          </p>
          <p className="text-black text-lg">{ isUnknown(props.planet.sy_dist) }</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-lg">Size:</p>
          <p className="text-black text-lg">{ isUnknown(props.planet.pl_rade) }</p>
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
