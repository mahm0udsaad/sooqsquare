
import  { OverView  , CarForSellAd} from '../../../components/sellForms'
const SellForm = async ({ params : { lng }  }) =>{

  return (
    <div className='pt-20 relative w-11/12 mx-auto  flex lg:flex-row flex-col-reverse'>
      <OverView lng={lng} />
    <div className="flex flex-col w-11/12 mx-8">
      <div className="w-full">
        <CarForSellAd lng={lng}/>
      </div>
    </div>
  </div>
  
  )
}

export default SellForm



