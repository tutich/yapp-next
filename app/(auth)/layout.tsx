import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";

import "../globals.css";

export const metadata = {
  title: "Yapp",
  description: "A Next.js 14 Threads app clown",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
