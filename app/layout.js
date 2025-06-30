import TopNavigation from "./_components/TopNavigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
      <body className={`${josefin?.className} bg-primary-950 relative`}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "var(--color-accent-200)",
            },
          }}
        />
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-6 ">
          <TopNavigation />
          <main className=" h-full flex-grow text-primary-100 flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
