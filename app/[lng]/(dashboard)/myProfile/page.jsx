import { getServerSession } from 'next-auth';
import { getUserByEmail } from '@/prisma/actions'
import UserProfile from '../../../../components/component/user-profile';
import { redirect } from 'next/navigation';

export default async function MyProfile({params:{lng}}) {

    const logedUser = await getServerSession() 
    const user = await getUserByEmail(logedUser?.user.email) 
    if(user.shop){
      redirect('/myShop')
    }
    console.log(user.shop);
    return (
       <div className='flex w-11/12 mx-auto flex-col gap-3'>
          <UserProfile user={user} />
       </div>
  )
}
