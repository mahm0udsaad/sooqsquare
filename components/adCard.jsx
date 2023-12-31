"use client"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const MyAdsCard = ({ ad }) => {
  const {
    EnginCapacity,
    paintType,
    payment,
    price,
    name,
    RegionalSpecifications,
    location,
    adImages,
    brand,
    category,
    model,
    year,
    carType,
    carStatus,
    transmission,
    fuelType,
    meterRange,
  } = ad;

  return (
     <Card>
      <CardContent>
      <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {adImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img className="w-48" src={image} alt="adImage"  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
        <div className="mt-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
          <h3 className="text-lg font-semibold">{name}</h3>
              <div>
                  <Badge>Regional Specifications</Badge>
                  <span className="ml-2">{RegionalSpecifications}</span>
                </div>

                <div>
                  <Badge>Paint Type</Badge>
                  <span className="ml-2">{paintType}</span>
                </div>

                <div>
                  <Badge>payment</Badge>
                  <span className="ml-2">{payment}</span>
                </div>

                <div>
                  <Badge>price</Badge>
                  <span className="ml-2">{price}</span>
                </div>

                <div>
                  <Badge>name</Badge>
                  <span className="ml-2">{name}</span>
                </div>

                <div>
                  <Badge>location</Badge>
                  <span className="ml-2">{location}</span>
                </div>

                <div>
                  <Badge>brand</Badge>
                  <span className="ml-2">{brand}</span>
                </div>

                <div>
                  <Badge>category</Badge>
                  <span className="ml-2">{category}</span>
                </div>

                <div>
                  <Badge>model</Badge>
                  <span className="ml-2">{model}</span>
                </div>

                <div>
                  <Badge>year</Badge>
                  <span className="ml-2">{year}</span>
                </div>

                <div>
                  <Badge>carType</Badge>
                  <span className="ml-2">{carType}</span>
                </div>

                <div>
                  <Badge>carStatus</Badge>
                  <span className="ml-2">{carStatus}</span>
                </div>

                <div>
                  <Badge>transmission</Badge>
                  <span className="ml-2">{transmission}</span>
                </div>

                <div>
                  <Badge>fuelType</Badge>
                  <span className="ml-2">{fuelType}</span>
                </div>

                <div>
                  <Badge>meterRange</Badge>
                  <span className="ml-2">{meterRange}</span>
                  </div>
            </div>
          </div>
        </CardContent>
        <div className="p-4 flex space-x-4">
          <Button className="w-1/2 flex justify-center items-center space-x-2">
            <PencilIcon className="w-4 h-4" />
            <span>Edit</span>
          </Button>
          <Button className="w-1/2 flex justify-center items-center space-x-2">
            <TrashIcon className="w-4 h-4" />
            <span>Delete</span>
          </Button>
        </div>
      </Card>
  );
};
function PencilIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  }
  function TrashIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>
    )
  }
export default MyAdsCard;



