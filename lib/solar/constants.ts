import {
  CategoryType,
  GenerationTier,
  LossFactors,
  Region,
  SolarCategoryConfig,
} from "./types";

export const GENERATION_TIERS: GenerationTier[] = [
  {
    tier: "Padrão",
    multiplier: 1.15,
    description: "Geração Padrão – 115% do consumo (Cobre perdas básicas)",
  },
  {
    tier: "Consciente",
    multiplier: 1.3,
    description:
      "Geração Consciente – 130% do consumo (Margem para crescimento)",
  },
  {
    tier: "Moderado",
    multiplier: 1.45,
    description: "Geração Moderada – 145% do consumo (Proteção sazonal)",
  },
  {
    tier: "Acelerado",
    multiplier: 1.6,
    description: "Geração Acelerada – 160% do consumo (Máximo excedente)",
  },
];

export const DEFAULT_LOSSES: LossFactors = {
  temperature: 4,
  shading: 3,
  soiling: 3,
  mismatchLidDc: 4,
  acLosses: 1.5,
};

export const REGIONS: Region[] = [
  "Norte",
  "Nordeste",
  "CentroOeste",
  "Sudeste",
  "Sul",
];

export const IRRADIATION_FACTORS: Record<Region, number> = {
  Norte: 4.5,
  Nordeste: 5.2,
  CentroOeste: 4.9,
  Sudeste: 4.6,
  Sul: 4.2,
};

export const ENERGY_RATES: Record<Region, number> = {
  Norte: 0.92,
  Nordeste: 0.89,
  CentroOeste: 0.95,
  Sudeste: 1.05,
  Sul: 0.98,
};

export const BASE_COST_PER_KWP: Record<CategoryType, number> = {
  XPP: 4200,
  PP: 4000,
  P: 3800,
  M: 3600,
  G: 3400,
  GG: 3200,
  XG: 3000,
  XGG: 2800,
};

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
    servicesAndFees: [],
    inverterKwByRegionAndTier: {
      Norte: { Padrão: 1.1, Consciente: 1.3, Moderado: 1.4, Acelerado: 1.5 },
      Nordeste: { Padrão: 1.2, Consciente: 1.4, Moderado: 1.5, Acelerado: 1.6 },
      CentroOeste: {
        Padrão: 1,
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
      Norte: { Padrão: 5.8, Consciente: 6.5, Moderado: 7.3, Acelerado: 8 },
      Nordeste: { Padrão: 5.8, Consciente: 6.5, Moderado: 7.3, Acelerado: 8 },
      CentroOeste: {
        Padrão: 5.8,
        Consciente: 6.5,
        Moderado: 7.3,
        Acelerado: 8,
      },
      Sudeste: { Padrão: 5.8, Consciente: 6.5, Moderado: 7.3, Acelerado: 8 },
      Sul: { Padrão: 5.8, Consciente: 6.5, Moderado: 7.3, Acelerado: 8 },
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
  G: {
    category: "G",
    consumptionKwh: 10000,
    panelPowerWp: 500,
    averageBillByRegion: {
      Norte: 8000,
      Nordeste: 7500,
      CentroOeste: 7800,
      Sudeste: 7300,
      Sul: 6500,
    },
    servicesAndFees: [
      {
        name: "Projeto Elétrico",
        cost: 3500,
        description: "Desenvolvimento e tramitação",
      },
      { name: "Taxa Homologação", cost: 1200, description: "Custas ANEEL" },
      { name: "Comissionamento", cost: 2000, description: "Testes e partida" },
      {
        name: "Monitoramento 12m",
        cost: 1500,
        description: "Plataforma online",
      },
    ],
    inverterKwByRegionAndTier: {
      Norte: { Padrão: 90, Consciente: 105, Moderado: 120, Acelerado: 135 },
      Nordeste: { Padrão: 90, Consciente: 105, Moderado: 120, Acelerado: 135 },
      CentroOeste: {
        Padrão: 90,
        Consciente: 105,
        Moderado: 120,
        Acelerado: 135,
      },
      Sudeste: { Padrão: 90, Consciente: 105, Moderado: 120, Acelerado: 135 },
      Sul: { Padrão: 90, Consciente: 105, Moderado: 120, Acelerado: 135 },
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
  XG: {
    category: "XG",
    consumptionKwh: 100000,
    panelPowerWp: 550,
    averageBillByRegion: {
      Norte: 80000,
      Nordeste: 75000,
      CentroOeste: 78000,
      Sudeste: 73000,
      Sul: 65000,
    },
    servicesAndFees: [
      {
        name: "Projeto Elétrico",
        cost: 8000,
        description: "Desenvolvimento e tramitação",
      },
      { name: "Taxa Homologação", cost: 3000, description: "Custas ANEEL" },
      { name: "Comissionamento", cost: 5000, description: "Testes e partida" },
      {
        name: "Monitoramento 12m",
        cost: 3000,
        description: "Plataforma online",
      },
    ],
    inverterKwByRegionAndTier: {
      Norte: { Padrão: 900, Consciente: 1050, Moderado: 1200, Acelerado: 1350 },
      Nordeste: {
        Padrão: 900,
        Consciente: 1050,
        Moderado: 1200,
        Acelerado: 1350,
      },
      CentroOeste: {
        Padrão: 900,
        Consciente: 1050,
        Moderado: 1200,
        Acelerado: 1350,
      },
      Sudeste: {
        Padrão: 900,
        Consciente: 1050,
        Moderado: 1200,
        Acelerado: 1350,
      },
      Sul: { Padrão: 900, Consciente: 1050, Moderado: 1200, Acelerado: 1350 },
    },
    tiers: GENERATION_TIERS,
    losses: DEFAULT_LOSSES,
  },
  XGG: {
    category: "XGG",
    consumptionKwh: 600000,
    panelPowerWp: 550,
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
      Sul: {
        Padrão: 5500,
        Consciente: 6300,
        Moderado: 7250,
        Acelerado: 8000,
      },
    },
    tiers: GENERATION_TIERS,
    losses: DEFAULT_LOSSES,
  },
};
