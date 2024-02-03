"use client"
import { Badge } from "@/components/ui/badge"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { usePathname, useRouter, useSearchParams } from "next/navigation"


const SelectProfile = ({ user }) =>{
    const searchParams = useSearchParams();
    const router = useRouter()
    const pathname= usePathname()
    if(searchParams.has('profile') || searchParams.has('shop')) return ;
    const createQueryString = (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      const updatedParams = params.toString();
      router.push(pathname + '?' + updatedParams);
    };
    console.log(user.shop.length);
    if(user.shop.length == 0){
     console.log('mainProfile');
     createQueryString('profile',"mainProfile")
    }

    return (
        <>
        <h1 className="text-center py-3 font-semibold text-xl">Select Profile to display the ad</h1>

        <div className="flex justify-center items-center gap-8 p-4">
          <Card className="relative w-64 shadow-lg rounded-lg overflow-hidden border border-green-500 rounded-lg shadow-md bg-white dark:bg-zinc-800">
            <CardContent className="flex flex-col items-center p-4">
              <Badge className="mb-2 absolute top-0 z-50 bg-green-500 text-white rounded-md px-2 py-1">Main Profile</Badge>
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage alt="User Name 1" src={user.image} />
                <AvatarFallback>UN1</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{user.username}</h2>
              <Button onClick={()=>createQueryString('profile',"mainProfile")} className="mt-4 w-full bg-blue-500 text-white rounded-md py-2">Select Profile</Button>
            </CardContent>
          </Card>
          {user.shop?.map((shop)=>(
          <Card key={shop.id} className="w-64 shadow-lg rounded-lg overflow-hidden rounded-lg shadow-md bg-white dark:bg-zinc-800">
            <CardContent className="flex flex-col items-center p-4">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage alt="User Name 2" src={shop.shopImage} />
                <AvatarFallback>UN2</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{shop.shopName}</h2>
              <Button onClick={()=>createQueryString('profile', `shop=${shop.id}`)} className="mt-4 w-full bg-blue-500 text-white rounded-md py-2">Select Profile</Button>
            </CardContent>
          </Card>
          ))}
        </div>
        </>
      )
}
export default SelectProfile