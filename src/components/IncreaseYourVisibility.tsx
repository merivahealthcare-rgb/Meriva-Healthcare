import Image from "next/image";
import { Checkbox } from "./ui/checkbox";

// Image Imports
import GreenTick from "../../public/images/GreenTick.svg";

export default function IncreaseYourVisibility() {
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

    return(
       <div className="w-full md:w-85 order-2 md:order-1 flex flex-col bg-slate-50/50 rounded-xl border border-dashed border-[#D4D9E0] p-6">
                 <h2 className="text-[#222428] font-inter font-medium text-[18px] leading-5.5">
                   Increase Your Visibility
                 </h2>
                 <p className="text-[#4D5259] font-inter font-normal text-[14px] leading-5 mt-1 text-start">
                   Complete these sections to get faster service request calls.
                 </p>
       
                 <ul className="flex flex-col gap-3 mt-5">
                   <li className="flex items-center gap-3 text-[#4D5259] font-inter text-[16px] leading-5">
                     <Checkbox id="sidebar-education" defaultChecked />
                     <label
                       htmlFor="sidebar-education"
                       className="cursor-pointer select-none"
                     >
                       Education
                     </label>
                   </li>
       
                   <li className="flex items-center gap-3 text-[#4D5259] font-inter text-[16px] leading-5">
                     <Checkbox id="sidebar-certs" />
                     <label
                       htmlFor="sidebar-certs"
                       className="cursor-pointer select-none"
                     >
                       Professional certifications
                     </label>
                   </li>
       
                   <li className="flex items-center gap-3 text-[#4D5259] font-inter text-[16px] leading-5">
                     <Checkbox id="sidebar-identity" />
                     <label
                       htmlFor="sidebar-identity"
                       className="cursor-pointer select-none"
                     >
                       Identity verification
                     </label>
                   </li>
       
                   <li className="flex items-center gap-3 text-[#4D5259] font-inter text-[16px] leading-5">
                     <Checkbox id="sidebar-equipment" />
                     <label
                       htmlFor="sidebar-equipment"
                       className="cursor-pointer select-none"
                     >
                       Equipment experience
                     </label>
                   </li>
                 </ul>
       
                 <div className="w-full h-px bg-[#E2E8F0] my-5"></div>
       
                 <div>
                   <h2 className="text-[#4D5259] font-sans font-medium text-[15px] mb-3">
                     Benefits
                   </h2>
                   <ul className="flex flex-col gap-2.5">
                     {engineerBenefits.map((benefit) => (
                       <li
                         key={benefit.id}
                         className="text-[#4D5259] font-inter font-normal text-[14px] leading-relaxed flex gap-2 items-start"
                       >
                         <Image
                           src={GreenTick}
                           alt={benefit.text}
                           height={20}
                           width={20}
                           className="h-5 w-5 mt-0.5 shrink-0"
                         />
                         <span>{benefit.text}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
    )
}