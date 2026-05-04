import type { Metadata } from 'next'
import { Noto_Sans_HK } from 'next/font/google'
import '@/app/globals.css'

const notoSansHK = Noto_Sans_HK({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-hk',
})

export const metadata: Metadata = {
  title: 'Mini 4WD STREAM 學習應用',
  description: 'A bilingual learning app for parents and children building mini 4WD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-HK">
      <body className={`${notoSansHK.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}