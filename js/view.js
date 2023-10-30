import { Main }    from '../main.js'
import { Element } from './element.js'

export class View{
  constructor(){
    if(!Element.table){return}
    this.set_stage()
  }

  set_stage(){
    const table = document.createElement('table')
    Element.table.appendChild(table)
    this.set_row(table)
  }
  set_row(parent){
    for(let i=0; i<9; i++){
      const row = document.createElement('tr')
      parent.appendChild(row)
      this.set_cell(row)
    }
  }
  set_cell(parent){
    for(let i=0; i<9; i++){
      const cell = document.createElement('td')
      parent.appendChild(cell)
    }
  }
}