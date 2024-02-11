import dynamic from 'next/dynamic';
import { getUserByEmail } from '@/prisma/actions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import SelectProfile from '@/components/shopAdsForms/profileSelector';
import { OverView } from '@/components/sellForms';
import SkeletonScreen from '@/components/skeletons/brandsSkeleton'
import DropdownSkeleton from '@/components/skeletons/selectorSkeleton'

const SellForm = async ({ params : { lng} , searchParams  }) =>{

    const CategoriesForm = dynamic(() => import(`@/components/shopAdsForms/categoryForm`),{
        ssr: false,
        loading:()=> <p>CategoriesForm...</p>
    });
    const Selectors = dynamic(() => import(`@/components/shopAdsForms/selectors`),{
        ssr: false,
        loading:()=> <DropdownSkeleton />
    });
      const MultiImageForm = dynamic(() => import(`@/components/MultibleImages`),{
          ssr: false,
          loading:()=> <SkeletonScreen/>
      });
      const CarBrandSelector = dynamic(() => import(`@/components/carBrandSelection`),{
      ssr: false,
      loading:()=> <SkeletonScreen/>
      });
      const LocationDetails = dynamic(() => import(`@/components/LocationSelector`),{
      ssr: false,
      loading:()=> <DropdownSkeleton />
      });
      const ExtraFeatures = dynamic(() => import(`@/components/shopAdsForms/extraFeatures`),{
      ssr: false,
      loading:()=> <DropdownSkeleton />
      });
      const CarChassis = dynamic(() => import(`@/components/shopAdsForms/carChassis`),{
      ssr: false,
      loading:()=> <DropdownSkeleton />
      });
      const PriceSelection = dynamic(() => import(`@/components/shopAdsForms/priceForm`),{
      ssr: false,
      loading:()=> <DropdownSkeleton />
      });
      const NameDescriptionSelector = dynamic(() => import(`@/components/NameDescriptionSelector`) ,{
      ssr: false,
      loading:()=> <DropdownSkeleton />
      });
      const Review = dynamic(() => import(`@/components/shopAdsForms/review`) ,{
      ssr: false,
      loading:()=> <DropdownSkeleton />
      });
       const ColorPicker = dynamic(() => import(`@/components/shopAdsForms/colorPicker`) ,{
      ssr: false,
      loading:()=> <DropdownSkeleton />
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
      <div className='relative w-11/12 mx-auto pt-8 min-h-screen flex'>
           <OverView lng={lng} />
        <div className="flex flex-col w-11/12 mx-8">
          <div className="w-full">
            <div className="w-full">
              {!searchParams.profile ? <SelectProfile lng={lng} user={user}/> : null}
              {!searchParams.category && searchParams.profile && <CategoriesForm lng={lng} />}
              {!searchParams.uploadedImages && searchParams.category && searchParams.profile && <MultiImageForm  lng={lng} />}
              {!searchParams.brand && searchParams.city && <CarBrandSelector lng={lng} />}
              {!searchParams.color && searchParams.model && <ColorPicker  lng={lng}/>}
              {!searchParams.carChassis && searchParams.carStatus && <CarChassis lng={lng} />}
              {!searchParams.price && searchParams.carChassis && <PriceSelection lng={lng} />}
              {!searchParams.name && searchParams.price && <NameDescriptionSelector lng={lng} />}
              {searchParams.paintType && <ExtraFeatures lng={lng} />}
              {searchParams.carStatus && <LocationDetails user={user} lng={lng}/>}
              {searchParams.uploadedImages && <Selectors lng={lng}/>}
              {searchParams.name && searchParams.description && <Review user={user} shopId={profile?.id} lng={lng}/>}
            </div>
          </div>
        </div>
      </div>
    )
}

export default SellForm




