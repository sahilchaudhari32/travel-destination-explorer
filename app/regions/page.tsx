import Link from "next/link";
import { continentalDivisions } from "../../data/regionData";

export default function RegionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="text-xs font-mono font-medium tracking-wider text-gray-500 uppercase mb-2">
          {"REGIONAL SPATIAL HIERARCHY // 02"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Continental & Sub-Regional Index
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Explore cartographic divisions, terrain classifications, and regional administrative nodes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {continentalDivisions.map((division) => (
          <div
            key={division.id}
            className="border border-gray-200 rounded-xl bg-white p-6 shadow-sm hover:border-gray-300 hover:shadow transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-3">
                <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {division.code}
                </span>
                <span>{division.settlements}</span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {division.name}
              </h2>

              <div className="text-xs font-mono font-medium text-gray-500 mb-3">
                {division.terrain}
              </div>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {division.subregions}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400">
                {division.jurisdiction}
              </span>
              <Link
                href={division.path}
                className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
              >
                <span>{division.linkText}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
