"use client"
import Link from 'next/link';
import { LightEn, LightAr, DarkEn, DarkAr } from '../public/logoCode';
import { useDarkMode } from '@/context/darkModeContext';

const Logo = ({ lng }) => {
  const { darkMode } = useDarkMode();

  return (
    <Link href={'/'} >
      {lng === 'ar' ? (
        <>
          {darkMode ? <DarkAr /> : <LightAr />}
        </>
      ) : (
        <>
          {darkMode ? <DarkEn /> : <LightEn />}
        </>
      )}
    </Link>
  );
};

export default Logo;
