import "./globals.css";
import { Oswald } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import { FitLogProvider } from "@/context/FitLogContext";
import { Toaster } from "sonner";
import Footer from "@/components/shared/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={oswald.variable}>
        <FitLogProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" theme="dark" />
        </FitLogProvider>
      </body>
    </html>
  );
}
