import Dashboard from "../../../../components/component/shops-dashboard";
import { getServerSession } from 'next-auth'
import { getUserByEmail } from '@/prisma/actions'
import { redirect } from "next/navigation";

const MainDashboard = async () => {
    const logedUser = await getServerSession();
    const userEmail = logedUser?.user.email;
    if (userEmail) {
      const user = await getUserByEmail(userEmail);
      <Dashboard shops={user.shop}/>
    } else {
       redirect('/sign-in')
    }
}

export default MainDashboard;
