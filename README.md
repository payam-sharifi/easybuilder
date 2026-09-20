# Multi-Tenant SaaS Hermes - Admin Dashboard

Modern, responsive Next.js admin dashboard for managing tenant site data and viewing audit logs.

## Features

- 🔐 **Magic Link Authentication** - Passwordless login via WhatsApp/Telegram
- 📝 **Site Data Management** - Update, merge, and delete site data entries
- 📊 **Real-time Updates** - See changes immediately with visual feedback
- 📋 **Audit Logs** - Complete history of all data modifications
- 🎨 **Modern UI** - Clean, responsive Tailwind CSS design
- 🔄 **Auto-refresh** - Keep data synchronized with the backend

## Getting Started

### Prerequisites

- Node.js 18+
- Backend API running on `http://localhost:3000`

### Installation

```bash
# From the admin directory
npm install
```

### Configuration

Create a `.env.local` file (already exists with defaults):

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Development

```bash
# Start the development server
npm run dev
```

The dashboard will be available at `http://localhost:3001`.

### Build for Production

```bash
npm run build
npm start
```

## Usage

### 1. Login

Navigate to `/login` and enter:

- **Platform**: Choose WhatsApp or Telegram
- **Platform User ID**: Your phone number (+1234567890) or Telegram ID
- **Tenant ID** (optional): UUID of your tenant

Click "Generate Magic Link" and then "Login Now" to authenticate.

### 2. Dashboard

Once logged in, you'll see two tabs:

#### Site Data Tab

- **Update Form**: Add or modify site data entries
  - **Key**: Identifier for your data (e.g., `site_title`, `phone`, `email`)
  - **Value**: Any text or JSON object
  - **Operation**:
    - **Set**: Replace the value
    - **Merge**: Deep merge with existing object
    - **Delete**: Remove the key

- **Current Data**: View all your site data in real-time

#### Audit Logs Tab

- View the last 20 actions performed on your tenant
- See timestamps, actions, users, and payloads
- Expand payload details for debugging

### 3. Logout

Click the "Logout" button in the header to end your session.

## API Integration

The dashboard communicates with the backend API using the `lib/api.ts` client.

### Available Endpoints

- `POST /api/auth/request-link` - Generate magic link
- `POST /api/auth/verify` - Verify token and login
- `POST /api/auth/logout` - Logout
- `POST /api/agent/update-site` - Update site data
- `POST /api/agent/read-site` - Read specific key
- `GET /api/agent/site-data` - Get all site data
- `GET /api/agent/audit-logs` - Get audit logs

All requests include credentials (cookies) for authentication.

## Project Structure

```
admin/
├── app/
│   ├── login/
│   │   └── page.tsx           # Login page with magic link
│   ├── dashboard/
│   │   └── page.tsx           # Main dashboard
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home (redirects to login)
├── lib/
│   └── api.ts                 # API client
├── .env.local                 # Environment variables
├── package.json
├── tailwind.config.ts
└── README.md
```

## Features in Detail

### Magic Link Authentication

The login flow:
1. User enters platform credentials
2. System generates a secure, time-limited token (15 min expiry)
3. In development, token is displayed directly for easy testing
4. In production, token would be sent via WhatsApp/Telegram
5. User clicks to verify token
6. Session cookie is set (HTTP-only, secure)
7. User is redirected to dashboard

### Site Data Management

Supports three operations:

**Set (Replace)**
```json
{
  "key": "site_title",
  "value": "My Website",
  "operation": "set"
}
```

**Merge (Deep merge for objects)**
```json
{
  "key": "config",
  "value": {"theme": "dark"},
  "operation": "merge"
}
```

**Delete**
```json
{
  "key": "old_key",
  "operation": "delete"
}
```

### Real-time Notifications

Visual feedback for all operations:
- ✅ Success notifications (green)
- ❌ Error notifications (red)
- Auto-dismiss after 5 seconds

### Audit Logs

Every action is logged with:
- Timestamp
- Action type
- Platform user ID
- Complete payload
- IP address (backend)
- User agent (backend)

## Troubleshooting

### Cannot connect to backend

- Ensure backend is running: `npm run dev` (in root directory)
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Verify CORS is configured in backend `.env`:
  ```
  CORS_ORIGINS=http://localhost:3000,http://localhost:3001
  ```

### Authentication fails

- Check that you've created a tenant in the database
- Verify tenant ID is correct (if provided)
- Ensure cookies are enabled in your browser

### Data not updating

- Click the refresh button to reload
- Check browser console for errors
- Verify you're authenticated (redirect to /login if not)

## Development

### Adding New Features

1. **New API endpoint**: Update `lib/api.ts`
2. **New page**: Create in `app/[name]/page.tsx`
3. **New component**: Create in `components/` (if needed)

### Styling

This project uses Tailwind CSS. Common classes:

- Buttons: `bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700`
- Inputs: `border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500`
- Cards: `bg-white rounded-xl shadow-md p-6`

## Security Notes

- All requests include credentials (cookies)
- Session cookies are HTTP-only and secure (in production)
- Tokens expire after 7 days
- CORS is strictly configured
- No sensitive data in localStorage

## Contributing

When adding features:
1. Maintain TypeScript strict mode
2. Use Tailwind CSS for styling
3. Add proper error handling
4. Include loading states
5. Provide user feedback (notifications)

---

**Need help?** Check the [main README](../README.md) or [API documentation](http://localhost:3000/api/docs)
