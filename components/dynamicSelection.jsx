"use client"
import {  SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import {  usePathname, useRouter, useSearchParams } from "next/navigation";

export const GenericSelection = ({ title, itemsArray, shouldOpen, handleSelection}) => {
    return (
      <Select className="flex-grow" open={shouldOpen}>
        <SelectTrigger>
          <div className="w-full py-3 text-2xl font-semibold flex justify-around items-center">
          {title}
          </div>
          </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {itemsArray && itemsArray.map((item) => (
              <SelectItem className="py-3" key={item} onMouseDown={() => handleSelection(item)}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
};
export const FilterSelection = ({ title, itemsArray,  handleSelection ,paramNameToSet}) => {
      const searchParams = useSearchParams();
      const seletedTitle = searchParams.get(paramNameToSet)
  return (
    <Select className="flex-grow">
        <p className="py-4 font-semibold">
        {title}
        </p>
      <SelectTrigger className={` ${searchParams.has(paramNameToSet) ?" dark:text-white text-black font-semibold":'dark:text-gray-300 text-gray-500'}`}>
        {searchParams.has(paramNameToSet) ? seletedTitle : `select ${title}`}
        </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {itemsArray && itemsArray.map((item) => (
            <SelectItem className="pt-3"  key={item} onMouseDown={() => handleSelection(item)}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export const withGenericSelection = (Component) => {
    return function GenericSelectionWrapper({
      title,
      itemsArray,
      shouldOpen,
      paramsToCheck,
      paramNameToSet, 
      ...restProps
    }) {
      const router = useRouter();
      const pathname = usePathname();
      const searchParams = useSearchParams();
  
      const createQueryString = (name, value) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        return params.toString();
      };
  
      const handleSelection = (value) => {
        const updatedParams = createQueryString(paramNameToSet, value);
        router.push(pathname + '?' + updatedParams);
      };
  
      const shouldRender = paramsToCheck.every((param) => searchParams.has(param));
  
      if (!shouldRender) return null;
  
      return (
        <div key="1" className="">
          <Component
            title={title}
            paramNameToSet={paramNameToSet}
            itemsArray={itemsArray}
            shouldOpen={shouldOpen}
            handleSelection={handleSelection}
            {...restProps}
          />
        </div>
      );
    };
  };
