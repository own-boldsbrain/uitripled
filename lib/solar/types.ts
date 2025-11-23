export type Region = "Norte" | "Nordeste" | "CentroOeste" | "Sudeste" | "Sul";
export type TierType = "Padrão" | "Consciente" | "Moderado" | "Acelerado";
export type CategoryType = "XPP" | "PP" | "P" | "M" | "G" | "GG" | "XG" | "XGG";

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
  acLosses: number;
}

export interface ServiceAndFee {
  name: string;
  cost: number;
  description: string;
  type: "fixed" | "percentage";
}

export interface E2EItem {
  id: string;
  name: string;
  quantity: number;
  unitCost: number;
  category:
    | "module"
    | "inverter"
    | "structure"
    | "cabling"
    | "protection"
    | "other";
  description: string;
}

export interface SolarCategoryConfig {
  category: CategoryType;
  consumptionKwh: number;
  panelPowerWp: number;
  averageBillByRegion: Record<Region, number>;
  servicesAndFees: ServiceAndFee[];
  inverterKwByRegionAndTier: Record<Region, Record<TierType, number>>;
  tiers: GenerationTier[];
  losses: LossFactors;
}

export interface ProjectFinancials {
  totalCost: number;
  split: {
    equipment: number; // 60% usually
    services: number; // 20%
    labor: number; // 20%
  };
  paybackYears: number;
  monthlySavings: number;
  roi: number;
}

export interface SolarProjectProposal {
  category: CategoryType;
  tier: TierType;
  region: Region;
  systemSizeKw: number;
  monthlyGenerationKwh: number;
  kitItems: E2EItem[];
  financials: ProjectFinancials;
}
