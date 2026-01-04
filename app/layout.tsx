import type { Metadata, Viewport } from "next";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Al-Mehmood Hajj & Umrah - Your Trusted Umrah Partner",
  description: "Guiding You to the House of Allah with Comfort & Trust. Licensed tour operator offering complete Umrah packages including visa, accommodation, transport, and guidance.",
  keywords: ["Umrah", "Hajj", "Al-Mehmood", "Umrah packages", "Makkah", "Madinah", "Saudi Arabia", "Islamic travel", "tour operator"],
  authors: [{ name: "Al-Mehmood Hajj & Umrah" }],
  openGraph: {
    title: "Al-Mehmood Hajj & Umrah - Your Trusted Umrah Partner",
    description: "Guiding You to the House of Allah with Comfort & Trust. Complete Umrah packages with visa assistance, quality hotels, and experienced guides.",
    type: "website",
    locale: "en_US",
    siteName: "Al-Mehmood Hajj & Umrah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Mehmood Hajj & Umrah - Your Trusted Umrah Partner",
    description: "Complete Umrah packages with comfort and trust. Licensed tour operator.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
