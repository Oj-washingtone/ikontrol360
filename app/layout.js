import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ikontrol 360",
  description:
    "At iKontrol360, we are transforming how individuals engage with their surroundings. Imagine the ability to connect, control, and monitor every facet of your daily life through a single, intuitive platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
