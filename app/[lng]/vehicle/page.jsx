import { unstable_noStore } from "next/cache"
import { Market } from "../../../components/component/market"
import { getAllads } from './actions'
const VehicleMarket = async ({params:{lng },searchParams}) =>{
    unstable_noStore()
    const ads = await getAllads(searchParams)

    return(
        <div className="pt-8">
            <Market lng={lng} ads={ads}/>
        </div>
    )
}
export default VehicleMarket