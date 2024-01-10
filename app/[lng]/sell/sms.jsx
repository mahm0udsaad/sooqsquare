"use client"

import React , {useState , useEffect} from "react";
import { getAuth , RecaptchaVerifier , signInWithPhoneNumber } from "firebase/auth";
import { app } from "../../../lib/fb";
import { useRouter } from "next/navigation";
import { updateUserPhoneNumber } from "@/prisma/actions";
import { useDarkMode } from "@/context/darkModeContext";

export default function LoginWithPhone (){
    const {phoneNum , setPhoneNum} = useDarkMode()
    const [otp,setOtp] = useState('')
    const [confirmationRes , setConfirmationRes] = useState(null)
    const [otpSent , setOtpSent] = useState(false)

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
            const formattedPhoneNum = `+${phoneNum.replace(/\D/g, '')}`;
            const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNum, window.RecaptchaVerifier);
            setConfirmationRes(confirmation)
            setOtpSent(true)
            setPhoneNum('')
            alert('OTP has been sent')
        }catch(err){
            console.log(err);
        }
    }
    const handleOtpSubmit = async () =>{
        try{
            console.log(otp);
            await confirmationRes.confirm(otp)
            updateUserPhoneNumber(phoneNum)
            setOtp('')
        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
        {!otpSent ? (
            <div id="recaptcha-container"></div>
        ):null }
   
         {otpSent ? <input 
         type="text"
        className="p-3 border"

         value={otp}
         onChange={handleOtpChange}
         placeholder="Enter OTP"
          />: <input 
          className="p-3 border"
          type="tel"
          value={phoneNum}
          onChange={handlePhoneNumChange}
          placeholder="Enter your Phone number"
           /> }
          <button className="p-3 border" onClick={otpSent ? handleOtpSubmit : handleSentOtp}>
            {otpSent ? "submit OTP":"Send"}
          </button>
        </>
    )
}