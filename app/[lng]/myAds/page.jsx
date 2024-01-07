
// import DynamicCard from '../../../components/adCard'
// import prisma from "../../../prisma/client";

export default async function MyAds() {
    // const ads = await prisma.Ad.findMany({});
  return (
    <main className=" mx-8 grid grid-cols-2 pt-20">
       {/* {ads.map((ad) => (
        <DynamicCard key={ad.id} ad={ad} />
      ))} */}
    </main>
  )
}
