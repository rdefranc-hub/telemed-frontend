import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telemed Frontend",
  description: "Sistema de Telemedicina com Next.js e Tailwind",
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
