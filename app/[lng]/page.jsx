import HomePage from '../../components/home-page'
export default function Home({ params : { lng }  }) {
  return (
    <>
    <HomePage lng={lng}/>
    </>
  )
} 
