import type { Platform } from '@/types';
import type { ThemeMode } from '@/config/theme';

export const getStatusColor = (status: Platform['status'], theme: ThemeMode) => {
  switch (status) {
    case 'active':
      return 'success';
    case 'maintenance':
      return 'warning';
    case 'coming soon':
      return 'processing';
    default:
      return 'default';
  }
}; 