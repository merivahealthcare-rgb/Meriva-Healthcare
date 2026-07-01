"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Info, Trash2, FileText } from "lucide-react";

interface Certification {
  id: string;
  certificateName: string;
  organizationName: string;
  isSaved: boolean;
  file: File | null;
  fileUrl: string | null;
}

export default function ProfessionalCertificationsForm() {
  // --- Certifications State ---
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: "initial-1",
      certificateName: "Philips Ventilator Certification",
      organizationName: "Philips Healthcare",
      isSaved: true,
      file: null,
      fileUrl: "#", // Mock or existing file URL
    },
    {
      id: "initial-2",
      certificateName: "",
      organizationName: "",
      isSaved: false,
      file: null,
      fileUrl: null,
    },
  ]);

  const [autoExtract, setAutoExtract] = useState(false);
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // --- Certifications Handlers ---
  const addCertification = () => {
    const newId =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Date.now().toString();

    setCertifications([
      ...certifications,
      {
        id: newId,
        certificateName: "",
        organizationName: "",
        isSaved: false,
        file: null,
        fileUrl: null,
      },
    ]);
  };

  const removeCertification = (id: string) => {
    setCertifications(certifications.filter((item) => item.id !== id));
  };

  const handleCertFieldChange = <K extends keyof Certification>(
    id: string,
    field: K,
    value: Certification[K],
  ) => {
    setCertifications(
      certifications.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const triggerFileSelect = (id: string) => {
    fileInputRefs.current[id]?.click();
  };

  const handleFileChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(file);
      setCertifications(
        certifications.map((item) =>
          item.id === id ? { ...item, file, fileUrl } : item,
        ),
      );
    } else if (file) {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleViewPdf = (url: string | null) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("No PDF file attached or available to view.");
    }
  };

  return (
    <div className="border border-[#E2E8F0] rounded-xl bg-white p-4 sm:p-6 shadow-sm max-w-4xl mx-auto">
      <h2 className="text-[#222428] font-inter font-semibold text-lg sm:text-[20px] mb-6">
        Professional Certifications
      </h2>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {certifications.map((cert) => {
          if (cert.isSaved) {
            // --- Saved Mode View (Blue Tint / Responsive Flex Grid) ---
            return (
              <div
                key={cert.id}
                className="flex flex-col items-stretch lg:items-start justify-between p-4 bg-blue-50/60 rounded-xl border border-blue-100 gap-4 transition-all"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-2xl">
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-medium text-slate-500 font-inter uppercase tracking-wider">
                      Certificate name
                    </span>
                    <span className="text-[15px] font-semibold text-slate-800 font-inter wrap-break-word">
                      {cert.certificateName || "N/A"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-medium text-slate-500 font-inter uppercase tracking-wider">
                      Organization name
                    </span>
                    <span className="text-[15px] font-medium text-slate-700 font-inter wrap-break-word">
                      {cert.organizationName || "N/A"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-start lg:justify-end gap-3 sm:gap-4 border-t lg:border-t-0 pt-3 lg:pt-0 border-blue-100">
                  <button
                    type="button"
                    onClick={() => handleViewPdf(cert.fileUrl)}
                    className="text-[#0058AF] font-inter font-medium text-[12px] hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="h-4 w-4" />
                    View PDF
                  </button>

                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() =>
                      handleCertFieldChange(cert.id, "isSaved", false)
                    }
                    className="h-9 px-3 gap-1.5 bg-white text-[#1E293B] border border-slate-200 hover:bg-slate-50 rounded-lg text-[13px] font-medium font-inter shadow-sm"
                  >
                    <Pencil
                      className="h-3.5 w-3.5 text-[#334155]"
                      strokeWidth={2.5}
                    />
                    Edit
                  </Button>

                  <button
                    type="button"
                    onClick={() => removeCertification(cert.id)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer ml-auto lg:ml-0"
                    title="Delete Certification"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          }

          // --- Unsaved / Editable Form View ---
          return (
            <div
              key={cert.id}
              className="p-4 sm:p-5 border border-[#E2E8F0] rounded-xl bg-white space-y-5 relative transition-all"
            >
              {/* Hidden File Input for target block */}
              <input
                type="file"
                ref={(el) => {
                  fileInputRefs.current[cert.id] = el;
                }}
                accept="application/pdf"
                className="hidden"
                onChange={(e) => handleFileChange(cert.id, e)}
              />

              <div className="flex justify-between items-center border-b border-slate-50 pb-2">
                <span className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider">
                  New Certification Entry
                </span>
                {certifications.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCertification(cert.id)}
                    className="text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 text-[13px] font-inter font-medium cursor-pointer"
                    title="Remove Block"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Remove</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#334155] font-inter">
                    Certificate name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter certificate name"
                    value={cert.certificateName}
                    onChange={(e) =>
                      handleCertFieldChange(
                        cert.id,
                        "certificateName",
                        e.target.value,
                      )
                    }
                    className="h-11 border-[#D4D9E0] focus-visible:ring-gray-300 placeholder:text-[#94A3B8] rounded-lg text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#334155] font-inter">
                    Organization name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter organization name"
                    value={cert.organizationName}
                    onChange={(e) =>
                      handleCertFieldChange(
                        cert.id,
                        "organizationName",
                        e.target.value,
                      )
                    }
                    className="h-11 border-[#D4D9E0] focus-visible:ring-gray-300 placeholder:text-[#94A3B8] rounded-lg text-sm"
                  />
                </div>
              </div>

              {cert.file && (
                <div className="text-[13px] font-inter text-slate-600 bg-slate-50 p-2.5 rounded-lg flex items-center gap-2 border border-dashed border-slate-200">
                  <FileText className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span className="truncate font-medium">{cert.file.name}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4 pt-1">
                <label className="flex items-center gap-2 select-none text-[14px] font-inter text-[#475569] cursor-pointer py-1">
                  <input
                    type="checkbox"
                    checked={autoExtract}
                    onChange={(e) => setAutoExtract(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-[#0058AF] focus:ring-[#0058AF]"
                  />
                  Auto extract details
                </label>

                <Button
  type="button"
  disabled={!cert.certificateName || !cert.organizationName}
  onClick={() => {
    if (!cert.fileUrl) {
      triggerFileSelect(cert.id);
    } else {
      handleCertFieldChange(cert.id, "isSaved", true);
    }
  }}
  className={`font-inter text-[14px] font-semibold h-11 px-5 rounded-lg transition-colors w-full sm:w-auto disabled:opacity-50 disabled:pointer-events-auto cursor-pointer disabled:cursor-not-allowed ${
    cert.fileUrl
      ? "bg-emerald-600 text-white hover:bg-emerald-700"
      : "bg-[#0058AF] text-white hover:bg-[#004487]"
  }`}
>
  {cert.fileUrl ? "Save Certification" : "Upload Certificate (PDF)"}
</Button>
              </div>
            </div>
          );
        })}

        {/* Bottom Actions Row */}
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={addCertification}
            className="flex items-center gap-2 border-[#D4D9E0] text-[#334155] font-inter font-medium text-[14px] h-11 px-4 hover:bg-slate-50 rounded-lg cursor-pointer shadow-sm w-full sm:w-auto justify-center"
          >
            <Pencil className="h-4 w-4 text-[#334155]" strokeWidth={2.5} />
            Add certification
          </Button>
        </div>

        {/* Footnote */}
        <div className="flex items-start gap-2 text-[#64748B] font-inter text-[13px] mt-4 pt-2">
          <Info className="h-4 w-4 text-[#64748B] shrink-0 mt-0.5" />
          <p>
            Certified engineers are often preferred for specialized equipment
            and service requests.
          </p>
        </div>
      </form>
    </div>
  );
}
