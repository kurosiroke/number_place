import { Main } from '../main.js'
import { Element } from './element.js'
import { Commn } from './common.js'

export class Input{
  constructor(){
    this.set_event()
  }

  get next_num(){
    if(!this.data){return null}
    const next_num = this.data.num + 1
    return next_num > 9 ? 0 : next_num
  }

  set_event(){
    const btn = Element.elm_button
    if(btn){
      btn.addEventListener('click' , this.click_btn.bind(this))
    }
    
    if(typeof window.ontouchstart !== 'undefined'){
      Element.table.addEventListener('touchstart' , this.touchstart.bind(this))
      Element.table.addEventListener('touchmove'  , this.touchmove.bind(this))
      Element.table.addEventListener('touchend'   , this.mouseup.bind(this))
    }
    else{
      Element.table.addEventListener('mousedown'  , this.mousedown.bind(this))
      Element.table.addEventListener('mousemove'  , this.mousemove.bind(this))
      Element.table.addEventListener('mouseup'    , this.mouseup.bind(this))
    }
  }

  touchstart(e){
    this.mousedown(e.touches[0])
  }
  touchmove(e){
    e.preventDefault()
    this.mousemove(e.touches[0])
  }

  mousedown(e){
    const cell = e.target.closest('td')
    if(!cell){return}
    this.data = {
      cell : cell,
      num  : Number(cell.textContent || 0),
      pos  : {
        x : e.pageX,
        y : e.pageY,
      },
    }
  }
  mousemove(e){
    if(!this.data){return}
    const size = Math.abs(e.pageX - this.data.pos.x)
    if(size < this.interval){return}
    const num  = this.pos2num(size)
    this.data.cell.textContent = num || ''
    this.data.num = num
    this.data.move_flg = true
  }

  mouseup(e){
    if(!this.data){return}
    if(!this.data.move_flg){
      this.data.num = this.next_num
    }
    this.data.cell.textContent = this.data.num || ''
    delete this.data
    Main.data.save()
  }

  // 移動距離を0~9の数値に変換する
  pos2num(pos){
    const num      = ~~(pos / this.interval)
    return num > 9 ? num % 10 : num
  }
  
  click_btn(){
    const status = Element.elm_button.getAttribute('data-status')
    switch(status){
      case 'check':
        break
        
      case 'start':
      default:
        Common.start()
        Main.data.save()
        break
    }
  }
}