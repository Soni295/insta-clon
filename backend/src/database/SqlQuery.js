import { getConnection } from './database.js'

const setColumns = (arr, defaultValue='') => (
  arr.length === 0
    ? defaultValue
    :  arr.join(', ')
)




class Sql {
  constructor(table){
    this.msg = ''
    this.table = table
  }
}




class Create extends Sql {
  constructor(table){
    super(table)
  }
  insert( ...columns){
    this.msg = `INSERT INTO ${this.table.name}`
    const strColumns = setColumns(columns)

    this.msg += strColumns === ''
      ? ''
      : `(${strColumns})`

    return this
  }
  values(...arg){
    const strValues = arg.join(', ')
    this.msg += `\nVALUES(${strValues})`
    return this
  }
}






class CRead extends Create{
  constructor(table){
    super(table)
  }
  select(...columns){
    this.msg = 'SELECT '
    this.msg += setColumns(columns, '*')
    this.msg += ` FROM ${this.table.name}`
    return this
  }
  where(){
    this.msg += ' WHERE'
    return this
  }
  or(){
    this.msg += ' OR'
    return this
  }
  and(){
    this.msg += ' AND'
    return this
  }

  isEqual(table, data){
    this.msg += ` ${table} = '${data}'`
    return this
  }
}







class CRUpdate extends CRead {
  constructor(table){
    super(table)
  }
}







class CRUD extends CRUpdate {
  constructor(table){
    super(table)
  }
}







export class SqlQuery extends CRUD {
  constructor(table){
    super(table)
  }
  select(...columns){
    this.msg = 'SELECT '
    this.msg += setColumns(columns, '*')
    this.msg += ` FROM ${this.table.name}`
    return this
  }
  where(){
    this.msg += ' WHERE'
    return this
  }
  or(){
    this.msg += ' OR'
    return this
  }
  and(){
    this.msg += ' AND'
    return this
  }

  isEqual(table, data){
    this.msg += ` ${table} = '${data}'`
    return this
  }
  insert( ...columns){
    this.msg = `INSERT INTO ${this.table.name}`
    const strColumns = setColumns(columns)

    this.msg += strColumns === ''
      ? ''
      : `(${strColumns})`

    return this
  }
  values(...arg){
    const strValues = arg.join(', ')
    this.msg += `\nVALUES(${strValues})`
    return this
  }
  async connection(){
    return await getConnection(this.msg)
  }
}
