// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AlertProvider } from "../contexts/alertContext";
import { InventoryProvider } from "../contexts/inventoryContext";
import NavBar from "../components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
      <Analytics />
      <body className={`${inter.className} h-full`}>
        <AlertProvider>
          <InventoryProvider>
            <NavBar />
            <main className="flex-grow flex flex-col items-center p-2 relative overflow-hidden">
              <div className="w-full flex-grow overflow-auto">{children}</div>
            </main>
          </InventoryProvider>
        </AlertProvider>
      </body>
    </html>
  );
}
