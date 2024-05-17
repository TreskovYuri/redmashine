import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "КУБОК 'ЮНИСОН' СРЕДИ ДЕТСКИХ ХОККЕЙНЫХ КОМАНД 2014 Г.",
  description: "18 и 19 мая в «Хоккейном городе Красногорск» по адресу: Красногорск, ул. Ахматовой, 26, микрорайон Опалиха, пройдет традиционный международный турнир, ставший лауреатом премии ФХР «Герои хоккея»",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
