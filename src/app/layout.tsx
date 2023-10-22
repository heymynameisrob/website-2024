import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Syne, Space_Grotesk } from 'next/font/google'


export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', 
})

export const metadata: Metadata = {
  title: 'Hey my name is Rob',
  description: 'Product Designer based in the UK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "font-sans font-normal tracking-tight antialiased scroll-smooth text-slate-900 dark:text-white tv-lines--light dark:tv-lines--dark")}>                
        {children}
      </body>
    </html>
  )
}
