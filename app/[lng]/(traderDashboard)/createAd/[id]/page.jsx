import { getShopById } from '../../actions'
import CategoriesForm from '@/components/shopAdsForms/categoryForm'
import dynamic from 'next/dynamic';
import Selectors from '@/components/shopAdsForms/selectors'

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
        
    const shop = await getShopById(id)
    
    return (
        <div className="flex flex-col w-11/12 mx-8">
        <div className="w-full pt-8">
        {!searchParams.category && <CategoriesForm lng={lng} />}
        {!searchParams.uploadedImages && <MultiImageForm  lng={lng} />}
        {!searchParams.brand && <CarBrandSelector lng={lng} />}
        {!searchParams.carChassis && <CarChassis lng={lng} />}
        {!searchParams.price && <PriceSelection lng={lng} />}
        {!searchParams.name && <NameDescriptionSelector lng={lng} />}
        <ExtraFeatures lng={lng} />
        {searchParams.carStatus && <LocationDetails lng={lng} locationGiven={shop.location}/>}
        <Selectors lng={lng}/>
        {searchParams.name && <Review shopId={shop.id} lng={lng}/>}
        </div>
    </div>
    )
}

export default SellForm




