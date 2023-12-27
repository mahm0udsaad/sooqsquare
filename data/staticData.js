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
const carBrands = {
  Toyota: ['Corolla', 'Camry', 'Rav4', 'Prius', 'Highlander', 'Tacoma', 'Sienna'],
  BMW: ['3 Series', '5 Series', 'X3', 'X5', '7 Series', 'i3', 'M5'],
  Audi: ['A3', 'A4', 'Q5', 'Q7', 'A6', 'TT', 'R8'],
  Mercedes: ['C-Class', 'E-Class', 'GLC', 'S-Class', 'A-Class', 'G-Class', 'CLA'],
  Ford: ['F-150', 'Mustang', 'Escape', 'Explorer', 'Focus', 'Edge', 'Ranger'],
  Honda: ['Accord', 'Civic', 'CR-V', 'Pilot', 'Odyssey', 'HR-V', 'Fit'],
  Hyundai: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Kona', 'Palisade', 'Veloster'],
  Lexus: ['RX', 'ES', 'NX', 'GX', 'IS', 'LS', 'UX'],
  Chevrolet: ['Silverado', 'Equinox', 'Malibu', 'Traverse', 'Tahoe', 'Camaro', 'Corvette'],
  Volkswagen: ['Jetta', 'Passat', 'Tiguan', 'Golf', 'Atlas', 'Arteon', 'ID.4'],
  Nissan: ['Altima', 'Rogue', 'Sentra', 'Pathfinder', 'Maxima', 'Murano', 'Titan'],
  Subaru: ['Outback', 'Forester', 'Crosstrek', 'Impreza', 'Legacy', 'Ascent', 'WRX'],
  Tesla: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster', 'Cybertruck'],
  Kia: ['Optima', 'Sorento', 'Forte', 'Sportage', 'Soul', 'Telluride', 'Stinger'],
  Mazda: ['Mazda3', 'CX-5', 'Mazda6', 'CX-9', 'MX-5 Miata', 'CX-30', 'CX-3'],
  Volvo: ['S60', 'XC90', 'XC60', 'S90', 'XC40', 'V60', 'V90'],
  Porsche: ['911', 'Cayenne', 'Panamera', 'Macan', 'Taycan', 'Boxster', 'Cayman'],
  };
  const yearsArray = [
  2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
  2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005,
  2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995,
  1994, 1993, 1992, 1991, 1990
  ];
  const carTypesArray = [
  'Sedan', 'Hatchback',  'SUV', 'Coupe', 'Convertible', 'Minivan',
  'Pickup Truck', 'Crossover', 'Wagon', 'Sports Car', 'Luxury Car',
  'Electric Car', 'Hybrid Car', 'Compact Car', 'Off-road Vehicle'
  ];
  export { categoriesData ,carBrands ,yearsArray ,carTypesArray}