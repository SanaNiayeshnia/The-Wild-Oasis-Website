import TopNavigation from "./_components/TopNavigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { auth } from "./_lib/auth";
import { Toaster } from "sonner";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description: "An App to book The Wild Oasis Hotel Cabins",
};

export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${josefin?.className} bg-primary-950 relative`}>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 8000,
            removeDelay: 1000,
            style: {
              background: "var(--color-accent-200)",
              border: "var(--color-accent-900)",
            },
          }}
          className="[&_svg]:text-accent-700 [&_svg]:text-3xl [&_svg]:shrink-0"
        />
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-4 md:px-6 ">
          <TopNavigation user={session?.user} />
          <main className=" h-full flex-grow text-primary-100 flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
