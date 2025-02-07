import localFont from "next/font/local";
import "./globals.css";
import { Kanit } from "next/font/google";
import { Oswald } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kanit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "EXOSKY!",
  description: "explore the sky of distant planets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
