import ShopPage from "@/components/component/shop-page";
import UserProfile from "../../../../components/component/user-profile";
import { getAllUsers, getUserById } from "../action";
import { getShopById } from "../../(traderDashboard)/actions";

export const dynamic = "force-dynamic"

export async function generateStaticParams() {
    const users = await getAllUsers()
    const usersIds = [] ;
    for (let i = 0 ; i < users.length ; i ++){
        usersIds.push({id:`${i}`})
  }
  return usersIds
}

export default async function Vehicle({params , searchParams})  {
    const user = await getUserById(params.id)
  if(searchParams.shop){
    const shopId = parseInt(searchParams.shop)
    const shop = await getShopById(shopId)
    return <>
            <ShopPage shop={shop} />
            </>
    }
  return (
    <>
     <UserProfile user={user} />
    </>
  )
}

 