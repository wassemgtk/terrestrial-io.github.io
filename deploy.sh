jekyll build
git branch -D master
git push origin :master
git checkout -b master
#sed -i "/\b\(_site\)\b/d" 
cd _site/
echo 'docs.terrestrial.io' > CNAME
cd ..
git filter-branch --subdirectory-filter _site/ -f
git checkout source
git push --all origin