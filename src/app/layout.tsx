import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hiren Patel",
  description: "A Github portfolio website showcasing my skills",
  keywords:"iHirenDev, Vercel, Hiren Patel, Github Portfolio"
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-1">{children}</main>
            <Footer/>
          </div>
        </ThemeProvider>
        
        <Analytics/>
      </body>
    </html>
  );
}
