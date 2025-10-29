#!/bin/bash

# Firebase deployment script for EVD Transport App

echo "🚀 Starting Firebase deployment for EVD Transport App"

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "⚠️  Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

# Build the Next.js app for static export
echo "📦 Building Next.js app..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

# Deploy to Firebase (target: evd-webapp)
echo "🔥 Deploying to Firebase..."
firebase deploy --only hosting:evd-webapp

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your app is live at: https://evd-webapp--evd-app-d9406.web.app"
    echo "🔗 Check Firebase Console: https://console.firebase.google.com/project/evd-app-d9406/hosting"
else
    echo "❌ Deployment failed! Please check the errors above."
    echo "💡 Try: firebase login"
    exit 1
fi
