import ReportPage from '@/components/component/reports'
import { getServerSession } from "next-auth";
import { getUserByEmail } from '@/prisma/actions'

export default async function MyShop({params}) {

  const logedUser = await getServerSession()
  const user = await getUserByEmail(logedUser?.user?.email)

    return (
       <>
              <ReportPage shop={user}/>
       </>
  )
}
