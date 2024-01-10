"use client"
import { signIn } from 'next-auth/react'
import { Button } from "@/components/ui/button"

export const Gbtn = () =>{
    return (
        <Button onClick={()=> signIn('google')} className="w-full bg-[#4285F4] text-white" type="button">
              <ChromeIcon className="w-4 h-4 mr-2" />
              Sign in with Google
            </Button>
    )
}


function ChromeIcon(props) {
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
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="21.17" x2="12" y1="8" y2="8" />
        <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
        <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
      </svg>
    )
  }