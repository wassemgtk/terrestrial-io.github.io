jekyll build
git branch -D master
git checkout -b master
sed -i "/\b\(_site\|rat\)\b/d" filename
git filter-branch --subdirectory-filter _site/ -f
git checkout source
git push --all origin