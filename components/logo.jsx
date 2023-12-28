import {LightEn, LightAr, DarkEn, DarkAr} from '../public/logoCode'

const Logo = ({lng , darkMode}) =>{
        return(
            <>
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
            </>
        )
}
export default Logo