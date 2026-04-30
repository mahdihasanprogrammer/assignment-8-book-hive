import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Hive",
  description: "Your digital library",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
      className="min-h-full flex flex-col 
       bg-linear-to-br from-[#0a0f0d] via-[#0f1f18] to-[#111a16]
       container mx-auto px-5 md:px-8 lg:px-12">

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
