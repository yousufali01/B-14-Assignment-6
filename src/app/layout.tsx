import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar planCount={0} savedCount={0} />
        {children}
      </body>
    </html>
  );
}
