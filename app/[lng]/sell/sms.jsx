"use client"

import React , {useState , useEffect} from "react";
import { getAuth , RecaptchaVerifier , signInWithPhoneNumber } from "firebase/auth";
import { app } from "../../../lib/fb";
import { useRouter } from "next/navigation";
import { updateUserPhoneNumber } from "@/prisma/actions";
import { useDarkMode } from "@/context/darkModeContext";
import { getSession} from "next-auth/react";
import {ArabCountries} from '../../../data/staticData'
export default function LoginWithPhone ({email}){
    const {phoneNum , setPhoneNum } = useDarkMode()
    const [otp,setOtp] = useState('')
    const [confirmationRes , setConfirmationRes] = useState(null)
    const [otpSent , setOtpSent] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(ArabCountries[0]);
    const {setErrorMessage} = useDarkMode()
    const auth = getAuth(app)
    const router = useRouter()

    useEffect(()=>{
        window.RecaptchaVerifier = new RecaptchaVerifier(auth ,"recaptcha-container",{
            'size' : 'normal',
            'callback':(response)=>{
            },
            'expired-callback':()=>{
            }
        })
    },[auth])

    const handlePhoneNumChange = (e) =>{
        setPhoneNum(e.target.value)
    }
    const handleOtpChange = (e) =>{
        setOtp(e.target.value)
    }
    const handleSentOtp = async () =>{
        try{
            console.log(`${selectedCountry.code}${phoneNum}`);
            const formattedPhoneNum = `${selectedCountry.code}${phoneNum.replace(/\D/g, '')}`;
            const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNum, window.RecaptchaVerifier);
            setConfirmationRes(confirmation)
            setOtpSent(true)

            alert('OTP has been sent')
            setPhoneNum(formattedPhoneNum)
        }catch(err){
            console.log(err);
        }
    }
    const handleOtpSubmit = async () =>{
        try{
            console.log(phoneNum);
            await confirmationRes.confirm(otp)
            updateUserPhoneNumber(phoneNum , email)
            router.push('/sell')
            setOtp('')
        }catch(err){
            setErrorMessage('OTP Is Wrong')
            console.log(err);
        }
    }
    const handleCountryChange = (e) => {
        const selectedCode = e.target.value;
        const country = ArabCountries.find((c) => c.code === selectedCode);
        setSelectedCountry(country);
      };
    return(
        <div className="flex flex-col relative">
        {!otpSent ? (
            <div className="absolute top-0" id="recaptcha-container"></div>
        ):null }
   
         {otpSent ? <input 
         type="text"
        className="p-3 border"

         value={otp}
         onChange={handleOtpChange}
         placeholder="Enter OTP"
          />:  
          <div className="flex">
          <input
            className="p-3 border"
            type="tel"
            value={phoneNum}
            onChange={handlePhoneNumChange}
            placeholder="Enter your Phone number"
          />
           <select
            className="p-3 border w-20"
            value={selectedCountry.code}
            onChange={handleCountryChange}
          >
            {ArabCountries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.code})
              </option>
            ))}
          </select>
        </div>}
          <button className="p-3 border" onClick={otpSent ? handleOtpSubmit : handleSentOtp}>
            {otpSent ? "submit OTP":"Send"}
          </button>
        </div>
    )
}