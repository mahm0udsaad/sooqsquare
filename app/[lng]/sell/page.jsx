
"use client"
import {  useRouter, useSearchParams } from 'next/navigation';
import { AdCategroy } from '../../../components/categoriesCard';
import { categoriesData ,carBrands ,yearsArray ,carTypesArray} from "../../../data/staticData"
import { useTranslation } from "../../i18n/client"
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuGroup ,DropdownMenuSeparator, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { IoIosArrowDropdown } from "react-icons/io";
import upload from './action'
import { useState } from 'react';
import { RiAttachmentLine, RiPencilLine } from 'react-icons/ri'; // Assuming you've imported the required icons

const SellForm = ({ params : { lng }  }) =>{
    const  category  = useSearchParams().get("category");
    const  brand  = useSearchParams().get("brand");
  return (
      <div className=''>
      <CategoriesForm  lng={lng}/>
      <CarBrandSelector />
      <ModelSelection />
      <ModelYearSelection />
      <CarTypeSelection />
      <CarStatusSelection />
      <TransmissionSelection />
       <FuelTypeSelection  />
       <MeterRangeSelection />
       <ImageAdAndDescription />
      {/* <div className="absolute top-0 left-0">
      <h1>{category}</h1>
      <h1>{brand}</h1>
      </div> */}
      </div>
  )
}

export default SellForm

 const CategoriesForm = ({lng}) =>{
     const { t } = useTranslation(lng , "translation")
    const  category  = useSearchParams().get("category");
    if ( category ) return ; 
    return (
        <>
        <h1 className="text-center text-2xl py-4">
            what you want to sell
        </h1>
        <div className="grid grid-cols-4 gap-4 w-11/12 mx-auto py-4">
        {categoriesData.map((item, i) => (
        <AdCategroy lng={lng} key={i} icon={item.icon} text={item.text} />
        ))}
        </div>
        </>
    )
}
const CarBrandSelector = () => {
const router = useRouter();
const category = useSearchParams().get("category");
const brand = useSearchParams().get("brand");

if (brand || !category ) return null;

function handleSelectBrand(selectedBrand) {
    console.log("brand: " + selectedBrand);
    router.push(`?category=${category}&brand=${selectedBrand}`);
}

return (
    <div className="w-full">
    <div className={'flex justify-center items-center flex-col'} >
        <h1 className="text-center text-2xl py-4">Choose your brand</h1>
        <div className="grid grid-cols-5 gap-4" >
        {Object.keys(carBrands).map((brand, index) => (
            <div
            key={index}
            onClick={() => handleSelectBrand(brand)}
            className="border rounded p-8 cursor-pointer hover:opacity-70"
            >
            {brand}
            </div>
        ))}
        </div>
    </div>
    </div>
);
};
const ModelSelection = () => {
    const router = useRouter();
    const  brand  = useSearchParams().get("brand");
    const  category  = useSearchParams().get("category");
    const  model  = useSearchParams().get("model");

    if ( model || !brand || !category  ) return ; 
    
    const models = carBrands[`${brand}`]

    function handleSelectModel(model) {
        router.push(`?category=${category}&brand=${brand}&model=${model}`);
    
      }
    return (
        <div key="1" className="w-4/5 mx-auto  flex justify-center">
        <DropdownMenu className="py-3" open>
            <DropdownMenuTrigger asChild>
            <Button className="w-full flex justify-between items-center" variant="outline">
                Car Model
                <IoIosArrowDropdown className="w-4 h-4" />
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent  className="w-full">
            <DropdownMenuLabel>Models</DropdownMenuLabel>
            <DropdownMenuGroup  className="w-full">
                  {models && models.length > 0 ? (
                    models.map((model, index) => (
                    <DropdownMenuItem className='w-full' onClick={()=> handleSelectModel(model)} key={index}>{model}</DropdownMenuItem>
                    ))
                ) : (
                    <DropdownMenuItem>No models available</DropdownMenuItem>
                )}
            </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}
const ModelYearSelection = () => {
    const router = useRouter();
    const  brand  = useSearchParams().get("brand");
    const  category  = useSearchParams().get("category");
    const  model  = useSearchParams().get("model");
    const  year  = useSearchParams().get("year");

    if ( year || !model || !brand || !category  ) return ; 
    
    function handleSelectModel(year) {
        router.push(`?category=${category}&brand=${brand}&model=${model}&year=${year}`);
      }
    return (
        <div key="1" className="w-4/5 mx-auto  flex justify-center">
        <DropdownMenu className="py-3" open>
            <DropdownMenuTrigger asChild>
            <Button className="w-full flex justify-between items-center" variant="outline">
                Car year
                <IoIosArrowDropdown className="w-4 h-4" />
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent  className="w-full">
            <DropdownMenuLabel>year</DropdownMenuLabel>
            <DropdownMenuGroup  className="w-full h-[60vh] overflow-y-scroll">
             {    
               yearsArray.map((year, index) => (
                    <DropdownMenuItem className='w-full' onClick={()=> handleSelectModel(year)} key={index}>{year}</DropdownMenuItem>
                    ))}
       
            </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}
const CarTypeSelection = () => {
const router = useRouter();
const  brand  = useSearchParams().get("brand");
const  category  = useSearchParams().get("category");
const  model  = useSearchParams().get("model");
const  year  = useSearchParams().get("year");
const  carType  = useSearchParams().get("carType");

if ( carType || !year || !model || !brand || !category  ) return ; 

function handleSelectModel(type) {
    router.push(`?category=${category}&brand=${brand}&model=${model}&year=${year}&carType=${type}`);
    }
return (
    <div key="1" className="w-4/5 mx-auto  flex justify-center">
    <DropdownMenu className="py-3" open>
        <DropdownMenuTrigger asChild>
        <Button className="w-full flex justify-between items-center" variant="outline">
            Car type
            <IoIosArrowDropdown className="w-4 h-4" />
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent  className="w-full">
        <DropdownMenuGroup  className="w-full h-[60vh] overflow-y-scroll">
            {    
            carTypesArray.map((type, index) => (
                <DropdownMenuItem className='w-full p-4' onClick={()=> handleSelectModel(type)} key={index}>{type}</DropdownMenuItem>
                ))}
    
        </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
    </div>
)
}
const CarStatusSelection = () => {
const router = useRouter();
const brand = useSearchParams().get("brand");
const category = useSearchParams().get("category");
const model = useSearchParams().get("model");
const year = useSearchParams().get("year");
const carType = useSearchParams().get("carType");
const carStatus = useSearchParams().get("carStatus");

if (!brand || !category  || !model || !year || !carType || carStatus) return null;

function handleSelectStatus(status) {
    router.push(`?category=${category}&brand=${brand}&model=${model}&year=${year}&carType=${carType}&carStatus=${status}`);
}

return (
    <div key="1" className="w-4/5 mx-auto flex flex-col justify-center items-center">
        <div className="w-full text-2xl font-semibold flex justify-around items-center" >
            Car status
            <IoIosArrowDropdown className="w-4 h-4" />
        </div>
        <div className="w-full flex justify-center gap-4 pt-8">
        <Card onClick={()=>handleSelectStatus("New")} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
            <CardContent className="p-4">
            <h2 className="font-bold text-lg mb-2">New</h2>
            </CardContent>
        </Card>
        <Card onClick={()=>handleSelectStatus("Used")} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
            <CardContent className="p-4">
            <h2 className="font-bold text-lg mb-2">Used</h2>
            </CardContent>
        </Card>
        </div>
    </div>
);
};
const TransmissionSelection = () => {
const router = useRouter();
const brand = useSearchParams().get("brand");
const category = useSearchParams().get("category");
const model = useSearchParams().get("model");
const year = useSearchParams().get("year");
const carType = useSearchParams().get("carType");
const carStatus = useSearchParams().get("carStatus");
const transmission = useSearchParams().get("transmission");

if (!brand || !category  || !model || !year || !carType || !carStatus || transmission) return null;

function handleSelectTransmission(selectedTransmission) {
    router.push(`?category=${category}&brand=${brand}&model=${model}&year=${year}&carType=${carType}&carStatus=${carStatus}&transmission=${selectedTransmission}`);
}

return (
    <div key="1" className="w-4/5 mx-auto flex flex-col justify-center items-center">
    <div className="w-full text-2xl font-semibold flex justify-around items-center">
        Transmission
        <IoIosArrowDropdown className="w-4 h-4" />
    </div>
    <div className="w-full flex justify-center gap-4 pt-8">
        <Card onClick={() => handleSelectTransmission('Automatic')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
            <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-2">Automatic</h2>
            </CardContent>
        </Card>
        <Card onClick={() => handleSelectTransmission('Manual')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
            <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-2">Manual</h2>
            </CardContent>
        </Card>
    </div>
</div>
);
};
const FuelTypeSelection = () => {
const router = useRouter();
const brand = useSearchParams().get("brand");
const category = useSearchParams().get("category");
const model = useSearchParams().get("model");
const year = useSearchParams().get("year");
const carType = useSearchParams().get("carType");
const carStatus = useSearchParams().get("carStatus");
const transmission = useSearchParams().get("transmission");
const fuelType = useSearchParams().get("fuelType");

if (!brand || !category  || !model || !year || !carType || !carStatus || !transmission || fuelType) return null;

function handleSelectFuelType(selectedFuelType) {
    router.push(`?category=${category}&brand=${brand}&model=${model}&year=${year}&carType=${carType}&carStatus=${carStatus}&transmission=${transmission}&fuelType=${selectedFuelType}`);
}

return (
    <div key="1" className="w-4/5 mx-auto flex flex-col justify-center">
    <div className="w-full text-2xl font-semibold flex justify-around items-center">
        Fuel Type
        <IoIosArrowDropdown className="w-4 h-4" />
    </div>
    <div className="w-full grid grid-cols-3 justify-center items-center gap-4 pt-8">
        <Card onClick={() => handleSelectFuelType('Petrol')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
            <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-2">Petrol</h2>
            </CardContent>
        </Card>
        <Card onClick={() => handleSelectFuelType('Diesel')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
            <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-2">Diesel</h2>
            </CardContent>
        </Card>
        <Card onClick={() => handleSelectFuelType('Electric')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
            <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-2">Electric</h2>
            </CardContent>
        </Card>
        <Card onClick={() => handleSelectFuelType('Hybrid')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
            <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-2">Hybrid</h2>
            </CardContent>
        </Card>
        <Card onClick={() => handleSelectFuelType('Other')} className="w-64 mb-8 hover:opacity-50 cursor-pointer">
            <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-2">Other</h2>
            </CardContent>
        </Card>
    </div>
</div>
);
};
const MeterRangeSelection = () => {
const router = useRouter();
const brand = useSearchParams().get("brand");
const category = useSearchParams().get("category");
const model = useSearchParams().get("model");
const year = useSearchParams().get("year");
const carType = useSearchParams().get("carType");
const carStatus = useSearchParams().get("carStatus");
const transmission = useSearchParams().get("transmission");
const fuelType = useSearchParams().get("fuelType");
const meterRange = useSearchParams().get("meterRange");

if (!brand || !category  || !model || !year || !carType || !carStatus || !transmission || !fuelType || meterRange) return null;

const meterRanges = [
    { label: '0 - 1000 km', value: '0-1000' },
    { label: '1000 - 5000 km', value: '1000-5000' },
    { label: '5000 - 10000 km', value: '5000-10000' },
];

function handleSelectMeterRange(selectedRange) {
    router.push(`?category=${category}&brand=${brand}&model=${model}&year=${year}&carType=${carType}&carStatus=${carStatus}&transmission=${transmission}&fuelType=${fuelType}&meterRange=${selectedRange}`);
}

return (
    <div key="1" className="w-4/5 mx-auto flex justify-center">
    <DropdownMenu className="py-3" open>
        <DropdownMenuTrigger asChild>
        <Button className="w-full flex justify-between items-center" variant="outline">
            Meter Range
            <IoIosArrowDropdown className="w-4 h-4" />
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
        <DropdownMenuGroup className="w-full h-[60vh] overflow-y-scroll">
            {meterRanges.map((range, index) => (
            <DropdownMenuItem className='w-full p-4' onClick={() => handleSelectMeterRange(range.value)} key={index}>
                {range.label}
            </DropdownMenuItem>
            ))}
        </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
    </div>
);
};
  
function ImageAdAndDescription() {
  const brand = useSearchParams().get("brand");
  const category = useSearchParams().get("category");
  const model = useSearchParams().get("model");
  const year = useSearchParams().get("year");
  const carType = useSearchParams().get("carType");
  const carStatus = useSearchParams().get("carStatus");
  const transmission = useSearchParams().get("transmission");
  const fuelType = useSearchParams().get("fuelType");
  const meterRange = useSearchParams().get("meterRange");

  if (!brand || !category  || !model || !year || !carType || !carStatus || !transmission || !fuelType || !meterRange ) return null;
  
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div className="grid w-full max-w-md items-center gap-4 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-semibold text-gray-700">Upload Files</h1>
      <form  action={upload}> 
       <div className="relative flex items-center justify-center bg-gray-50 rounded p-4">
        <input
          className="pl-12 w-full text-sm text-gray-600"
          type="file"
          name="file"
        />
        <RiAttachmentLine className="w-6 h-6 absolute left-4 text-gray-600" />
      </div>
      <div className="relative flex items-center justify-center bg-gray-50 rounded p-4">
        <input
          className="pl-12 w-full text-sm text-gray-600"
          id="description"
          name="description"
          placeholder="Enter a description..."
          type="text"
        />
        <RiPencilLine className="w-6 h-6 absolute left-4 text-gray-600" />
      </div>
    <input type="hidden" name="brand" value={brand} />
    <input type="hidden" name="category" value={category} />
    <input type="hidden" name="model" value={model} />
    <input type="hidden" name="year" value={year} />
    <input type="hidden" name="carType" value={carType} />
    <input type="hidden" name="carStatus" value={carStatus} />
    <input type="hidden" name="transmission" value={transmission} />
    <input type="hidden" name="fuelType" value={fuelType} />
    <input type="hidden" name="meterRange" value={meterRange} />
      <button className="bg-blue-600 hover:bg-blue-700 text-white rounded py-2">
        Upload
      </button>
      </form>
    </div>
     </main>
  );
}
