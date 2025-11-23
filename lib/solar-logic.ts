import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Solar Business Logic Types ---

export type Region = "Norte" | "Nordeste" | "CentroOeste" | "Sudeste" | "Sul";
export type TierType = "Padrão" | "Consciente" | "Moderado" | "Acelerado";
export type CategoryType = "XPP" | "PP" | "P" | "M" | "GG" | "XGG";

export interface GenerationTier {
  tier: TierType;
  multiplier: number;
  description: string;
}

export interface LossFactors {
  temperature: number;
  shading: number;
  soiling: number;
  mismatchLidDc: number;
}

export interface ServiceAndFee {
  name: string;
  cost: number;
  description: string;
}

export interface E2EItem {
  name: string;
  quantity: number;
  unitCost: number;
  description: string;
}

export interface SolarCategoryConfig {
  category: CategoryType;
  consumptionKwh: number;
  averageBillByRegion: Record<Region, number>;
  servicesAndFees: ServiceAndFee[];
  inverterKwByRegionAndTier: Record<Region, Record<TierType, number>>;
  tiers: GenerationTier[];
  losses: LossFactors;
  panelPowerWp: number; // Added to standardize panel sizing logic
}

// --- Constants & Configuration ---

export const GENERATION_TIERS: GenerationTier[] = [
  {
    tier: "Padrão",
    multiplier: 1.15,
    description: "Geração Padrão – 115% do consumo",
  },
  {
    tier: "Consciente",
    multiplier: 1.3,
    description: "Geração Consciente – 130% do consumo",
  },
  {
    tier: "Moderado",
    multiplier: 1.45,
    description: "Geração Moderada – 145% do consumo",
  },
  {
    tier: "Acelerado",
    multiplier: 1.6,
    description: "Geração Acelerada – 160% do consumo",
  },
];

export const DEFAULT_LOSSES: LossFactors = {
  temperature: 4,
  shading: 3,
  soiling: 3,
  mismatchLidDc: 4,
};

// --- Category Configurations ---

export const SOLAR_CONFIGS: Record<CategoryType, SolarCategoryConfig> = {
  XPP: {
    category: "XPP",
    consumptionKwh: 150,
    panelPowerWp: 400,
    averageBillByRegion: {
      Norte: 120,
      Nordeste: 113,
      CentroOeste: 117,
      Sudeste: 110,
      Sul: 100,
    },
    servicesAndFees: [], // XPP usually has minimal fees or included in kit
    inverterKwByRegionAndTier: {
      Norte: { Padrão: 1.1, Consciente: 1.3, Moderado: 1.4, Acelerado: 1.5 },
      Nordeste: { Padrão: 1.2, Consciente: 1.4, Moderado: 1.5, Acelerado: 1.6 },
      CentroOeste: {
        Padrão: 1.0,
        Consciente: 1.2,
        Moderado: 1.3,
        Acelerado: 1.4,
      },
      Sudeste: { Padrão: 1.2, Consciente: 1.4, Moderado: 1.6, Acelerado: 1.8 },
      Sul: { Padrão: 1.3, Consciente: 1.5, Moderado: 1.7, Acelerado: 1.9 },
    },
    tiers: GENERATION_TIERS,
    losses: DEFAULT_LOSSES,
  },
  PP: {
    category: "PP",
    consumptionKwh: 300,
    panelPowerWp: 400,
    averageBillByRegion: {
      Norte: 240,
      Nordeste: 225,
      CentroOeste: 234,
      Sudeste: 220,
      Sul: 195,
    },
    servicesAndFees: [
      {
        name: "Projeto Elétrico",
        cost: 1200,
        description: "Desenvolvimento e tramitação",
      },
      { name: "Taxa Homologação", cost: 500, description: "Custas ANEEL" },
      { name: "Comissionamento", cost: 800, description: "Testes e partida" },
      {
        name: "Monitoramento 12m",
        cost: 450,
        description: "Plataforma online",
      },
    ],
    inverterKwByRegionAndTier: {
      Norte: { Padrão: 2.3, Consciente: 2.6, Moderado: 2.9, Acelerado: 3.2 },
      Nordeste: { Padrão: 2.3, Consciente: 2.6, Moderado: 2.9, Acelerado: 3.2 },
      CentroOeste: {
        Padrão: 2.3,
        Consciente: 2.6,
        Moderado: 2.9,
        Acelerado: 3.2,
      },
      Sudeste: { Padrão: 2.3, Consciente: 2.6, Moderado: 2.9, Acelerado: 3.2 },
      Sul: { Padrão: 2.3, Consciente: 2.6, Moderado: 2.9, Acelerado: 3.2 },
    },
    tiers: GENERATION_TIERS,
    losses: DEFAULT_LOSSES,
  },
  P: {
    category: "P",
    consumptionKwh: 600,
    panelPowerWp: 400,
    averageBillByRegion: {
      Norte: 480,
      Nordeste: 450,
      CentroOeste: 468,
      Sudeste: 440,
      Sul: 390,
    },
    servicesAndFees: [
      {
        name: "Projeto Elétrico",
        cost: 1500,
        description: "Desenvolvimento e tramitação",
      },
      { name: "Taxa Homologação", cost: 600, description: "Custas ANEEL" },
      { name: "Comissionamento", cost: 1000, description: "Testes e partida" },
      {
        name: "Monitoramento 12m",
        cost: 600,
        description: "Plataforma online",
      },
    ],
    inverterKwByRegionAndTier: {
      Norte: { Padrão: 5.8, Consciente: 6.5, Moderado: 7.3, Acelerado: 8.0 },
      Nordeste: { Padrão: 5.8, Consciente: 6.5, Moderado: 7.3, Acelerado: 8.0 },
      CentroOeste: {
        Padrão: 5.8,
        Consciente: 6.5,
        Moderado: 7.3,
        Acelerado: 8.0,
      },
      Sudeste: { Padrão: 5.8, Consciente: 6.5, Moderado: 7.3, Acelerado: 8.0 },
      Sul: { Padrão: 5.8, Consciente: 6.5, Moderado: 7.3, Acelerado: 8.0 },
    },
    tiers: GENERATION_TIERS,
    losses: DEFAULT_LOSSES,
  },
  M: {
    category: "M",
    consumptionKwh: 1800,
    panelPowerWp: 450,
    averageBillByRegion: {
      Norte: 1440,
      Nordeste: 1350,
      CentroOeste: 1404,
      Sudeste: 1320,
      Sul: 1170,
    },
    servicesAndFees: [
      {
        name: "Projeto Elétrico",
        cost: 2000,
        description: "Desenvolvimento e tramitação",
      },
      { name: "Taxa Homologação", cost: 800, description: "Custas ANEEL" },
      { name: "Comissionamento", cost: 1200, description: "Testes e partida" },
      {
        name: "Monitoramento 12m",
        cost: 900,
        description: "Plataforma online",
      },
    ],
    inverterKwByRegionAndTier: {
      Norte: { Padrão: 17, Consciente: 20, Moderado: 23, Acelerado: 26 },
      Nordeste: { Padrão: 17, Consciente: 20, Moderado: 23, Acelerado: 26 },
      CentroOeste: { Padrão: 17, Consciente: 20, Moderado: 23, Acelerado: 26 },
      Sudeste: { Padrão: 17, Consciente: 20, Moderado: 23, Acelerado: 26 },
      Sul: { Padrão: 17, Consciente: 20, Moderado: 23, Acelerado: 26 },
    },
    tiers: GENERATION_TIERS,
    losses: DEFAULT_LOSSES,
  },
  GG: {
    category: "GG",
    consumptionKwh: 36000,
    panelPowerWp: 500,
    averageBillByRegion: {
      Norte: 28800,
      Nordeste: 27000,
      CentroOeste: 28080,
      Sudeste: 26400,
      Sul: 23400,
    },
    servicesAndFees: [
      {
        name: "Projeto Elétrico",
        cost: 5000,
        description: "Desenvolvimento e tramitação",
      },
      { name: "Taxa Homologação", cost: 2000, description: "Custas ANEEL" },
      { name: "Comissionamento", cost: 3000, description: "Testes e partida" },
      {
        name: "Monitoramento 12m",
        cost: 2400,
        description: "Plataforma online",
      },
    ],
    inverterKwByRegionAndTier: {
      Norte: { Padrão: 330, Consciente: 380, Moderado: 435, Acelerado: 480 },
      Nordeste: { Padrão: 330, Consciente: 380, Moderado: 435, Acelerado: 480 },
      CentroOeste: {
        Padrão: 330,
        Consciente: 380,
        Moderado: 435,
        Acelerado: 480,
      },
      Sudeste: { Padrão: 330, Consciente: 380, Moderado: 435, Acelerado: 480 },
      Sul: { Padrão: 330, Consciente: 380, Moderado: 435, Acelerado: 480 },
    },
    tiers: GENERATION_TIERS,
    losses: DEFAULT_LOSSES,
  },
  XGG: {
    category: "XGG",
    consumptionKwh: 600000,
    panelPowerWp: 500,
    averageBillByRegion: {
      Norte: 480000,
      Nordeste: 450000,
      CentroOeste: 468000,
      Sudeste: 440000,
      Sul: 390000,
    },
    servicesAndFees: [
      {
        name: "Projeto Elétrico",
        cost: 15000,
        description: "Desenvolvimento e tramitação",
      },
      { name: "Taxa Homologação", cost: 6000, description: "Custas ANEEL" },
      { name: "Comissionamento", cost: 10000, description: "Testes e partida" },
      {
        name: "Monitoramento 12m",
        cost: 5000,
        description: "Plataforma online",
      },
    ],
    inverterKwByRegionAndTier: {
      Norte: {
        Padrão: 5500,
        Consciente: 6300,
        Moderado: 7250,
        Acelerado: 8000,
      },
      Nordeste: {
        Padrão: 5500,
        Consciente: 6300,
        Moderado: 7250,
        Acelerado: 8000,
      },
      CentroOeste: {
        Padrão: 5500,
        Consciente: 6300,
        Moderado: 7250,
        Acelerado: 8000,
      },
      Sudeste: {
        Padrão: 5500,
        Consciente: 6300,
        Moderado: 7250,
        Acelerado: 8000,
      },
      Sul: { Padrão: 5500, Consciente: 6300, Moderado: 7250, Acelerado: 8000 },
    },
    tiers: GENERATION_TIERS,
    losses: DEFAULT_LOSSES,
  },
};

// --- Logic Functions ---

export function getSolarConfig(category: CategoryType): SolarCategoryConfig {
  return SOLAR_CONFIGS[category];
}

export function calculateKitItems(
  category: CategoryType,
  region: Region,
  tier: TierType
): E2EItem[] {
  const config = SOLAR_CONFIGS[category];
  const recommendedInverterKw = config.inverterKwByRegionAndTier[region][tier];

  const panelUnitCost = 550; // Base cost, could be dynamic
  // Logic from files: panelQuantity = ceil(inverterKw * 2) - roughly 2 panels per kW of inverter?
  // Actually usually it's DC/AC ratio. If panels are 500W, 2 panels = 1kW. So 1kW inverter needs ~2 panels.
  // The logic in files was: Math.ceil(recommendedInverterKw * 2)
  const panelQuantity = Math.ceil(recommendedInverterKw * 2);

  const inverterUnitCost = 2000; // Base cost
  const inverterCost = inverterUnitCost + recommendedInverterKw * 1000;

  return [
    {
      name: `Painéis Solares Mono PERC ${config.panelPowerWp} Wp`,
      quantity: panelQuantity,
      unitCost: panelUnitCost,
      description: "Alta eficiência, garantia 25 anos",
    },
    {
      name: `Inversor String ${recommendedInverterKw} kW`,
      quantity: 1,
      unitCost: inverterCost,
      description: "MPPT múltiplo, garantia 10 anos",
    },
  ];
}

export function calculateTotalCost(
  items: E2EItem[],
  services: ServiceAndFee[]
): number {
  const itemsCost = items.reduce(
    (acc, item) => acc + item.quantity * item.unitCost,
    0
  );
  const servicesCost = services.reduce((acc, service) => acc + service.cost, 0);
  return itemsCost + servicesCost;
}
