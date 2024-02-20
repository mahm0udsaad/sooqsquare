"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

export default function RequirementsForm() {
  const [requirements, setRequirements] = useState([""]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = (paramsObject) => {
    const params = new URLSearchParams(searchParams);
    for (const key in paramsObject) {
      params.set(key, paramsObject[key]);
    }
    const updatedParams = params.toString();
    router.push("?" + updatedParams);
  };

  const handleAddRequirement = () => {
    const updatedRequirements = [...requirements, ""];
    setRequirements(updatedRequirements);
  };

  const handleChange = (index, value) => {
    const updatedRequirements = [...requirements];
    updatedRequirements[index] = value;
    setRequirements(updatedRequirements);
  };

  const handleSubmit = () => {
    // Join all requirements with commas
    const joinedRequirements = requirements.join(",");
    // Push joined requirements to the search bar under the "requirement" parameter
    createQueryString({ requirements: joinedRequirements });
  };

  return (
    <div key="1" className="flex justify-center items-center gap-4">
      <div className="space-y-4">
        {requirements.map((requirement, index) => (
          <div key={index} className="flex gap-4 items-center">
            <Input
              className="w-[400px]"
              placeholder="Type Requirement"
              type="text"
              value={requirement}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
        <div className="flex gap-4 items-center">
          <Button
            className="bg-gray-900 text-white px-4 py-2 rounded-md"
            type="button"
            onClick={handleAddRequirement}
          >
            Add Requirement
          </Button>
          <Button
            className="main-bg text-white px-4 py-2 rounded-md"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
