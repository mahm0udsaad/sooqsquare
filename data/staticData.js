import { TiDocumentText } from "react-icons/ti";
import { RxColorWheel } from "react-icons/rx";
import { GiCarKey } from "react-icons/gi";
import { MdOutlineCarCrash } from "react-icons/md";
import { FaTruck, FaCar, FaCarCrash } from 'react-icons/fa';
import { IoBoatOutline } from "react-icons/io5";

const categoriesData = [
  { text: 'TrucksAndTrailers', icon: <FaTruck/> },
  { text: 'CarsForSale', icon: <GiCarKey/> ,link:'/vehicle'},
  { text: 'CarsForRent', icon: <FaCar/> ,link:'/vehicle?CarForRent'},
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
const carBrandsWithLogos = {
  Toyota: '/brandLogos/toyota.png',
  BMW: '/brandLogos/bmw.png',
  Audi: '/brandLogos/audi.png',
  Mercedes: '/brandLogos/mercedes.png',
  Ford: '/brandLogos/ford.png', // Assuming a logo exists for Ford
  Honda: '/brandLogos/honda.png', // Assuming a logo exists for Honda
  Hyundai: '/brandLogos/hyundai.png', // Assuming a logo exists for Hyundai
  Lexus: '/brandLogos/lexus.png', // Assuming a logo exists for Lexus
  Chevrolet: '/brandLogos/chevrolet.png', // Assuming a logo exists for Chevrolet
  Volkswagen: '/brandLogos/wagen.png', // Assuming a logo exists for Volkswagen
  Nissan: '/brandLogos/nissan.png', // Assuming a logo exists for Nissan
  Subaru: '/brandLogos/subaru.png', // Assuming a logo exists for Subaru
  Tesla: '/brandLogos/tesla.png', // Assuming a logo exists for Tesla
  Kia: '/brandLogos/kia.png', // Assuming a logo exists for Kia
  Mazda: '/brandLogos/mazda.png', // Assuming a logo exists for Mazda
  Volvo: '/brandLogos/volvo.png', // Assuming a logo exists for Volvo
  Porsche: '/brandLogos/porsche.png', 
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
const cities = [
  "Dubai",
  "Abu Dhabi",
  "Doha",
  "Riyadh",
  "Muscat",
  "Kuwait City",
  "Manama",
  "Amman",
  "Jerusalem",
  "Beirut",
  "Baghdad",
  "Tehran",
  "Ankara",
  "Istanbul",
  "Damascus",
  "Cairo",
  "Alexandria",
  "Tripoli",
  "Tunis",
  "Algiers",
  // Add more cities as needed
];
const features = [
  "ABS",
  "Air-Conditioning",
  "Airbags",
  "Alarm/Anti-Theft-System",
  "AM/FM-Radio",
  "Aux-Audio-In",
  "Bluetooth-System",
  "Cruise-Control",
  "EBD",
  "Fog-Lights",
  "Keyless-Start",
  "Leather-Seats",
  "Navigation-System",
  "Off-Road-Tyres",
  "Parking-Sensors",
  "Power-Locks",
  "Power-Mirrors",
  "Power-Seats",
  "Power-Steering",
  "Power-Windows",
  "Premium-Wheels/Rims",
  "Rear-View-Camera",
  "Roof-Rack",
  "Sunroof",
  "Touch-Screen",
  "USB-Charger"
];
const ArabCountries = [
  { code: '+20', name: 'Egypt' },
  { code: '+966', name: 'Saudi Arabia' },
  { code: '+971', name: 'United Arab Emirates' },
  { code: '+962', name: 'Jordan' },
  { code: '+965', name: 'Kuwait' },
  { code: '+973', name: 'Bahrain' },
  { code: '+968', name: 'Oman' },
  { code: '+974', name: 'Qatar' },
  { code: '+961', name: 'Lebanon' },
];
const ArabCountriesWithCurrancy = [
  { currencyCode: 'EGP', name: 'Egypt' },
  { currencyCode: 'SAR', name: 'Saudi Arabia' },
  { currencyCode: 'AED', name: 'United Arab Emirates' },
  { currencyCode: 'JOD', name: 'Jordan' },
  { currencyCode: 'KWD', name: 'Kuwait' },
  { currencyCode: 'BHD', name: 'Bahrain' },
  { currencyCode: 'OMR', name: 'Oman' },
  { currencyCode: 'QAR', name: 'Qatar' },
  { currencyCode: 'LBP', name: 'Lebanon' },
  { currencyCode: 'TND', name: 'Tunisia' },
  { currencyCode: 'YER', name: 'Yemen' },
  { currencyCode: 'MAD', name: 'Morocco' },
  { currencyCode: 'DZD', name: 'Algeria' },
  { currencyCode: 'IQD', name: 'Iraq' },
];
  export {ArabCountries, ArabCountriesWithCurrancy, features,cities,categoriesData ,carBrands ,yearsArray ,carTypesArray , carBrandsWithLogos}