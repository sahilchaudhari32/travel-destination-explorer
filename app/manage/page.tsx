"use client";

import { useState } from "react";
import Link from "next/link";
import destinationData from "../../data/destinationData";

export default function ManagePage() {
  const [destinations, setDestinations] = useState(destinationData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilterRegion, setSelectedFilterRegion] = useState("All");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    region: "East Asia",
    subRegion: "",
    code: "",
    loc: "",
    geo: "",
    tag: "",
    description: "",
    overview: "",
    bestSeason: "",
    knownFor: "",
    tripLength: "",
    transitNotes: "",
  });

  const allRegions = [
    "All",
    "East Asia",
    "Southern Europe",
    "Scandinavia",
    "Central America",
    "North Africa",
    "Oceania",
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.loc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion =
      selectedFilterRegion === "All" || dest.region === selectedFilterRegion;
    return matchesSearch && matchesRegion;
  });

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleStartEdit(item: typeof destinationData[0]) {
    setEditingId(item.id);
    setFormData({
      name: item.name,
      country: item.country,
      region: item.region,
      subRegion: item.subRegion || "",
      code: item.code,
      loc: item.loc,
      geo: item.geo,
      tag: item.tag,
      description: item.description,
      overview: item.overview || "",
      bestSeason: item.bestSeason || "",
      knownFor: item.knownFor || "",
      tripLength: item.tripLength || "",
      transitNotes: item.transitNotes || "",
    });
    setShowAddForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.name.trim() || !formData.country.trim()) {
      alert("Please provide both destination name and country.");
      return;
    }

    if (editingId !== null) {
      setDestinations((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                ...formData,
              }
            : item
        )
      );
      setStatusMessage(`Successfully updated ${formData.name}`);
      setEditingId(null);
    } else {
      const newId = destinations.length > 0 ? Math.max(...destinations.map((d) => d.id)) + 1 : 1;
      const newEntry = {
        id: newId,
        slug: formData.name.toLowerCase().replace(/\s+/g, "-"),
        code: formData.code || `ND-${newId}`,
        loc: formData.loc || `LOC-${(30 + Math.random() * 20).toFixed(4)}`,
        geo: formData.geo || "35.0000° N, 135.0000° E",
        name: formData.name,
        country: formData.country,
        region: formData.region,
        subRegion: formData.subRegion,
        regionSlug: "asia/japan/kansai",
        tag: formData.tag || formData.country.substring(0, 3).toUpperCase(),
        description: formData.description || "A newly added destination record.",
        overview: formData.overview || formData.description,
        elevation: "50m",
        prefecture: formData.subRegion || formData.country,
        bestSeason: formData.bestSeason || "All year round",
        knownFor: formData.knownFor || "Local attractions and cultural points",
        tripLength: formData.tripLength || "3 to 5 days",
        transitNotes: formData.transitNotes || "Public transport and regional transit lines available.",
      };

      setDestinations((prev) => [newEntry, ...prev]);
      setStatusMessage(`Successfully added ${newEntry.name} to the registry!`);
    }

    setFormData({
      name: "",
      country: "",
      region: "East Asia",
      subRegion: "",
      code: "",
      loc: "",
      geo: "",
      tag: "",
      description: "",
      overview: "",
      bestSeason: "",
      knownFor: "",
      tripLength: "",
      transitNotes: "",
    });
    setShowAddForm(false);

    setTimeout(() => {
      setStatusMessage("");
    }, 4000);
  }

  function handleDelete(id: number, name: string) {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      setDestinations((prev) => prev.filter((item) => item.id !== id));
      setStatusMessage(`Deleted ${name} from destination index.`);
      setTimeout(() => {
        setStatusMessage("");
      }, 4000);
    }
  }

  function handleReset() {
    if (confirm("Reset destinations to initial default dataset?")) {
      setDestinations(destinationData);
      setStatusMessage("Reset all destination records to original state.");
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-mono font-medium tracking-wider text-gray-500 uppercase mb-2">
            {"MANAGEMENT CONSOLE // 04"}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Destination Management
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Add new locations, modify cataloged settlement nodes, or update cartographic coordinate entries.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setEditingId(null);
              setShowAddForm(!showAddForm);
            }}
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors flex items-center gap-1.5"
          >
            <span>{showAddForm ? "Close Form" : "+ Add Destination"}</span>
          </button>
          <button
            onClick={handleReset}
            className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-md text-xs font-medium transition-colors"
          >
            Reset Data
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm font-medium flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>{statusMessage}</span>
          </div>
          <button
            onClick={() => setStatusMessage("")}
            className="text-emerald-800 font-bold text-xs"
          >
            ✕
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="border border-gray-200 rounded-xl bg-white p-4 shadow-sm">
          <div className="text-xs font-mono text-gray-500 uppercase">Total Cataloged Nodes</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{destinations.length}</div>
        </div>
        <div className="border border-gray-200 rounded-xl bg-white p-4 shadow-sm">
          <div className="text-xs font-mono text-gray-500 uppercase">Active Filter Matches</div>
          <div className="text-2xl font-bold text-emerald-700 mt-1">{filteredDestinations.length}</div>
        </div>
        <div className="border border-gray-200 rounded-xl bg-white p-4 shadow-sm">
          <div className="text-xs font-mono text-gray-500 uppercase">System Status</div>
          <div className="text-2xl font-bold text-gray-900 mt-1 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
            <span className="text-sm">ONLINE</span>
          </div>
        </div>
      </div>

      {showAddForm && (
        <div className="border border-emerald-200 rounded-xl bg-slate-50 p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
            <h2 className="text-lg font-bold text-gray-900">
              {editingId !== null ? "Edit Destination Node" : "Register New Destination"}
            </h2>
            <button
              onClick={() => setShowAddForm(false)}
              className="text-gray-400 hover:text-gray-700 text-sm font-bold"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Destination Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Kyoto"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Country *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="e.g. Japan"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Region</label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="East Asia">East Asia</option>
                  <option value="Southern Europe">Southern Europe</option>
                  <option value="Scandinavia">Scandinavia</option>
                  <option value="Central America">Central America</option>
                  <option value="South America">South America</option>
                  <option value="North Africa">North Africa</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Sub-Region / State</label>
                <input
                  type="text"
                  name="subRegion"
                  value={formData.subRegion}
                  onChange={handleInputChange}
                  placeholder="e.g. Kansai"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Node Code</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleInputChange}
                  placeholder="e.g. EA-01"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Location ID</label>
                <input
                  type="text"
                  name="loc"
                  value={formData.loc}
                  onChange={handleInputChange}
                  placeholder="e.g. LOC-35.0116"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Coordinates (Geo)</label>
                <input
                  type="text"
                  name="geo"
                  value={formData.geo}
                  onChange={handleInputChange}
                  placeholder="e.g. 35.0116° N, 135.7681° E"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">ISO Tag</label>
                <input
                  type="text"
                  name="tag"
                  value={formData.tag}
                  onChange={handleInputChange}
                  placeholder="e.g. JPN"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Trip Length</label>
                <input
                  type="text"
                  name="tripLength"
                  value={formData.tripLength}
                  onChange={handleInputChange}
                  placeholder="e.g. 4 to 6 days"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Short Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={2}
                placeholder="Brief summary shown on main catalog cards"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2 rounded text-xs transition-colors"
              >
                {editingId !== null ? "Save Changes" : "Create Node"}
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded text-xs transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gray-50/50">
          <div className="w-full sm:w-72">
            <input
              type="text"
              placeholder="Search by name, country, or LOC..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-xs bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {allRegions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedFilterRegion(region)}
                className={`px-2.5 py-1 rounded text-xs font-medium border transition-colors whitespace-nowrap ${
                  selectedFilterRegion === region
                    ? "bg-emerald-700 text-white border-emerald-700"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-gray-500 font-mono">
                <th className="py-3 px-4 font-semibold">LOC / CODE</th>
                <th className="py-3 px-4 font-semibold">NAME & COUNTRY</th>
                <th className="py-3 px-4 font-semibold">REGION</th>
                <th className="py-3 px-4 font-semibold">DESCRIPTION</th>
                <th className="py-3 px-4 font-semibold text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDestinations.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-mono">
                    <div className="font-bold text-gray-800">{item.loc}</div>
                    <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      {item.code}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-bold text-gray-900 text-sm">{item.name}</div>
                    <div className="text-gray-500">{item.country} • {item.tag}</div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    <div>{item.region}</div>
                    <div className="text-[11px] text-gray-400">{item.subRegion || "-"}</div>
                  </td>
                  <td className="py-3 px-4 text-gray-600 max-w-xs truncate">
                    {item.description}
                  </td>
                  <td className="py-3 px-4 text-right space-x-2 whitespace-nowrap">
                    <Link
                      href={`/destinations/${item.id}`}
                      className="text-emerald-700 hover:text-emerald-800 font-semibold"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => handleStartEdit(item)}
                      className="text-blue-600 hover:text-blue-800 font-semibold ml-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id, item.name)}
                      className="text-red-600 hover:text-red-800 font-semibold ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredDestinations.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-500">
                    No destination nodes matching query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
