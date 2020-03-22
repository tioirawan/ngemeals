#!/usr/bin/env sh

# abort on error
set -e

# build
npm run build


cd dist

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:indmind/ngemeals.git master:gh-pages

cd -
