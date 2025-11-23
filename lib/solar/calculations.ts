import {
  CategoryType,
  E2EItem,
  ProjectFinancials,
  Region,
  SolarProjectProposal,
  TierType,
} from "./types";
import {
  BASE_COST_PER_KWP,
  DEFAULT_LOSSES,
  ENERGY_RATES,
  GENERATION_TIERS,
  IRRADIATION_FACTORS,
  SOLAR_CONFIGS,
} from "./constants";

export function calculateSystemSize(
  consumptionKwh: number,
  region: Region,
  tier: TierType
): number {
  const irradiation = IRRADIATION_FACTORS[region];
  const tierConfig = GENERATION_TIERS.find((t) => t.tier === tier);
  const multiplier = tierConfig?.multiplier || 1.15;

  // Total efficiency factor (1 - losses)
  const totalLosses =
    (DEFAULT_LOSSES.temperature +
      DEFAULT_LOSSES.shading +
      DEFAULT_LOSSES.soiling +
      DEFAULT_LOSSES.mismatchLidDc +
      DEFAULT_LOSSES.acLosses) /
    100;

  const efficiency = 1 - totalLosses;
  const peakSunHours = irradiation * 30; // Monthly PSH

  // Formula: Size = (Consumption * Multiplier) / (PSH * Efficiency)
  const requiredGeneration = consumptionKwh * multiplier;
  const systemSizeKw = requiredGeneration / (peakSunHours * efficiency);

  return Math.ceil(systemSizeKw * 100) / 100; // Round to 2 decimals
}

export function calculateFinancials(
  systemSizeKw: number,
  consumptionKwh: number,
  region: Region,
  category: CategoryType
): ProjectFinancials {
  const costPerKw = BASE_COST_PER_KWP[category];
  const totalCost = systemSizeKw * costPerKw;
  const energyRate = ENERGY_RATES[region];

  // Monthly savings = Generation * Rate
  const irradiation = IRRADIATION_FACTORS[region];
  const totalLosses =
    (DEFAULT_LOSSES.temperature +
      DEFAULT_LOSSES.shading +
      DEFAULT_LOSSES.soiling +
      DEFAULT_LOSSES.mismatchLidDc +
      DEFAULT_LOSSES.acLosses) /
    100;

  const monthlyGeneration = systemSizeKw * irradiation * 30 * (1 - totalLosses);

  const monthlySavings = monthlyGeneration * energyRate;
  const annualSavings = monthlySavings * 12;

  const paybackYears = totalCost / annualSavings;
  const roi = ((annualSavings * 25 - totalCost) / totalCost) * 100; // 25 years lifetime

  return {
    totalCost,
    split: {
      equipment: totalCost * 0.6,
      services: totalCost * 0.2,
      labor: totalCost * 0.2,
    },
    paybackYears: Math.round(paybackYears * 10) / 10,
    monthlySavings: Math.round(monthlySavings),
    roi: Math.round(roi),
  };
}

export function generateProposal(
  category: CategoryType,
  region: Region,
  tier: TierType
): SolarProjectProposal {
  const config = SOLAR_CONFIGS[category];
  const systemSizeKw = calculateSystemSize(config.consumptionKwh, region, tier);
  const financials = calculateFinancials(
    systemSizeKw,
    config.consumptionKwh,
    region,
    category
  );

  // Generate Kit Items
  const panelCount = Math.ceil((systemSizeKw * 1000) / config.panelPowerWp);
  const inverterKw = config.inverterKwByRegionAndTier[region][tier];

  const kitItems: E2EItem[] = [
    {
      id: "panel-01",
      name: `Painel Solar ${config.panelPowerWp}W`,
      quantity: panelCount,
      unitCost: 0, // Included in total
      category: "module",
      description: "Módulo fotovoltaico monocristalino de alta eficiência",
    },
    {
      id: "inv-01",
      name: `Inversor ${inverterKw}kW`,
      quantity: 1,
      unitCost: 0,
      category: "inverter",
      description: "Inversor string com monitoramento WiFi",
    },
    {
      id: "struct-01",
      name: "Estrutura de Fixação",
      quantity: panelCount,
      unitCost: 0,
      category: "structure",
      description: "Estrutura completa para telhado cerâmico/metálico",
    },
    {
      id: "cables-01",
      name: "Kit Cabos e Conectores",
      quantity: 1,
      unitCost: 0,
      category: "cabling",
      description: "Cabos solares 6mm² e conectores MC4",
    },
    ...config.servicesAndFees.map((s, i) => ({
      id: `svc-${i}`,
      name: s.name,
      quantity: 1,
      unitCost: s.cost,
      category: "other" as const,
      description: s.description,
    })),
  ];

  return {
    category,
    tier,
    region,
    systemSizeKw,
    monthlyGenerationKwh: financials.monthlySavings / ENERGY_RATES[region],
    kitItems,
    financials,
  };
}
