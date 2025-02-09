import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description: "An App to book The Wild Oasis Hotel Cabins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin?.className} bg-primary-950  min-h-screen flex flex-col gap-2`}
      >
        <Navigation />
        <main className="px-6 py-2 h-full flex-grow text-primary-100 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
