"use client"; // Added because we are managing step state on the client side

import { useState } from "react";
//Component Imports
import SignupEngineerStep1 from "@/components/SignupEngineeerStep1";
import SignupEngineerStep2 from "@/components/SignupEngineeerStep2";

export default function EngineerSignup() {
  const [step, setStep] = useState<1 | 2>(1);

  const handleNextStep = () => {
    setStep(2);
  };

  return (
    <>
      <main className="flex justify-center items-center w-full h-dvh">
        {step === 1 ? (
          <SignupEngineerStep1 onNext={handleNextStep} />
        ) : (
          <SignupEngineerStep2 />
        )}
      </main>
    </>
  );
}