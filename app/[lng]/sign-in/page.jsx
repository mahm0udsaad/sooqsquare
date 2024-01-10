
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Logo from './../../../components/logo'
import { getServerSession } from "next-auth"
import LoginWithPhone from "../sell/sms"
import prisma from "@/prisma/client"
import { Gbtn } from '../../../components/btns'
import { redirect } from "next/navigation"

export default async function SginIn() {
    let user = null

      const logedUser = await getServerSession()

      if(logedUser){
             user = logedUser
          console.log(logedUser);
        }

        if(user?.phoneNumber){
          redirect('/sell')
        }
  return (
    <div className="w-full min-h-screen lg:flex">
      <div className="lg:w-1/2 p-6 lg:p-10 bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 lg:flex lg:items-center lg:justify-center">
        <div className="space-y-4 text-center lg:text-left">
         <Logo />
          <h1 className="text-3xl lg:text-4xl font-bold text-white">New Company</h1>
          <p className="text-lg text-white opacity-80">Creating a better future</p>
        </div>
      </div>
      <div className="lg:w-1/2 p-6 lg:p-10 flex items-center justify-center">
        {!user?<Card className="max-w-lg w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-bold">Sign In</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 text-sm">
              To access your account, please sign in using your Google account or your registered email and password. If
              you don't have an account yet, you can create one by clicking on the "Sign Up" link below.
            </p>
            <Gbtn />
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Sign in
            </Button>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link className="underline" href="#">
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </Card>:null}
        {!user?.phoneNumber && user?
        <LoginWithPhone />
        :null}
      </div>
    </div>
  )
}

