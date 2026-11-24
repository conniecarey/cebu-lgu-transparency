import { useState } from "react";

const municipalities = [
  "Alcantara", "Alcoy", "Alegria", "Aloguinsan",
  "Argao", "Asturias", "Badian", "Balamban",
  "Bantayan", "Barili", "Boljoon", "Borbon",
  "Carmen", "Catmon", "Compostela", "Consolacion",
  "Cordova", "Daanbantayan", "Dalaguete", "Dumanjug",
  "Ginatilan", "Liloan", "Madridejos", "Malabuyoc",
  "Medellin", "Minglanilla", "Moalboal", "Oslob",
  "Pilar", "Pinamungajan", "Poro", "Ronda",
  "Samboan", "San Fernando", "San Francisco",
  "San Remigio", "Santa Fe", "Santander",
  "Sibonga", "Sogod", "Tabogon", "Tabuelan",
  "Tuburan", "Tudela"
];

const componentCities = [
  "Bogo City", "Carcar City", "Danao City",
  "Naga City", "Talisay City", "Toledo City"
];

const highlyUrbanizedCities = [
  "Cebu City", "Lapu-Lapu City", "Mandaue City"
];

type LGUType =
  | "Municipality"
  | "Component City"
  | "Highly Urbanized City";

type LGU = {
  name: string;
  type: LGUType;
};

const lgus: LGU[] = [
  ...municipalities.map(name => ({
    name,
    type: "Municipality" as const
  })),
  ...componentCities.map(name => ({
    name,
    type: "Component City" as const
  })),
  ...highlyUrbanizedCities.map(name => ({
    name,
    type: "Highly Urbanized City" as const
  }))
];

const budgetUrl =
  "https://cebu-city-budget-transparency.netlify.app/";

const politiciansUrl =
  "https://knowyourpoliticians.netlify.app/";

const alcantaraSources = {
  executive: "https://alcantara.com.ph/executive-department",
  legislative: "https://alcantara.com.ph/legislative-department",
  audit: "https://www.coa.gov.ph/wpfd_file/alcantara-compliance-audit-report-2025/",
  municipality: "https://alcantara.com.ph/"
};

const alcantaraCouncilors = [
  "Ragen Pantuan",
  "Florencio Basilisco",
  "Litoy Lambo",
  "Tas Delima",
  "Beatriz Caburnay",
  "Joshua Catapusan",
  "Jhulie Bayato",
  "Artudio Lumapay",
  "Augustina T. Odever"
];

function SourceLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-blue-700 font-semibold text-sm hover:underline"
    >
      {children} ↗
    </a>
  );
}

function AlcantaraProfile() {
