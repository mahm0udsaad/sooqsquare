import {  getAdById, getAllads } from "../actions"
import { AdPage } from "../../../../components/component/ad-page";

export const dynamic = "force-dynamic"

export async function generateStaticParams() {
    const ads = await getAllads()
    const adsIds = [] ;
    for (let i = 0 ; i < ads.length ; i ++){
        adsIds.push({id:`${i}`})
  }
  return adsIds
}

export default async function Vehicle({params})  {
  const ad = await getAdById(params.id)
  return (
    <>
     <AdPage lng={params.lng} ad={ad} />
    </>
  )}
