import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner";



export const metadata: Metadata = {
  title: "Daba-Cities",
  description: "Daba-Cities is a platform for renovating cities",
  icons:{
    icon: '/images/DaCircle.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
