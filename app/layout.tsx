import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { AlertProvider } from "@/contexts/alertContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafa da Rifa Simulator",
  description: "Simulador da Rafa da Rifa do Ragnatales.com.br",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AlertProvider>
          <NavBar />
          <main className="flex min-h-screen flex-col items-center justify-between">
            {children}
          </main>
        </AlertProvider>
      </body>
    </html>
  );
}
