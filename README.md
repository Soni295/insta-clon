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
$ cd database/commands
$ docker ps
$ ./restore.sh <CONTAINER ID mariadb>
```

install frontend dependecies and start(in second console)
```bash
$ cd ../frontend
$ npm i
$ npm start
```



# user
```js
{
  user: "arturo",
  password: "123456"
}
```

