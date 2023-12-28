import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import './globals.css'
import NavBar from '@/components/navBar'
import { NextAuthProvider } from "./providers/nextOuth";


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
      <NextAuthProvider>    
        <body >
        <NavBar lng={lng}/>
          {children}
          </body>
      </NextAuthProvider>
      </html>

  )
}