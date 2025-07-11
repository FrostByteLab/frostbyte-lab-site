import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrostByte Lab - Freelance Software Development & AI Solutions",
  description: "Professional freelance software development, AI integrations, and digital product launches. Developer-led solutions for modern businesses.",
  keywords: ["freelance developer", "software development", "AI integration", "web development", "app development", "digital products"],
  authors: [{ name: "FrostByte Lab" }],
  creator: "FrostByte Lab",
  openGraph: {
    title: "FrostByte Lab - Freelance Software Development & AI Solutions",
    description: "Professional freelance software development, AI integrations, and digital product launches.",
    url: "https://frostbytelab.com",
    siteName: "FrostByte Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FrostByte Lab - Freelance Software Development & AI Solutions",
    description: "Professional freelance software development, AI integrations, and digital product launches.",
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
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
