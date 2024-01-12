import { languages } from '../i18n/settings'
import './globals.css'
import NavBar from '@/components/navBar'
import { DarkModeProvider } from '../../context/darkModeContext'
import { ErrorMessage, SonnerDemo } from '@/components/messages'

import { dir } from 'i18next'
import { getServerSession } from 'next-auth'
import { getUserByEmail } from '@/prisma/actions'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({ children, params: { lng }}) {
  const logedUser = await getServerSession()
  const user = await getUserByEmail(logedUser?.user?.email) || null
  return (
    <html lang={lng}>
      <link rel="shortcut icon" href="/icons/favicon.png" />
      <DarkModeProvider>
        <body className='bg-gray-100 dark:bg-zinc-900' >
        <NavBar userImage={user?.image}  lng={lng}/>
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