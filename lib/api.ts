/**
 * API Client for Multi-Tenant SaaS Hermes Platform
 * Handles all communication with the backend API
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface MagicLinkResponse {
  success: boolean;
  message: string;
  token?: string;
  magicLink?: string;
  expiresAt?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  tenant?: {
    tenantId: string;
  };
}

export interface SiteDataUpdate {
  key: string;
  value: any;
  operation?: 'set' | 'delete' | 'merge';
}

export interface AuditLog {
  id: string;
  tenantId: string;
  platformUserId: string | null;
  action: string;
  payload: any;
  ipAddress: string | null;
  userAgent: string | null;
  timestamp: string;
}

export interface TenantRegistration {
  businessName: string;
  projectSlug: string;
  platform: 'whatsapp' | 'telegram';
  platformUserId: string;
}

export interface Tenant {
  id: string;
  name: string;
  projectSlug: string;
  createdAt: string;
  updatedAt: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Make an API request with credentials (cookies)
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      credentials: 'include', // Include cookies
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({
        error: `HTTP ${response.status}: ${response.statusText}`,
      }));
      throw new Error(error.error || 'Request failed');
    }

    return response.json();
  }

  /**
   * Request a magic link
   */
  async requestMagicLink(
    platform: 'whatsapp' | 'telegram',
    platformUserId: string,
    tenantId?: string
  ): Promise<MagicLinkResponse> {
    return this.request<MagicLinkResponse>('/api/auth/request-link', {
      method: 'POST',
      body: JSON.stringify({ platform, platformUserId, tenantId }),
    });
  }

  /**
   * Verify magic link token
   */
  async verifyToken(token: string): Promise<AuthResponse> {
    return this.request<AuthResponse>('/api/auth/verify', {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  }

  /**
   * Logout
   */
  async logout(): Promise<void> {
    await this.request('/api/auth/logout', { method: 'POST' });
  }

  /**
   * Update site data
   */
  async updateSiteData(update: SiteDataUpdate): Promise<ApiResponse> {
    return this.request<ApiResponse>('/api/agent/update-site', {
      method: 'POST',
      body: JSON.stringify(update),
    });
  }

  /**
   * Read site data by key
   */
  async readSiteData(key: string): Promise<ApiResponse> {
    return this.request<ApiResponse>('/api/agent/read-site', {
      method: 'POST',
      body: JSON.stringify({ key }),
    });
  }

  /**
   * Get full site data
   */
  async getSiteData(): Promise<ApiResponse> {
    return this.request<ApiResponse>('/api/agent/site-data', {
      method: 'GET',
    });
  }

  /**
   * Get audit logs
   */
  async getAuditLogs(
    limit: number = 50,
    offset: number = 0
  ): Promise<ApiResponse<AuditLog[]>> {
    return this.request<ApiResponse<AuditLog[]>>(
      `/api/agent/audit-logs?limit=${limit}&offset=${offset}`,
      { method: 'GET' }
    );
  }

  /**
   * Check health
   */
  async checkHealth(): Promise<any> {
    return this.request('/api/health', { method: 'GET' });
  }

  /**
   * Register new tenant (public endpoint)
   */
  async registerTenant(data: TenantRegistration): Promise<ApiResponse> {
    return this.request<ApiResponse>('/api/tenants/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Get current tenant info
   */
  async getTenantInfo(): Promise<ApiResponse<Tenant>> {
    return this.request<ApiResponse<Tenant>>('/api/tenants/me', {
      method: 'GET',
    });
  }

  /**
   * Get all tenants (admin only)
   */
  async getAllTenants(): Promise<ApiResponse<Tenant[]>> {
    return this.request<ApiResponse<Tenant[]>>('/api/admin/tenants', {
      method: 'GET',
    });
  }

  /**
   * Get tenant channels (bot connections)
   */
  async getTenantChannels(): Promise<ApiResponse> {
    return this.request<ApiResponse>('/api/tenants/channels', {
      method: 'GET',
    });
  }

  /**
   * Test bot connection
   */
  async testBotConnection(platform: 'whatsapp' | 'telegram'): Promise<ApiResponse> {
    return this.request<ApiResponse>('/api/tenants/test-connection', {
      method: 'POST',
      body: JSON.stringify({ platform }),
    });
  }
}

export const api = new ApiClient(API_URL);
