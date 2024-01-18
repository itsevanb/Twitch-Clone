import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StreamGames',
  description: 'streaming website for gamers',
  icons: {
    icon: '/assets/images/smile.svg' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
          attribute='class'
          forcedTheme='dark'
          storageKey='streamgames-theme'
          >
            <Toaster theme="light" position="bottom-center" />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
