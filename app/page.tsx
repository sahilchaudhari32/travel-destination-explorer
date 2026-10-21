"use client";

import { useState } from "react";
import Link from "next/link";
import destinationData from "../data/destinationData";

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const regions = [
    "All Regions",
    "East Asia",
    "Southern Europe",
    "Scandinavia",
    "South America",
    "North Africa",
  ];

  const defaultList = destinationData.slice(0, 6);

  const filteredList =
    selectedRegion === "All Regions"
      ? defaultList
      : destinationData.filter((item) => {
          if (selectedRegion === "South America") {
            return item.region === "Central America" || item.region === "South America";
          }
          return item.region.toLowerCase().includes(selectedRegion.toLowerCase());
        });

  function renderCardIcon(code: string) {
    if (code === "EA-01") {
      return (
        <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M2 7h20" />
        </svg>
      );
    }
    if (code === "SC-04") {
      return (
        <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 6c3 0 3 2 6 2s3-2 6-2 3 2 6 2 3-2 6-2M2 12c3 0 3 2 6 2s3-2 6-2 3 2 6 2 3-2 6-2M2 18c3 0 3 2 6 2s3-2 6-2 3 2 6 2 3-2 6-2" />
        </svg>
      );
    }
    if (code === "CA-02") {
      return (
        <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 20l9-14 9 14H3z" />
        </svg>
      );
    }
    if (code === "SE-08") {
      return (
        <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 21h16M4 10h16M4 7l8-4 8 4M6 10v11M10 10v11M14 10v11M18 10v11" />
        </svg>
      );
    }
    if (code === "NA-03") {
      return (
        <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 19c3 0 4 1 6 1s4-1 6-1 4 1 6 1M12 3v13M8 16l4-13 7 13H8z" />
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 20l6-9 4 5 7-10 2 14H3z" />
      </svg>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="text-xs font-mono font-medium tracking-wider text-gray-500 uppercase mb-2">
          {"CATALOGUE // 01 • LIVE SURVEY"}
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Explore destinations
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Browse curated travel places organized by geographic region and terrain.
            </p>
          </div>
          <div className="md:text-right">
            <div className="text-xs font-mono font-medium text-gray-500 uppercase">
              TOTAL RECORDED ENTITIES
            </div>
            <div className="text-xl font-bold text-gray-900">
              06 NODES ACTIVE
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2">
          {regions.map((region) => {
            const isActive = selectedRegion === region;
            return (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800 border-emerald-300 shadow-sm"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {region}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredList.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-xl bg-white p-4 flex flex-col justify-between shadow-sm hover:border-gray-300 hover:shadow transition-all"
          >
            <div>
              <div className="w-full bg-[#f1f5f9] border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {renderCardIcon(item.code)}
                  <span className="font-mono text-xs font-semibold text-slate-700">
                    {item.loc}
                  </span>
                </div>
                <span className="bg-white border border-gray-200 rounded px-2 py-0.5 text-[11px] font-mono font-bold text-gray-700">
                  {item.code}
                </span>
              </div>

              <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  {item.name}
                </h2>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>

              <div className="text-xs font-medium text-gray-500 mt-0.5">
                {item.country} • {item.region}
              </div>

              <p className="text-xs text-gray-600 mt-3 line-clamp-3 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-3 mt-6 flex items-center justify-between">
              <Link
                href={`/destinations/${item.id}`}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors"
              >
                <span>View destination</span>
                <span>→</span>
              </Link>
              <span className="text-gray-300 text-sm">•</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border border-gray-200 rounded-lg p-3 bg-white flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-gray-400 font-bold">ⓘ</span>
          <span>Destinations are systematically validated against public cartographic terrain datasets.</span>
        </div>
        <div className="font-mono font-medium text-gray-600">
          COORDINATE FORMAT: WGS84
        </div>
      </div>
    </div>
  );
}
