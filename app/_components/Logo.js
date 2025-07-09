import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo({ text = true, width = "60", height = "60" }) {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        height={height}
        width={width}
        alt="The Wild Oasis logo"
        src={logo}
      />
      {text && (
        <span className="text-xl font-semibold text-primary-50 drop-shadow-md">
          The Wild Oasis
        </span>
      )}
    </Link>
  );
}

export default Logo;
