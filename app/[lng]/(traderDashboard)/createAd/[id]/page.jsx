import { getShopById } from '../../actions'
import CategoriesForm from '@/components/shopAdsForms/categoryForm'
import dynamic from 'next/dynamic';
import Selectors from '@/components/shopAdsForms/selectors'
import SelectProfile from '@/components/shopAdsForms/profileSelector';
import { getUserByEmail } from '@/prisma/actions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';

const SellForm = async ({ params : {id, lng} , searchParams }) =>{
      
      const MultiImageForm = dynamic(() => import(`@/components/MultibleImages`),{
          ssr: false,
          loading:()=> <p>loading...</p>
      });
      const CarBrandSelector = dynamic(() => import(`@/components/carBrandSelection`),{
      ssr: false,
      loading:()=> <p>loading...</p>
      });
      const LocationDetails = dynamic(() => import(`@/components/LocationSelector`),{
      ssr: false,
      loading:()=> <p>loading...</p>
      });
      const ExtraFeatures = dynamic(() => import(`@/components/shopAdsForms/extraFeatures`),{
      ssr: false,
      loading:()=> <p>loading...</p>
      });
      const CarChassis = dynamic(() => import(`@/components/shopAdsForms/carChassis`),{
      ssr: false,
      loading:()=> <p>loading...</p>
      });
      const PriceSelection = dynamic(() => import(`@/components/shopAdsForms/priceForm`),{
      ssr: false,
      loading:()=> <p>loading...</p>
      });
      const NameDescriptionSelector = dynamic(() => import(`@/components/NameDescriptionSelector`) ,{
      ssr: false,
      loading:()=> <p>loading...</p>
      });
      const Review = dynamic(() => import(`@/components/shopAdsForms/review`) ,{
      ssr: false,
      loading:()=> <p>loading...</p>
      });
      const LogedInUser = await getServerSession() 
      const user = await getUserByEmail(LogedInUser?.user.email)
      if (!user?.phoneNumber || !user) redirect('/sign-in')
    const profile = await getShopById(id)
    
    return (
        <div className="flex flex-col min-h-screen w-11/12 mx-8">
        <div className="w-full pt-8">
        {!searchParams.profile ? <SelectProfile user={user}/> : null}
        {!searchParams.category && searchParams.profile && <CategoriesForm lng={lng} />}
        {!searchParams.uploadedImages && searchParams.category && searchParams.profile && <MultiImageForm  lng={lng} />}
        {!searchParams.brand && searchParams.carStatus && <CarBrandSelector lng={lng} />}
        {!searchParams.carChassis && searchParams.carStatus && <CarChassis lng={lng} />}
        {!searchParams.price && searchParams.carChassis && <PriceSelection lng={lng} />}
        {!searchParams.name && searchParams.price && <NameDescriptionSelector lng={lng} />}
        {searchParams.paintType && <ExtraFeatures lng={lng} />}
        {searchParams.carStatus && <LocationDetails user={user} lng={lng}/>}
        {searchParams.uploadedImages && <Selectors lng={lng}/>}
        {searchParams.name && <Review shopId={profile?.id} lng={lng}/>}
        </div>
    </div>
    )
}

export default SellForm




