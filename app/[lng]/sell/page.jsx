
import { auth } from '@clerk/nextjs'
import {CategoriesForm , CarBrandSelector , ModelSelection,ModelYearSelection, CarTypeSelection ,CarStatusSelection, TransmissionSelection, FuelTypeSelection, MeterRangeSelection, ImageAdAndDescription,} from '../../../components/sellForms'

const SellForm = async ({ params : { lng }  }) =>{
    const { userId } = await auth()

  return (
      <div className='pt-20 '>
      <CategoriesForm  lng={lng}/>
      <CarBrandSelector lng={lng}/>
      <div className="grid grid-cols-3 gap-4 mx-8">
      <ModelSelection lng={lng}/>
      <ModelYearSelection lng={lng}/>
      <CarTypeSelection lng={lng}/>
      </div>
      <CarStatusSelection lng={lng}/>
      <TransmissionSelection lng={lng}/>
       <FuelTypeSelection  lng={lng}/>
       <MeterRangeSelection lng={lng}/>
       <ImageAdAndDescription userId={userId}/>
      </div>
  )
}

export default SellForm



