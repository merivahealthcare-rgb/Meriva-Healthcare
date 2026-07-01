"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Info, ChevronDown } from "lucide-react";

interface EquipmentRecord {
  id: string;
  equipmentType: string;
  brand: string;
  units: string;
  isSaved: boolean;
}

const EQUIPMENT_TYPES = ["Ventilator", "X-Ray Machine", "Ultrasound System", "ECG Monitor"];
const BRANDS = ["Philips", "GE Healthcare", "Siemens", "Medtronic"];

export default function EquipmentExperienceForm() {
  // --- Form States ---
  const [records, setRecords] = useState<EquipmentRecord[]>([
    {
      id: "saved-example",
      equipmentType: "Philips Ventilator",
      brand: "Philips Healthcare",
      units: "12",
      isSaved: true,
    },
    {
      id: "active-entry",
      equipmentType: "",
      brand: "",
      units: "",
      isSaved: false,
    },
  ]);

  // --- Dynamic Badge Logic ---
  const getExperienceBadge = (unitsStr: string) => {
    const num = parseInt(unitsStr, 10);
    if (!unitsStr || isNaN(num) || num <= 0) return null;
    if (num < 15) return { text: "Beginner", styles: "bg-blue-50 text-blue-700 border-blue-100" };
    if (num <= 50) return { text: "Intermediate", styles: "bg-amber-50 text-amber-700 border-amber-100" };
    return { text: "Expert", styles: "bg-emerald-50 text-emerald-700 border-emerald-100" };
  };

  // --- Handlers ---
  const handleFieldChange = (id: string, field: keyof EquipmentRecord, value: string) => {
    setRecords(records.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const handleSave = (id: string) => {
    setRecords(records.map((r) => (r.id === id ? { ...r, isSaved: true } : r)));
  };

  const handleEdit = (id: string) => {
    setRecords(records.map((r) => (r.id === id ? { ...r, isSaved: false } : r)));
  };

  const handleReset = (id: string) => {
    setRecords(records.map((r) => (r.id === id ? { ...r, equipmentType: "", brand: "", units: "" } : r)));
  };

  const addNewEquipment = () => {
    const newId = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
    setRecords([
      ...records,
      { id: newId, equipmentType: "", brand: "", units: "", isSaved: false },
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto border border-[#E2E8F0] rounded-2xl bg-white p-4 sm:p-6 md:p-8 shadow-sm space-y-6">
      
      {/* Header Block matching image_2642dd.png */}
      <div>
        <h2 className="text-[#222428] font-inter font-semibold text-xl sm:text-[22px] mb-1">
          Equipment Experience
        </h2>
        <p className="text-sm text-[#64748B] font-inter">
          Tell hospitals what equipment you've worked on
        </p>
      </div>

      <div className="space-y-5">
        {records.map((record) => {
          const badge = getExperienceBadge(record.units);
          const isSaveDisabled = !record.equipmentType || !record.brand || !record.units;

          if (record.isSaved) {
            // --- 1. SAVED DISPLAY ROW (Light grey block layout) ---
            return (
              <div
                key={record.id}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-end gap-4 transition-all"
              >
                <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 w-full">
                  <div className="sm:col-span-3 flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#475569] font-inter">
                      Certificate name
                    </label>
                    <Input
                      type="text"
                      readOnly
                      value={record.equipmentType}
                      className="h-11 bg-white border-[#D4D9E0] text-[#334155] rounded-lg font-inter focus-visible:ring-0 cursor-default"
                    />
                  </div>

                  <div className="sm:col-span-3 flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#475569] font-inter">
                      Organization name
                    </label>
                    <Input
                      type="text"
                      readOnly
                      value={record.brand}
                      className="h-11 bg-white border-[#D4D9E0] text-[#334155] rounded-lg font-inter focus-visible:ring-0 cursor-default"
                    />
                  </div>

                  <div className="sm:col-span-1 flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-[#475569] font-inter whitespace-nowrap">
                      Units worked on
                    </label>
                    <div className="h-11 bg-white border border-[#D4D9E0] text-[#334155] rounded-lg font-inter flex items-center justify-center font-medium px-2">
                      {record.units}
                    </div>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => handleEdit(record.id)}
                  className="h-11 px-4 gap-2 bg-[#F1F5F9] text-[#1E293B] hover:bg-slate-200 border border-slate-200/60 rounded-lg text-sm font-medium font-inter w-full md:w-auto shrink-0 shadow-sm"
                >
                  <Pencil className="h-4 w-4 text-[#334155]" strokeWidth={2} />
                  Edit
                </Button>
              </div>
            );
          }

          // --- 2. ACTIVE INTERACTIVE CARD LAYER ---
          return (
            <div
              key={record.id}
              className="border border-[#E2E8F0] rounded-xl bg-white p-4 sm:p-6 space-y-5"
            >
              {/* Row 1: Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#334155] font-inter">
                    Equipment type
                  </label>
                  <div className="relative w-full">
                    <select
                      value={record.equipmentType}
                      onChange={(e) => handleFieldChange(record.id, "equipmentType", e.target.value)}
                      className="w-full h-11 pl-4 pr-10 border border-[#D4D9E0] rounded-lg text-sm font-inter appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white cursor-pointer transition-all"
                    >
                      <option value="" disabled hidden>Select type</option>
                      {EQUIPMENT_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#334155] font-inter">
                    Brand
                  </label>
                  <div className="relative w-full">
                    <select
                      value={record.brand}
                      onChange={(e) => handleFieldChange(record.id, "brand", e.target.value)}
                      className="w-full h-11 pl-4 pr-10 border border-[#D4D9E0] rounded-lg text-sm font-inter appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white cursor-pointer transition-all"
                    >
                      <option value="" disabled hidden>Select brand</option>
                      {BRANDS.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 2: Numerical Input & Interactive Badging */}
              <div className="flex flex-col gap-1.5 max-w-sm">
                <label className="text-[13px] font-medium text-[#334155] font-inter">
                  Number of units worked on
                </label>
                <div className="flex items-center gap-3">
                  <Input
                    type="number"
                    placeholder="e.g. 23 units"
                    value={record.units}
                    min="0"
                    onChange={(e) => handleFieldChange(record.id, "units", e.target.value)}
                    className="h-11 border-[#D4D9E0] focus-visible:ring-gray-300 placeholder:text-[#94A3B8] rounded-lg text-sm w-full"
                  />
                  {badge && (
                    <span
                      className={`h-9 px-4 rounded-full border text-xs font-semibold flex items-center justify-center font-inter tracking-wide transition-all duration-300 shrink-0 ${badge.styles}`}
                    >
                      {badge.text}
                    </span>
                  )}
                </div>
              </div>

              {/* Footnote Badge Info */}
              <div className="flex items-start gap-2 text-[#64748B] font-inter text-[13px] pt-1">
                <Info className="h-4 w-4 text-[#64748B] shrink-0 mt-0.5" />
                <p>These numbers will be displayed and viewed by hospitals</p>
              </div>

              {/* Card Form Footer controls */}
              <div className="flex items-center justify-end gap-4 pt-3 border-t border-[#F1F5F9]">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => handleReset(record.id)}
                  className="text-[#334155] hover:bg-slate-100 font-medium text-sm h-11 px-5 rounded-lg font-inter"
                >
                  Reset
                </Button>

                <Button
                  type="button"
                  disabled={isSaveDisabled}
                  onClick={() => handleSave(record.id)}
                  className={`font-semibold font-inter text-sm h-11 px-6 rounded-lg transition-all w-full sm:w-auto shadow-sm ${
                    isSaveDisabled
                      ? "!pointer-events-auto cursor-not-allowed bg-[#0058AF]/40 text-white"
                      : "bg-[#0058AF] text-white hover:bg-[#004385] cursor-pointer"
                  }`}
                >
                  Save
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Add Machinery / Action Button block */}
      <div className="flex justify-end pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={addNewEquipment}
          className="flex items-center gap-2 border-[#D4D9E0] text-[#334155] font-inter font-medium text-[14px] h-11 px-5 hover:bg-slate-50 rounded-lg shadow-sm w-full sm:w-auto justify-center"
        >
          <Pencil className="h-4 w-4 text-[#334155]" strokeWidth={2} />
          Add equipment
        </Button>
      </div>
    </div>
  );
}