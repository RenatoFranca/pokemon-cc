import { Metadata } from "next";
import ThemeProvider from "../_components/ThemeProvider/ThemeProvider";
import Navbar from "../_components/Navbar";

export const metadata: Metadata = {
  title: "Pokémon CC",
  description: "Gotta Catch 'Em All",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
