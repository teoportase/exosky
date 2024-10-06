import Planet from "@/app/components/Planet.js";

export default function Home() {
  const numberOfPlanets = 8;

  return (
    <div className="bg-black h-screen w-full overflow-hidden">
      <div className="flex justify-center lg:mt-80 mt-24">
        {Array.from({ length: numberOfPlanets }).map((_, index) => (
          <Planet key={index} />
        ))}
      </div>
    </div>
  );
}
