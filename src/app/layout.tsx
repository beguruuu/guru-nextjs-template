import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "GURU",
  description: "GURU is a platform for building software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
          <TooltipProvider>
            <Toaster />
            <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
