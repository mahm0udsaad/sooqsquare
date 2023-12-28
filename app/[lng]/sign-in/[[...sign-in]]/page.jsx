import { SignIn } from "@clerk/nextjs";
import {  Card } from "@/components/ui/card";
import Logo from '../../../../components/logo'
export default function Page({params:{lng}}) {
  return(
    <div className="w-full min-h-screen lg:flex">
      <div className="lg:w-1/2 p-6 lg:p-10 bg-gradient-to-r from-[#FF3337] via-[#009A8F] to-[#F5F853] to-[#FFFFFF] lg:flex lg:items-center lg:justify-center">
        <div className="space-y-4 text-center lg:text-left">
          <Logo lng={lng} darkMode={false}/>
          <h1 className="text-3xl lg:text-4xl font-bold text-white">Sooq Square</h1>
          <p className="text-lg text-white opacity-80">
          Revolutionize Your Ride:
          Rent, Buy, Sell and More!
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 p-6 lg:p-10 flex items-center justify-center">
        <Card className="max-w-lg w-full">
        <SignIn />
        </Card>
      </div>
    </div>
  )
  
}