import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import './globals.css'
import { DarkModeProvider } from '../../context/darkModeContext'
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng}>
        <DarkModeProvider>
        <body >
          {children}
          </body>
     </DarkModeProvider>
      </html>

  )
}