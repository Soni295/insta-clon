# Instaclon

Clone the repositore
```bash
$ git clone https://github.com/Soni295/insta-clon.git
$ cd insta-clon
```

Then mount containers
```bash
$ docker-compose build
$ docker-compose up -d
```

update backup(in quarter console)
```bash
$ docker ps
$ ./database/restore.sh <CONTAINER ID mariadb>
```

now go to the browser and connect with
```bash
http://localhost:3000/
```

# user
```js
{
  user: "arturo",
  password: "123456"
}
```