import { Inter } from "next/font/google";
import "./globals.css";

// bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TipApp",
  description:
    "TipApp is a revolutionary platform designed to streamline tipping and enhance the experience for both service providers and customers. This innovative app . ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
