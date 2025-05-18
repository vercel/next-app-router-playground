import Link from 'next/link';

const transitionTypes = [
  'default',
  'transition-to-detail',
  'transition-to-list',
  'transition-backwards',
  'transition-forwards',
] as const;

const animationTypes = [
  'auto',
  'none',
  'animate-slide-from-left',
  'animate-slide-from-right',
  'animate-slide-to-left',
  'animate-slide-to-right',
  'animate-morph',
] as const;

const transitionIds = [
  'navigation-icon',
  'navigation-title',
  'navigation-pagination',
] as const;

type TransitionType = (typeof transitionTypes)[number];

type AnimationType = (typeof animationTypes)[number];

export type TransitionMap = {
  default: AnimationType;
} & Partial<Record<Exclude<TransitionType, 'default'>, AnimationType>>;

export type ViewTransitionClass = AnimationType | TransitionMap;

export type TransitionId = (typeof transitionIds)[number] | `product-${string}`;

export type TransitionLinkProps = {
  type: TransitionType;
} & Omit<React.ComponentProps<typeof Link>, 'onNavigate'>;
