
import { getServerSession } from 'next-auth';
import DynamicCard from '../../../../components/adCard'
import { getUserByEmail } from '@/prisma/actions';
import {getAdsByUserId} from '../actions'
import Dashboard from '@/components/component/dashboard'

export default async function MyAds({params:{lng}}) {
    const logedUser = await getServerSession() 
    const user = await getUserByEmail(logedUser.user.email) 
    const ads = await getAdsByUserId(user.id)
  return (
       <Dashboard />
  )
}
