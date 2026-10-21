import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="border border-gray-200 rounded-xl bg-white p-8 shadow-sm">
        <div className="flex justify-between items-center text-xs">
          <span className="border border-gray-200 px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-bold">
            • 404 • Unresolved Destination Path
          </span>
          <span className="font-mono text-gray-400">REF: ERR_PATH_UNRESOLVED</span>
        </div>

        <div className="mt-6">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Destination or region not found
          </h1>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            The requested geographic route identifier could not be resolved within the Wayfinder spatial database. The path may have changed or the slug syntax is invalid.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/"
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-4 py-2 rounded text-xs transition-colors"
          >
            ↗ Return to Destinations
          </Link>
          <Link
            href="/regions"
            className="border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold px-4 py-2 rounded text-xs bg-gray-50 transition-colors"
          >
            ▦ Browse All Regions
          </Link>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex justify-between items-center text-xs font-semibold text-gray-500 mb-3">
            <span>Suggested Directory Shortcuts</span>
            <span className="font-mono text-[11px] text-gray-400">SPATIAL INDEX VERIFIED</span>
          </div>

          <div className="border border-gray-200 rounded-lg divide-y divide-gray-200 overflow-hidden text-xs">
            <Link
              href="/destinations/1"
              className="flex justify-between items-center p-3 hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900">Kyoto, Japan</span>
              <span className="text-gray-400 font-mono">/destinations/1 →</span>
            </Link>
            <Link
              href="/destinations/2"
              className="flex justify-between items-center p-3 hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900">Bergen, Norway</span>
              <span className="text-gray-400 font-mono">/destinations/2 →</span>
            </Link>
            <Link
              href="/regions/asia/japan/kansai"
              className="flex justify-between items-center p-3 hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900">Kansai Region</span>
              <span className="text-gray-400 font-mono">/regions/asia/japan/kansai →</span>
            </Link>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 mt-6 bg-slate-50 font-mono text-[11px] text-gray-600">
          <div className="font-bold text-gray-900 mb-1">ROUTER DIAGNOSTIC NOTE</div>
          <div>query_target: srcdoc</div>
          <div>resolution_tree: null [index match fail at root:destinations/]</div>
          <div>dispatch_timestamp: 2026-10-19T16:55:00.000Z</div>
        </div>
      </div>
    </div>
  );
}
