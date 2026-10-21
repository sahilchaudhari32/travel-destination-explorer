import Link from "next/link";
import { regionData } from "../../../data/regionData";
import destinationData from "../../../data/destinationData";

export function generateStaticParams() {
  return [
    { slug: ["asia", "japan", "kansai"] },
  ];
}

export default async function RegionDetailPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug ? resolvedParams.slug.join("/") : "asia/japan/kansai";
  
  const kansai = regionData.kansai;
  const matchingDestinations = destinationData.filter((item) =>
    kansai.destinations.includes(item.id)
  );

  return (
    <div>
      <div className="border-b border-gray-200 bg-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-gray-500 gap-2">
          <div>
            URI: <span className="text-emerald-800 font-semibold">{kansai.uri}</span> • TYPE: {kansai.type}
          </div>
          <div>
            CRS: EPSG:4326 • INDEX_ID: #7240-KNSI
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 mb-6 gap-2">
          <Link href="/regions" className="text-gray-700 hover:text-emerald-800 font-medium flex items-center gap-1">
            <span>←</span>
            <span>Back to Japan overview</span>
          </Link>
          <div className="font-mono text-gray-600">
            Destinations / Asia / Japan / Kansai
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div className="text-xs font-mono text-emerald-800 font-medium mb-1">
              ↳ Asia / Japan / Kansai
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
              {kansai.name}
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              {kansai.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="border border-gray-300 rounded px-2.5 py-1 bg-white font-medium text-gray-700">
                Parent: <strong className="text-gray-900">{kansai.parent}</strong> ↗
              </span>
              <span className="border border-gray-300 rounded px-2.5 py-1 bg-white font-medium text-gray-700">
                Grandparent: <strong className="text-gray-900">{kansai.grandparent}</strong> ↗
              </span>
              <span className="border border-gray-300 rounded px-2.5 py-1 bg-white font-medium text-gray-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
                <span>Prefectures: {kansai.prefectures}</span>
              </span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 bg-white text-xs">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-3 font-mono">
              <span className="text-gray-500 font-semibold uppercase">SPATIAL INDEX METRICS</span>
              <span className="font-bold text-gray-900">{kansai.spatialMetrics.index}</span>
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between">
                <span className="text-gray-500">Administrative Division</span>
                <span className="font-medium text-gray-900 text-right">{kansai.spatialMetrics.admin}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total Area</span>
                <span className="font-medium text-gray-900">{kansai.spatialMetrics.area}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Population Index</span>
                <span className="font-medium text-gray-900">{kansai.spatialMetrics.population}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Principal Gateway</span>
                <span className="font-medium text-gray-900 text-right">{kansai.spatialMetrics.gateway}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Destinations in this region ({matchingDestinations.length})
              </h2>
              <p className="text-xs text-gray-500">
                Settlement nodes cataloged with active transit corridors and spatial reference points.
              </p>
            </div>
            <div className="text-xs font-mono text-gray-500">
              Sort: <span className="font-semibold text-gray-700">Hierarchy</span> | Density Map
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchingDestinations.map((dest) => (
              <div
                key={dest.id}
                className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:border-gray-300 hover:shadow transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-gray-500 font-semibold">{dest.tag}</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[11px] font-medium border border-gray-200">
                      {dest.type || "Imperial Capital"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {dest.name}
                  </h3>

                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-xs">
                  <span className="font-mono text-gray-500">
                    {dest.geo}
                  </span>
                  <Link
                    href={`/destinations/${dest.id}`}
                    className="font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>View destination</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-6 bg-[#f8fafc] mb-8">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-4">
            <span className="text-blue-600 font-bold">ⓘ</span>
            <span>Regional Spatial Notes & Connectivity</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-600">
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 font-bold text-gray-900 mb-2">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8M8 11h8m-9 8h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 19l-2 2m8-2l2 2" />
                  </svg>
                  <span>Rail Interconnectivity & Transit Arteries</span>
                </div>
                <p className="leading-relaxed mb-4">
                  {kansai.transitNote}
                </p>
              </div>
              <div className="font-mono text-gray-500 pt-2 border-t border-gray-200 text-[11px]">
                Primary pass: JR Kansai Area Pass • Transit interoperability: ICOCA / Suica integrated
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 font-bold text-gray-900 mb-2">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <span>Geographic Microclimates & Topography</span>
                </div>
                <p className="leading-relaxed mb-4">
                  {kansai.climateNote}
                </p>
              </div>
              <div className="font-mono text-gray-500 pt-2 border-t border-gray-200 text-[11px] text-right">
                Verified spatial notes (Updated: Autumn cycle)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
