#!/bin/bash

FUN_FRAGMENT_NAME=Header FUN_PORT=3000 ./copy.sh header
FUN_FRAGMENT_NAME=Footer FUN_PORT=3001 ./copy.sh footer
FUN_FRAGMENT_NAME=Avatar FUN_PORT=3002 ./copy.sh avatar

./install.sh header
./install.sh footer
./install.sh avatar