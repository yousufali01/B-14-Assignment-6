import "./globals.css";
import { Oswald, Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import { FitLogProvider } from "@/context/FitLogContext";
import { Toaster } from "sonner";

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
        <FitLogProvider>
          <Navbar />
          {children}
          <Toaster position="top-right" theme="dark" />
        </FitLogProvider>
      </body>
    </html>
  );
}
