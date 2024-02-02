"use client"
import Link from 'next/link'
import {LightEn, LightAr, DarkEn, DarkAr} from '../public/logoCode'
import { useDarkMode } from '@/context/darkModeContext'

const Logo = ({ lng }) =>{
    const { darkMode } = useDarkMode()
        return(
            <Link href={'/'}>
            {lng === "ar" ?
            <>
            {!darkMode && <LightAr />}
            {darkMode && <DarkAr />}
            </>
            :
            <>
            {!darkMode && <LightEn />}
            {darkMode && <DarkEn />}
            </>   
            }
            </Link>
        )
}
export default Logo