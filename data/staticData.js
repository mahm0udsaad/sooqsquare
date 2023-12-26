import { TiDocumentText } from "react-icons/ti";
import { RxColorWheel } from "react-icons/rx";
import { GiCarKey } from "react-icons/gi";
import { MdOutlineCarCrash } from "react-icons/md";
import { FaTruck, FaCar, FaCarCrash } from 'react-icons/fa';
import { IoBoatOutline } from "react-icons/io5";

const categoriesData = [
  { text: 'TrucksAndTrailers', icon: <FaTruck/> },
  { text: 'CarsForSale', icon: <GiCarKey/> },
  { text: 'CarsForRent', icon: <FaCar/> },
  { text: 'CrashedCars', icon: <FaCarCrash/> },
  { text: 'BoatsYachts', icon: <IoBoatOutline/> },
  { text: 'CarPlatesNumbers', icon: <TiDocumentText/> },
  { text: 'WheelsRims', icon: <RxColorWheel/> },
  { text: 'CarSpareParts', icon: <MdOutlineCarCrash/> },
];
  export { categoriesData }