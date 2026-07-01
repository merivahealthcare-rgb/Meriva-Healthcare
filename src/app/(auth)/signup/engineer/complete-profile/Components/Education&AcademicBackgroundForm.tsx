"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

interface Qualification {
  id: string;
  degreeName: string;
  graduationLevel: string;
  institutionName: string;
  completionYear: string;
}

export default function EducationAcademicBackgroundForm() {
  // --- Qualifications State ---
  const [qualifications, setQualifications] = useState<Qualification[]>([
    {
      id: "initial-id",
      degreeName: "",
      graduationLevel: "",
      institutionName: "",
      completionYear: "",
    },
  ]);
  // --- Qualifications Handlers ---
  const addQualification = () => {
    setQualifications([
      ...qualifications,
      {
        id:
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : Date.now().toString(),
        degreeName: "",
        graduationLevel: "",
        institutionName: "",
        completionYear: "",
      },
    ]);
  };

  const removeQualification = (id: string) => {
    setQualifications(qualifications.filter((item) => item.id !== id));
  };

  const handleQualFieldChange = (
    id: string,
    field: keyof Qualification,
    value: string,
  ) => {
    setQualifications(
      qualifications.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };
  return (
    <>
      <div className="border border-[#E2E8F0] rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-[#222428] font-inter font-semibold text-[20px] mb-6">
          Education & Academic Background
        </h2>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {qualifications.map((qual, index) => (
            <div
              key={qual.id}
              className={`space-y-5 relative ${index > 0 ? "pt-6 border-t border-dashed border-slate-200" : ""}`}
            >
              {qualifications.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeQualification(qual.id)}
                  className="absolute right-0 top-0 text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 text-[13px] font-inter font-medium cursor-pointer"
                  title="Remove Qualification"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Remove</span>
                </button>
              )}

              {/* Degree Name & Graduation Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#222428] font-inter">
                    Degree name
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g. BE Biomedical engineering"
                    value={qual.degreeName}
                    onChange={(e) =>
                      handleQualFieldChange(
                        qual.id,
                        "degreeName",
                        e.target.value,
                      )
                    }
                    className="h-11 border-[#D4D9E0] focus-visible:ring-gray-400 placeholder:text-[#94A3B8] rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#222428] font-inter">
                    Graduation level
                  </label>
                  <div className="relative">
                    <select
                      className="w-full h-11 px-3 py-2 border border-[#D4D9E0] rounded-md bg-white text-[#222428] text-[14px] font-inter appearance-none focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
                      value={qual.graduationLevel}
                      onChange={(e) =>
                        handleQualFieldChange(
                          qual.id,
                          "graduationLevel",
                          e.target.value,
                        )
                      }
                    >
                      <option value="" disabled>
                        Select graduation level
                      </option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="diploma">Diploma</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#64748B]">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Institution Name & Year of Completion */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#222428] font-inter">
                    Institution name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter university name"
                    value={qual.institutionName}
                    onChange={(e) =>
                      handleQualFieldChange(
                        qual.id,
                        "institutionName",
                        e.target.value,
                      )
                    }
                    className="h-11 border-[#D4D9E0] focus-visible:ring-gray-400 placeholder:text-[#94A3B8] rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#222428] font-inter">
                    Year of completion
                  </label>
                  <div className="relative">
                    <select
                      className="w-full h-11 px-3 py-2 border border-[#D4D9E0] rounded-md bg-white text-[#222428] text-[14px] font-inter appearance-none focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
                      value={qual.completionYear}
                      onChange={(e) =>
                        handleQualFieldChange(
                          qual.id,
                          "completionYear",
                          e.target.value,
                        )
                      }
                    >
                      <option value="" disabled>
                        Select year
                      </option>
                      {Array.from({ length: 30 }, (_, i) => 2026 - i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ),
                      )}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#64748B]">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Actions Row for Education */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={addQualification}
              className="flex items-center gap-2 border-[#B7BFCB] text-[#475569] font-inter text-[14px] h-10 px-4 hover:bg-slate-50 rounded-md cursor-pointer"
            >
              <Pencil className="h-4 w-4 text-[#222428]" strokeWidth={2.5} />
              Add Another Qualification
            </Button>

            <Button
              type="submit"
              className="bg-[#0058AF] text-white hover:bg-[#004487] font-inter text-[15px] font-medium h-10 w-24 rounded-md transition-colors self-end sm:self-auto cursor-pointer"
            >
              Save
            </Button>
          </div>

          <p className="text-[13px] text-[#94A3B8] font-inter font-normal mt-2">
            Add diplomas, postgraduate degrees, or other relevant
            qualifications.
          </p>
        </form>
      </div>
    </>
  );
}
