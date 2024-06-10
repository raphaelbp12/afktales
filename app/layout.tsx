// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AlertProvider } from "../contexts/alertContext";
import { InventoryProvider } from "../contexts/inventoryContext";
import NavBar from "../components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import InfoPanel from "@/components/InfoPanel";

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
      <body className={inter.className}>
        <AlertProvider>
          <InventoryProvider>
            <NavBar />
            <main className="flex min-h-screen flex-col items-center justify-between p-2">
              <InfoPanel
                title="Escolha as próximas funcionalidades!"
                description="Temos uma enquete no Discord para decidir quais funcionalidades implementar a seguir. Participe!"
                storageKey="infoPanelDisclaimer"
              />
              {children}
            </main>
          </InventoryProvider>
        </AlertProvider>
      </body>
    </html>
  );
}
