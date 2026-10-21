import Link from "next/link";
import { notFound } from "next/navigation";
import destinationData from "../../../data/destinationData";

export function generateStaticParams() {
  return destinationData.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const destId = parseInt(resolvedParams.id, 10);
  const destination = destinationData.find((item) => item.id === destId);

  if (!destination) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 mb-4"
        >
          <span>←</span>
          <span>Back to Destinations</span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold text-slate-700">
                {destination.loc}
              </span>
              <span className="font-mono text-xs bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-bold text-emerald-800">
                {destination.code}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {destination.geo}
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              {destination.name}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {destination.country} • {destination.region} {destination.subRegion ? `• ${destination.subRegion}` : ""}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/manage"
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              Manage Node
            </Link>
            <Link
              href="/regions/asia/japan/kansai"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              View Region
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="border border-gray-200 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Overview & Character
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {destination.overview || destination.description}
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Known For & Highlights
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {destination.knownFor}
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-gray-600">
              <strong className="text-gray-900">Recommended Trip Length:</strong> {destination.tripLength}
            </div>
          </div>

          <div className="border border-blue-200 rounded-xl bg-[#f8fafc] p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-blue-600 font-bold">ⓘ</span>
              <span>Transit & Connectivity Notes</span>
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              {destination.transitNotes}
            </p>
          </div>
        </div>

        <div>
          <div className="border border-gray-200 rounded-xl bg-white p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-gray-900 uppercase font-mono tracking-wider border-b border-gray-200 pb-2">
              Spatial Registry Data
            </h2>

            <div>
              <div className="text-xs text-gray-500">Elevation</div>
              <div className="text-sm font-semibold text-gray-900">{destination.elevation || "54m"}</div>
            </div>

            <div>
              <div className="text-xs text-gray-500">Prefecture / State</div>
              <div className="text-sm font-semibold text-gray-900">{destination.prefecture || "Central Region"}</div>
            </div>

            <div>
              <div className="text-xs text-gray-500">Best Season to Visit</div>
              <div className="text-sm font-semibold text-gray-900">{destination.bestSeason || "Spring and Autumn"}</div>
            </div>

            <div>
              <div className="text-xs text-gray-500">ISO Country Tag</div>
              <div className="text-sm font-semibold text-gray-900">{destination.tag}</div>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <Link
                href="/"
                className="w-full inline-block text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 rounded text-xs transition-colors"
              >
                Return to Directory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
