import { RiTimerFlashLine } from "react-icons/ri";
import { categoriesData } from "../data/staticData"
import Image from 'next/image'; 
import { useTranslation } from "../app/i18n/index"
import Link from 'next/link';
import { CategroyLink } from './categoriesCard';


const HomePage= async ({ lng })=> {
    const { t } = await useTranslation(lng , "translation")

  return (
    <>
        <main className='mx-auto w-[95%]'>
        <div className="grid grid-cols-4 gap-4 w-11/12 mx-auto py-4">
        {categoriesData.map((item, i) => (
        <CategroyLink key={i} icon={item.icon} text={t(`categories.${item.text}`)} />
        ))}
        </div>
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-1/2 max-md:w-full max-md:ml-0">
            <div className="gt-text text-5xl font-bold leading-[73px] bg-clip-text relative w-full mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-[57px] max-md:mt-10">
            {t('RevolutionizeYourRide')} <br />{t('RentBuySellAndMore')}
            </div>
          </div>
          <div className="flex flex-col items-stretch w-4/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="relative flex grow flex-col items-end max-md:max-w-full max-md:mt-2.5">
              <div className="flex justify-between mx-6 px-16 hover:opacity-70 cursor-pointer py-12 rounded-3xl bg-gradient-to-r from-green-900 to-green-500 items-start max-md:px-5">
              <RiTimerFlashLine className='text-4xl text-white'/>
              <div className="text-white text-3xl font-bold leading-10 my-auto">
              {t('QuickSell')}
            </div>
              </div>
              <div className="self-stretch mt-6 max-md:max-w-full">
              <div className="gap-x-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-full relative">
                    {/* First image as background */}
                    <Image
                    src="/site/Ads%201.svg" // Update the path to your SVG file
                    alt="Ads Icon"
                    width={450}
                    height={300}
                    style={{ objectFit: 'cover' }} // Adjust as needed
                    />
                    {/* Content overlay */}
                    <div className="absolute top-0 left-0 p-4">
                    <h2 className="text-white text-xl font-bold mb-4">
                      {t('BestPlatformForSellingCars')}
                    </h2>
                    <p className="text-white text-sm mb-4">
                      {t('CarRentalSafelyAndReliably')}
                    </p>
                    <Link href={'/sell'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      {t('Sell')}
                    </Link>
                    </div>
                    {/* Second image placed absolutely */}
                    <Image
                    className="absolute bottom-5 right-10"
                    src="/site/buyCar.png" 
                    width={220}
                    height={120}
                    alt="Sell Car"
                    />
                </div>
                <div className="flex flex-col items-stretch w-full relative">
                    {/* First image as background */}
                    <Image
                    src="/site/Ads%202.svg" // Update the path to your SVG file
                    alt="Ads Icon"
                    width={450}
                    height={300}
                    style={{ objectFit: 'cover' }} // Adjust as needed
                    />
                    {/* Content overlay */}
                    <div className="absolute top-0 left-0 p-4">
                    <h2 className="text-white text-xl font-bold mb-4">
                      {t('EasyWayToBuyACar')}
                    </h2>
                    <p className="text-white text-sm mb-4">
                      {t('ProvidingCheapCarRentalServices')}
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      {t('Buy')}
                    </button>
                    </div>
                    {/* Second image placed absolutely */}
                    <Image
                    className="absolute bottom-5 right-10"
                    width={220}
                    height={120}
                    src="/site/sellCar.png" 
                    alt="Buy Car"
                    />
                </div>
             </div>
              </div>
            </div>
            </div>
            </div>
        </main>
    </>
  )
}
export default  HomePage