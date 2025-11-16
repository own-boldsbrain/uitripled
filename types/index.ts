export type AnimationCategory =
  | "microinteractions"
  | "components"
  | "page"
  | "data"
  | "decorative"
  | "blocks";

export type Animation = {
  id: string;
  name: string;
  description: string;
  category: AnimationCategory;
  tags: string[];
  component: React.ComponentType<any>;
  code: string;
  duration?: string;
  easing?: string;
  isFree?: boolean;
  display?: boolean;
};

export const categoryNames: Record<AnimationCategory, string> = {
  microinteractions: "Microinteractions",
  components: "Components",
  page: "Page Transitions",
  data: "Data Animations",
  decorative: "Decorative",
  blocks: "Blocks",
};

export const categoryDescriptions: Record<AnimationCategory, string> = {
  microinteractions:
    "Small, delightful interactions for buttons, toggles, and icons",
  components: "Animated UI components like modals, dropdowns, and cards",
  page: "Smooth transitions and hero sections for pages",
  data: "Bring your data to life with counters, progress bars, and lists",
  decorative: "Beautiful text and background effects",
  blocks: "Reusable block sections for landing pages and portfolios",
};
