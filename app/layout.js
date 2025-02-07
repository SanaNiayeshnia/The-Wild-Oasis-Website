import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis",
  description: "An App to book The Wild Oasis Hotel Cabins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-accent-500">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
