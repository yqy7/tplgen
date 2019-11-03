#!/bin/bash

cd "$(dirname "$0")"

rm -rf ./out
node ../bin/tplgen.js -t template -o out -c a.json