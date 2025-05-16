import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "App Dashboard",
  description: "Apps at a glance! Supporting connellboyce.com apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-primary">{children}</body>
    </html>
  );
}
