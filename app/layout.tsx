import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nazmul Haque",
  description: "I'm a Software engineer with more than 4 years of professional working experience in this industry, specialized in NodeJS, ExpressJS, ReactJS, React-Native, VueJS and MongoDB. My ambition is improving or writing scalable, secure & maintainable software. I'm constantly looking for interesting and challenging projects to upgrade my skills and share my experience. I can be of great help to you in your business development and improvement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
