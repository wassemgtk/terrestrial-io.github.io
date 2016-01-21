jekyll build
git branch -D master
git push origin :master
git checkout -b master
echo 'docs.terrestrial.io' > _site/CNAME
sed -i "/\b\(_site\)\b/d" filename
git filter-branch --subdirectory-filter _site/ -f
git checkout source
git push --all origin