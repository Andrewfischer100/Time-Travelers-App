#!/bin/bash


cd /var/www/vhosts/timetravelers.mohistory.org/timetravelersapp

/usr/bin/npm run generate
rm -rf dist2
cp -r dist dist2


