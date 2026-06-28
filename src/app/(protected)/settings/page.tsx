"use client";

import React, { useState } from "react";
import { Settings, Shield, Bell, User, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const [clinicName, setClinicName] = useState("Meriva Healthcare Main Clinic");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
          Settings
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          Configure application preferences and workspace options.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Navigation panel */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs space-y-1 h-fit">
          <button className="flex w-full items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-50 text-indigo-600">
            <Settings className="h-5 w-5 text-indigo-600" />
            <span>General Settings</span>
          </button>
          <button className="flex w-full items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all">
            <User className="h-5 w-5 text-slate-400" />
            <span>Profile Information</span>
          </button>
          <button className="flex w-full items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all">
            <Bell className="h-5 w-5 text-slate-400" />
            <span>Notification Controls</span>
          </button>
          <button className="flex w-full items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all">
            <Shield className="h-5 w-5 text-slate-400" />
            <span>Security & Compliance</span>
          </button>
        </div>

        {/* Content Panel */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
            Clinic Configuration
          </h2>

          <div className="space-y-4">
            {/* Input field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Clinic / Workplace Name
              </label>
              <input
                type="text"
                value={clinicName}
                onChange={(e) => setClinicName(e.target.value)}
                className="block w-full h-11 px-4 rounded-lg border border-slate-200 text-sm text-slate-900 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none"
              />
            </div>

            {/* Email notification switch */}
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <div className="text-sm font-bold text-slate-800">Email Notifications</div>
                <div className="text-xs text-slate-400 font-semibold mt-0.5">
                  Receive daily reports and appointment logs in email
                </div>
              </div>
              <button
                type="button"
                onClick={() => setEmailAlerts(!emailAlerts)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  emailAlerts ? "bg-indigo-600" : "bg-slate-200"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    emailAlerts ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* SMS notifications switch */}
            <div className="flex items-center justify-between py-3">
              <div>
                <div className="text-sm font-bold text-slate-800">SMS Alert Broadcasts</div>
                <div className="text-xs text-slate-400 font-semibold mt-0.5">
                  Send automated appointment notifications to patients
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSmsAlerts(!smsAlerts)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  smsAlerts ? "bg-indigo-600" : "bg-slate-200"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    smsAlerts ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <Button className="h-10 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold flex items-center gap-1.5 px-5 rounded-xl cursor-pointer">
              <Save className="h-4.5 w-4.5" />
              Save Configuration
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
