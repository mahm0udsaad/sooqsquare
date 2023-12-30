import { languages } from '../i18n/settings'
import './globals.css'
import NavBar from '@/components/navBar'
import { ClerkProvider, auth } from '@clerk/nextjs'
import { DarkModeProvider } from '../../context/darkModeContext'
import { SonnerDemo } from '@/components/messages'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({ children, params: { lng }}) {
  const { userId } = await auth()

  return (
    <html lang={lng}>
      <ClerkProvider>    
      <DarkModeProvider>
        <body >
        <NavBar userId={userId} lng={lng}/>
          <div className="pt-16 w-full relative">
          <SonnerDemo />
          {children}
          </div>
          </body>
      </DarkModeProvider>
      </ClerkProvider>
      </html>

  )
}