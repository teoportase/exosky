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
        {all_info.map((planet, index) => (
          <Planet key={index} planet={planet} />
        ))}
      </div>
    </div>
  );
}
