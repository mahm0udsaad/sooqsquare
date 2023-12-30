
import { auth } from '@clerk/nextjs'
import  {Review,NameDescriptionSelector,PriceSelection ,PaintTypeSelector,RegionalSpecifications , CategoriesForm , CarBrandSelector , ModelSelection,ModelYearSelection, CarTypeSelection ,CarStatusSelection, TransmissionSelection, FuelTypeSelection, MeterRangeSelection, ImageAdAndDescription, MultiImageForm, MutliSteps, LocationDetails, EngineCapacitySelector,} from '../../../components/sellForms'

const SellForm = async ({ params : { lng }  }) =>{
    const { userId } = await auth()
  return (
      <div className='pt-20 relative'>
      <MutliSteps />
      <CategoriesForm  lng={lng}/>
      <Review userId={userId}  lng={lng}/>
      <CarStatusSelection lng={lng}/>
      <MultiImageForm lng={lng} />
      <NameDescriptionSelector lng={lng} />
      <LocationDetails lng={lng} />
      <CarBrandSelector lng={lng}/>
      <div className="grid grid-cols-3 gap-4 mx-8 pt-8">
      <ModelSelection lng={lng}/>
      <ModelYearSelection lng={lng}/>
      <CarTypeSelection lng={lng}/>
      </div>
      <TransmissionSelection lng={lng}/>
      <PriceSelection lng={lng}/>
      <RegionalSpecifications lng={lng}/>
      <FuelTypeSelection  lng={lng}/>
      <EngineCapacitySelector lng={lng}/> 
       <MeterRangeSelection lng={lng}/>
       <PaintTypeSelector lng={lng}/>
      </div>
  )
}

export default SellForm



