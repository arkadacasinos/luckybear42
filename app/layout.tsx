import type { Metadata, Viewport } from 'next'
import '@fontsource-variable/inter'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucky Bear Casino Официальный Сайт — Вход и Зеркало Казино Лаки Бир',
  description:
    'Lucky Bear Casino официальный сайт и рабочее зеркало. Быстрый вход в казино Лаки Бир, приветственный бонус до 360% на депозит, топовые слоты и моментальные выплаты онлайн.',
  keywords: [
    'lucky bear casino',
    'luckybear casino',
    'luckybear casino зеркало',
    'luckybear casino официальный',
    'luckybear casino официальный сайт',
    'lucky bear казино',
    'лаки бир казино',
    'лакибир казино',
    'лаки бир казино зеркало',
    'лаки бир казино онлайн',
    'лаки бир казино официальный',
    'лаки бир казино официальный сайт',
    'лакибир казино официальный сайт',
    'лаки бир казино сайт',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://luckybear42casino.vercel.app/',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Lucky Bear Casino',
    title: 'Lucky Bear Casino Официальный Сайт — Вход и Зеркало Казино Лаки Бир',
    description:
      'Lucky Bear Casino официальный сайт и актуальное зеркало. Играйте в Лаки Бир Казино онлайн: щедрые бонусы до 360%, фриспины, проверенные слоты и быстрый вывод выигрышей.',
    url: 'https://luckybear42casino.vercel.app/',
    images: [
      {
        url: 'https://luckybear42casino.vercel.app/images/hero-girl-solid.png',
        width: 1200,
        height: 630,
        alt: 'Lucky Bear Casino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucky Bear Casino Официальный Сайт — Вход и Зеркало',
    description:
      'Lucky Bear Casino официальный сайт и актуальное зеркало. Бонус до 360% за депозит и моментальный вывод.',
    images: ['https://luckybear42casino.vercel.app/images/hero-girl-solid.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#070a0f',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <head>
        <link rel="canonical" href="https://luckybear42casino.vercel.app/" />
      </head>
      <body className="antialiased bg-[#070a0f] text-[#f1f5f9] font-sans selection:bg-[#2563eb] selection:text-white">
        {children}
      </body>
    </html>
  )
}
