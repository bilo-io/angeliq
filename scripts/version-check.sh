#!/usr/bin/env bash
echo "=============================================="
echo "VERSION CHECK"
echo "=============================================="
echo "git:"
echo "----"
git --version
echo "=============================================="
echo "node:"
echo "-----"
node -v
brew list node
echo "=============================================="
echo "npm:"
echo "----"
npm -v
echo "=============================================="
echo "yarn:"
echo "-----"
yarn -v
echo "=============================================="
echo "react-native-cli
(npx => latest)
"
echo "----------------"
npx react-native --version
echo "=============================================="
echo "ruby:"
echo "-----"
ruby -v
echo "=============================================="
echo "cocoapods:"
echo "-----------"
brew list cocoapods
echo "=============================================="
