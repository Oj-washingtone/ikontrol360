import { Inter } from "next/font/google";
import "./globals.css";

// bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IKontrol360",
  description:
    "Yamal Insurance is a distinguished insurance provider committed to delivering exceptional insurance solutions tailored to meet the diverse needs of our clients. ",
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
