#!/bin/bash
curl -X POST \
    -d 'user=arturo' \
    -d 'password=123456'\
    http://localhost:3001/LogIn

echo '\n'

curl -X POST \
    -d 'user=arturo' \
    -d 'password=12356'\
    http://localhost:3001/LogIn
