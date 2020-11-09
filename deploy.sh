#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs

# if you are deploying to a custom domain
#echo 'www.cityu-dsc.com' > CNAME

git init
git add -A
git commit -m 'deploy 1.1'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:cityu-dsc/cityu-dsc.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:cityu-dsc/dsc-web.git master:gh-pages

cd -