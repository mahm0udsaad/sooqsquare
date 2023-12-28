import HomePage from '../../components/home-page'

export default async function Home({ params : { lng }  }) {

  return (
    <>
    <HomePage lng={lng}/>
    </>
  )
} 
