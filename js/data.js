import { Main } from '../main.js'
import { Common } from './common.js'

export class Data{
  save(){
    if(!Common.is_started){return}
    const data ={
      quewtion_num : Main.question_num,
      input : Common.get_matrix_numbers(''),
      question : Common.get_matrix_numbers('lock'),
    }
    const json =JSON.stringify(data)
    window.localStorage.setItem(Main.save_name , json)
  }
  
  load(){
    const json = window.localStorage.getItem(Main.save_name)
    if(!json){return null}
    return JSON.parse(json)
  }
}