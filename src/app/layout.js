import AuthContext from '@/app/contexts/AuthContext'
import '@/app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LearnX',
  description: 'An all-in-one tool for streamlined organization and productivity, combining efficient file management with an intuitive agenda system.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-y-hidden">
      <body className={inter.className}>
        <AuthContext>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
