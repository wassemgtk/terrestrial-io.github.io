jekyll build
git branch -D master
git checkout -b master
sed -i "/\b\(_site\)\b/d" filename
git filter-branch --subdirectory-filter _site/ -f
echo 'docs.terrestrial.io' > CNAME
git checkout source
git push --all origin