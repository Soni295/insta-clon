#!/bin/bash
# $1 = container ID

#cat ./backup.sql | docker exec -i $1 /usr/bin/mysql -u root --password=123456 instaClonDB


docker exec -i $1 sh -c 'exec mysql -uroot -p"123456" instaClonDB' < ./backup.sql
