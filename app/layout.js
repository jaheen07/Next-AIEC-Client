import { Inter_Tight } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Footer from "@/app/components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GoogleTagManager } from '@next/third-parties/google';





export const inter = Inter_Tight({ subsets: ["latin"] });

export const myFont = localFont({ src: [
  {
    path: './fonts/Li Ador Noirrit Regular.ttf',
    weight: '400',
    style: 'normal',
  },
  {
    path: './fonts/Li Ador Noirrit Bold.ttf',
    weight: '700',
    style: 'normal',
  },
  
], })




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KLCLKWNK" />
      <body className={inter.className}>
      <link rel="icon" href="/fav.ico" sizes="any" />
        <Navbar/>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          limit={1}
          theme="light"
        />
        
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
