import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "moviesFlix : a movies review platform",
  description: "check review and details about movies/series etc.",
};

// main page layout of app
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* this is body */}
      <body className={inter.className}>
        {/* navbar inside body , children(app page) and footer */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
