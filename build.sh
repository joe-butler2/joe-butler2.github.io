#!/bin/bash
bundle exec jekyll build --incremental -d ../joe-butler2.github.io
git add .
read -p "Enter websiteFiles commit message: " message
git commit -m "$message"
git push origin master
(cd ../joe-butler2.github.io ; git add . && read -p "Enter joe-butler2.github.io commit message: " message2 ; git commit -m "$message2" && git push origin master)