import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { clashDisplayBold } from "@/../public/fonts/Clash_Display";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Troy Sarinas | SoftWare Engineer",
  description: "Portfolio of Troy Sarinas.",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph: {
    title: "Troy Sarinas | SoftWare Engineer",
    description: "Portfolio of Troy Sarinas.",
    url: "https:troysarinas.vercel.app",
    siteName: "Troy Sarinas Portfolio",
    images: [
      {
        url: "https://troysarinas.vercel.app/CoverPhoto.webp", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Troy Sarinas Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Troy Sarinas | SoftWare Engineer",
    description: "Portfolio of Troy Sarinas.",
    images: ["https://troysarinas.vercel.app/CoverPhoto.webp"], // Same as above
    creator: "@yourtwitterhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          clashDisplayBold.variable,
          "antialiased bg-linear-to-r from-background-secondary via-background to-background-secondary",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
