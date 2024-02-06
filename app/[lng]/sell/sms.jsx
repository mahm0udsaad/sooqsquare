"use client"

import React , {useState , useEffect, useRef} from "react";
import { getAuth , RecaptchaVerifier , signInWithPhoneNumber } from "firebase/auth";
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { app } from "../../../lib/fb";
import { useRouter } from "next/navigation";
import { updateUserPhoneNumber } from "@/prisma/actions";
import { useDarkMode } from "@/context/darkModeContext";
import {ArabCountries} from '../../../data/staticData'
import { LoadingSpinner } from '../../../components/loading-spiner'
import { useToast } from "@/components/ui/use-toast";

export default function LoginWithPhone ({email}){
    const { toast } = useToast()
    const {phoneNum , setPhoneNum } = useDarkMode()
    const [otp,setOtp] = useState(['', '', '', '', '', ''])
    const [confirmationRes , setConfirmationRes] = useState(null)
    const [otpSent , setOtpSent] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(ArabCountries[0]);
    const [ isLoading , setIsLoading ] = useState(false)
    const {setErrorMessage , setSuccessMessage} = useDarkMode()
    const auth = getAuth(app)
    const router = useRouter()
    const inputRefs = useRef([...Array(6)].map(() => React.createRef()));


    useEffect(() => {
      if(!otpSent){
        return ;
      }
      
      inputRefs.current[0].focus();

    }, [otpSent]);

    useEffect(()=>{
      window.RecaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        'size': 'normal',
        'callback': (response) => {
        },
        'expired-callback': () => {
          console.log("prepared phone auth process");
        }
      });
    },[auth]);

    const handleInputChange = (index, value) => {
      if (value.length > 1) {
        // If the user pastes more than one character, take only the first character
        value = value[0];
      }
  
      // Update the OTP array
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      // Move focus to the next input
      if (index < otp.length - 1 && value !== '') {
        inputRefs.current[index + 1].focus();
      }
    };
  
    const handleKeyDown = (index, e) => {
      if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
        // Move focus to the previous input when Backspace is pressed and the current input is empty
        inputRefs.current[index - 1].focus();
      }
    };

    const handlePhoneNumChange = (e) =>{
        setPhoneNum(e.target.value)
    }

    const handleSentOtp = async () =>{
      try{
            setIsLoading(true)
            const formattedPhoneNum = `${selectedCountry.code}${phoneNum.replace(/\D/g, '')}`;
            const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNum, window.RecaptchaVerifier);
            setConfirmationRes(confirmation)
            setOtpSent(true)

            setSuccessMessage('OTP has been sent')
            setPhoneNum(formattedPhoneNum)
            setIsLoading(false)
            toast({
              title:"OTP Sent Successfully To Your Phone",
              description:"Please check your phone messages",
            })
        }catch(err){
          console.log(err);
          setIsLoading(false)
          setErrorMessage('Your Phone Number is in Correct ')
        }
    }
    const handleOtpSubmit = async () =>{
      try{
            setIsLoading(true)
            console.log(otp.join(''));
            await confirmationRes.confirm(otp.join(''))
            updateUserPhoneNumber(phoneNum , email)
            setIsLoading(false)
            setOtp('')
        }catch(err){
            setIsLoading(false)
            setErrorMessage('OTP Is Wrong')
            console.log(err);
        }finally{
          router.push('/sell')
        }
    }
    const handleCountryChange = (e) => {
        const selectedCode = e;
        const country = ArabCountries.find((c) => c.code === selectedCode);
        setSelectedCountry(country);
    };

    return(
        <div className="">
        {!otpSent ? (
            <div className="absolute top-24" id="recaptcha-container"></div>
        ):null }
     <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Phone Verification</h2>
          <p className="mb-4 text-gray-600">Please enter your phone number for verification.</p>
         {otpSent ? 
         <div className="flex flex-col gap-4">
           <div className="flex flex-row gap-4">
            {otp.length > 0 && otp.map((digit, index) => (
              <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              className="p-3 w-12 h-12 border rounded-md text-centerfocus:outline-none focus:border-blue-500"
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
              ))}
              </div>
          <Button disabled={isLoading}  onClick={handleOtpSubmit} className="bg-green-500 text-white">
          {isLoading &&
              <LoadingSpinner />
            }
            Submit Verification Code
           </Button>
         </div>
          :  
          <div className="flex flex-col gap-4 ">
          <div className="flex">
          <Select onValueChange={handleCountryChange}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder={ArabCountries[0].code} />
            </SelectTrigger>
            <SelectContent>
            <div className="p-2">
            <Input placeholder="Search..." type="text" />
          </div>
            <SelectGroup className="">
            {ArabCountries.map((country) => (
              <SelectItem className="force-flex" key={country.name} value={country.code}>
                {country.name} ({country.code})             
                 </SelectItem>
            ))}
            </SelectGroup>
            </SelectContent>
            </Select>
              <Input 
                placeholder="Enter your phone number" 
                value={phoneNum}
                onChange={handlePhoneNumChange}
                type="tel" />
          </div>

            <Button disabled={isLoading}  onClick={handleSentOtp} className="mx-4 bg-green-500 text-white">
            {isLoading &&
              <LoadingSpinner />
            }
                Send Verification Code 
            </Button>
        </div>
      }
               </div>
          </div>
        </div>
    )
}





function FlagIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
<line x1="4" x2="4" y1="22" y2="15" />
</svg>
)
}