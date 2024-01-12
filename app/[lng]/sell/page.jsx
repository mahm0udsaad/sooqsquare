
import { getUserByEmail } from '@/prisma/actions'
import  { OverView  , CarForSellAd} from '../../../components/sellForms'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
const SellForm = async ({ params : { lng }  }) =>{
const LogedInUser = await getServerSession() 
const user = await getUserByEmail(LogedInUser?.user.email)

  if (!user?.phoneNumber || !user) redirect('/sign-in')
  return (
    <div className='pt-8 relative w-11/12 mx-auto  flex lg:flex-row flex-col-reverse'>
      <OverView lng={lng} />
    <div className="flex flex-col w-11/12 mx-8">
      <div className="w-full">
        <CarForSellAd lng={lng} userId={user.id}/>
      </div>
    </div>
  </div>
  
  )
}

export default SellForm



