import dynamic from "next/dynamic";

const HomePage = dynamic(() => import(`../../components/home-page`));

export default async function Home({ params : { lng }  }) {

  return (
    <>
    <HomePage lng={lng}/>
    </>
  )
} 
