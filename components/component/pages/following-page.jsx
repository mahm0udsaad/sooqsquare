import React from "react";
import { BentoGrid, BentoGridItem } from "../../ui/bento-grid";

export function BentoGridDemo({ items }) {
  return (
    <BentoGrid className="w-11/12 mx-auto pt-2">
      {items.map((item, i) => (
        <BentoGridItem
          key={item.id}
          id={item.id}
          title={item.name}
          description={item.description}
          header={item.Adimages[0].url}
          icon={item.shop ? item.shop.shopImage : item.user.image}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full animate-pluse min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
