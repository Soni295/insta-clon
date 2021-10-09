# Instaclon




```sh
  +--insta-clon
    +--backend
    +--frontend
    +--database
```
---

Clone the repositore
```bash
$ git clone https://github.com/Soni295/insta-clon.git
$ cd insta-clon
```

install backend dependecies and start(in one console)
```bash
$ cd backend
$ npm i
$ npm run start
```


install frontend dependecies and start(in second console)
```bash
$ cd ../frontend
$ npm i
$ npm start
```

install database and start(in third console)
```bash
$ cd database
$ docker-compose -f docker.yml up
```

update backup(in quarter console)
```bash
$ cd database/commands
$ docker ps
  CONTAINER ID   IMAGE              COMMAND                  CREATED      STATUS          PORTS                                       NAMES
  0dc561f03fe5   database_mariadb   "docker-entrypoint.s…"   5 days ago   Up 10 seconds   0.0.0.0:3307->3306/tcp, :::3307->3306/tcp   instaClondb
$ ./restore.sh <CONTAINER ID>
$ ./restore.sh 0dc561f03fe5
```


# example
```js
{
    user: "arturo",
    password: "123456"
}
```

