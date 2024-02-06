import './globals.css'
import { languages } from '../i18n/settings'
import { DarkModeProvider } from '../../context/darkModeContext'
import { dir } from 'i18next'
import dynamic from 'next/dynamic'
import NavBar from '@/components/navBar'
import { Toaster } from "@/components/ui/toaster"

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({ children, params }) {
  const Footer = dynamic(()=> import('@/components/component/footer'),{
    ssr:false
  })
  
  return (
    <html lang={params.lng}>
      <link rel="shortcut icon" href="/icons/favicon.png" />
      <DarkModeProvider>
        <body className='bg-gray-100 dark:bg-zinc-950 dark:text-white' >
        <NavBar lng={params.lng}/>
          <div dir={dir(params.lng)} className="pt-16 w-full relative">
           {children}
            <Toaster />
          </div>
           <Footer />
          </body>
      </DarkModeProvider>
      </html>

  )
}