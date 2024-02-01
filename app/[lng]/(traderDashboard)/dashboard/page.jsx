import Dashboard from "../../../../components/component/shops-dashboard";
import { getServerSession } from 'next-auth'
import { getUserByEmail } from '@/prisma/actions'

const MainDashboard = async () => {
    const logedUser = await getServerSession()
    const user = await getUserByEmail(logedUser?.user.email)
    
   return (
       <Dashboard shops={user.shop}/>
    );
}

export default MainDashboard;
