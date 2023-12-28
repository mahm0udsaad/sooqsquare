
import { auth, currentUser } from '@clerk/nextjs'
import {CategoriesForm , CarBrandSelector , ModelSelection,ModelYearSelection, CarTypeSelection ,CarStatusSelection, TransmissionSelection, FuelTypeSelection, MeterRangeSelection, ImageAdAndDescription,} from '../../../components/sellForms'

const SellForm = async ({ params : { lng }  }) =>{
    const { userId } = await auth()

  return (
      <div className='pt-20'>
      <CategoriesForm  lng={lng}/>
      <CarBrandSelector />
      <ModelSelection />
      <ModelYearSelection />
      <CarTypeSelection />
      <CarStatusSelection />
      <TransmissionSelection />
       <FuelTypeSelection  />
       <MeterRangeSelection />
       <ImageAdAndDescription userId={userId}/>
      </div>
  )
}

export default SellForm



