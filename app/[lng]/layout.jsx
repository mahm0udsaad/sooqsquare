import { languages } from '../i18n/settings'
import './globals.css'
import { DarkModeProvider } from '../../context/darkModeContext'
import { ErrorMessage} from '@/components/messages'
import { Footer } from '@/components/component/footer'
import { dir } from 'i18next'
import { Toaster } from "@/components/ui/sonner"
import NavbarSkeleton from '@/components/skeletons/navSkeleton'
import dynamic from 'next/dynamic'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({ children, params: { lng }}) {
  
  const NavBar = dynamic(() => import('@/components/navBar'), {
    loading: () => <NavbarSkeleton />, // Render skeleton while NavBar is loading
  });
  
  return (
    <html lang={lng}>
      <link rel="shortcut icon" href="/icons/favicon.png" />
      <DarkModeProvider>
        <body className='bg-gray-100 dark:bg-zinc-900 dark:text-white' >
        <NavBar  lng={lng}/>
          <div dir={dir(lng)} className="pt-16 w-full relative">
           <ErrorMessage />
           {children}
            <Toaster />
          </div>
           <Footer />
          </body>
      </DarkModeProvider>
      </html>

  )
}