import { languages } from '../i18n/settings'
import './globals.css'
import NavBar from '@/components/navBar'
import { DarkModeProvider } from '../../context/darkModeContext'
import { ErrorMessage, SonnerDemo } from '@/components/messages'

import { dir } from 'i18next'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({ children, params: { lng }}) {

  return (
    <html lang={lng}>
      <DarkModeProvider>
        <body className='bg-gray-100 dark:bg-zinc-900' >
        <NavBar  lng={lng}/>
          <div dir={dir(lng)} className="pt-16 w-full relative">
          <SonnerDemo />
           <ErrorMessage />
          {children}
          </div>
          </body>
      </DarkModeProvider>
      </html>

  )
}