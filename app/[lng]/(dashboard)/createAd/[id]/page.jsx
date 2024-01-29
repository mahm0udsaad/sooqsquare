import { getShopById } from '../../actions'
import CategoriesForm from '@/components/shopAdsForms/categoryForm'
import dynamic from 'next/dynamic';
import { useTranslation } from '@/app/i18n';
import Selectors from '@/components/shopAdsForms/selectors'

const MultiImageForm = dynamic(() => import(`@/components/MultibleImages`),{
    ssr: false,
});
const CarBrandSelector = dynamic(() => import(`@/components/carBrandSelection`),{
ssr: false,
});
const LocationDetails = dynamic(() => import(`@/components/LocationSelector`),{
ssr: false,
});
const ExtraFeatures = dynamic(() => import(`@/components/shopAdsForms/extraFeatures`),{
ssr: false,
});
const CarChassis = dynamic(() => import(`@/components/shopAdsForms/carChassis`),{
ssr: false,
});
const PriceSelection = dynamic(() => import(`@/components/shopAdsForms/priceForm`),{
ssr: false,
});
const NameDescriptionSelector = dynamic(() => import(`@/components/NameDescriptionSelector`) ,{
ssr: false,
});
const Review = dynamic(() => import(`@/components/shopAdsForms/review`) ,{
ssr: false,
});
  
  const SellForm = async ({ params : {id, lng} , searchParams }) =>{
    const { t } = await useTranslation(lng,"translation")
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




