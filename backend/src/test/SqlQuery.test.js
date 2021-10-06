import { SqlQuery } from '../database/SqlQuery'
import { USERS } from '../database/tables'

let query1, query2, query3, query4

// SELECT 1--------------------------------------------------------------------

const test1 = new SqlQuery(USERS)
  .select(USERS.userName, USERS.password)
  .where()
  .isEqual(USERS.userName, 'juan')

query1 =  `SELECT ${USERS.userName}, ${USERS.password}`
query1 += ` FROM ${USERS.name}`
query1 += ` WHERE ${USERS.userName} = 'juan'`

test('Select query Check nº1', () => {
  expect(query1).toBe(test1.msg)
})

// SELECT 2--------------------------------------------------------------------

const test2 = new SqlQuery(USERS)
  .select()

query2 = `SELECT * FROM ${USERS.name}`

test('Select query Check nº2', () => {
  expect(query2).toBe(test2.msg)
})

// INSERT 1--------------------------------------------------------------------

const test3 = new SqlQuery(USERS)
  .insert()
  .values('alejandro', 123456)

query3 = `INSERT INTO users\nVALUES(alejandro, 123456)`

test('Insert query Check nº1', () => {
  expect(query3).toBe(test3.msg)
})

// INSERT 2--------------------------------------------------------------------

const test4 = new SqlQuery(USERS)
  .insert(USERS.userName, USERS.password)
  .values('alejandro', 123456)

query4 = `INSERT INTO users(${USERS.userName}, ${USERS.password})`
query4 += `\nVALUES(alejandro, 123456)`

test('Insert query Check nº2', () => {
  expect(query4).toBe(test4.msg)
})
