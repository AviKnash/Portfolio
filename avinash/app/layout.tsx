import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";
import CustomDock from "@/components/CustomDock";
import { ReactLenis } from "@/lib/lenis";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
      <ReactLenis root>
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
      </ReactLenis>
    </html>
  );
}
