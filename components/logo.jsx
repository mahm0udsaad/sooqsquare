"use client"
import Link from 'next/link';
import { LightEn, LightAr, DarkEn, DarkAr } from '../public/logoCode';
import { useDarkMode } from '@/context/darkModeContext';
import { useRouter } from 'next/navigation';

const Logo = ({ lng }) => {
  const { darkMode } = useDarkMode();
  const router = useRouter()
  return (
      <div onClick={()=> router.push('/')}>
      {lng === 'ar' ? (
        darkMode ? <DarkAr /> : <LightAr />
      ) : (
        darkMode ? <DarkEn /> : <LightEn />
      )}
      </div>
  );
};

export default Logo;
