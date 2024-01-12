import Link from 'next/link'
import {LightEn, LightAr, DarkEn, DarkAr} from '../public/logoCode'

const Logo = ({lng , darkMode}) =>{
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