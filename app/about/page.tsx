import Link from "next/link";

export default function About() {
  return (
    <div className="w-[100vw] flex flex-col items-center pt-[4vw] pb-[5vw]">
      <div className="w-[70vw] border rounded-[0.5vw] p-[2.5vw] bg-white">
        <div className="text-[2.5vw] font-bold">About Wayfinder</div>
        <div className="text-[1.1vw] text-gray-600 mt-[1vw] leading-relaxed">
          Wayfinder is a spatial exploration index cataloging curated global travel destinations, regional hierarchies, and transit networks.
        </div>

        <div className="border-t mt-[2vw] pt-[1.5vw] flex gap-[1vw]">
          <Link
            href={"/"}
            className="border px-[1vw] py-[0.5vw] rounded font-bold text-[0.95vw] bg-emerald-50 text-emerald-800"
          >
            Explore Destinations
          </Link>
          <Link
            href={"/regions"}
            className="border px-[1vw] py-[0.5vw] rounded font-bold text-[0.95vw] bg-gray-50"
          >
            Browse Regions
          </Link>
        </div>
      </div>
    </div>
  );
}
