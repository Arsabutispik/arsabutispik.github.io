import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "İspik | Mechatronics Engineering Student & Software Developer",
  description:
    "I'm İspik, a mechatronics engineering student with a deep passion for building backend software and system architectures. Explore my portfolio, open-source projects, and technical blog.",
  keywords: [
    "İspik",
    "Portfolio",
    "Software Developer",
    "Backend Developer",
    "Mechatronics Engineering",
    "Open Source",
    "Discordx",
    "Mally",
    "TypeScript",
    "TypeScript Developer",
  ],
  authors: [{ name: "İspik", url: "https://ispik.dev" }],
  creator: "İspik",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://ispik.dev",
    siteName: "İspik's Portfolio",
    title: "İspik | Software Developer & Mechatronics Student",
    description:
      "I'm İspik, a mechatronics engineering student with a deep passion for building backend software and system architectures. Explore my portfolio, open-source projects, and technical blog.",
    images: [
      {
        url: "https://ispik.dev/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "İspik's Avatar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "İspik | Software Developer",
    description:
      "Mechatronics engineering student & backend software developer. Explore my projects and blog.",
    images: ["https://ispik.dev/android-chrome-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InitColorSchemeScript attribute="class" />
        <ThemeRegistry>
          <Navbar />
          <main className="min-h-screen p-4 md:p-8 pt-24">
            {children}
          </main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
