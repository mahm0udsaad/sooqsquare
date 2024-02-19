import dynamic from 'next/dynamic';
import { getUserByEmail } from '@/prisma/actions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import SelectProfile from '@/components/shopAdsForms/profileSelector';
import { OverView } from '@/components/sellForms';
import SkeletonScreen from '@/components/skeletons/brandsSkeleton'
import DropdownSkeleton from '@/components/skeletons/selectorSkeleton'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { createAd, saveAd } from '../../../prisma/actions';
import { PublishBtn, SaveBtn } from '../../../components/component/buttons/formBtns';
import {  DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import Link from "next/link";
import { BsThreads } from "react-icons/bs";
import { FaStoreAlt } from "react-icons/fa";

const SellForm = async ({ params : { lng } , searchParams  }) =>{
     const open = searchParams.sucess

      const CategoriesForm = dynamic(() => import(`@/components/shopAdsForms/categoryForm`),{
          ssr: false,
          loading:()=> <p>CategoriesForm...</p>
      });
      const Selectors = dynamic(() => import(`@/components/shopAdsForms/selectors`),{
          ssr: false,
          loading:()=> <DropdownSkeleton />
      });
      const MultiImageForm = dynamic(() => import(`@/components/MultibleImages`),{
          ssr: false,
          loading:()=> <SkeletonScreen/>
      });
      const CarBrandSelector = dynamic(() => import(`@/components/carBrandSelection`),{
      ssr: false,
      loading:()=> <SkeletonScreen/>
      });
      const LocationDetails = dynamic(() => import(`@/components/LocationSelector`),{
      ssr: false,
      loading:()=> <DropdownSkeleton />
      });
      const ExtraFeatures = dynamic(() => import(`@/components/shopAdsForms/extraFeatures`),{
      ssr: false,
      loading:()=> <DropdownSkeleton />
      });
      const CarChassis = dynamic(() => import(`@/components/shopAdsForms/carChassis`),{
      ssr: false,
      loading:()=> <DropdownSkeleton />
      });
      const PriceSelection = dynamic(() => import(`@/components/shopAdsForms/priceForm`),{
      ssr: false,
      loading:()=> <DropdownSkeleton />
      });
      const NameDescriptionSelector = dynamic(() => import(`@/components/NameDescriptionSelector`) ,{
      ssr: false,
      loading:()=> <DropdownSkeleton />
      });
       const ColorPicker = dynamic(() => import(`@/components/shopAdsForms/colorPicker`) ,{
      ssr: false,
      loading:()=> <DropdownSkeleton />
      });

      const extractUploadedImages = () => {
        // Iterate through searchParams to find parameters related to uploaded images
        for (const key in searchParams) {
          if (Object.prototype.hasOwnProperty.call(searchParams, key)) {
            // Check if the parameter key starts with the pattern for uploaded images
            if (key.startsWith("uploadedImage")) {
              uploadedImages.push(searchParams[key]);
            }
          }
        }
      };
      const extractExtraFeaturs = () => {
        // Iterate through searchParams to find parameters related to uploaded images
        for (const key in searchParams) {
          if (Object.prototype.hasOwnProperty.call(searchParams, key)) {
            // Check if the parameter key starts with the pattern for uploaded images
            if (key.startsWith("extraFeature")) {
              extraFeatures.push(searchParams[key]);
            }
          }
        }
      };

      const uploadedImages = [];
      extractUploadedImages()

      const extraFeatures = [];
      extractExtraFeaturs()

      const LogedInUser = await getServerSession() 
      const user = await getUserByEmail(LogedInUser?.user.email)

      if (!user?.phoneNumber || !user) redirect('/sign-in')

      const data = {
        name: searchParams.name,
        color: searchParams.color,
        country: user?.country,
        city: searchParams.city,
        carStatus: searchParams.carStatus,
        price: searchParams.price,
        payment: searchParams.payment,
        brand: searchParams.brand,
        model: searchParams.model,
        year: searchParams.year,
        carType: searchParams.carType,
        paintType:searchParams.paintType,
        adImages: uploadedImages,
        category: searchParams.category,
        transmission: searchParams.transmission,
        fuelType: searchParams.fuelType,
        CarChassis: searchParams.carChassis ,
        EnginCapacity: searchParams.EnginCapacity,
        extraFeatures: extraFeatures.join('-') ,
        RegionalSpecifications: searchParams.RegionalSpecifications,
        meterRange: searchParams.meterRange,
        description:searchParams.description
      };

    return (
      <div className='relative w-11/12 mx-auto pt-6 min-h-screen flex'>
           <OverView lng={lng} />
        <div className="flex flex-col w-11/12 mx-8">
          <div className="w-full">
            <div className="w-full">
              {!searchParams.profile ? <SelectProfile lng={lng} user={user}/> : null}
              {!searchParams.category && searchParams.profile && <CategoriesForm lng={lng} />}
              {!searchParams.uploadedImages && searchParams.category && searchParams.profile && <MultiImageForm  lng={lng} />}
              {!searchParams.brand && searchParams.city && <CarBrandSelector lng={lng} />}
              {!searchParams.color && searchParams.model && <ColorPicker  lng={lng}/>}
              {!searchParams.carChassis && searchParams.carStatus && <CarChassis lng={lng} />}
              {!searchParams.price && searchParams.carChassis && <PriceSelection lng={lng} />}
              {!searchParams.name && searchParams.price && <NameDescriptionSelector lng={lng} />}
              {searchParams.paintType && <ExtraFeatures lng={lng} />}
              {searchParams.carStatus && <LocationDetails user={user} lng={lng}/>}
              {searchParams.uploadedImages && <Selectors lng={lng}/>}
              {searchParams.name && searchParams.description &&
               <>
               <div className="grid grid-cols-3 gap-2">
               {
                    Object.keys(data).map((key) => (
                      <div className={`${key === 'adImages'? 'hidden' : ''}`} key={key}>
                        <Label htmlFor={key}>{key}</Label>
                        <Input type="text" id={key} name={key}  value={data[key]} readOnly />
                      </div>
                    ))
                  }
               </div>
                <div className="w-full flex pt-4 justify-start items-center gap-4">
                <form action={saveAd}>
               {searchParams.profile === "mainProfile" ?
                <Input className='hidden' type="text" id={'user'} name={'user'} value={user.id} readOnly />
              :  <Input className='hidden' type="text" id={'shop'} name={'shop'} value={searchParams.profile?.split('=')[1]} readOnly />
              }
                <Input className='hidden' type="text" id={'adStatus'} name={'adStatus'} value={'active'} readOnly />
                  {
                    Object.keys(data).map((key) => (
                      <div className={`hidden`} key={key}>
                        <Label htmlFor={key}>{key}</Label>
                        <Input type="text" id={key} name={key}  value={data[key]} readOnly />
                      </div>
                    ))
                  }
                  <SaveBtn lng={lng} />
               </form>

                 <form action={createAd}>
                 {searchParams.profile === "mainProfile" ?
                  <Input className='hidden' type="text" id={'user'} name={'user'} value={user.id} readOnly />
                :  <Input className='hidden' type="text" id={'shop'} name={'shop'} value={searchParams.profile?.split('=')[1]} readOnly />
                }
                    {
                      Object.keys(data).map((key) => (
                        <div className={`hidden`} key={key}>
                          <Label htmlFor={key}>{key}</Label>
                          <Input type="text" id={key} name={key}  value={data[key]} readOnly />
                        </div>
                      ))
                    }
                  <PublishBtn lng={lng} />
                 </form>
                </div>
               </>
              }
            </div>

              <Dialog open={open}>
              <DialogContent className="bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <DialogHeader className=" p-6 sm:p-8">
                  <DialogTitle className="text-white text-2xl font-semibold">Congratulations!</DialogTitle>
                  <DialogDescription className="text-white text-lg mt-2">Your ad is created successfully!</DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-center space-x-4 p-6 sm:p-8">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50"
                    href={`${searchParams.profile?.split('=')[0] == 'shop' ? `/dashboard/shopAds/${searchParams.profile?.split('=')[1]}` : '/dashboard/myAds' }`}
                  >
                    <BsThreads className="h-5 w-5 mr-2" />
                    My Ads
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                    href="/vehicle"
                  >
                    <FaStoreAlt className="h-5 w-5 mr-2" />
                    Market
                  </Link>
                </DialogFooter>
              </DialogContent>
                </Dialog>

          </div>
        </div>
      </div>
    )
}

export default SellForm




