import { unstable_noStore } from "next/cache"
import  Market  from "../../../components/component/market"
import { getAllads } from './actions'
import { getServerSession } from 'next-auth'
import { getUserByEmail } from '@/prisma/actions'

const VehicleMarket = async ({params:{lng },searchParams}) =>{
    unstable_noStore()
    const logedUser = await getServerSession()
    const user = await getUserByEmail(logedUser?.user.email)
    const ads = await getAllads(searchParams , user)

    return(
        <div className="pt-8">
            <Market lng={lng} user={user} ads={ads}/>
        </div>
    )
}
export default VehicleMarket