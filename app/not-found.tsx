import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-[100vw] flex flex-col items-center pt-[3vw] pb-[5vw]">
      <div className="w-[70vw] border rounded-[0.5vw] p-[2.5vw] bg-white">
        <div className="flex justify-between items-center text-[0.85vw]">
          <span className="border px-[0.8vw] py-[0.2vw] rounded-full bg-gray-100 text-gray-700 font-bold">
            • 404 • Unresolved Destination Path
          </span>
          <span className="font-mono text-gray-500">REF: ERR_PATH_UNRESOLVED</span>
        </div>

        <div className="mt-[2vw]">
          <div className="text-[2.5vw] font-bold text-gray-900">
            Destination or region not found
          </div>
          <div className="text-[1.1vw] text-gray-600 mt-[0.8vw] leading-relaxed max-w-[50vw]">
            The requested geographic route identifier could not be resolved within the Wayfinder spatial database. The path may have changed or the slug syntax is invalid.
          </div>
        </div>

        <div className="flex gap-[1.5vw] mt-[2vw]">
          <Link
            href={"/"}
            className="bg-emerald-800 text-white font-bold px-[1.5vw] py-[0.8vw] rounded-[0.4vw] text-[0.95vw]"
          >
            ↗ Return to Destinations
          </Link>
          <Link
            href={"/regions"}
            className="border font-bold text-gray-800 px-[1.5vw] py-[0.8vw] rounded-[0.4vw] text-[0.95vw] bg-gray-50"
          >
            ▦ Browse All Regions
          </Link>
        </div>

        <div className="border-t mt-[2.5vw] pt-[1.5vw]">
          <div className="flex justify-between items-center text-[0.8vw] font-bold text-gray-500">
            <span>Suggested Directory Shortcuts</span>
            <span>SPATIAL INDEX VERIFIED</span>
          </div>

          <div className="mt-[1vw] border rounded divide-y">
            <Link
              href={"/destinations/1"}
              className="flex justify-between items-center p-[0.8vw] text-[0.95vw] hover:bg-gray-50"
            >
              <span className="font-bold">Kyoto, Japan</span>
              <span className="text-gray-500 font-mono text-[0.85vw]">/destinations/1 →</span>
            </Link>
            <Link
              href={"/destinations/2"}
              className="flex justify-between items-center p-[0.8vw] text-[0.95vw] hover:bg-gray-50"
            >
              <span className="font-bold">Bergen, Norway</span>
              <span className="text-gray-500 font-mono text-[0.85vw]">/destinations/2 →</span>
            </Link>
            <Link
              href={"/regions/asia/japan/kansai"}
              className="flex justify-between items-center p-[0.8vw] text-[0.95vw] hover:bg-gray-50"
            >
              <span className="font-bold">Kansai Region</span>
              <span className="text-gray-500 font-mono text-[0.85vw]">/regions/asia/japan/kansai →</span>
            </Link>
          </div>
        </div>

        <div className="border rounded-[0.4vw] p-[1vw] mt-[2vw] bg-slate-50 font-mono text-[0.8vw] text-gray-600">
          <div className="font-bold text-black mb-[0.4vw]">ROUTER DIAGNOSTIC NOTE</div>
          <div>query_target: srcdoc</div>
          <div>resolution_tree: null [index match fail at root:destinations/]</div>
          <div>dispatch_timestamp: 2026-10-19T16:55:00.000Z</div>
        </div>
      </div>
    </div>
  );
}
