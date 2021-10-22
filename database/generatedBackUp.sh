#!/bin/bash
# $1 = container ID

docker exec $1 sh -c 'exec mysqldump instaClonDB -uroot -p"$DB_PASSWORD"' > ./backup.sql

#docker exec -i $1 mysqldump -u root --password=123456 instaClonDB > ../backup.sql
