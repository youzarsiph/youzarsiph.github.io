import "./globals.css";
import { Inter } from "next/font/google";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yousef Abu Shanab | Portfolio ",
  description: "Yousef Abu Shanab's portfolio",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />

        {children}
      </body>
    </html>
  );
}
