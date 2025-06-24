import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pure Crust",
  description: "Discover joy Of Baking With Pure Crust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
