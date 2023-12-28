import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {GoogleSignInButton} from "./googleAuth"
import Link from "next/link";

export default  function SignIn() {

  return (
    <div className="w-full min-h-screen lg:flex">
      <div className="lg:w-1/2 p-6 lg:p-10 bg-gradient-to-r from-[#FF3337] via-[#009A8F] to-[#F5F853] to-[#FFFFFF] lg:flex lg:items-center lg:justify-center">
        <div className="space-y-4 text-center lg:text-left">
          <img
            alt="Company Logo"
            className="mx-auto lg:mx-0 w-16 h-16"
            height="64"
            src="/placeholder.svg"
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width="64"
          />
          <h1 className="text-3xl lg:text-4xl font-bold text-white">Company Name</h1>
          <p className="text-lg text-white opacity-80">Company Slogan</p>
        </div>
      </div>
      <div className="lg:w-1/2 p-6 lg:p-10 flex items-center justify-center">
        <Card className="max-w-lg w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-bold">Sign In</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <GoogleSignInButton />
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
        </Card>
      </div>
    </div>
  )
}

