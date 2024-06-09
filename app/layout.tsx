// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AlertProvider } from "../contexts/alertContext";
import { InventoryProvider } from "../contexts/inventoryContext";
import NavBar from "../components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AFKTales",
  description: "Simulador do Ragnatales.com.br",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={inter.className}>
        <AlertProvider>
          <InventoryProvider>
            <NavBar />
            <main className="flex min-h-screen flex-col items-center justify-between">
              {children}
            </main>
          </InventoryProvider>
        </AlertProvider>
      </body>
    </html>
  );
}
