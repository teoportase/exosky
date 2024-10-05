import Planet from "@/app/components/Planet.js";

export default function Home() {
  return (
    <div className="bg-black h-screen w-full overflow-hidden">
      <div className="flex justify-center lg:mt-80 mt-24">
        <Planet />
      </div>
    </div>
  );
}
