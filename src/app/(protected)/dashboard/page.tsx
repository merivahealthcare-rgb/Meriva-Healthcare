"use client";

import React from "react";
import {
  Users,
  Calendar,
  Activity,
  Plus,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const stats = [
    {
      name: "Total Patients",
      value: "1,284",
      change: "+8.2%",
      changeType: "up",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Appointments Today",
      value: "16",
      change: "+12.5%",
      changeType: "up",
      icon: Calendar,
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Active Consultations",
      value: "3",
      change: "-5.3%",
      changeType: "down",
      icon: Activity,
      color: "from-violet-500 to-purple-500",
    },
  ];

  const appointments = [
    {
      id: "APT-2084",
      patient: "Olivia Vance",
      time: "09:30 AM",
      type: "First Checkup",
      status: "In Progress",
      statusClass: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      id: "APT-2085",
      patient: "Marcus Brodin",
      time: "10:15 AM",
      type: "Cardiology Followup",
      status: "Confirmed",
      statusClass: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      id: "APT-2086",
      patient: "Sarah Connor",
      time: "11:00 AM",
      type: "General Consultation",
      status: "Confirmed",
      statusClass: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      id: "APT-2087",
      patient: "David Miller",
      time: "11:45 AM",
      type: "Blood Test Review",
      status: "Pending",
      statusClass: "bg-slate-100 text-slate-700 border-slate-200",
    },
    {
      id: "APT-2088",
      patient: "Emma Watson",
      time: "02:30 PM",
      type: "Dermatology Consultation",
      status: "Completed",
      statusClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Banner section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
            Welcome Back, Dr. Meriva
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Here is a overview of your clinic's activities for today.
          </p>
        </div>
        <Button className="h-10 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold flex items-center gap-1.5 px-4 rounded-xl shadow-md shadow-indigo-600/20 cursor-pointer">
          <Plus className="h-4.5 w-4.5" />
          New Appointment
        </Button>
      </div>

      {/* Stats Cards grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-md hover:border-slate-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold tracking-wide text-slate-400 uppercase">
                {stat.name}
              </span>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
              >
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2.5">
              <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span
                className={`flex items-center gap-0.5 text-xs font-bold px-1.5 py-0.5 rounded-full ${
                  stat.changeType === "up"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {stat.changeType === "up" ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : (
                  <ArrowDownRight className="h-3 w-3" />
                )}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid: Appointments & Analytics */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Appointments Queue table (Takes 2 columns on large screens) */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Today's Appointment Queue</h2>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">
                Manage and track patient consultation cycles
              </p>
            </div>
            <span className="text-xs font-semibold text-indigo-600 hover:underline cursor-pointer">
              View All
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100 text-left">
              <thead className="bg-slate-50/50">
                <tr>
                  <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Patient Name
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Consultation Type
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {appointments.map((apt) => (
                  <tr key={apt.id} className="hover:bg-slate-50/40 transition-colors group">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors">
                      {apt.id}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-950">
                      {apt.patient}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-slate-400" />
                        {apt.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                      {apt.type}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${apt.statusClass}`}
                      >
                        {apt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Clinical Statistics Tracker (Takes 1 column) */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-xs">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Clinic Analytics</h2>
              <TrendingUp className="h-5 w-5 text-indigo-500" />
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Weekly progress chart on operations and diagnosis volume.
            </p>

            {/* Simulated Chart visual using SVGs */}
            <div className="h-44 flex items-end justify-between px-2 pt-6 pb-2 border-b border-slate-100 bg-slate-50/50 rounded-xl">
              {[40, 65, 45, 80, 55, 95, 75].map((height, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer w-full">
                  <div className="relative w-4 bg-indigo-100 hover:bg-indigo-500 rounded-t-sm transition-colors duration-200 flex items-end justify-center" style={{ height: `${height}%` }}>
                    {/* Tooltip on hover */}
                    <span className="absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
                      {height}%
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3.5 pt-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-500">Target consultation goal</span>
              <span className="font-bold text-indigo-600">82% completed</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "82%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
