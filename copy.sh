#!/bin/bash

# Copy the boilerplate to the target
cp -rf templates/fragment src/$1
echo "$FUN_FRAGMENT_NAME $FUN_PORT" >> registry
# cp -rf templates/boilerplate src/$1
cd src/$1
mv components/component.js components/$FUN_FRAGMENT_NAME.js
# Author of script: https://github.com/cagataycali
# Original source: https://gist.github.com/cagataycali/917a90113aa7ac4819114fd45d9e0d2c
prefix="FUN_"
# Usage: FUN_PROVIDER='test' FUN_CAGATAY='CALI' ./replace.sh
# echo $FUN_DIRNAME
# The for loop below is taken from here:
# https://stackoverflow.com/questions/39529648/how-to-iterate-through-all-the-env-variables-printing-key-and-value
unset IFS
for var in "${!FUN_@}"; do
    glob="s|#$var|${!var}|g"
    # Debug with uncomment below echo.
    echo $glob # Will replace if the FUN_PROVIDER='TEST'
    # The find code is taken from: https://superuser.com/a/537037
    find . -type f -name "*" -not -path '*/\.git/*' -not -path '*/\node_modules/*' -exec sed -i'' -e $glob {} + 2> /dev/null
done

rm **/*-e 2> /dev/null
rm *-e 2> /dev/null
rm **/.*-e 2> /dev/null
rm .*-e 2> /dev/null
echo 'Cleanup success'

yarn