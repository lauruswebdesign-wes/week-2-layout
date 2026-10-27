import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono-",
  subsets: ["latin"],
});

export const metadata = {
  title: "Laurus Designs",
  description: "UI/UX Next.js Layout Project",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-between">
        <Header />
       
        {/* Horizontal container for Sidebar and Content */}
        <div className="flex flex-1 flex-row">
          <Sidebar />
          
          <main className="flex-1 flex items-center justify-center p-6">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
