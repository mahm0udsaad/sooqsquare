"use client"
import { GenericSelection, withGenericSelection } from '@/components/dynamicSelection';
import { useTranslation } from '../../app/i18n/client';
import { useSearchParams } from 'next/navigation';
import { carBrands, carTypesArray, yearsArray } from '@/data/staticData';

  
const SelectionComp =  withGenericSelection(GenericSelection);

  const Selectors =({  lng   }) =>{
    const { t } = useTranslation(lng,"translation")
    const searchParams = useSearchParams()
    const brand = searchParams.get('brand')
    const models = carBrands[`${brand}`]

      const transmissionProps = {
        title: t('transmission'),
        itemsArray: [
          'Automatic',
          'Manual',
        ],
        shouldOpen: true,
        paramNameToSet:'transmission',
        paramsToCheck: [
          'category',
          'uploadedImages',
          'brand',
          'year',
          'carType',
          'model',
          'carStatus',
        ],
      };
      const specificationSelectionProps = {
        title: t('DropdownText'), // Replace with your specific translation key
        itemsArray: [
          t('Gulf'),
          t('Japanese'),
          t('LosAngeles'),
          t('European'),
          t('Other'),
        ], 
        shouldOpen: true,
        paramNameToSet: 'RegionalSpecifications',
        paramsToCheck: [
          'model',
          'brand',
          'category',
          'uploadedImages',
          'location',
          'carType',
          'year',
          'carStatus',
          'transmission',
        ],
      };
      const fuelTypeSelectionProps = {
        title: t('fuelType'),
        itemsArray: [
          t('fuelTypes.Petrol'),
          t('fuelTypes.Diesel'),
          t('fuelTypes.Electric'),
          t('fuelTypes.Hybrid'),
          t('fuelTypes.Other'),
        ],
        shouldOpen: true,
        paramNameToSet: 'fuelType',
        paramsToCheck: [
          'brand',
          'location',
          'category',
          'model',
          'year',
          'carType',
          'carStatus',
          'transmission',
          'RegionalSpecifications',
          'uploadedImages',
        ],
      };
      const engineCapacitySelectorProps = {
        title: t('engineCapacity'), // Replace with your specific translation key
        itemsArray: [
          'Up to 1000',
          '1001 - 1500',
          '1501 - 2000',
          '2001 - 2500',
          'Above 2500', 
        ],
        shouldOpen: true, // Adjust as per your logic
        paramNameToSet: 'EnginCapacity', // Adjust parameter name
        paramsToCheck: [
          'brand',
          'category',
          'model',
          'year',
          'carType',
          'carStatus',
          'uploadedImages',
          'transmission',
          'RegionalSpecifications',
          'fuelType',
        ],
      };
      const meterRangeSelectionProps = {
        title: t('meterRange'), // Replace with your specific translation key
        itemsArray: [
          '0 - 1000 km',
          '1000 - 5000 km',
          '5000 - 10000 km',
          '10000 - 15000 km',
          '15000 - 20000 km',
        ], // Adjust based on your specific translations or labels
        shouldOpen: true, // Adjust as per your logic
        paramNameToSet: 'meterRange', // Adjust parameter name
        paramsToCheck: [
          'brand',
          'category',
          'model',
          'year',
          'carType',
          'carStatus',
          'uploadedImages',
          'transmission',
          'RegionalSpecifications',
          'fuelType',
          'EnginCapacity',
        ],
      };
      const paintTypeSelectorProps = {
        title: t('paintType'), // Replace with your specific translation key
        itemsArray: [
          t('Original paint'),
          t('Partial paint'),
          t('Complete paint'),
          t('Another'),
        ], // Adjust based on your specific translations or labels
        shouldOpen: true, // Adjust as per your logic
        paramNameToSet: 'paintType', // Adjust parameter name
        paramsToCheck: [
          'brand',
          'category',
          'model',
          'year',
          'carType',
          'carStatus',
          'uploadedImages',
          'transmission',
          'RegionalSpecifications',
          'fuelType',
          'EnginCapacity',
          'meterRange',
        ],
      };
      const carStatusSlectorProps = {
        title: t('carstatus'), // Replace with your specific translation key
        itemsArray: [
            t('used'),
            t('new'),
        ], 
        shouldOpen: true, 
        paramNameToSet: 'carStatus',
        paramsToCheck: [
            'uploadedImages',
        ],
      };
      const modelSelectionProps = {
       title: t('carModel'),
       itemsArray: models,
       shouldOpen: !searchParams.has('model')  && searchParams.has('carType') && searchParams.has('year'),
       paramNameToSet:'model',
       paramsToCheck: [
         'category',
         'uploadedImages',
         'location',
         "brand"
       ],
     };
     const yearSelectionProps = {
       title: t('carYear'),
       itemsArray: yearsArray,
       shouldOpen: searchParams.has('carType') && !searchParams.has('year'),
       paramNameToSet: 'year',
       paramsToCheck: [
         'category',
         'uploadedImages',
         'location',
         "brand"
       ],
     };
     const carTypeSelectionProps = {
       title: t('cartype'),
       itemsArray: carTypesArray,
       shouldOpen: !searchParams.has('carType'),
       paramNameToSet: 'carType',
       paramsToCheck: [
         'category',
         'uploadedImages',
         'location',
         "brand"
       ],
     };

    return (
     <>
        {!searchParams.has('carStatus') && <SelectionComp {...carStatusSlectorProps} />}
        {!searchParams.has('transmission') && <SelectionComp {...transmissionProps} />}
        {!searchParams.has('RegionalSpecifications') && <SelectionComp {...specificationSelectionProps} />}
        {!searchParams.has('fuelType') && <SelectionComp {...fuelTypeSelectionProps} />}
        {!searchParams.has('EnginCapacity') && <SelectionComp {...engineCapacitySelectorProps} />}
        {!searchParams.has('meterRange') && <SelectionComp {...meterRangeSelectionProps} />}
        {!searchParams.has('paintType') && <SelectionComp {...paintTypeSelectorProps} />}
        {!searchParams.has('model') || !searchParams.has('year') || !searchParams.has('carType')  ?
            <div className='grid grid-cols-3 gap-4 mx-8 pt-8'>
            <SelectionComp {...modelSelectionProps} />
            <SelectionComp {...yearSelectionProps} />
            <SelectionComp {...carTypeSelectionProps} />
            </div>
            :null    
            }
     </>
    )
}

export default Selectors


