import type { Metadata } from 'next'
import { Noto_Sans, Noto_Kufi_Arabic } from 'next/font/google'
import './globals.css'

const noto = Noto_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
})

const kufi = Noto_Kufi_Arabic({
  variable: '--font-kufi',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Yousuf Abu Shanab | Resume',
  description: 'Yousuf Abu Shanab Online Resume',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body className={`${noto.variable} ${kufi.variable} antialiased`}>
      {children}
    </body>
  </html>
)

export default RootLayout
