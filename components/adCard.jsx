import React from 'react';
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const MyAdsCard = ({ ad }) => {
  const {
    createdAt,
    adImage,
    description,
    brand,
    category,
    adType,
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
      <CardHeader>
        <h2 className="text-xl font-bold ml-4">{brand}</h2>
      </CardHeader>
      <CardContent>
        <img
          alt="Ad Image"
          className="w-full h-48 object-cover rounded-lg"
          src={adImage}
          style={{
            objectFit: "cover",
          }}
        />
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-semibold">{model}</h3>
          <p className="text-gray-500">{description}</p>
          <div className="grid grid-cols-2 gap-2">
          <div>
              <Badge>Date</Badge>
              <span className="ml-2">{createdAt}</span>
            </div>
            <div>
              <Badge>Category</Badge>
              <span className="ml-2">{category}</span>
            </div>
            <div>
              <Badge>Ad Type</Badge>
              <span className="ml-2">{adType}</span>
            </div>
            <div>
              <Badge>Year</Badge>
              <span className="ml-2">{year}</span>
            </div>
            <div>
              <Badge>Car Type</Badge>
              <span className="ml-2">{carType}</span>
            </div>
            <div>
              <Badge>Car Status</Badge>
              <span className="ml-2">{carStatus}</span>
            </div>
            <div>
              <Badge>Transmission</Badge>
              <span className="ml-2">{transmission}</span>
            </div>
            <div>
              <Badge>Fuel Type</Badge>
              <span className="ml-2">{fuelType}</span>
            </div>
            <div>
              <Badge>Meter Range</Badge>
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
