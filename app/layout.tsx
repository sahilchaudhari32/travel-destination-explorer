import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wayfinder - Travel Destination Explorer",
  description: "Browse curated travel places organized by geographic region and terrain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased min-h-screen flex flex-col justify-between">
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8 h-full">
              <Link href="/" className="flex items-center gap-2 font-bold text-lg text-emerald-900 hover:text-emerald-700">
                <span className="text-emerald-700 text-xl">■</span>
                <span>Wayfinder</span>
              </Link>
              <nav className="flex items-center gap-6 h-full">
                <Link
                  href="/"
                  className="h-full flex items-center border-b-2 border-emerald-600 px-1 text-sm font-semibold text-gray-900"
                >
                  Destinations
                </Link>
                <Link
                  href="/regions"
                  className="h-full flex items-center border-b-2 border-transparent px-1 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Regions
                </Link>
                <Link
                  href="/about"
                  className="h-full flex items-center border-b-2 border-transparent px-1 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  About
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-block border border-gray-300 rounded px-2.5 py-1 text-xs font-mono text-gray-600 bg-gray-50">
                GEO.INDEX v2.4
              </span>
              <Link
                href="/regions"
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                Plan Trip
              </Link>
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-gray-200 bg-white py-6 mt-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <div>
              © 2025 Wayfinder Spatial Index. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-gray-900">Index</Link>
              <Link href="/regions" className="hover:text-gray-900">Cartography</Link>
              <Link href="/about" className="hover:text-gray-900">Data Sources</Link>
              <Link href="/about" className="hover:text-gray-900">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
