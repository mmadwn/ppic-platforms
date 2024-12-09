export const THEME_COLORS = {
  dark: {
    active: 'var(--status-active)',
    maintenance: 'var(--status-maintenance)',
    'coming soon': 'var(--status-coming-soon)',
    default: 'var(--status-default)',
  },
  light: {
    active: 'var(--status-active)',
    maintenance: 'var(--status-maintenance)',
    'coming soon': 'var(--status-coming-soon)', 
    default: 'var(--status-default)',
  },
} as const;

export type ThemeMode = keyof typeof THEME_COLORS;
export type StatusColor = keyof typeof THEME_COLORS.light; 