import "@/styles/reset.css";
import "@/styles/global.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const interFontFamily = Inter({subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body suppressHydrationWarning={true}>
      <Header/>
      <main>{children}</main>
      <Footer/>
      </body>
    </html>
  )
}
