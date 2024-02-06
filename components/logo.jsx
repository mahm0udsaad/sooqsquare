"use client"
import Link from 'next/link';
import { LightEn, LightAr, DarkEn, DarkAr } from '../public/logoCode';
import { useDarkMode } from '@/context/darkModeContext';
import { useRouter } from 'next/navigation';

const Logo = ({ lng }) => {
  const { darkMode } = useDarkMode();
  const router = useRouter()

  const handleGoToHome = () =>{
    router.push('/')
  }

  return (
    <div onClick={handleGoToHome} style={{ cursor: 'pointer' }}>
      {lng === 'ar' ? (
        darkMode ? <DarkAr /> : <LightAr />
      ) : (
        darkMode ? <DarkEn /> : <LightEn />
      )}
      </div>
  );
};

export default Logo;
