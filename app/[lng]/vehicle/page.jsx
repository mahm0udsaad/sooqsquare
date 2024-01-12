import { unstable_noStore } from "next/cache"
import { Market } from "../../../components/component/market"
import prisma from "@/prisma/client"

const VehicleMarket = async ({params:{lng },searchParams}) =>{
    unstable_noStore()
    
    const ads = await prisma.Ad.findMany({
        include: {
          Adimages: true,
          user: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        where: {
          AND: Object.keys(searchParams).map((key) => {
            return { [key]: { contains: searchParams[key] } };
          }),
        },
      });

    return(
        <div className="pt-8">
            <Market lng={lng} ads={ads}/>
        </div>
    )
}
export default VehicleMarket