import { getConnection } from './database.js'

const setColumns = (arr, defaultValue='') => (
  arr.length === 0
    ? defaultValue
    :  arr.join(', ')
)

export class SqlQuery {
  constructor(table){
    this.msg = ''
    this.table = table
  }
  select(...columns){
    this.msg = 'SELECT '
    this.msg += setColumns(columns, '*')
    this.msg += `FROM ${this.table.name}`
    return this
  }
  where(){
    this.msg += '\nWHERE'
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
