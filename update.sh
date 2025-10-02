#!/bin/bash
# PhantomFox Updater Script
# License: GPL-3.0
# Updates only user.js from GitHub repo

set -e

REPO_URL="https://raw.githubusercontent.com/MKDPrime/PhantomFox/main/user.js"

echo "🔄 Updating PhantomFox user.js ..."

PROFILE_DIR=$(find "$HOME/.mozilla/firefox" -maxdepth 1 -type d -name "*.default-release" | head -n 1)

if [ -z "$PROFILE_DIR" ]; then
    echo "❌ Firefox profile not found!"
    exit 1
fi

curl -fsSL "$REPO_URL" -o "$PROFILE_DIR/user.js"

echo "✅ PhantomFox user.js updated successfully!"