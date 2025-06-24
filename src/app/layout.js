import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

<Navbar/>


        {children}
      </body>
    </html>
  );
}
