jekyll build
cd _site/
echo 'docs.terrestrial.io' > CNAME
cd ..
git branch -D master
git push origin :master
git checkout -b master
git filter-branch --subdirectory-filter _site/ -f
git checkout source
git push --all origin