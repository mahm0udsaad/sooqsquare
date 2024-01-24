
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { getServerSession } from "next-auth"
import LoginWithPhone from "../sell/sms"
import { Fbtn, Gbtn, SginInBtn } from '../../../components/btns'
import { redirect } from "next/navigation"
import { createUserIfNotExists, getUserByEmail } from "../../../prisma/actions"
import Image from "next/image"

export default async function SginIn() {

  const logedUser = await getServerSession();
  const user = await getUserByEmail(logedUser?.user?.email);

  if (logedUser) {
    console.log(logedUser);
  
    const existingUser = await getUserByEmail(logedUser?.email);
  
    if (!existingUser) {
      await createUserIfNotExists(logedUser);
    } 
    console.log(existingUser);
  }

  // if(user?.phoneNumber){
  //   redirect('/sell')
  // }

  return (
    <div className="w-full min-h-screen lg:flex">
      <div className="lg:w-1/2 p-6 lg:p-10 bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 lg:flex lg:items-center lg:justify-center">
        <div className="space-y-4 text-center lg:text-left">
         <Image width={240} height={240} src="/icons/light-en-logo.svg" />
          <p className="text-lg text-white opacity-80">Creating a better future</p>
        </div>
      </div>
      <div className="lg:w-1/2 p-6 lg:p-10 flex items-center justify-center">
        {!logedUser?
        <Card className="max-w-lg w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-bold">Sign In</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 text-sm">
              To access your account, please sign in using your Google account or your registered email and password. If
              you don't have an account yet, you can create one by clicking on the "Sign Up" link below.
            </p>
            <Gbtn />
            <Fbtn />
            <div className="space-y-2">
              <Label htmlFor="email">Or Continue with Email</Label>
              <Input id="email" required type="email" />
            </div>
           <SginInBtn />
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-gray-500">
            We will not reveal your email to anyone else or use it to send you unsolicited messages.
            </p>
          </CardFooter>
        </Card>:
        !user?.phoneNumber &&
        <LoginWithPhone email={logedUser?.user.email}/>
        }
      </div>
    </div>
  )
}

