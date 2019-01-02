#!usr/bin/bash

cd /workspace/gatsby-blog

git pull origin master

pm2 restart blog --update-env

exit 0