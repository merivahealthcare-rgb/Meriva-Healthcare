"use client";

// Component Imports
import IncreaseYourVisibility from "@/components/IncreaseYourVisibility";
import EducationAcademicBackgroundForm from "./Education&AcademicBackgroundForm";
import ProfessionalCertificationsForm from "./ProfessionalCertificationsForm";
import VerifyYourIdentityForm from "./VerifyYourIdentityForm";
import EquipmentExperienceForm from "./EquipmentExperience";
import EngineerOnboardingFooter from "./EngineerOnboardingFooter";

export default function SubmitDetails() {
  return (
    <div className="flex flex-col gap-2 max-w-6xl mx-auto w-full p-4">
      {/* Header Section */}
      <section className="flex flex-col gap-2">
        <h1 className="text-[#222428] font-sans font-medium text-[28px] leading-9 text-start">
          Verify your professional credentials
        </h1>
        <p className="text-[#4D5259] font-inter text-[16px] leading-5 text-start">
          We'll personalize service requests, job opportunities, and
          recommendations based on your experience.
        </p>
      </section>

      {/* Main Container Layout */}
      <section className="flex flex-col md:flex-row-reverse gap-8 mt-6 items-start w-full">
        {/* Right Column - Checklist Sidebar Component */}
        <IncreaseYourVisibility />

        {/* Left Column - Main Details Card Wrapper */}
        <div className="flex-1 w-full order-1 md:order-2 space-y-6">
          {/* 1. Education & Academic Background Form */}
          <EducationAcademicBackgroundForm />

          {/* 2. Professional Certifications Form */}
          <ProfessionalCertificationsForm />

          {/* 3. Verify Your Identity */}
          <VerifyYourIdentityForm />

          {/* 4. Equipment Experience */}
          <EquipmentExperienceForm />

        </div>
      </section>
      <EngineerOnboardingFooter/>
    </div>
  );
}
