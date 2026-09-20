'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    platform: 'whatsapp' as 'whatsapp' | 'telegram',
    platformUserId: '',
    tenantId: '',
  });
  const [magicLink, setMagicLink] = useState<{
    token: string;
    link: string;
    expiresAt: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const response = await api.requestMagicLink(
        formData.platform,
        formData.platformUserId,
        formData.tenantId || undefined
      );

      if (response.success) {
        setSuccess('Magic link generated! Click the link below to login.');
        if (response.token && response.magicLink) {
          setMagicLink({
            token: response.token,
            link: response.magicLink,
            expiresAt: response.expiresAt || '',
          });
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate magic link');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyToken = async (token: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.verifyToken(token);
      if (response.success) {
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to verify token');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🔐 Admin Login
          </h1>
          <p className="text-gray-600">
            Multi-Tenant SaaS Hermes Platform
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Platform
              </label>
              <select
                value={formData.platform}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    platform: e.target.value as 'whatsapp' | 'telegram',
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="whatsapp">WhatsApp</option>
                <option value="telegram">Telegram</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {formData.platform === 'whatsapp'
                  ? 'Phone Number'
                  : 'Telegram User ID'}
              </label>
              <input
                type="text"
                value={formData.platformUserId}
                onChange={(e) =>
                  setFormData({ ...formData, platformUserId: e.target.value })
                }
                placeholder={
                  formData.platform === 'whatsapp'
                    ? '+1234567890'
                    : '123456789'
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.platform === 'whatsapp'
                  ? 'Format: +[country code][number]'
                  : 'Your Telegram user ID'}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tenant ID <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                value={formData.tenantId}
                onChange={(e) =>
                  setFormData({ ...formData, tenantId: e.target.value })
                }
                placeholder="UUID of your tenant"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !formData.platformUserId}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Generating...' : '✨ Generate Magic Link'}
            </button>
          </form>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              {success}
            </div>
          )}

          {magicLink && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
              <h3 className="font-semibold text-blue-900">
                🎉 Magic Link Generated!
              </h3>
              <p className="text-sm text-blue-700">
                Click the button below to login (development mode):
              </p>
              <button
                onClick={() => handleVerifyToken(magicLink.token)}
                disabled={loading}
                className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-50"
              >
                🚀 Login Now
              </button>
              <div className="mt-2 p-3 bg-white rounded border border-blue-200">
                <p className="text-xs font-mono text-gray-600 break-all">
                  Token: {magicLink.token}
                </p>
              </div>
              <p className="text-xs text-blue-600">
                Expires: {new Date(magicLink.expiresAt).toLocaleString()}
              </p>
            </div>
          )}
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>
            Need help? Check the{' '}
            <a
              href="http://localhost:3000/api/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              API Documentation
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
