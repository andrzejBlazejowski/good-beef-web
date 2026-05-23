import { LandingStyles } from "@/components/landing/LandingStyles";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Good Beef",
  description: "Wołowina premium z okolic Kołobrzegu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <LandingStyles />
      </head>
      <body>{children}</body>
    </html>
  );
}
