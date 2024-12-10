import type { Platform } from '@/types';

export const getStatusColor = (status: Platform['status']) => {
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