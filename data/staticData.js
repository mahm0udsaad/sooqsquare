import { TiDocumentText } from "react-icons/ti";
import { RxColorWheel } from "react-icons/rx";
import { GiCarKey } from "react-icons/gi";
import { MdOutlineCarCrash } from "react-icons/md";
import { FaTruck, FaCar, FaCarCrash } from 'react-icons/fa';
import { IoBoatOutline } from "react-icons/io5";

const categoriesData = [
    { text: 'Trucks and Trailers', icon: <FaTruck/> },
    { text: 'Cars for Sale', icon: <GiCarKey/> },
    { text: 'Cars for Rent', icon: <FaCar/> },
    { text: 'Crashed Cars', icon: <FaCarCrash/> },
    { text: 'Boats - Yachts', icon: <IoBoatOutline/> },
    { text: 'Car Plates Numbers', icon: <TiDocumentText/> },
    { text: 'Wheels - Rims', icon: <RxColorWheel/> },
    { text: 'Car Spare Parts', icon: <MdOutlineCarCrash/> },
  ];

  export { categoriesData}