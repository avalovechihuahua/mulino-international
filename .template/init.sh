#!/bin/bash

# 刪除沒有被tracked的檔案和資料夾
git clean -df

# 刪除 dist, node_modules
if [ -d "dist" ]
then
  echo "Removing existing dist folder..."
  rm -rf dist
fi

if [ -d "node_modules" ]
then
  echo "Removing existing node_modules..."
  rm -rf node_modules
fi

# 執行vue cli preset
vue create -p .template . -m npm