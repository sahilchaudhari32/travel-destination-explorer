import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="border border-gray-200 rounded-xl bg-white p-8 shadow-sm">
        <div className="text-xs font-mono font-medium tracking-wider text-gray-500 uppercase mb-2">
          {"DOCUMENTATION // 00 • SPATIAL INDEX"}
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
          About Wayfinder
        </h1>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          Wayfinder is an open cartographic spatial directory cataloging curated global travel destinations, continental divisions, and transit interconnectivity layers.
        </p>

        <div className="space-y-4 border-t border-gray-200 pt-6 text-sm text-gray-600">
          <div>
            <h2 className="font-bold text-gray-900 mb-1">Methodology & Dataset Verification</h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Every indexed settlement node is mapped against WGS84 geographic coordinate systems, elevation registries, and regional transit networks to ensure accurate travel planning.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-gray-900 mb-1">Spatial Index Version</h2>
            <p className="text-xs font-mono text-gray-500">
              GEO.INDEX v2.4 • Active Spatial Corridors: 06 Initial Nodes Cataloged
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-4 py-2 rounded-md text-xs transition-colors"
          >
            Explore Destinations
          </Link>
          <Link
            href="/regions"
            className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-4 py-2 rounded-md text-xs transition-colors"
          >
            Browse Regions
          </Link>
          <Link
            href="/manage"
            className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-4 py-2 rounded-md text-xs transition-colors"
          >
            Manage Data Nodes
          </Link>
        </div>
      </div>
    </div>
  );
}
