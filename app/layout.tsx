import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Ansh Vishwakarma — Full-Stack Developer', description: 'Portfolio of Ansh Vishwakarma, a full-stack developer crafting striking and unforgettable web applications.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-[var(--paper)]"><body>{children}</body></html> }
