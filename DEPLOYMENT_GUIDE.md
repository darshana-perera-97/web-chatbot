# Chatbot Deployment Guide for cPanel

## Issues Fixed

The chatbot wasn't loading on cPanel due to:
1. **CORS Issues**: Backend wasn't configured to allow requests from your cPanel domain
2. **Mixed Content**: cPanel serves HTTPS but your URLs were HTTP
3. **Domain Configuration**: URLs needed to be updated for cPanel hosting

## Steps to Deploy

### 1. Update Domain Configuration

Replace `yourdomain.com` in the following files with your actual cPanel domain:

**Files to update:**
- `chatbot-backend/server.js` (line 12-13)
- `chatbot-frontend/public/embed.js` (line 3)
- `chatbot-frontend/src/App.js` (line 11)
- `landing/index.html` (line 44)
- `landing/i2.html` (line 14)

### 2. Deploy Backend

1. Upload the `chatbot-backend` folder to your cPanel
2. Make sure Node.js is enabled in cPanel
3. Install dependencies: `npm install`
4. Start the server: `node server.js`
5. The backend will run on port 8080

### 3. Deploy Frontend

1. Build the React app: `npm run build`
2. Upload the `build` folder contents to your cPanel public_html directory
3. Make sure `embed.js` is accessible at `https://yourdomain.com/embed.js`

### 4. Deploy Landing Pages

1. Upload `landing/index.html` and `landing/i2.html` to your cPanel
2. Update the domain URLs in these files to match your cPanel domain

### 5. SSL Certificate

Make sure your cPanel hosting has SSL enabled. Most cPanel hosts provide free SSL certificates.

## Testing

1. Visit your landing page: `https://yourdomain.com/index.html`
2. The chatbot should appear as a floating widget
3. Test sending a message to verify backend connectivity

## Troubleshooting

### If chatbot still doesn't load:

1. **Check browser console** for CORS errors
2. **Verify SSL certificate** is working
3. **Check backend logs** for CORS blocked origins
4. **Ensure all URLs use HTTPS**

### Common Issues:

- **Mixed Content Error**: Make sure all URLs use HTTPS
- **CORS Error**: Add your domain to allowedOrigins in server.js
- **404 Error**: Verify file paths are correct in cPanel

## Development vs Production

For development, you can temporarily change URLs back to:
- Frontend: `http://69.197.187.24:3003`
- Backend: `http://69.197.187.24:8080`

For production on cPanel, use HTTPS URLs with your domain.
