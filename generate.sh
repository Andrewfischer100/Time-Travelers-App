#!/bin/bash

export PATH=$PATH:/home/weboffice/.nvm/versions/node/v10.15.1/bin

. ~/.nvm/nvm.sh
nvm use default

cd /var/www/vhosts/timetravelers.mohistory.org/timetravelersapp

/home/weboffice/.nvm/versions/node/v10.15.1/bin/npm run generate


