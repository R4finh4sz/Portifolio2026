import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R4finh4sz | Portfólio",
  description: "Portfólio de desenvolvedor Frontend & Mobile — React, React Native, TypeScript e interfaces imersivas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
