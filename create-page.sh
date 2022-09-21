#!/bin/bash

OUTPUT_DIR=./output
BASE_DIR=./base-website/*

echo Starting website maker...
echo Enter the company name:

read COMPANY_NAME

mkdir ./output/$COMPANY_NAME

for i in $BASE_DIR
do
echo copying $i ....
cp -r $BASE_DIR/ $OUTPUT_DIR/$COMPANY_NAME/
done
