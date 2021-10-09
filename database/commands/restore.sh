#!/bin/bash
# $1 = container ID
cat ../backup.sql | docker exec -i $1 /usr/bin/mysql -u root --password=123456 instaClonDB
