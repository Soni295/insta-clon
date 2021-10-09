#!/bin/bash
# $1 = container ID
docker exec $1 /usr/bin/mysqldump -u root --password=123456 instaClonDB > ../backup.sql
