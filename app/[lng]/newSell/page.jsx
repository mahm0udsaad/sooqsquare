import dynamic from 'next/dynamic';
import { getUserByEmail, getUserByUseremail } from '@/prisma/actions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import SelectProfile from '@/components/shopAdsForms/profileSelector';


const SellForm = async ({ params : { lng} , searchParams  }) =>{
    const CategoriesForm = dynamic(() => import(`@/components/shopAdsForms/categoryForm`),{
        ssr: false,
        loading:()=> <p>CategoriesForm...</p>
    });
    const Selectors = dynamic(() => import(`@/components/shopAdsForms/selectors`),{
        ssr: false,
        loading:()=> <p>Selectors...</p>
    });
      const MultiImageForm = dynamic(() => import(`@/components/MultibleImages`),{
          ssr: false,
          loading:()=> <p>MultiImageForm...</p>
      });
      const CarBrandSelector = dynamic(() => import(`@/components/carBrandSelection`),{
      ssr: false,
      loading:()=> <p>CarBrandSelector...</p>
      });
      const LocationDetails = dynamic(() => import(`@/components/LocationSelector`),{
      ssr: false,
      loading:()=> <p>LocationDetails...</p>
      });
      const ExtraFeatures = dynamic(() => import(`@/components/shopAdsForms/extraFeatures`),{
      ssr: false,
      loading:()=> <p>ExtraFeatures...</p>
      });
      const CarChassis = dynamic(() => import(`@/components/shopAdsForms/carChassis`),{
      ssr: false,
      loading:()=> <p>CarChassis...</p>
      });
      const PriceSelection = dynamic(() => import(`@/components/shopAdsForms/priceForm`),{
      ssr: false,
      loading:()=> <p>PriceSelection...</p>
      });
      const NameDescriptionSelector = dynamic(() => import(`@/components/NameDescriptionSelector`) ,{
      ssr: false,
      loading:()=> <p>NameDescriptionSelector...</p>
      });
      const Review = dynamic(() => import(`@/components/shopAdsForms/review`) ,{
      ssr: false,
      loading:()=> <p>Review...</p>
      });
      const LogedInUser = await getServerSession() 
      const user = await getUserByEmail(LogedInUser?.user.email)
      if (!user?.phoneNumber || !user) redirect('/sign-in')
      let profile ;
      if(searchParams.profile == "mainProfile"){
        profile = user
      }else{
        const shopId = searchParams.profile?.split('=')[1];
       profile = user.shop?.find(shop => shop.id === parseInt(shopId));
      }
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
        {searchParams.name && <Review userId={user?.id} shopId={profile?.id} lng={lng}/>}
        </div>
    </div>
    )
}

export default SellForm




