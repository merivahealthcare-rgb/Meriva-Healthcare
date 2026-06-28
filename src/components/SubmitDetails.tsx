import Image from "next/image";
import { Checkbox } from "./ui/checkbox";

// Image Imports
import GreenTick from "../../public/images/GreenTick.svg";

export default function SubmitDetails() {
  const engineerBenefits = [
    {
      id: 1,
      text: "Get discovered by hospitals faster",
    },
    {
      id: 2,
      text: "Receive verified service requests",
    },
    {
      id: 3,
      text: "Build your professional reputation",
    },
    {
      id: 4,
      text: "Track and manage your assignments",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <section className="flex flex-col gap-6">
        <h1 className="text-[#222428] font-sans font-medium text-[28px] leading-9 text-start">
          Verify your professional credentials
        </h1>
        <p className="mt-2 text-[#4D5259] font-inter text-[16px] leading-5 text-start">
          We'll personalize service requests, job opportunities, and
          recommendations based on your experience.
        </p>
      </section>
      <section className="flex">
        {/* right div */}
        <div></div>
        {/* left div */}
        <div className="flex flex-col px-7 pt-7 pb-9">
          <h2 className="text-[#222428] font-inter font-medium text-[18px] leading-5.5">
            Increase Your Visibility
          </h2>
          <p className="text-[#4D5259] font-inter font-normal text-[16px] leading-5 text-start">
            Complete these sections to get faster service request calls.
          </p>
          <ul className="flex flex-col gap-3 mt-5">
            {/* Checkbox Item */}
            <li className="flex items-center gap-3 text-[#4D5259] font-inter text-[16px] leading-5">
              <Checkbox id="education" />
              <label htmlFor="education" className="cursor-pointer select-none">
                Education
              </label>
            </li>

            <li className="flex items-center gap-3 text-[#4D5259] font-inter text-[16px] leading-5">
              <Checkbox id="Professional certifications" />
              <label
                htmlFor="Professional certifications"
                className="cursor-pointer select-none"
              >
                Professional certifications
              </label>
            </li>

            <li className="flex items-center gap-3 text-[#4D5259] font-inter text-[16px] leading-5">
              <Checkbox id="Identity verification" />
              <label
                htmlFor="Identity verification"
                className="cursor-pointer select-none"
              >
                Identity verification
              </label>
            </li>

            <li className="flex items-center gap-3 text-[#4D5259] font-inter text-[16px] leading-5">
              <Checkbox id="Equipment experience" />
              <label
                htmlFor="Equipment experience"
                className="cursor-pointer select-none"
              >
                Equipment experience
              </label>
            </li>
          </ul>

          {/* divider */}
          <div className="w-full h-px bg-[#8B95A2] my-5.5"></div>

          {/* Benifits */}
          <div className="">
            <h2 className="text-[#4D5259] font-sans font-medium text-[16px] leading-5">
              Benefits
            </h2>
            <ul className="flex flex-col gap-2">
              {engineerBenefits.map((benefit) => (
                <li
                  key={benefit.id}
                  className="text-[#4D5259] font-inter font-normal text-[14px] leading-4.5 flex gap-1.5 items-center"
                >
                  <Image
                    src={GreenTick}
                    alt={benefit.text}
                    height={24}
                    width={24}
                    className="h-6 w-6"
                  />
                  <span className="text-center self-center justify-self-center">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
