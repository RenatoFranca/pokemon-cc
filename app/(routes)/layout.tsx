import { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
