import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import(`../../components/home-page`));

export default async function Home({ params : { lng }  }) {
const user = await getServerSession()

return (
    <>
    <HomePage lng={lng}/>
    </>
  )
} 
