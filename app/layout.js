import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinStack",
  description: "Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="min-h-screen">
        <Header />
        {children}
        </main>

        <footer className="bg-blue-200 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with love From AB</p>
          </div>

        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
