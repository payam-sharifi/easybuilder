/**
 * Extended types for Multi-Tenant SaaS Platform
 */

export enum UserRole {
  TENANT_OWNER = 'tenant_owner',
  SUPER_ADMIN = 'super_admin',
}

export interface User {
  tenantId: string;
  tenantName?: string;
  projectSlug?: string;
  platformUserId: string;
  platform: 'whatsapp' | 'telegram';
  role: UserRole;
}

export interface Tenant {
  id: string;
  name: string;
  projectSlug: string;
  createdAt: string;
  updatedAt: string;
  isActive?: boolean;
  channelsCount?: number;
}

export interface TenantChannel {
  id: string;
  platform: 'whatsapp' | 'telegram';
  platformUserId: string;
  isVerified: boolean;
  createdAt: string;
}

export interface SiteData {
  [key: string]: any;
}

export interface BotConnectionStatus {
  whatsapp: {
    connected: boolean;
    phoneNumber?: string;
    lastSeen?: string;
  };
  telegram: {
    connected: boolean;
    username?: string;
    lastSeen?: string;
  };
}
