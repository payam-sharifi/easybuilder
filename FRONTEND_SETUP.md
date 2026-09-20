# Frontend Setup Guide

Complete guide for setting up and running the Next.js admin dashboard alongside the backend API.

## Architecture Overview

```
easyWebBuilder/
├── src/                    # Backend API (Express + TypeScript)
│   ├── routes/            # API endpoints
│   ├── services/          # Business logic
│   └── index.ts           # Server entry
├── admin/                  # Frontend Dashboard (Next.js + Tailwind)
│   ├── app/               # Pages (login, dashboard)
│   ├── lib/               # API client
│   └── package.json
└── README.md
```

## Quick Start (Both Servers)

### Option 1: Manual Start (Recommended for Development)

**Terminal 1 - Backend API:**
```bash
# From project root
cd easyBackend
npm install
npm run dev
```
Backend runs on `http://localhost:3000`

**Terminal 2 - Frontend Dashboard:**
```bash
# From project root
cd easyFrontend
npm install
npm run dev
```
Frontend runs on `http://localhost:3001`

### Option 1b: Quick Start Script (macOS)

```bash
# From project root
./START_BOTH.sh
```
This automatically opens both servers in separate terminal tabs.

### Option 2: Concurrent Start (npm-run-all)

```bash
# Install concurrently (if not already installed)
npm install -g npm-run-all

# Add to root package.json scripts:
"scripts": {
  "dev:backend": "tsx watch src/index.ts",
  "dev:frontend": "cd admin && npm run dev",
  "dev:all": "npm-run-all --parallel dev:backend dev:frontend"
}

# Start both
npm run dev:all
```

## Step-by-Step Setup

### 1. Backend Setup

```bash
# Navigate to backend
cd easyBackend

# Install backend dependencies
npm install

# Configure environment
cp .env.example .env

# Edit .env with your settings
nano .env

# Update CORS_ORIGINS to include frontend URL
CORS_ORIGINS=http://localhost:3000,http://localhost:3001

# Run database migrations
npm run migrate

# Generate Prisma client
npm run generate

# Start backend
npm run dev
```

**Verify backend:**
- Health check: http://localhost:3000/api/health
- API docs: http://localhost:3000/api/docs

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd easyFrontend

# Install frontend dependencies
npm install

# Configure environment (already created with defaults)
# .env.local contains:
NEXT_PUBLIC_API_URL=http://localhost:3000

# Start frontend
npm run dev
```

**Verify frontend:**
- Dashboard: http://localhost:3001
- Should redirect to http://localhost:3001/login

### 3. Create a Test Tenant

```bash
# Connect to PostgreSQL
psql -U postgres -d agent_saas

# Create a tenant
INSERT INTO tenants (name, project_slug) 
VALUES ('Test Company', 'test-company') 
RETURNING id;

# Copy the returned UUID - you'll need it for login
```

### 4. Test the Full Flow

1. **Open Frontend**: http://localhost:3001/login

2. **Request Magic Link**:
   - Platform: WhatsApp
   - Platform User ID: +1234567890
   - Tenant ID: [paste UUID from step 3]
   - Click "Generate Magic Link"

3. **Login**:
   - Click "Login Now" button
   - Should redirect to dashboard

4. **Test Site Data**:
   - Add key: `site_title`
   - Add value: `My Awesome Website`
   - Click "Update Data"
   - Should see notification and updated data

5. **Check Audit Logs**:
   - Click "Audit Logs" tab
   - Should see your update action

## Environment Configuration

### Backend (.env)

```env
# Server
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/agent_saas?schema=public

# Secrets (generate with: openssl rand -base64 32)
JWT_SECRET=your-jwt-secret
COOKIE_SECRET=your-cookie-secret

# CORS - IMPORTANT: Include frontend URL
CORS_ORIGINS=http://localhost:3000,http://localhost:3001

# Optional: WhatsApp/Telegram credentials
WHATSAPP_WEBHOOK_SECRET=your-secret
TELEGRAM_BOT_TOKEN=your-token
```

### Frontend (admin/.env.local)

```env
# API URL (backend)
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Common Issues & Solutions

### Issue: "Failed to connect to API"

**Solution:**
1. Verify backend is running: `curl http://localhost:3000/api/health`
2. Check CORS configuration in backend `.env`
3. Ensure `NEXT_PUBLIC_API_URL` is correct in frontend `.env.local`

### Issue: "401 Unauthorized"

**Solution:**
1. Clear browser cookies
2. Login again to get a fresh session
3. Verify tenant exists in database
4. Check that platform user ID is correct

### Issue: "Cannot read properties of undefined"

**Solution:**
1. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
2. Clear browser cache
3. Restart frontend dev server

### Issue: "CORS error"

**Solution:**
1. Add frontend URL to `CORS_ORIGINS` in backend `.env`:
   ```
   CORS_ORIGINS=http://localhost:3001
   ```
2. Restart backend server
3. Clear browser cache

### Issue: "Module not found"

**Solution:**
```bash
# Backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd admin
rm -rf node_modules package-lock.json
npm install
```

## Production Deployment

### Backend

```bash
# Build
npm run build

# Set production environment
export NODE_ENV=production
export PORT=3000
export DATABASE_URL=your-production-db-url
export CORS_ORIGINS=https://admin.yourdomain.com

# Run
npm start
```

### Frontend

```bash
cd admin

# Build
npm run build

# Run
npm start
```

Or deploy to Vercel:

```bash
cd admin
vercel deploy
```

**Environment variables for Vercel:**
- `NEXT_PUBLIC_API_URL`: https://api.yourdomain.com

## Development Workflow

### Making Changes

**Backend changes:**
1. Edit files in `src/`
2. Server auto-reloads (tsx watch)
3. Test with Swagger UI: http://localhost:3000/api/docs

**Frontend changes:**
1. Edit files in `admin/app/` or `admin/lib/`
2. Next.js auto-reloads
3. Test in browser: http://localhost:3001

### Adding New API Endpoints

1. **Backend** (`src/routes/`):
   ```typescript
   router.post('/new-endpoint', async (req, res) => {
     // Implementation
   });
   ```

2. **Swagger Documentation** (add JSDoc):
   ```typescript
   /**
    * @swagger
    * /api/agent/new-endpoint:
    *   post:
    *     summary: Description
    *     ...
    */
   ```

3. **Frontend API Client** (`admin/lib/api.ts`):
   ```typescript
   async newEndpoint(data: any): Promise<any> {
     return this.request('/api/agent/new-endpoint', {
       method: 'POST',
       body: JSON.stringify(data),
     });
   }
   ```

4. **Use in Component**:
   ```typescript
   const response = await api.newEndpoint({ ... });
   ```

## Debugging

### Backend Logs

```bash
# Backend terminal shows:
✓ Environment configuration validated
✓ Database connected
📚 Documentation: http://localhost:3000/api/docs
GET /api/health
POST /api/auth/request-link
```

### Frontend Console

Open browser DevTools (F12) → Console tab:
- API request logs
- Error messages
- State changes

### Network Tab

Open browser DevTools → Network tab:
- See all API requests
- Check status codes
- View request/response bodies
- Verify cookies are sent

## Testing

### Backend API Tests

```bash
# Use Swagger UI
open http://localhost:3000/api/docs

# Or use curl
curl http://localhost:3000/api/health

# Or use the provided examples
# See: api-examples.http
```

### Frontend Manual Tests

1. **Authentication Flow**
   - [ ] Can request magic link
   - [ ] Magic link displays in dev mode
   - [ ] Can verify token
   - [ ] Redirects to dashboard
   - [ ] Session persists on refresh

2. **Site Data Management**
   - [ ] Can add new key-value pairs
   - [ ] Can update existing values
   - [ ] Can merge objects
   - [ ] Can delete keys
   - [ ] Changes reflect immediately

3. **Audit Logs**
   - [ ] Logs display correctly
   - [ ] Timestamps are accurate
   - [ ] Payloads are viewable
   - [ ] Logs update on refresh

## Port Configuration

Default ports:
- Backend: `3000`
- Frontend: `3001`

To change:

**Backend** (`.env`):
```env
PORT=4000
```

**Frontend** (`admin/package.json`):
```json
{
  "scripts": {
    "dev": "next dev -p 4001"
  }
}
```

**Update CORS** (backend `.env`):
```env
CORS_ORIGINS=http://localhost:4001
```

**Update API URL** (frontend `.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## Performance Tips

### Backend
- Enable connection pooling (already configured)
- Use RLS for security (already enabled)
- Add database indexes as needed

### Frontend
- Next.js optimizes automatically
- Images are lazy-loaded
- Code splitting is automatic
- Use React DevTools to profile

## Security Checklist

- [ ] CORS origins configured correctly
- [ ] JWT secrets are strong and unique
- [ ] Cookie secrets are strong and unique
- [ ] HTTPS enabled in production
- [ ] Secure cookies enabled in production
- [ ] Rate limiting configured
- [ ] Input validation on both sides
- [ ] XSS protection (Helmet headers)
- [ ] CSRF protection (SameSite cookies)

## Monitoring

### Health Checks

**Backend:**
```bash
curl http://localhost:3000/api/health
```

**Frontend:**
```bash
curl http://localhost:3001
```

### Logs

**Backend:**
- Console output in terminal
- Audit logs in database

**Frontend:**
- Browser console (F12)
- Next.js build logs

## Need Help?

1. **API Documentation**: http://localhost:3000/api/docs
2. **Main README**: [../README.md](../README.md)
3. **Frontend README**: [admin/README.md](admin/README.md)
4. **Security Guide**: [SECURITY.md](SECURITY.md)

---

**Quick Commands Reference:**

```bash
# Start backend
npm run dev

# Start frontend (separate terminal)
cd admin && npm run dev

# Create tenant
psql -U postgres -d agent_saas -c "INSERT INTO tenants (name, project_slug) VALUES ('Test', 'test') RETURNING id;"

# Check backend health
curl http://localhost:3000/api/health

# View Swagger docs
open http://localhost:3000/api/docs

# Open frontend
open http://localhost:3001
```
