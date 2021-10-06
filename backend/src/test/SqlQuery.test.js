import { SqlQuery } from '../database/SqlQuery'
import { USERS } from '../database/tables'

let query1, query2, query3, query4, query5

// SELECT 1--------------------------------------------------------------------

const select1 = new SqlQuery(USERS)
  .select(USERS.userName, USERS.password)
  .where()
  .isEqual(USERS.userName, 'juan')

query1 =  `SELECT ${USERS.userName}, ${USERS.password}`
query1 += ` FROM ${USERS.name}`
query1 += ` WHERE ${USERS.userName} = 'juan'`

test('Select query Check nº1', () => {
  expect(query1).toBe(select1.msg)
})

// SELECT 2--------------------------------------------------------------------

const select2 = new SqlQuery(USERS)
  .select()

query2 = `SELECT * FROM ${USERS.name}`

test('Select query Check nº2', () => {
  expect(query2).toBe(select2.msg)
})


// SELECT 3--------------------------------------------------------------------

const select3 = new SqlQuery(USERS)
  .select()
  .where()
  .isEqual(USERS.userName, 'Juan')
  .or()
  .isEqual(USERS.email, 'Juan')

query3 =`SELECT * FROM ${USERS.name} `
query3 +=`WHERE ${USERS.userName} = 'Juan' `
query3 +=`OR ${USERS.email} = 'Juan'`

test('Select query Check nº3', () => {
  expect(query3).toBe(select3.msg)
})

// INSERT 1--------------------------------------------------------------------

const test4 = new SqlQuery(USERS)
  .insert()
  .values('alejandro', 123456)

query4 = `INSERT INTO users\nVALUES(alejandro, 123456)`

test('Insert query Check nº1', () => {
  expect(query4).toBe(test4.msg)
})

// INSERT 2--------------------------------------------------------------------

const test5 = new SqlQuery(USERS)
  .insert(USERS.userName, USERS.password)
  .values('alejandro', 123456)

query5 = `INSERT INTO users(${USERS.userName}, ${USERS.password})`
query5 += `\nVALUES(alejandro, 123456)`

test('Insert query Check nº2', () => {
  expect(query5).toBe(test5.msg)
})
