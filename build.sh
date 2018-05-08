#!/bin/bash
PATH=$PATH:$(npm bin)
set -x

BUILDFOLDER=www/

# remove unused css
purifycss $BUILDFOLDER"build/main.css" \
          $BUILDFOLDER"build/*.js" \
          --info \
          --min \
          --out $BUILDFOLDER"build/main.css" \
          --whitelist ion-backdrop .bar-button-default ion-icon
