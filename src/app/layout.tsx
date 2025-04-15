import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "JustDial Clone - Find Businesses Near You",
  description: "Modern minimal metro city vibe clone of JustDial local search engine",
  keywords: ["justdial", "business directory", "local search", "services", "restaurants", "hotels"],
  authors: [{ name: "Your Name" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </ClientBody>
    </html>
  );
}
