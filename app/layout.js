import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
  description: "An App to book The Wild Oasis Hotel Cabins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
