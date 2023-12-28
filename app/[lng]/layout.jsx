import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import './globals.css'
import NavBar from '@/components/navBar'
import { ClerkProvider, auth } from '@clerk/nextjs'




export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({ children, params: { lng }}) {
  const { userId } = await auth()

  return (
    <html lang={lng}>
      <ClerkProvider>    
        <body >
        <NavBar userId={userId} lng={lng}/>
          <div className="pt-24 w-full">
          {children}
          </div>
          </body>
      </ClerkProvider>
      </html>

  )
}