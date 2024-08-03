import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fuzztopía - Web oficial",
  description: "Web oficial del grupo musical Fuzztopía",
  keywords: [
    'conciertos',
    'banda',
    'música',
    'grupo musical',
    'madrid',
    'rock',
    'indie',
    'músicos',
    'artistas',
    'escenarios',
    'salas',
    'festivales',
    'directo',
    'música en directo',
    'live',
  ],
  creator: 'Jonathan Muñoz Arribas',
  authors: [{ name: 'jomuarribas', url: 'https://jomuarribas.com' }],
  publisher: 'Stage Roster',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
