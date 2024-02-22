import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sparks - Talents showcasing platform",
  description: "Made by CSE'20-24 of SSET",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "grid grid-rows-[auto_1fr_auto] h-screen"
        )}
      >
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
