import Image from "next/image";
import bg from "@/public/bg.png";
import Button from "./_components/Bbutton";

export default function Home() {
  return (
    <div className="grid place-items-center">
      <Image
        src={bg}
        alt="The Wild Oasis Background"
        className="object-cover z-0"
        fill
        placeholder="blur"
      />
      <div className="absolute inset-0 z-10 flex flex-col gap-4 items-center backdrop-brightness-75">
        <div className="flex items-center justify-center flex-col gap-6 h-full w-full">
          <h1 className="text-primary-50 text-5xl md:text-7xl drop-shadow-xl text-center">
            Welcome to paradise.
          </h1>
          <Button href="/cabins">Explore luxury cabins</Button>
        </div>
      </div>
    </div>
  );
}
