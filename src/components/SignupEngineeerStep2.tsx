"use client";
import Image from "next/image";
// Image Imports
import Banner from "../../public/images/Banner.webp";
import User from "../../public/images/UserIcon.svg";
import Headphone from "../../public/images/HeadphoneIcon.svg";
import File from "../../public/images/FileIcon.svg";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
export default function SignupEngineerStep2() {
  const router = useRouter();
  return (
    <div>

      <div className="h-60 w-133.75 overflow-hidden">
        <Image
          src={Banner}
          alt="Welcome to India's 
          Biomedical Engineer Network"
          height={240}
          width={535}
          className="h-full w-full object-cover"
          />
      </div>
      <section className="flex flex-col justify-center items-center mt-6">
        <h1 className="text-[#222428] font-sans font-medium text-[28px] leading-9 text-center lg:w-97.5">Welcome to India's Biomedical Engineer Network</h1>
        <ul className="flex flex-col gap-10 mt-10 justify-start items-start">
            <li className="flex gap-2.5 text-center font-inter font-normal text-[14px] leading-5 text-[#000000]">
                <Image src={User} alt="Complete your engineer profile" height={24} width={24} className="h-6 w-6" />
                Complete your engineer profile</li>
                            <li className="flex gap-2.5 text-center font-inter font-normal text-[14px] leading-5 text-[#000000]">
                <Image src={Headphone} alt="Access service calls and hiring opportunities" height={24} width={24} className="h-6 w-6" />
                Access service calls and hiring opportunities</li>
                            <li className="flex gap-2.5 text-center font-inter font-normal text-[14px] leading-5 text-[#000000]">
                <Image src={File} alt="Track performance, ratings, and certification" height={24} width={24} className="h-6 w-6" />
                Track performance, ratings, and certification</li>
        </ul>
         <div className="flex flex-col gap-3 justify-center items-center mt-10.5">
                  <Button
                    type="submit"
                    onClick={() => router.push("/signup/engineer/complete-profile")}
                    className="bg-[#0058AF] rounded-sm p-3 text-white font-sans text-[16px] leading-5 w-45.5 h-11 cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-800 hover:shadow-lg "
                  >
                    Create my account
                  </Button>
                  <span className="text-[#626972] font-inter font-normal text-[14px] leading-5">
                    It only takes 5-10 minutes and you can edit it later. We’ll save as you go.
                  </span>
                </div>
      </section>
          </div>
    
  );
}
