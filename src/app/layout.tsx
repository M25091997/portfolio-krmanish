import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Portfolio | Manish Kumar",
  description:
    "I Am  Manish Kumar as a Full Stack Devloper and this is my Portfolio and Job Application Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 dark:bg-slate-950 dark:text-gray-200">
         <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
