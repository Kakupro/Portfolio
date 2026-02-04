import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arpit Kumar Singh | Portfolio",
  description: "Photographer & Social Media Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
