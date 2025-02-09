import Image from "next/image";
import bg from "@/public/bg.png";
import Link from "next/link";

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
          <Link
            href="/cabins"
            className="bg-accent-500 shadow-lg py-4 px-6 text-primary-950 rounded hover:bg-accent-600 hover:rounded-none hover:px-8 transition-all duration-300"
          >
            Explore luxury cabins
          </Link>
        </div>
      </div>
    </div>
  );
}
