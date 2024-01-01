
import { auth } from '@clerk/nextjs'
import  {EngineCapacitySelector, Review,PriceSelection ,PaintTypeSelector,RegionalSpecifications, OverView  , ModelSelection,ModelYearSelection, CarTypeSelection ,TransmissionSelection, FuelTypeSelection, MeterRangeSelection} from '../../../components/sellForms'
import dynamic from 'next/dynamic'


// Exporting components
 const CategoriesForm = dynamic(() => import(`../../../components/sellForms`));
 const NameDescriptionSelector = dynamic(() => import(`../../../components/NameDescriptionSelector`));
 const CarBrandSelector = dynamic(() => import(`../../../components/CarBrandSelector`));
 const CarStatusSelection = dynamic(() => import(`../../../components/CarStatusSelection`));
 const MultiImageForm = dynamic(() => import(`../../../components/MultibleImages`));
 const LocationDetails = dynamic(() => import(`../../../components/LocationSelector`));

const SellForm = async ({ params : { lng }  }) =>{
    const { userId } = await auth()
  return (
    <div className='pt-20 relative w-11/12 mx-auto  flex lg:flex-row flex-col-reverse'>
      <OverView lng={lng} />
    <div className="flex flex-col w-full">
      <div className="w-full">
        <CategoriesForm lng={lng} />
        <Review userId={userId} lng={lng} />
        <CarStatusSelection lng={lng} />
        <MultiImageForm lng={lng} />
        <NameDescriptionSelector lng={lng} />
        <LocationDetails lng={lng} />
        <CarBrandSelector lng={lng} />
        <div className="grid grid-cols-3 gap-4 mx-8 pt-8">
          <ModelSelection lng={lng} />
          <ModelYearSelection lng={lng} />
          <CarTypeSelection lng={lng} />
        </div>
        <TransmissionSelection lng={lng} />
        <PriceSelection lng={lng} />
        <RegionalSpecifications lng={lng} />
        <FuelTypeSelection lng={lng} />
        <EngineCapacitySelector lng={lng} />
        <MeterRangeSelection lng={lng} />
        <PaintTypeSelector lng={lng} />
      </div>
    </div>
  </div>
  
  )
}

export default SellForm



