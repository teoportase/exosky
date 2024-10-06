import Planet from "@/app/components/Planet.js";
import Data from "../../data/exoplanet_archive.json";

export default function Home() {
  const numberOfPlanets = 20;
  let all_info = [];

  for (let i = 0; i < numberOfPlanets; i++) {
    all_info.push(Data[i]);
  }

  return (
    <div className="bg-black h-screen w-full overflow-auto">
      <div className="flex flex-wrap justify-center">
        <div className="flex-row justify-center p-4">
          <h1 className="text-white text-7xl font-oswald font-bold justify-center text-center">
            E X O S K Y
          </h1>
          <h1 className="text-white text-4xl text-center font-kanit font-thin">
            explore the sky of distant planets
          </h1>
        </div>
      </div>
      <div className="flex justify-center lg:mt-80 mt-24">
        {all_info.map((planet, index) => (
          <Planet key={index} planet={planet} />
        ))}
      </div>
    </div>
  );
}
