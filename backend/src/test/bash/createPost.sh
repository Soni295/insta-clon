#!/bin/bash
curl -X POST \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlciI6ImFydHVybyIsImlhdCI6MTYzNDI2MTAxMn0._oLgA2_4h83BnnIIWVttqRPzRuaFSQGTnS7-C9T2xl4" \
    -d 'user=arturo' \
    http://localhost:3001/Post

echo '\n'
echo '\n'
echo '\n'


curl -X POST \
    -d 'user=arturo' \
    http://localhost:3001/Post


echo '\n'
echo '\n'
echo '\n'


curl -X POST \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyxiZCI6MSwidXNlciI6ImFydHVybyIsImlhdCI6MTYzNDI2MTAxMn0._oLgA2_4h83BnnIIWVttqRPzRuaFSQGTnS7-C9T2xl4" \
    -d 'user=arturo' \
    http://localhost:3001/Post
