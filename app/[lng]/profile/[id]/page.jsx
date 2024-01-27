import ShopPage from "@/components/component/shop-page";
import UserProfile from "../../../../components/component/user-profile";
import { getAllUsers, getUserById } from "../action";

export const dynamic = "force-dynamic"

export async function generateStaticParams() {
    const users = await getAllUsers()
    const usersIds = [] ;
    for (let i = 0 ; i < users.length ; i ++){
        usersIds.push({id:`${i}`})
  }
  return usersIds
}

export default async function Vehicle({params})  {
    const user = await getUserById(params.id)
    console.log(user.shop);

  if(user.shop){
    return <>
            <ShopPage shop={user.shop} />
            </>
    }
  return (
    <>
     <UserProfile user={user} />
    </>
  )}

 