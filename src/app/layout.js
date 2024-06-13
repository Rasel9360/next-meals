import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans({ weight: ['400', '700', '900'], subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Next Hero',
    template: '%s | Next Hero'
  },
  description: "Chose you favorite meals if you want",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
