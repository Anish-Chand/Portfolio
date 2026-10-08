import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anish Chand Gupta — Web Developer & AI Automation',
  description: 'Portfolio of Anish Chand Gupta — web development, AI automation, workflow design and technical solutions.',
  openGraph: {
    title: 'Anish Chand Gupta — Web + AI',
    description: 'Web development, AI automation and practical technical solutions.',
    type: 'website'
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
