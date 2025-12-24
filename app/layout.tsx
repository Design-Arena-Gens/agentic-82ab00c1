import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'India Price Compare - सबसे कम कीमत पर बेहतरीन गुणवत्ता',
  description: 'भारत में सबसे सस्ती और विश्वसनीय ऑनलाइन शॉपिंग साइट्स की तुलना करें',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
