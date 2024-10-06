import Planet from "@/app/components/Planet.js";
import Data from "../../data/exoplanet_archive.json";

export default function Home() {
  const numberOfPlanets = 8;
  let all_info = [];

  for (let i = 0; i < numberOfPlanets; i++) {
    all_info.push(Data[i]);
  }

  return (
    <div className="bg-black h-screen w-full overflow-hidden">
      <div className="flex justify-center lg:mt-80 mt-24">
        {all_info.map((planet, index) => (
          <Planet key={index} planet={planet} />
        ))}
      </div>
    </div>
  );
}
