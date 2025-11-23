import { Component, ComponentCategory } from "@/types";
import { getComponentCode } from "./file-reader";

// Import all animation components
import { ScaleHoverButton } from "@/components/micro/buttons/scale-hover";
import { RippleClickButton } from "@/components/micro/buttons/ripple-click";
import { MagneticButton } from "@/components/micro/buttons/magnetic-button";
import { ShimmerButton } from "@/components/micro/buttons/shimmer-button";
import { PreviewDetailsCard } from "@/components/micro/links/preview-details-card";
import { ElasticSwitch } from "@/components/micro/toggles/elastic-switch";
import { HeartFavorite } from "@/components/micro/icons/heart-favorite";
import { AnimatedBadge } from "@/components/micro/badges/animated-badge";
import { FadeSlideModal } from "@/components/components/modal/fade-slide";
import { StaggeredDropdown } from "@/components/components/dropdown/staggered-items";
import { HoverExpandCard } from "@/components/components/cards/hover-expand";
import { AnimatedCardStack } from "@/components/components/cards/animated-card-stack";
import { CreditCard } from "@/components/components/cards/credit-card";
import { ImageSliderCard } from "@/components/components/cards/image-slider-card";
import { DetailTaskCard } from "@/components/components/cards/detail-task";
import { EcommerceHighlightCard } from "@/components/components/cards/ecommerce-highlight-card";
import { FloatingLabelInput } from "@/components/components/inputs/floating-label-input";
import { AnimatedTabs } from "@/components/components/tabs/animated-tabs";
import { AnimatedList } from "@/components/components/lists/animated-list";
import { ChatApp } from "@/components/components/chat/chat-app";
import { AIChatInterface } from "@/components/components/chat/ai-chat-interface";
import { Messenger } from "@/components/components/chat/messenger";
import { StocksDashboard } from "@/components/components/stocks-dashboard/stocks-dashboard";
import { NotificationCenter } from "@/components/components/notifications/notification-center";
import { WeatherDashboard } from "@/components/components/weather/weather-dashboard";
import { StaggeredHero } from "@/components/page/hero/staggered-text";
import { AboutUsPage } from "@/components/page/about/about-us-page";
import { ToastNotification } from "@/components/page/notifications/toast-notification";
import { CounterUp } from "@/components/data/progress/counter-up";
import { AnimatedProgress } from "@/components/data/progress/animated-progress";
import { CashFlowChart } from "@/components/data/charts/cash-flow-chart";
import { TypewriterText } from "@/components/decorative/text/typewriter";
import { GradientAnimation } from "@/components/decorative/backgrounds/gradient-animation";

// NEW: 20 Additional Components
import { PasswordInput } from "@/components/inputs/password-input";
import { AnimatedDialog } from "@/components/modals/animated-dialog";
import { BottomModal } from "@/components/modals/bottom-modal";
import { AnimatedTooltip } from "@/components/tooltips/animated-tooltip";
import { AnimatedNavbar } from "@/components/navigation/animated-navbar";
import { AnimatedProfileMenu } from "@/components/navigation/animated-profile-menu";
import { AnimatedSidebar } from "@/components/navigation/animated-sidebar";
import { AnimatedAccordion } from "@/components/disclosure/animated-accordion";
import { DraggableList } from "@/components/components/lists/draggable-list";
import { HeroSection } from "@/components/sections/hero-section";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FeatureGridSection } from "@/components/sections/feature-grid-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTABannerSection } from "@/components/sections/cta-banner-section";
import { ProjectsBlock } from "@/components/sections/projects-block";
import { HeroBlock } from "@/components/sections/hero-block";
import { TestimonialsBlock } from "@/components/sections/testimonials-block";
import { CTABlock } from "@/components/sections/cta-block";
import { BlogBlock } from "@/components/sections/blog-block";
import { ContactBlock } from "@/components/sections/contact-block";
import { NewHeroSection } from "@/components/sections/new-hero-section";
import { AboutUsSection } from "@/components/sections/about-us-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { OurServicesSection } from "@/components/sections/our-services-section";
import { FloatingGradient } from "@/components/decorative/background/floating-gradient";
import { AvatarGroup } from "@/components/avatars/avatar-group";
import { AnimatedCheckbox } from "@/components/forms/animated-checkbox";
import { AnimatedRadio } from "@/components/forms/animated-radio";
import { AnimatedPagination } from "@/components/navigation/animated-pagination";
import { AnimatedSelect } from "@/components/forms/animated-select";
import { GlassSignInCard } from "@/components/components/forms/glass-sign-in";
import { GlassSignUpCard } from "@/components/components/forms/glass-sign-up";
import { GlassForgotPasswordCard } from "@/components/components/forms/glass-forgot-password";
import { GlassVerificationCodeCard } from "@/components/components/forms/glass-verification-code";
import { GlassProfileSettingsCard } from "@/components/components/forms/glass-profile-settings";
import { GlassAccountSettingsCard } from "@/components/components/forms/glass-account-settings";
import { CommandPalette } from "@/components/search/command-palette";
import { MultipleAccounts } from "@/components/components/account-switcher/multiple-accounts";
import { MacSearchbar } from "@/components/search/mac-searchbar";
import { ContextMenu } from "@/components/navigation/context-menu";
import { SimpleCalendar } from "@/components/forms/simple-calendar";
import { TeamSectionBlock } from "@/components/sections/team-section-block";
import { NewsletterSignupBlock } from "@/components/sections/newsletter-signup-block";
import { FeatureComparisonBlock } from "@/components/sections/feature-comparison-block";
import { GalleryGridBlock } from "@/components/sections/gallery-grid-block";
import { FooterBlock } from "@/components/sections/footer-block";
import { CTAHeroBlock } from "@/components/sections/cta-hero-block";
import { ServicesGridBlock } from "@/components/sections/services-grid-block";
import { BentoGridBlock } from "@/components/sections/bento-grid-block";
import { StatsCounterBlock } from "@/components/sections/stats-counter-block";
import { NotionBlogPage } from "@/components/sections/notion-blog-page";
import { TimelineBlock } from "@/components/sections/timeline-block";
import { FAQAccordionBlock } from "@/components/sections/faq-accordion-block";
import { GlassmorphismHeroBlock } from "@/components/sections/glassmorphism-hero-block";
import { FeatureCardsBlock } from "@/components/sections/feature-cards-block";
import { GlassmorphismCTABlock } from "@/components/sections/glassmorphism-cta-block";
import { GlassmorphismListenAppBlock } from "@/components/sections/glassmorphism-listen-app-block";
import { GlassmorphismPricingBlock } from "@/components/sections/glassmorphism-pricing-block";
import { GlassmorphismTestimonialsBlock } from "@/components/sections/glassmorphism-testimonials-block";
import { GlassmorphismStatisticsCard } from "@/components/sections/glassmorphism-statistics-card";
import { GlassmorphismLaunchTimelineBlock } from "@/components/sections/glassmorphism-launch-timeline-block";
import { GlassmorphismMinimalMetricsBlock } from "@/components/sections/glassmorphism-minimal-metrics-block";
import { GlassmorphismLogoShowcaseBlock } from "@/components/sections/glassmorphism-logo-showcase-block";
import { GlassmorphismPortfolioBlock } from "@/components/sections/glassmorphism-portfolio-block";
import { GlassmorphismProductUpdateBlock } from "@/components/sections/glassmorphism-product-update-block";
import { InteractiveLogsTable } from "@/components/sections/interactive-logs-table";
import { CurrencyConverterCard } from "@/components/sections/currency-converter-card";
import { N8nWorkflowBlock } from "@/components/sections/n8n-workflow-block";

// UI-TripleD Components
import { MorphingActionButton } from "@/components/motion-core/morphing-action-button";
import { SmartHoverCard } from "@/components/motion-core/smart-hover-card";
import { MagneticCursorLink } from "@/components/motion-core/magnetic-cursor-link";
import { ScrollProgressTracker } from "@/components/motion-core/scroll-progress-tracker";
import { StackedCardCarousel } from "@/components/motion-core/stacked-card-carousel";
import { SpotlightSection } from "@/components/motion-core/spotlight-section";
import { AutoRevealingHeading } from "@/components/motion-core/auto-revealing-heading";
import { InteractiveTimeline } from "@/components/motion-core/interactive-timeline";
import { DynamicTagCloud } from "@/components/motion-core/dynamic-tag-cloud";
import { AILoadingSkeleton } from "@/components/motion-core/ai-loading-skeleton";
import { AnimatedQuoteBlock } from "@/components/motion-core/animated-quote-block";
import { ContextMenuBubble } from "@/components/motion-core/context-menu-bubble";
import { MagneticAvatarGroup } from "@/components/motion-core/magnetic-avatar-group";
import { NotificationBell } from "@/components/motion-core/notification-bell";
import { DragToConfirmSlider } from "@/components/motion-core/drag-to-confirm-slider";
import { ExpandingSearchDock } from "@/components/motion-core/expanding-search-dock";
import { MoodGradientButton } from "@/components/motion-core/mood-gradient-button";
import { FloatingInfoPanel } from "@/components/motion-core/floating-info-panel";
import { ReactiveBackgroundGrid } from "@/components/motion-core/reactive-background-grid";
import { FluidModalTransition } from "@/components/motion-core/fluid-modal-transition";
import { HolographicWall } from "@/components/motion-core/holographic-wall";
import { DynamicSpotlightCTA } from "@/components/motion-core/dynamic-spotlight-cta";
import { AIGlowInput } from "@/components/motion-core/ai-glow-input";
import { AIResponseTyping } from "@/components/motion-core/ai-response-typing";
import { AIUnlockAnimation } from "@/components/motion-core/ai-unlock-animation";
import { KanbanBoard } from "@/components/components/kanban/kanban-board";

import { DashboardPage } from "@/components/components/stocks-dashboard/dashboard";
import { BrowseFolder } from "@/components/sections/browse-folder";
import { GlowyWavesHero } from "@/components/sections/glowy-waves-hero";
import { LiquidCursor } from "@/components/liquid-cursor";

export const componentsRegistry: Component[] = [
  {
    id: "scale-hover-button",
    name: "Botão de Escala ao Passar o Mouse",
    description: "Um botão que aumenta suavemente ao passar o mouse",
    category: "microinteractions",
    tags: ["button", "hover", "scale"],
    component: ScaleHoverButton,
    codePath: "@/components/micro/buttons/scale-hover.tsx",
    duration: "200ms",
    easing: "easeInOut",
    display: false, // People think its useless
  },
  {
    id: "glowy-waves-hero",
    name: "Hero com Ondas Brilhantes",
    description: "Seção hero com efeito de ondas brilhantes",
    category: "blocks",
    tags: ["hero", "landing", "glowy", "waves"],
    component: GlowyWavesHero,
    codePath: "@/components/sections/glowy-waves-hero.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "ripple-click-button",
    name: "Efeito de Ondulação ao Clicar",
    description: "Efeito de ondulação inspirado no Material Design ao clicar",
    category: "microinteractions",
    tags: ["button", "click", "ripple"],
    component: RippleClickButton,
    codePath: "@/components/micro/buttons/ripple-click.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: false, // People think its useless
  },
  {
    id: "elastic-switch",
    name: "Interruptor Elástico",
    description: "Interruptor com animação elástica de mola",
    category: "microinteractions",
    tags: ["toggle", "switch", "spring"],
    component: ElasticSwitch,
    codePath: "@/components/micro/toggles/elastic-switch.tsx",
    duration: "400ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "heart-favorite",
    name: "Coração Favorito",
    description: "Ícone de coração animado para ações de curtir/favoritar",
    category: "microinteractions",
    tags: ["icon", "favorite", "like"],
    component: HeartFavorite,
    codePath: "@/components/micro/icons/heart-favorite.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "fade-slide-modal",
    name: "Modal de Desvanecimento e Deslizamento",
    description:
      "Modal com fundo de desvanecimento e animação de deslizamento para cima",
    category: "components",
    tags: ["modal", "overlay", "slide"],
    component: FadeSlideModal,
    codePath: "@/components/components/modal/fade-slide.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: false, // People think its useless
  },
  {
    id: "staggered-dropdown",
    name: "Menu Suspenso Escalado",
    description: "Menu suspenso com animações escaladas de itens",
    category: "components",
    tags: ["dropdown", "menu", "stagger"],
    component: StaggeredDropdown,
    codePath: "@/components/components/dropdown/staggered-items.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: false, // People think its useless
  },
  {
    id: "hover-expand-card",
    name: "Cartão de Expansão ao Passar o Mouse",
    description: "Cartão que se eleva e expande ao passar o mouse",
    category: "components",
    tags: ["card", "hover", "lift"],
    component: HoverExpandCard,
    codePath: "@/components/components/cards/hover-expand.tsx",
    duration: "250ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "detail-task-card",
    name: "Cartão de Detalhes de Tarefa",
    description:
      "Painel de detalhes de gerenciamento de tarefas com chips de responsável animados e controles de editor",
    category: "components",
    tags: ["task", "management", "form", "card", "dashboard"],
    component: DetailTaskCard,
    codePath: "@/components/components/cards/detail-task.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
  },
  {
    id: "ecommerce-highlight-card",
    name: "Cartão de Destaque de E-commerce",
    description:
      "Cartão de destaque de produto com borda borrada, seletor de pacote e detalhes de cumprimento",
    category: "components",
    tags: ["card", "product", "ecommerce", "bundle"],
    component: EcommerceHighlightCard,
    codePath: "@/components/components/cards/ecommerce-highlight-card.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "notification-center",
    name: "Centro de Notificações",
    description:
      "Pilha de notificações multi-variante com anúncios acessíveis, ações e estados de movimento",
    category: "components",
    tags: ["notification", "alerts", "toast", "stack", "accessible", "shadcn"],
    component: NotificationCenter,
    codePath: "@/components/components/notifications/notification-center.tsx",
    duration: "8000ms",
    easing: "spring",
    display: true,
  },
  {
    id: "liquid-cursor",
    name: "Cursor Líquido",
    description: "Um efeito de cursor líquido que mistura cores no movimento",
    category: "decorative",
    tags: ["cursor", "liquid", "effect", "canvas"],
    component: LiquidCursor,
    codePath: "@/components/liquid-cursor.tsx",
    duration: "N/A",
    easing: "N/A",
    display: true,
  },
  {
    id: "weather-dashboard",
    name: "Painel de Clima",
    description:
      "Painel de clima imersivo com gráficos horários, previsão semanal e alertas de qualidade do ar ao vivo",
    category: "components",
    tags: ["weather", "dashboard", "forecast", "charts", "environment", "data"],
    component: WeatherDashboard,
    codePath: "@/components/components/weather/weather-dashboard.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "browse-folder",
    name: "Pasta de Navegação",
    description: "Navegador de pastas com abas animadas e conteúdo",
    category: "components",
    tags: ["folder", "browser", "tabs", "content"],
    component: BrowseFolder,
    codePath: "@/components/sections/browse-folder.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "staggered-hero",
    name: "Hero com Texto Escalado",
    description: "Seção hero com revelação de texto escalada",
    category: "page",
    tags: ["hero", "text", "stagger"],
    component: StaggeredHero,
    codePath: "@/components/page/hero/staggered-text.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "about-us-page",
    name: "Página Sobre Nós",
    description:
      "Página sobre nós com glassmorfismo exibindo missão, valores e liderança com acentos de movimento.",
    category: "page",
    tags: ["about", "page", "team", "values"],
    component: AboutUsPage,
    codePath: "@/components/page/about/about-us-page.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "counter-up",
    name: "Contador Animado",
    description: "Contador numérico que anima de zero para cima",
    category: "data",
    tags: ["counter", "number", "progress"],
    component: CounterUp,
    codePath: "@/components/data/progress/counter-up.tsx",
    duration: "2000ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "typewriter-text",
    name: "Efeito Máquina de Escrever",
    description: "Texto que digita caractere por caractere",
    category: "decorative",
    tags: ["text", "typewriter", "reveal"],
    component: TypewriterText,
    codePath: "@/components/decorative/text/typewriter.tsx",
    duration: "variable",
    easing: "linear",
    display: true,
  },
  {
    id: "magnetic-button",
    name: "Botão Magnético",
    description: "Botão que segue magneticamente o cursor",
    category: "microinteractions",
    tags: ["button", "magnetic", "interactive", "shadcn"],
    component: MagneticButton,
    codePath: "@/components/micro/buttons/magnetic-button.tsx",
    duration: "200ms",
    easing: "spring",
    display: true,
  },
  {
    id: "shimmer-button",
    name: "Botão Brilhante",
    description: "Botão com efeito de brilho contínuo",
    category: "microinteractions",
    tags: ["button", "shimmer", "gradient", "shadcn"],
    component: ShimmerButton,
    codePath: "@/components/micro/buttons/shimmer-button.tsx",
    duration: "2000ms",
    easing: "linear",
    display: false, // People think its useless
  },
  {
    id: "preview-details-card",
    name: "Cartão de Pré-visualização de Detalhes",
    description:
      "Cartão de link que revela uma caixa de pré-visualização suave ao passar o mouse",
    category: "microinteractions",
    tags: ["link", "hover", "preview", "card", "minimal"],
    component: PreviewDetailsCard,
    codePath: "@/components/micro/links/preview-details-card.tsx",
    duration: "280ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "animated-badge",
    name: "Distintivo Animado",
    description: "Distintivo com animação de escala e rotação",
    category: "microinteractions",
    tags: ["badge", "icon", "spin", "shadcn"],
    component: AnimatedBadge,
    codePath: "@/components/micro/badges/animated-badge.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "animated-card-stack",
    name: "Pilha de Cartões Animada",
    description: "Cartões empilhados que se expandem ao passar o mouse",
    category: "components",
    tags: ["card", "stack", "hover", "shadcn"],
    component: AnimatedCardStack,
    codePath: "@/components/components/cards/animated-card-stack.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "credit-card",
    name: "Cartão de Crédito",
    description:
      "Cartão de crédito animado em 3D com animação de virada para mostrar CVV",
    category: "components",
    tags: ["card", "3d", "flip", "payment", "credit"],
    component: CreditCard,
    codePath: "@/components/components/cards/credit-card.tsx",
    duration: "600ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "image-slider-card",
    name: "Cartão de Slider de Imagens Acessível",
    description:
      "Cartão de carrossel de imagens com suporte a teclado, tratamento de movimento reduzido e rótulos amigáveis para leitores de tela",
    category: "components",
    tags: ["carousel", "image", "card", "accessibility", "keyboard"],
    component: ImageSliderCard,
    codePath: "@/components/components/cards/image-slider-card.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
  },
  {
    id: "floating-label-input",
    name: "Campo de Entrada com Rótulo Flutuante",
    description: "Campo de entrada com rótulo flutuante animado",
    category: "components",
    tags: ["input", "form", "label", "shadcn"],
    component: FloatingLabelInput,
    codePath: "@/components/components/inputs/floating-label-input.tsx",
    duration: "200ms",
    easing: "easeInOut",
    display: false, // need fixes
  },
  {
    id: "animated-tabs",
    name: "Abas Animadas",
    description: "Abas com animação de indicador deslizante",
    category: "components",
    tags: ["tabs", "navigation", "slide", "shadcn"],
    component: AnimatedTabs,
    codePath: "@/components/components/tabs/animated-tabs.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-list",
    name: "Lista Animada",
    description: "Lista com animações escaladas de itens",
    category: "components",
    tags: ["list", "stagger", "checkmarks", "shadcn"],
    component: AnimatedList,
    codePath: "@/components/components/lists/animated-list.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "chat-app",
    name: "Aplicativo de Chat",
    description:
      "Interface de chat totalmente funcional com mensagens animadas",
    category: "components",
    tags: ["chat", "messages", "messaging", "ui", "shadcn"],
    component: ChatApp,
    codePath: "@/components/components/chat/chat-app.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "messenger",
    name: "Mensageiro",
    description:
      "Espaço de trabalho de mensageiro com glassmorfismo, movimento acessível e respostas rápidas",
    category: "components",
    tags: ["chat", "messenger", "communication", "glassmorphism", "shadcn"],
    component: Messenger,
    codePath: "@/components/components/chat/messenger.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "ai-chat-interface",
    name: "Interface de Chat com IA",
    description:
      "Entrada de chat com anexos, seletor de modelo e controles acessíveis",
    category: "components",
    tags: ["chat", "ai", "input", "attachments", "shadcn"],
    component: AIChatInterface,
    codePath: "@/components/components/chat/ai-chat-interface.tsx",
    duration: "200ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "stocks-dashboard",
    name: "Painel de Ações",
    description:
      "Painel interativo de portfólio de ações com cartões de status, tabela de dados e modal de informações detalhadas de ações",
    category: "blocks",
    tags: [
      "dashboard",
      "stocks",
      "table",
      "portfolio",
      "data",
      "modal",
      "shadcn",
    ],
    component: StocksDashboard,
    codePath: "@/components/components/stocks-dashboard/stocks-dashboard.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
  },
  {
    id: "dashboard",
    name: "Painel",
    description:
      "Painel interativo de portfólio de ações com cartões de status, tabela de dados e modal de informações detalhadas de ações",
    category: "blocks",
    tags: [
      "dashboard",
      "stocks",
      "table",
      "portfolio",
      "data",
      "modal",
      "shadcn",
    ],
    component: DashboardPage,
    codePath: "@/components/components/stocks-dashboard/dashboard.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
  },
  {
    id: "toast-notification",
    name: "Notificação Toast",
    description: "Popup de notificação toast animada",
    category: "page",
    tags: ["toast", "notification", "alert", "shadcn"],
    component: ToastNotification,
    codePath: "@/components/page/notifications/toast-notification.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-progress",
    name: "Barra de Progresso Animada",
    description: "Barra de progresso com animação suave",
    category: "data",
    tags: ["progress", "loading", "bar", "shadcn"],
    component: AnimatedProgress,
    codePath: "@/components/data/progress/animated-progress.tsx",
    duration: "2000ms",
    easing: "easeOut",
    display: false, // People think its useless
  },
  {
    id: "cash-flow-chart",
    name: "Gráfico de Fluxo de Caixa Acessível",
    description:
      "Gráfico de barras interativo de fluxo de caixa com foco no teclado, dicas e suporte a leitores de tela",
    category: "data",
    tags: ["chart", "bar", "cashflow", "finance", "accessible"],
    component: CashFlowChart,
    codePath: "@/components/data/charts/cash-flow-chart.tsx",
    duration: "800ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "gradient-animation",
    name: "Animação de Gradiente",
    description: "Fundo de gradiente com transição suave",
    category: "decorative",
    tags: ["gradient", "background", "color"],
    component: GradientAnimation,
    codePath: "@/components/decorative/backgrounds/gradient-animation.tsx",
    duration: "10000ms",
    easing: "linear",
    display: true,
  },
  // NEW: 20 Additional Components
  {
    id: "password-input",
    name: "Campo de Senha",
    description:
      "Campo de senha com alternância de visibilidade e indicador de força",
    category: "components",
    tags: ["input", "password", "form", "security", "shadcn"],
    component: PasswordInput,
    codePath: "@/components/inputs/password-input.tsx",
    duration: "200ms",
    easing: "easeInOut",
    display: false, // need fixes
  },
  {
    id: "animated-dialog",
    name: "Diálogo Animado",
    description: "Diálogo modal com desvanecimento de fundo e animação de mola",
    category: "components",
    tags: ["modal", "dialog", "overlay", "popup", "shadcn"],
    component: AnimatedDialog,
    codePath: "@/components/modals/animated-dialog.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "bottom-modal",
    name: "Modal Inferior",
    description:
      "Modal inferior fofo com animação suave de deslizamento para cima e design glassmorfismo",
    category: "components",
    tags: ["modal", "bottom", "slide", "overlay", "glassmorphism"],
    component: BottomModal,
    codePath: "@/components/modals/bottom-modal.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "animated-tooltip",
    name: "Dica Animada",
    description: "Dica com atraso e animação de deslizamento",
    category: "components",
    tags: ["tooltip", "hint", "info", "popup"],
    component: AnimatedTooltip,
    codePath: "@/components/tooltips/animated-tooltip.tsx",
    duration: "200ms",
    easing: "easeInOut",
    display: false, // People think its useless
  },
  {
    id: "animated-navbar",
    name: "Barra de Navegação Animada",
    description: "Barra de navegação com indicador de sublinhado animado",
    category: "components",
    tags: ["navigation", "navbar", "menu", "tabs"],
    component: AnimatedNavbar,
    codePath: "@/components/navigation/animated-navbar.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-profile-menu",
    name: "Menu de Perfil Animado",
    description:
      "Avatar de perfil flutuante que revela cartões de ação rápida com movimento suave",
    category: "components",
    tags: ["profile", "menu", "navigation", "avatar", "shadcn"],
    component: AnimatedProfileMenu,
    codePath: "@/components/navigation/animated-profile-menu.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "animated-sidebar",
    name: "Barra Lateral Animada",
    description: "Barra lateral com animação de deslizamento e sobreposição",
    category: "components",
    tags: ["sidebar", "navigation", "drawer", "menu"],
    component: AnimatedSidebar,
    codePath: "@/components/navigation/animated-sidebar.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-accordion",
    name: "Sanfona Animada",
    description: "Sanfona com expansão/colapso suave e seta rotativa",
    category: "components",
    tags: ["accordion", "collapse", "expand", "faq", "shadcn"],
    component: AnimatedAccordion,
    codePath: "@/components/disclosure/animated-accordion.tsx",
    duration: "300ms",
    easing: "easeInOut",
    display: false, // People think its useless
  },
  {
    id: "draggable-list",
    name: "Lista Arrastável",
    description: "Lista reordenável com física de mola de arrastar e soltar",
    category: "components",
    tags: ["list", "drag", "reorder", "sortable"],
    component: DraggableList,
    codePath: "@/components/components/lists/draggable-list.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "hero-section",
    name: "Seção Hero",
    description: "Seção hero com texto escalado e revelação de botão",
    category: "page",
    tags: ["hero", "landing", "stagger", "reveal"],
    component: HeroSection,
    codePath: "@/components/sections/hero-section.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "scroll-reveal",
    name: "Revelação ao Rolar",
    description:
      "Seção que anima na visualização ao rolar com observador de interseção",
    category: "page",
    tags: ["scroll", "reveal", "intersection", "fade"],
    component: ScrollReveal,
    codePath: "@/components/sections/scroll-reveal.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "floating-gradient",
    name: "Gradiente Flutuante",
    description: "Efeito de fundo de gradiente flutuante animado",
    category: "decorative",
    tags: ["gradient", "background", "floating", "animation"],
    component: FloatingGradient,
    codePath: "@/components/decorative/background/floating-gradient.tsx",
    duration: "8000ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "avatar-group",
    name: "Grupo de Avatares",
    description:
      "Grupo de avatares empilhados com revelação ao passar o mouse e dicas",
    category: "components",
    tags: ["avatar", "user", "stack", "group", "shadcn"],
    component: AvatarGroup,
    codePath: "@/components/avatars/avatar-group.tsx",
    duration: "200ms",
    easing: "spring",
    display: true,
  },
  {
    id: "animated-checkbox",
    name: "Caixa de Seleção Animada",
    description: "Caixa de seleção com animação de marca de seleção",
    category: "components",
    tags: ["checkbox", "form", "input", "select"],
    component: AnimatedCheckbox,
    codePath: "@/components/forms/animated-checkbox.tsx",
    duration: "200ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-radio",
    name: "Botão de Opção Animado",
    description: "Grupo de botões de opção com ondulação de seleção",
    category: "components",
    tags: ["radio", "form", "input", "select"],
    component: AnimatedRadio,
    codePath: "@/components/forms/animated-radio.tsx",
    duration: "200ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-pagination",
    name: "Paginação Animada",
    description: "Paginação com indicador de transição de página suave",
    category: "components",
    tags: ["pagination", "pages", "navigation"],
    component: AnimatedPagination,
    codePath: "@/components/navigation/animated-pagination.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-select",
    name: "Seleção Animada",
    description: "Menu suspenso de seleção com animação suave de abrir/fechar",
    category: "components",
    tags: ["select", "dropdown", "form", "input", "shadcn"],
    component: AnimatedSelect,
    codePath: "@/components/forms/animated-select.tsx",
    duration: "200ms",
    easing: "easeInOut",
    display: false, // People think its useless
  },
  {
    id: "glass-sign-in-card",
    name: "Cartão de Entrada com Vidro",
    description:
      "Painel de entrada com glassmorfismo, botões de autenticação social e formulário de e-mail",
    category: "components",
    tags: ["auth", "form", "sign-in", "glassmorphism", "shadcn"],
    component: GlassSignInCard,
    codePath: "@/components/components/forms/glass-sign-in.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
  },
  {
    id: "glass-sign-up-card",
    name: "Cartão de Cadastro com Vidro",
    description:
      "Fluxo de cadastro com glassmorfismo, provedores sociais, campos de e-mail e caixa de termos",
    category: "components",
    tags: ["auth", "form", "sign-up", "glassmorphism", "shadcn"],
    component: GlassSignUpCard,
    codePath: "@/components/components/forms/glass-sign-up.tsx",
    duration: "650ms",
    easing: "spring",
    display: true,
  },
  {
    id: "glass-forgot-password-card",
    name: "Cartão de Esqueci a Senha com Vidro",
    description:
      "Tela de redefinição de senha com estilo glassmorfismo e mensagens de status",
    category: "components",
    tags: ["auth", "form", "reset", "password", "glassmorphism"],
    component: GlassForgotPasswordCard,
    codePath: "@/components/components/forms/glass-forgot-password.tsx",
    duration: "500ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "glass-verification-code-card",
    name: "Cartão de Código de Verificação com Vidro",
    description:
      "Entrada de código de verificação com entradas glassmorfismo, mensagens de status e suporte a movimento reduzido",
    category: "components",
    tags: ["auth", "verification", "input", "glassmorphism"],
    component: GlassVerificationCodeCard,
    codePath: "@/components/components/forms/glass-verification-code.tsx",
    duration: "550ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "glass-profile-settings-card",
    name: "Cartão de Configurações de Perfil com Vidro",
    description:
      "Formulário de configurações de perfil com glassmorfismo, upload de avatar, bio e preferências de notificação",
    category: "components",
    tags: ["profile", "settings", "form", "glassmorphism"],
    component: GlassProfileSettingsCard,
    codePath: "@/components/components/forms/glass-profile-settings.tsx",
    duration: "700ms",
    easing: "spring",
    display: true,
  },
  {
    id: "glass-account-settings-card",
    name: "Cartão de Configurações de Conta com Vidro",
    description:
      "Cartão de gerenciamento de conta com visão geral de assinatura e ações de cobrança em estilo glassmorfismo",
    category: "components",
    tags: ["account", "subscription", "billing", "form", "glassmorphism"],
    component: GlassAccountSettingsCard,
    codePath: "@/components/components/forms/glass-account-settings.tsx",
    duration: "650ms",
    easing: "spring",
    display: true,
  },
  {
    id: "command-palette",
    name: "Paleta de Comandos",
    description: "Paleta de comandos com pesquisa e navegação por teclado",
    category: "components",
    tags: ["command", "search", "keyboard", "shortcuts", "shadcn"],
    component: CommandPalette,
    codePath: "@/components/search/command-palette.tsx",
    duration: "200ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "multiple-accounts",
    name: "Alternador de Contas Múltiplas",
    description:
      "Alternador de contas com glassmorfismo, menu suspenso animado e controles de caixa de lista acessíveis",
    category: "components",
    tags: ["accounts", "dropdown", "switcher", "glassmorphism"],
    component: MultipleAccounts,
    codePath: "@/components/components/account-switcher/multiple-accounts.tsx",
    duration: "350ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "mac-searchbar",
    name: "Barra de Pesquisa Mac",
    description:
      "Barra de pesquisa estilo Mac com menu suspenso animado, efeitos glassmorfismo e transições suaves",
    category: "components",
    tags: [
      "search",
      "mac",
      "dropdown",
      "glassmorphism",
      "animated",
      "framer-motion",
    ],
    component: MacSearchbar,
    codePath: "@/components/search/mac-searchbar.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "context-menu",
    name: "Menu de Contexto",
    description:
      "Menu de contexto com clique direito e animação de itens aninhados",
    category: "components",
    tags: ["menu", "context", "right-click", "dropdown"],
    component: ContextMenu,
    codePath: "@/components/navigation/context-menu.tsx",
    duration: "150ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "simple-calendar",
    name: "Calendário Simples",
    description: "Seletor de calendário com animação de seleção de data",
    category: "components",
    tags: ["calendar", "date", "picker", "form", "shadcn"],
    component: SimpleCalendar,
    codePath: "@/components/forms/simple-calendar.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  // NEW: 3 Additional Animated Sections
  {
    id: "stats-section",
    name: "Seção de Estatísticas",
    description: "Seção de estatísticas animada com cartões e contadores",
    category: "page",
    tags: ["stats", "numbers", "metrics", "cards", "shadcn"],
    component: StatsSection,
    codePath: "@/components/sections/stats-section.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
  },
  {
    id: "testimonial-section",
    name: "Seção de Depoimentos",
    description: "Seção de depoimentos estilo carrossel com transições suaves",
    category: "page",
    tags: ["testimonial", "carousel", "reviews", "cards", "shadcn"],
    component: TestimonialSection,
    codePath: "@/components/sections/testimonial-section.tsx",
    duration: "300ms",
    easing: "easeInOut",
    display: false,
  },
  {
    id: "pricing-section",
    name: "Seção de Preços",
    description:
      "Cartões de preços animados com efeitos de hover e listas de recursos",
    category: "page",
    tags: ["pricing", "plans", "cards", "hover", "shadcn"],
    component: PricingSection,
    codePath: "@/components/sections/pricing-section.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
  },
  // NEW: 3 Additional Sections
  {
    id: "feature-grid-section",
    name: "Seção de Grade de Recursos",
    description:
      "Grade de recursos animada com animações escaladas de cartões e revelações de ícones",
    category: "page",
    tags: ["features", "grid", "cards", "stagger", "shadcn"],
    component: FeatureGridSection,
    codePath: "@/components/sections/feature-grid-section.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
  },
  {
    id: "faq-section",
    name: "Seção de FAQ",
    description:
      "Seção de FAQ animada com perguntas expansíveis e transições suaves",
    category: "page",
    tags: ["faq", "accordion", "questions", "expand", "shadcn"],
    component: FAQSection,
    codePath: "@/components/sections/faq-section.tsx",
    duration: "300ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "cta-banner-section",
    name: "Seção de Banner CTA",
    description:
      "Banner de chamada para ação animado com fundo gradiente e animações de botão",
    category: "page",
    tags: ["cta", "banner", "call-to-action", "buttons", "gradient", "shadcn"],
    component: CTABannerSection,
    codePath: "@/components/sections/cta-banner-section.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
  },
  {
    id: "projects-block",
    name: "Bloco de Projetos",
    description:
      "Cartão de projeto animado com efeitos de hover, zoom de imagem e botões de link",
    category: "components",
    tags: ["projects", "portfolio", "cards", "hover", "gallery", "shadcn"],
    component: ProjectsBlock,
    codePath: "@/components/sections/projects-block.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
  },
  {
    id: "hero-block",
    name: "Bloco Hero",
    description:
      "Seção hero de portfólio pessoal com avatar animado, texto escalado, links sociais e indicador de rolagem",
    category: "blocks",
    tags: ["hero", "portfolio", "landing", "stagger", "social", "shadcn"],
    component: HeroBlock,
    codePath: "@/components/sections/hero-block.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
  },
  {
    id: "testimonials-block",
    name: "Bloco de Depoimentos",
    description:
      "Grade de depoimentos animada com cartões escalados, classificações por estrelas e efeitos de hover",
    category: "blocks",
    tags: ["testimonials", "reviews", "cards", "stagger", "ratings", "shadcn"],
    component: TestimonialsBlock,
    codePath: "@/components/sections/testimonials-block.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
  },
  {
    id: "cta-block",
    name: "Bloco CTA",
    description:
      "Seção de chamada para ação com sobreposição gradiente, botões animados e indicador de status",
    category: "blocks",
    tags: ["cta", "call-to-action", "banner", "buttons", "gradient", "shadcn"],
    component: CTABlock,
    codePath: "@/components/sections/cta-block.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
  },
  {
    id: "blog-block",
    name: "Bloco de Blog",
    description:
      "Grade de posts de blog animada com cartões escalados, indicadores de data/hora e efeitos de hover",
    category: "blocks",
    tags: ["blog", "posts", "cards", "stagger", "articles", "shadcn"],
    component: BlogBlock,
    codePath: "@/components/sections/blog-block.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
  },
  {
    id: "contact-block",
    name: "Bloco de Contato",
    description:
      "Formulário de contato com cartões de informações de contato animados, horário de funcionamento e ícones interativos",
    category: "blocks",
    tags: ["contact", "form", "email", "phone", "location", "shadcn"],
    component: ContactBlock,
    codePath: "@/components/sections/contact-block.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
  },
  {
    id: "new-hero-section",
    name: "Nova Seção Hero",
    description:
      "Seção hero moderna com fundo gradiente, estatísticas animadas e botões de chamada para ação",
    category: "blocks",
    tags: ["hero", "landing", "cta", "stats", "gradient", "shadcn"],
    component: NewHeroSection,
    codePath: "@/components/sections/new-hero-section.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "about-us-section",
    name: "Sobre Nós",
    description:
      "Seção sobre nós com cartões de valores, ícones e efeitos de revelação animada",
    category: "blocks",
    tags: ["about", "values", "team", "mission", "cards", "shadcn"],
    component: AboutUsSection,
    codePath: "@/components/sections/about-us-section.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "contact-form-section",
    name: "Formulário de Contato",
    description:
      "Seção de formulário de contato com entradas animadas, validação e manipulação de formulário",
    category: "blocks",
    tags: ["contact", "form", "inputs", "validation", "shadcn"],
    component: ContactFormSection,
    codePath: "@/components/sections/contact-form-section.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "our-services-section",
    name: "Nossos Serviços",
    description:
      "Seção de serviços com cartões de serviço, distintivos, ícones e animações de hover",
    category: "blocks",
    tags: ["services", "cards", "badges", "icons", "hover", "shadcn"],
    component: OurServicesSection,
    codePath: "@/components/sections/our-services-section.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  // UI-TripleD Components
  {
    id: "morphing-action-button",
    name: "Botão de Ação Morfing",
    description:
      "Um FAB circular que se transforma em um painel de ação retangular usando layoutId",
    category: "microinteractions",
    tags: ["fab", "morph", "layout", "button", "action"],
    component: MorphingActionButton,
    codePath: "@/components/motion-core/morphing-action-button.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "smart-hover-card",
    name: "Cartão de Hover Inteligente",
    description:
      "Cartão que detecta a direção do cursor e revela conteúdo desse lado",
    category: "components",
    tags: ["card", "hover", "directional", "reveal", "smart"],
    component: SmartHoverCard,
    codePath: "@/components/motion-core/smart-hover-card.tsx",
    duration: "300ms",
    easing: "spring",
    display: false,
  },
  {
    id: "magnetic-cursor-link",
    name: "Link Magnético de Cursor",
    description:
      "Link que segue ligeiramente o cursor do mouse dentro do limite e volta ao lugar",
    category: "microinteractions",
    tags: ["magnetic", "cursor", "link", "interactive"],
    component: MagneticCursorLink,
    codePath: "@/components/motion-core/magnetic-cursor-link.tsx",
    duration: "200ms",
    easing: "spring",
    display: true,
  },
  {
    id: "scroll-progress-tracker",
    name: "Rastreador de Progresso de Rolagem",
    description:
      "Barra de progresso fixa que segue a rolagem e brilha nas mudanças de seção",
    category: "page",
    tags: ["scroll", "progress", "tracker", "navigation"],
    component: ScrollProgressTracker,
    codePath: "@/components/motion-core/scroll-progress-tracker.tsx",
    duration: "continuous",
    easing: "spring",
    display: false, // need fixes
  },
  {
    id: "stacked-card-carousel",
    name: "Carrossel de Cartões Empilhados",
    description:
      "Três cartões empilhados que se deslocam e inclinam dinamicamente ao passar o mouse",
    category: "components",
    tags: ["cards", "carousel", "stack", "3d", "hover"],
    component: StackedCardCarousel,
    codePath: "@/components/motion-core/stacked-card-carousel.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // need fixes
  },
  {
    id: "spotlight-section",
    name: "Seção Spotlight",
    description:
      "Contêiner onde o mouse cria um spotlight radial suave seguindo o cursor",
    category: "decorative",
    tags: ["spotlight", "cursor", "gradient", "interactive"],
    component: SpotlightSection,
    codePath: "@/components/motion-core/spotlight-section.tsx",
    duration: "continuous",
    easing: "spring",
    display: false, // need fixes
  },
  {
    id: "auto-revealing-heading",
    name: "Cabeçalho Auto-Revelador",
    description:
      "Cabeçalho que revela cada letra/palavra com movimento escalado ao rolar",
    category: "page",
    tags: ["heading", "reveal", "stagger", "scroll"],
    component: AutoRevealingHeading,
    codePath: "@/components/motion-core/auto-revealing-heading.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
  },
  {
    id: "interactive-timeline",
    name: "Linha do Tempo Interativa",
    description:
      "Linha do tempo vertical onde elementos animam e se conectam com linhas ao rolar",
    category: "components",
    tags: ["timeline", "scroll", "connect", "animate"],
    component: InteractiveTimeline,
    codePath: "@/components/motion-core/interactive-timeline.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
  },
  {
    id: "dynamic-tag-cloud",
    name: "Nuvem de Tags Dinâmica",
    description:
      "Agrupamento flutuante de tags que flutuam e se rearranjam ao passar o mouse",
    category: "decorative",
    tags: ["tags", "cloud", "float", "drift", "interactive"],
    component: DynamicTagCloud,
    codePath: "@/components/motion-core/dynamic-tag-cloud.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
  },
  {
    id: "ai-loading-skeleton",
    name: "Esqueleto de Carregamento IA",
    description:
      "Estado de carregamento com gradiente de brilho diagonal e onda de opacidade",
    category: "components",
    tags: ["loading", "skeleton", "shimmer", "gradient"],
    component: AILoadingSkeleton,
    codePath: "@/components/motion-core/ai-loading-skeleton.tsx",
    duration: "1500ms",
    easing: "linear",
    display: true,
  },
  {
    id: "animated-quote-block",
    name: "Bloco de Citação Animada",
    description: "Citação que se digita, pausa e respira sutilmente",
    category: "decorative",
    tags: ["quote", "typewriter", "breathing", "pulse"],
    component: AnimatedQuoteBlock,
    codePath: "@/components/motion-core/animated-quote-block.tsx",
    duration: "2000ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "context-menu-bubble",
    name: "Bolha de Menu de Contexto",
    description:
      "Clique direito revela menu radial circular expansível com ícones",
    category: "components",
    tags: ["context", "menu", "radial", "bubble", "expand"],
    component: ContextMenuBubble,
    codePath: "@/components/motion-core/context-menu-bubble.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "magnetic-avatar-group",
    name: "Grupo de Avatares Magnéticos",
    description:
      "Avatares empilhados que se separam ao passar o mouse mostrando dicas",
    category: "components",
    tags: ["avatars", "group", "magnetic", "tooltip", "hover"],
    component: MagneticAvatarGroup,
    codePath: "@/components/motion-core/magnetic-avatar-group.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // need fixes
  },
  {
    id: "notification-bell",
    name: "Sino de Notificação",
    description:
      "Ícone de sino que balança suavemente quando uma nova notificação aparece",
    category: "microinteractions",
    tags: ["notification", "bell", "swing", "oscillation"],
    component: NotificationBell,
    codePath: "@/components/motion-core/notification-bell.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
  },
  {
    id: "drag-to-confirm-slider",
    name: "Slider de Arrastar para Confirmar",
    description:
      "Slider que ativa ação apenas quando totalmente arrastado até o fim",
    category: "components",
    tags: ["slider", "drag", "confirm", "interactive"],
    component: DragToConfirmSlider,
    codePath: "@/components/motion-core/drag-to-confirm-slider.tsx",
    duration: "400ms",
    easing: "spring",
    display: false, // need fixes
  },
  {
    id: "expanding-search-dock",
    name: "Doca de Pesquisa Expansível",
    description:
      "Ícone de pesquisa mínimo que se expande em entrada completa com desfoque",
    category: "components",
    tags: ["search", "expand", "dock", "input", "blur"],
    component: ExpandingSearchDock,
    codePath: "@/components/motion-core/expanding-search-dock.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "mood-gradient-button",
    name: "Botão de Gradiente de Humor",
    description:
      "Botão com gradiente de fundo que muda com base no ângulo de hover",
    category: "microinteractions",
    tags: ["button", "gradient", "mood", "interactive"],
    component: MoodGradientButton,
    codePath: "@/components/motion-core/mood-gradient-button.tsx",
    duration: "continuous",
    easing: "easeInOut",
    display: false, // People think its useless
  },
  {
    id: "floating-info-panel",
    name: "Painel de Informações Flutuante",
    description:
      "Dica de informação que flutua para cima/baixo enquanto desaparece intermitentemente",
    category: "decorative",
    tags: ["info", "tooltip", "float", "drift", "fade"],
    component: FloatingInfoPanel,
    codePath: "@/components/motion-core/floating-info-panel.tsx",
    duration: "4000ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "reactive-background-grid",
    name: "Grade de Fundo Reativa",
    description:
      "Padrão de fundo que reage ao movimento do mouse e ondulações de clique",
    category: "decorative",
    tags: ["grid", "background", "reactive", "ripple", "interactive"],
    component: ReactiveBackgroundGrid,
    codePath: "@/components/motion-core/reactive-background-grid.tsx",
    duration: "600ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "fluid-modal-transition",
    name: "Transição de Modal Fluida",
    description:
      "Modal que se expande suavemente do elemento gatilho clicado usando layoutId",
    category: "components",
    tags: ["modal", "transition", "layout", "expand", "fluid"],
    component: FluidModalTransition,
    codePath: "@/components/motion-core/fluid-modal-transition.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "holographic-wall",
    name: "Parede Holográfica",
    description:
      "Parede preta com hieróglifos faraônicos e reflexão de luz dourada do cursor",
    category: "decorative",
    tags: [
      "holographic",
      "wall",
      "cursor",
      "glow",
      "golden",
      "hieroglyphs",
      "pharaonic",
    ],
    component: HolographicWall,
    codePath: "@/components/motion-core/holographic-wall.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "dynamic-spotlight-cta",
    name: "CTA Spotlight Dinâmico",
    description:
      "Spotlight flutuante segue o cursor para revelar texto CTA gradiente com efeitos premium",
    category: "page",
    tags: [
      "cta",
      "spotlight",
      "cursor",
      "gradient",
      "banner",
      "premium",
      "paywall",
    ],
    component: DynamicSpotlightCTA,
    codePath: "@/components/motion-core/dynamic-spotlight-cta.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "ai-glow-input",
    name: "Campo de Entrada com Brilho IA",
    description:
      "Campo de entrada com brilho dinâmico que pulsa com base na velocidade de digitação - feedback de movimento inteligente",
    category: "components",
    tags: ["input", "ai", "glow", "typing", "search", "smart", "feedback"],
    component: AIGlowInput,
    codePath: "@/components/motion-core/ai-glow-input.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "ai-response-typing",
    name: "Fluxo de Digitação de Resposta IA",
    description:
      "Animação de digitação caractere por caractere com pausas naturais e estados de pensamento",
    category: "components",
    tags: [
      "ai",
      "typing",
      "stream",
      "chatbot",
      "response",
      "animation",
      "text",
    ],
    component: AIResponseTyping,
    codePath: "@/components/motion-core/ai-response-typing.tsx",
    duration: "30ms",
    easing: "linear",
    display: true,
  },
  {
    id: "ai-unlock-animation",
    name: "Animação de Desbloqueio IA",
    description:
      "Animação de desbloqueio premium com partículas, ondulações e estados de carregamento",
    category: "microinteractions",
    tags: ["ai", "unlock", "premium", "activation", "particles", "ripple"],
    component: AIUnlockAnimation,
    codePath: "@/components/motion-core/ai-unlock-animation.tsx",
    duration: "3000ms",
    easing: "easeInOut",
    display: true,
  },
  // NEW: 5 Additional Blocks
  {
    id: "team-section-block",
    name: "Bloco de Seção de Equipe",
    description:
      "Cartões animados de membros da equipe com avatares, funções e links sociais",
    category: "blocks",
    tags: ["team", "members", "cards", "avatars", "social", "about", "shadcn"],
    component: TeamSectionBlock,
    codePath: "@/components/sections/team-section-block.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "newsletter-signup-block",
    name: "Bloco de Inscrição na Newsletter",
    description:
      "Formulário animado de inscrição na newsletter com estado de sucesso e fundo gradiente",
    category: "blocks",
    tags: ["newsletter", "signup", "form", "email", "subscription", "shadcn"],
    component: NewsletterSignupBlock,
    codePath: "@/components/sections/newsletter-signup-block.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
  },
  {
    id: "feature-comparison-block",
    name: "Tabela de Comparação de Recursos",
    description:
      "Tabela interativa de comparação de preços com marcas de seleção animadas e destaques de planos",
    category: "blocks",
    tags: ["comparison", "pricing", "table", "features", "plans", "shadcn"],
    component: FeatureComparisonBlock,
    codePath: "@/components/sections/feature-comparison-block.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
  },
  {
    id: "gallery-grid-block",
    name: "Grade de Galeria com Lightbox",
    description:
      "Galeria de imagens filtrável com lightbox animado e navegação",
    category: "blocks",
    tags: ["gallery", "images", "lightbox", "filter", "portfolio", "shadcn"],
    component: GalleryGridBlock,
    codePath: "@/components/sections/gallery-grid-block.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
  },
  {
    id: "footer-block",
    name: "Bloco de Rodapé",
    description:
      "Rodapé abrangente com links, inscrição na newsletter, ícones sociais e rolar para cima",
    category: "blocks",
    tags: ["footer", "links", "social", "newsletter", "navigation", "shadcn"],
    component: FooterBlock,
    codePath: "@/components/sections/footer-block.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  // NEW: 5 Additional Responsive Blocks
  {
    id: "cta-hero-block",
    name: "Bloco Hero CTA",
    description:
      "Seção hero envolvente com inscrição por e-mail, pré-visualização de vídeo e prova social",
    category: "blocks",
    tags: ["hero", "cta", "email", "video", "landing", "responsive", "shadcn"],
    component: CTAHeroBlock,
    codePath: "@/components/sections/cta-hero-block.tsx",
    duration: "800ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "bento-grid-block",
    name: "Bloco de Grade Bento",
    description:
      "Grade bento em camadas com imagens, métricas e revelações de movimento suaves",
    category: "blocks",
    tags: ["bento", "grid", "layout", "motion", "shadcn"],
    component: BentoGridBlock,
    codePath: "@/components/sections/bento-grid-block.tsx",
    duration: "900ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "services-grid-block",
    name: "Grade de Serviços",
    description:
      "Grade responsiva de serviços de 8 colunas com ícones, recursos e efeitos de hover",
    category: "blocks",
    tags: ["services", "grid", "features", "icons", "responsive", "shadcn"],
    component: ServicesGridBlock,
    codePath: "@/components/sections/services-grid-block.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "stats-counter-block",
    name: "Bloco de Contador de Estatísticas",
    description:
      "Contadores de estatísticas animados com ícones e fundos gradientes",
    category: "blocks",
    tags: [
      "stats",
      "counter",
      "numbers",
      "metrics",
      "animation",
      "responsive",
      "shadcn",
    ],
    component: StatsCounterBlock,
    codePath: "@/components/sections/stats-counter-block.tsx",
    duration: "2000ms",
    easing: "spring",
    display: true,
  },
  {
    id: "notion-blog-page",
    name: "Página de Blog Notion",
    description:
      "Guia de publicação estilo Notion com texto rico, alternâncias e visuais de suporte",
    category: "blocks",
    tags: ["notion", "blog", "page", "writing", "workflow"],
    component: NotionBlogPage,
    codePath: "@/components/sections/notion-blog-page.tsx",
    duration: "variable",
    easing: "easeOut",
    display: true,
  },
  {
    id: "timeline-block",
    name: "Bloco de Linha do Tempo",
    description:
      "Linha do tempo vertical com cartões alternados e linha de progresso animada",
    category: "blocks",
    tags: ["timeline", "history", "journey", "events", "responsive", "shadcn"],
    component: TimelineBlock,
    codePath: "@/components/sections/timeline-block.tsx",
    duration: "1500ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "faq-accordion-block",
    name: "Sanfona FAQ",
    description: "Seção FAQ expansível com animações suaves de sanfona",
    category: "blocks",
    tags: ["faq", "accordion", "questions", "help", "responsive", "shadcn"],
    component: FAQAccordionBlock,
    codePath: "@/components/sections/faq-accordion-block.tsx",
    duration: "300ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "glassmorphism-hero-block",
    name: "Hero Glassmorfismo",
    description:
      "Seção hero moderna com efeitos glassmorfismo, orbes de fundo animados e botões CTA",
    category: "blocks",
    tags: ["hero", "glassmorphism", "landing", "cta", "gradient", "shadcn"],
    component: GlassmorphismHeroBlock,
    codePath: "@/components/sections/glassmorphism-hero-block.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "feature-cards-block",
    name: "Grade de Cartões de Recursos",
    description:
      "Três cartões de recursos com ícones, efeitos de hover e estilo glassmorfismo",
    category: "blocks",
    tags: [
      "features",
      "cards",
      "grid",
      "icons",
      "hover",
      "glassmorphism",
      "shadcn",
    ],
    component: FeatureCardsBlock,
    codePath: "@/components/sections/feature-cards-block.tsx",
    duration: "500ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "glassmorphism-cta-block",
    name: "CTA Glassmorfismo",
    description:
      "Seção de chamada para ação com cartão vítreo, fundo gradiente e botões animados",
    category: "blocks",
    tags: ["cta", "glassmorphism", "gradient", "buttons", "banner", "shadcn"],
    component: GlassmorphismCTABlock,
    codePath: "@/components/sections/glassmorphism-cta-block.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "glassmorphism-listen-app-block",
    name: "Aplicativo de Escuta Glassmorfismo",
    description:
      "Bloco de streaming de música com player glassmorfismo, destaques curados e controles animados",
    category: "blocks",
    tags: ["music", "app", "glassmorphism", "player", "audio", "shadcn"],
    component: GlassmorphismListenAppBlock,
    codePath: "@/components/sections/glassmorphism-listen-app-block.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "glassmorphism-pricing-block",
    name: "Preços Glassmorfismo",
    description:
      "Cartões de preços com efeitos glassmorfismo, animações de hover e listas de recursos",
    category: "blocks",
    tags: ["pricing", "cards", "glassmorphism", "plans", "hover", "shadcn"],
    component: GlassmorphismPricingBlock,
    codePath: "@/components/sections/glassmorphism-pricing-block.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "glassmorphism-testimonials-block",
    name: "Depoimentos Glassmorfismo",
    description:
      "Depoimentos de clientes com cartões glassmorfismo, classificações por estrelas e efeitos de hover",
    category: "blocks",
    tags: [
      "testimonials",
      "reviews",
      "glassmorphism",
      "cards",
      "ratings",
      "shadcn",
    ],
    component: GlassmorphismTestimonialsBlock,
    codePath: "@/components/sections/glassmorphism-testimonials-block.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "glassmorphism-launch-timeline-block",
    name: "Linha do Tempo de Lançamento Glassmorfismo",
    description:
      "Roteiro de lançamento sem atrito com movimento escalado, marcos glassmorfismo e ações CTA pareadas",
    category: "blocks",
    tags: ["timeline", "launch", "roadmap", "glassmorphism", "shadcn"],
    component: GlassmorphismLaunchTimelineBlock,
    codePath: "@/components/sections/glassmorphism-launch-timeline-block.tsx",
    duration: "800ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "glassmorphism-minimal-metrics-block",
    name: "Métricas Mínimas Glassmorfismo",
    description:
      "Cartões de métricas focados com superfícies de vidro, movimento sutil e banner CTA de insight concierge",
    category: "blocks",
    tags: ["metrics", "stats", "dashboard", "glassmorphism", "shadcn"],
    component: GlassmorphismMinimalMetricsBlock,
    codePath: "@/components/sections/glassmorphism-minimal-metrics-block.tsx",
    duration: "750ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "glassmorphism-logo-showcase-block",
    name: "Vitrine de Logos Glassmorfismo",
    description:
      "Grade de parceiros glassmorfismo com movimento flutuante, dicas de marca e chamada para ação colaborativa",
    category: "blocks",
    tags: ["logos", "partners", "brand", "glassmorphism", "shadcn"],
    component: GlassmorphismLogoShowcaseBlock,
    codePath: "@/components/sections/glassmorphism-logo-showcase-block.tsx",
    duration: "850ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "glassmorphism-portfolio-block",
    name: "Portfólio Glassmorfismo",
    description:
      "Spotlight de portfólio pessoal com retrato de perfil, destaques narrativos e links sociais animados",
    category: "blocks",
    tags: [
      "portfolio",
      "profile",
      "glassmorphism",
      "social",
      "personal",
      "shadcn",
    ],
    component: GlassmorphismPortfolioBlock,
    codePath: "@/components/sections/glassmorphism-portfolio-block.tsx",
    duration: "650ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "glassmorphism-product-update-block",
    name: "Atualizações de Produto Glassmorfismo",
    description:
      "Cartões de changelog multi-estado com sobreposições de vidro, distintivos de status e banner de integração GitHub",
    category: "blocks",
    tags: ["updates", "changelog", "glassmorphism", "news", "shadcn"],
    component: GlassmorphismProductUpdateBlock,
    codePath: "@/components/sections/glassmorphism-product-update-block.tsx",
    duration: "700ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "n8n-workflow-block",
    name: "Bloco de Fluxo de Trabalho N8N",
    description:
      "Construtor visual de automação de fluxo de trabalho com nós animados, conexões e monitoramento de execução em tempo real",
    category: "blocks",
    tags: [
      "workflow",
      "automation",
      "n8n",
      "nodes",
      "connections",
      "visual",
      "shadcn",
    ],
    component: N8nWorkflowBlock,
    codePath: "@/components/sections/n8n-workflow-block.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "currency-converter-card",
    name: "Cartão Conversor de Moeda",
    description:
      "Widget de conversão financeira com entradas animadas, atualizações de câmbio simuladas e feedback contextual",
    category: "blocks",
    tags: ["finance", "currency", "converter", "card", "dashboard", "shadcn"],
    component: CurrencyConverterCard,
    codePath: "@/components/sections/currency-converter-card.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "interactive-logs-table",
    name: "Tabela de Logs Interativa",
    description:
      "Painel de logs de observabilidade com filtros animados, pesquisa e linhas expansíveis",
    category: "blocks",
    tags: ["logs", "observability", "filters", "table", "dashboard", "shadcn"],
    component: InteractiveLogsTable,
    codePath: "@/components/sections/interactive-logs-table.tsx",
    duration: "450ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "glassmorphism-statistics-card",
    name: "Cartão de Estatísticas Glassmorfismo",
    description:
      "Cartão de estatísticas interativo com revelação ao hover e transições suaves",
    category: "components",
    tags: ["card", "statistics", "stats", "hover", "shadcn", "glassmorphism"],
    component: GlassmorphismStatisticsCard,
    codePath: "@/components/sections/glassmorphism-statistics-card.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "kanban-board",
    name: "Quadro Kanban",
    description:
      "Quadro Kanban interativo com arrastar e soltar, estilo glassmorfismo e recursos de gerenciamento de tarefas",
    category: "blocks",
    tags: [
      "kanban",
      "board",
      "drag-drop",
      "task",
      "management",
      "glassmorphism",
    ],
    component: KanbanBoard,
    codePath: "@/components/components/kanban/kanban-board.tsx",
    duration: "N/A",
    easing: "spring",
    display: true,
  },
];

export function getComponentById(id: string): Component | undefined {
  return componentsRegistry.find((component) => component.id === id);
}

export function getAnimationsByCategory(
  category: ComponentCategory
): Component[] {
  return componentsRegistry.filter(
    (component) => component.category === category
  );
}

export function searchComponents(query: string): Component[] {
  const lowerQuery = query.toLowerCase();
  return componentsRegistry.filter(
    (component) =>
      component.name.toLowerCase().includes(lowerQuery) ||
      component.description.toLowerCase().includes(lowerQuery) ||
      component.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Loads component code on demand
 * This is a Server Function and should be called from Server Components or Server Actions
 */
export async function loadComponentCode(component: Component): Promise<string> {
  if (component.code) {
    return component.code;
  }
  if (component.codePath) {
    return await getComponentCode(component.codePath);
  }
  throw new Error(`No code path found for component ${component.id}`);
}
