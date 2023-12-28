import { auth, currentUser } from '@clerk/nextjs'
import HomePage from '../../components/home-page'
import { createUserIfNotExists } from '../../prisma/actions'

export default async function Home({ params : { lng }  }) {
  const { userId } = await auth()
  const user = await currentUser()

  const userData = {
    userId,
    username:user.firstName,
    email:user.emailAddresses[0].emailAddress
  }

  return (
    <>
    <HomePage lng={lng}/>
    </>
  )
} 
