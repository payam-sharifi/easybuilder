'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api, AuditLog } from '@/lib/api';

export default function DashboardPage() {
  const router = useRouter();
  const [siteData, setSiteData] = useState<Record<string, any>>({});
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'data' | 'logs'>('data');
  
  // Form state for updates
  const [updateForm, setUpdateForm] = useState({
    key: '',
    value: '',
    operation: 'set' as 'set' | 'delete' | 'merge',
  });
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  // Load initial data
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [siteDataResponse, auditLogsResponse] = await Promise.all([
        api.getSiteData(),
        api.getAuditLogs(20, 0),
      ]);

      if (siteDataResponse.success) {
        setSiteData(siteDataResponse.data || {});
      }

      if (auditLogsResponse.success) {
        setAuditLogs(auditLogsResponse.data || []);
      }
    } catch (err) {
      // Redirect to login if unauthorized
      if (err instanceof Error && err.message.includes('401')) {
        router.push('/login');
      } else {
        showNotification('error', 'Failed to load data');
      }
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdateLoading(true);

    try {
      let value: any = updateForm.value;

      // Try to parse JSON if it looks like JSON
      if (
        updateForm.value.startsWith('{') ||
        updateForm.value.startsWith('[')
      ) {
        try {
          value = JSON.parse(updateForm.value);
        } catch {
          // Keep as string if not valid JSON
        }
      }

      const response = await api.updateSiteData({
        key: updateForm.key,
        value,
        operation: updateForm.operation,
      });

      if (response.success) {
        showNotification('success', response.message || 'Update successful!');
        setUpdateForm({ key: '', value: '', operation: 'set' });
        
        // Reload data
        await loadData();
      }
    } catch (err) {
      showNotification(
        'error',
        err instanceof Error ? err.message : 'Update failed'
      );
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await api.logout();
      router.push('/login');
    } catch (err) {
      showNotification('error', 'Logout failed');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                🎯 Tenant Dashboard
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 animate-slide-in">
          <div
            className={`px-6 py-4 rounded-lg shadow-lg ${
              notification.type === 'success'
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            <div className="flex items-center">
              <span className="text-xl mr-2">
                {notification.type === 'success' ? '✅' : '❌'}
              </span>
              <p className="font-medium">{notification.message}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('data')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'data'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📝 Site Data
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'logs'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📋 Audit Logs
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'data' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Update Form */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Update Site Data
              </h2>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Key
                  </label>
                  <input
                    type="text"
                    value={updateForm.key}
                    onChange={(e) =>
                      setUpdateForm({ ...updateForm, key: e.target.value })
                    }
                    placeholder="e.g., site_title, phone, email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Value
                  </label>
                  <textarea
                    value={updateForm.value}
                    onChange={(e) =>
                      setUpdateForm({ ...updateForm, value: e.target.value })
                    }
                    placeholder='e.g., "My Website" or {"key": "value"}'
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    JSON objects will be auto-parsed
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Operation
                  </label>
                  <select
                    value={updateForm.operation}
                    onChange={(e) =>
                      setUpdateForm({
                        ...updateForm,
                        operation: e.target.value as any,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="set">Set (Replace)</option>
                    <option value="merge">Merge (Objects only)</option>
                    <option value="delete">Delete</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={updateLoading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {updateLoading ? 'Updating...' : '💾 Update Data'}
                </button>
              </form>
            </div>

            {/* Current Site Data */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Current Site Data
                </h2>
                <button
                  onClick={loadData}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  🔄 Refresh
                </button>
              </div>
              
              {Object.keys(siteData).length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No site data yet</p>
                  <p className="text-sm mt-2">
                    Use the form to add your first entry
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[500px] overflow-y-auto">
                  {Object.entries(siteData).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 mb-1">
                            {key}
                          </p>
                          <pre className="text-sm text-gray-600 whitespace-pre-wrap break-all">
                            {typeof value === 'object'
                              ? JSON.stringify(value, null, 2)
                              : String(value)}
                          </pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Audit Logs (Latest 20)
              </h2>
              <button
                onClick={loadData}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                🔄 Refresh
              </button>
            </div>

            {auditLogs.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No audit logs yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Timestamp
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Action
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Payload
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {auditLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(log.timestamp)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                            {log.action}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {log.platformUserId || 'System'}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <details className="cursor-pointer">
                            <summary className="text-blue-600 hover:text-blue-700">
                              View
                            </summary>
                            <pre className="mt-2 text-xs bg-gray-50 p-2 rounded overflow-x-auto">
                              {JSON.stringify(log.payload, null, 2)}
                            </pre>
                          </details>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
