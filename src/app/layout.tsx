import "./globals.css";
import { Oswald, Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
