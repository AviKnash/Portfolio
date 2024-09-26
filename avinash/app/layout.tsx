import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";

const leiko = localFont({
  src: "./fonts/Leiko-Regular.otf",
  variable: "--font-leiko",
  weight: "100 900",
});

const montreal = localFont({
  src: "./fonts/PPNeueMontreal-Medium.otf",
  variable: "--font-montreal",
  weight: "100 900",
});

const espana = localFont({
  src: "./fonts/CremeEspana.woff",
  variable: "--font-espana",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Avinash Asok",
  description: "My Minimalist Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
          className={`${leiko.variable} ${espana.variable} ${montreal.variable} antialiased`}
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
