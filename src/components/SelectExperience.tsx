"use client";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

// Image Imports
import Avatar1 from "../../public/images/Avatar1.svg";
import Avatar2 from "../../public/images/Avatar2.svg";
import Avatar3 from "../../public/images/Avatar3.svg";
import Avatar4 from "../../public/images/Avatar4.svg";
import GreenTick from "../../public/images/GreenTick.svg";
import { useState } from "react";
import { Button } from "./ui/button";

export const experienceLevels = [
  {
    id: "early-career",
    title: "Early Career",
    image: Avatar1,
    points: ["0 to 1 year experience", "Internships"],
  },
  {
    id: "mid-level",
    title: "Mid Level",
    image: Avatar2,
    points: ["2 to 5 years experience", "Independent service engineer"],
  },
  {
    id: "senior",
    title: "Senior",
    image: Avatar3,
    points: ["6+ years experience", "Lead engineer / Specialist"],
  },
  {
    id: "company",
    title: "Service Company",
    image: Avatar4,
    points: ["Registered service provider", "Team of biomedical engineers"],
  },
];

export default function SelectExperience() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <h1 className="text-[#222428] font-sans font-medium text-[28px] leading-9 text-start">
          Tell us about your biomedical engineering experience
        </h1>
        <p className="mt-2 text-[#4D5259] font-inter text-[16px] leading-5 text-start">
          We'll personalize service requests, job opportunities, and
          recommendations based on your experience.
        </p>

        <div className="flex gap-3">
          {experienceLevels.map((item) => (
            <section
              key={item.id}
              onClick={() => setSelected(item.id)}
              className="relative border w-full md:w-[50%] lg:w-[25%] border-[#D4D9E0] rounded-xl pt-9 pb-4 pr-6 pl-4 cursor-pointer"
            >
              <Checkbox
                id={item.id}
                checked={selected === item.id}
                onCheckedChange={() => setSelected(item.id)}
                className="absolute top-4 right-4 h-5 w-5 data-[state=checked]:bg-[#0058AF] data-[state=checked]:border-[#0058AF]"
                aria-label={`Select ${item.title}`}
              />

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <div className="h-21.25 w-21.25 overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={85}
                      width={85}
                      className="h-full w-full overflow-hidden"
                    />
                  </div>

                  <h2 className="text-[#000000] font-inter font-semibold text-[20px] leading-6">
                    {item.title}
                  </h2>
                </div>

                <div className="flex flex-col gap-1.5">
                  {item.points.map((point) => (
                    <div key={point} className="flex gap-1.5">
                      <Image
                        src={GreenTick}
                        alt={item.title}
                        height={24}
                        width={24}
                        className="h-6 w-6"
                      />
                      <span className="text-[#4D5259] font-inter font-normal text-[14px] leading-4.5">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
      <div className="w-full flex justify-end">
        <div className="flex gap-2.5">
          <button className="border border-[#1B1B1B] rounded-sm p-3 flex justify-center items-center font-sans font-medium text-[16px] leading-5 cursor-pointer h-11 transition-all duration-300 ease-in-out hover:bg-[#1B1B1B] hover:text-white hover:-translate-y-0.5 hover:shadow-md active:translate-y-0">
            Skip for now
          </button>
          <Button
            type="submit"
            className="bg-[#0058AF] rounded-sm p-3 text-white font-sans text-[16px] leading-5 w-45.5 h-11 cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-800 hover:shadow-lg "
          >
            Create my account
          </Button>
        </div>
      </div>
    </div>
  );
}
