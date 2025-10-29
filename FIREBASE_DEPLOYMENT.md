# 🚀 Firebase Deployment Guide for EVD Transport App

## 📋 Prerequisites

1. **Firebase CLI Installed**
   ```bash
   npm install -g firebase-tools
   ```

2. **Firebase Project Created**
   - Project ID: `evd-app-d9406`
   - Project Number: `150518486003`
   - Web App: `evd-webapp`

## 🔧 Configuration Files Created

The following files have been configured for Firebase deployment:

- `firebase.json` - Firebase hosting configuration
- `.firebaserc` - Project configuration
- `next.config.js` - Next.js static export configuration
- `deploy.sh` - Automated deployment script

## 📝 Deployment Steps

### Step 1: Authenticate with Firebase
```bash
firebase login
```
Or for CI/CD:
```bash
firebase login:ci
```

### Step 2: Build the Application
```bash
npm run build
```

### Step 3: Deploy to Firebase
```bash
firebase deploy --only hosting:evd-webapp
```

### Alternative: Use the Deploy Script
```bash
chmod +x deploy.sh
./deploy.sh
```

### Alternative: Use npm Script
```bash
npm run deploy
```

## 🌐 Live URLs

After successful deployment, your app will be available at:

- **Primary URL:** `https://evd-webapp--evd-app-d9406.web.app`
- **Firebase Console:** `https://console.firebase.google.com/project/evd-app-d9406/hosting`

## 🔍 Verify Deployment

1. **Check Firebase Console**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select project `evd-app-d9406`
   - Navigate to Hosting section
   - Verify deployment status

2. **Test the Live App**
   - Visit the URLs above
   - Test all features:
     - Theme toggle (top-right corner)
     - ICP Risk Calculator
     - EVD Management Checklist
     - Education tab

## 🐛 Troubleshooting

### Build Issues
If you encounter build errors:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Permission Issues
```bash
# Fix npm cache permissions
sudo chown -R $(whoami) ~/.npm
```

### Firebase Authentication
```bash
# Re-authenticate
firebase logout
firebase login
```

### Deployment Issues
```bash
# Check project configuration
firebase projects:list
firebase use evd-app-d9406
```

## 📊 Firebase Configuration Details

### `firebase.json`
```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### `next.config.js`
```javascript
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
```

## 🎯 Features to Test After Deployment

- [ ] **Theme Toggle**: Sun/moon button in top-right
- [ ] **ICP Calculator**: Risk calculation functionality
- [ ] **EVD Checklist**: All checklist items work
- [ ] **Education Tab**: All 3 subsections load properly
- [ ] **Responsive Design**: Works on mobile devices
- [ ] **Dark Mode**: Persistent theme switching

## 🔄 Redeployment

To redeploy after making changes:

```bash
# Make your changes
git add .
git commit -m "Your changes"

# Deploy
npm run deploy
```

## 📞 Support

If you encounter issues:
1. Check Firebase Hosting logs in the console
2. Verify build completes successfully locally
3. Ensure all dependencies are installed
4. Check network connectivity for Firebase deployment

---

**Happy deploying! 🎉**
