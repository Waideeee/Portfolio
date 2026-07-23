import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lia Pitero — Portfolio",
  description: "VS Code inspired portfolio of Lia Samantha G. Pitero",
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
