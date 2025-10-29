#!/bin/bash

# Firebase deployment script for EVD Transport App

echo "🚀 Starting Firebase deployment for EVD Transport App"

# Build the Next.js app for static export
echo "📦 Building Next.js app..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

# Deploy to Firebase
echo "🔥 Deploying to Firebase..."
npx firebase-tools deploy --only hosting

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your app is live at: https://evd-app-d9406.web.app"
    echo "🔗 Alternative URL: https://evd-app-d9406.firebaseapp.com"
else
    echo "❌ Deployment failed! Please check the errors above."
    exit 1
fi
