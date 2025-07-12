import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LogoCraft AI - Create Stunning AI Logos Instantly",
  description: "LogoCraft AI lets you generate unique, professional logos for your brand using AI. Modern, customizable, and fast.",
  keywords: [
    "AI logo generator",
    "logo design",
    "logocraft",
    "brand identity",
    "logo maker",
    "business logo",
    "professional logo",
    "custom logo",
    "logo creation",
    "LogoCraft AI"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://logocraft.ai",
    title: "LogoCraft AI - Create Stunning AI Logos Instantly",
    description: "LogoCraft AI lets you generate unique, professional logos for your brand using AI. Modern, customizable, and fast.",
    siteName: "LogoCraft AI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${manrope.variable} font-primary antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
        <Script
        async
        src="https://cloud.umami.is/script.js"
        data-website-id="314e7cd3-1a01-43c1-947f-c855c077906f"
      />
      </html>
    </ClerkProvider>
  );
}
