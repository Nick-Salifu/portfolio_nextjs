import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});

export const metadata = {
  title: "Nick's Portfolio",
  description: "My website portfolio with nextjs and Tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
