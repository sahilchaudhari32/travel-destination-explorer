export const continentalDivisions = [
  {
    id: 1,
    name: "East Asia",
    code: "DIV-EA • PACIFIC RIM",
    settlements: "18 settlements",
    terrain: "TERRAIN: ISLAND ARCS & BASINS",
    subregions: "Sub-regions: Japan, South Korea, Taiwan • 18 cataloged settlements",
    jurisdiction: "JURISDICTION CODE 01",
    linkText: "Browse East Asia >",
    path: "/regions/asia/japan/kansai"
  },
  {
    id: 2,
    name: "Southern Europe",
    code: "DIV-SE • MEDITERRANEAN BASIN",
    settlements: "24 settlements",
    terrain: "TERRAIN: KARST & MARITIME VALLEYS",
    subregions: "Sub-regions: Italy, Spain, Greece, Portugal • 24 cataloged settlements",
    jurisdiction: "JURISDICTION CODE 02",
    linkText: "Browse Southern Europe >",
    path: "/regions/europe/italy/tuscany"
  },
  {
    id: 3,
    name: "Scandinavia",
    code: "DIV-SC • BALTIC SHIELD",
    settlements: "12 settlements",
    terrain: "TERRAIN: GLACIAL FJORDS & ARCHIPELAGOS",
    subregions: "Sub-regions: Norway, Sweden, Denmark, Finland • 12 cataloged settlements",
    jurisdiction: "JURISDICTION CODE 03",
    linkText: "Browse Scandinavia >",
    path: "/regions/europe/norway/vestland"
  },
  {
    id: 4,
    name: "Central & South America",
    code: "DIV-CSA • ANDEAN CORDILLERA",
    settlements: "16 settlements",
    terrain: "TERRAIN: HIGHLAND PLATEAUS & CANOPIES",
    subregions: "Sub-regions: Mexico, Peru, Colombia, Chile • 16 cataloged settlements",
    jurisdiction: "JURISDICTION CODE 04",
    linkText: "Browse Latin America >",
    path: "/regions/americas/mexico/oaxaca"
  }
];

export const regionData = {
  kansai: {
    name: "Kansai Region",
    description: "The cultural and historical heart of western Honshu, encompassing ancient capitals, mountain pilgrimage routes, and major culinary ports.",
    parent: "Japan",
    grandparent: "Asia",
    prefectures: "7 (Mie, Shiga, Kyoto, Osaka, Hyogo, Nara, Wakayama)",
    uri: "/regions/asia/japan/kansai",
    type: "SUB_REGION_INDEX",
    spatialMetrics: {
      index: "LOC-34.6937°N",
      admin: "Kinki Chiho (近畿地方)",
      area: "33,112.40 km²",
      population: "~22.4M",
      gateway: "KIX (Kansai Intl Airport)"
    },
    destinations: [1, 7, 8, 9], // Kyoto, Osaka, Nara, Kobe
    transitNote: "The Kansai corridor is bound by one of the densest private and national rail meshes globally. The JR Tokaido-Sanyo Shinkansen anchors the primary east-west spine connecting Kyoto, Shin-Osaka, and Shin-Kobe in under 30 minutes. Hankyu, Hanshin, Keihan, and Kintetsu private networks provide non-JR redundant links serving suburban belts and pilgrimage footpaths into Mount Koya and Yoshino.",
    climateNote: "Flanked by the Tamba highlands to the north, the Kii mountain spine to the south, and Osaka Bay to the west, Kansai experiences stark microclimates. Kyoto's closed basin results in sharp seasonal temperature deltas (hot humid summers and biting winters), whereas Kobe and southern Osaka benefit from maritime moderations created by the Seto Inland Sea wind tunnels."
  }
};

export default regionData;
