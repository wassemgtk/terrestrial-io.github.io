jekyll build
git branch -D master
git push origin :master
git checkout -b master
sed -i "/\b\(_site\)\b/d" filename
git filter-branch --subdirectory-filter _site/ -f
echo 'docs.terrestrial.io' > CNAME
git add -A
git commit -m "Added CNAME"
git checkout source
git push --all origin