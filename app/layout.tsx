import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Futurama App",
  description: "Futurama App created with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="bg-stone-800 h-[74px] flex justify-center items-center">
          <h1 className="text-zinc-300 text-4xl ">
            <Link href="./">Futurama Characters</Link>
          </h1>
        </header>
        <main className="grid justify-center items-center h-[calc(100vh-74px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
