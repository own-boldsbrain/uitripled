import { GenerationTier, LossFactors, Region } from "./types";

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
    tier: "Essencial",
    multiplier: 1.05,
    description: "Geração Essencial – 105% do consumo (Cobertura básica)",
  },
  {
    tier: "Conforto",
    multiplier: 1.3,
    description: "Geração Conforto – 130% do consumo (Margem segura)",
  },
  {
    tier: "Premium",
    multiplier: 1.45,
    description: "Geração Premium – 145% do consumo (Alta demanda)",
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
