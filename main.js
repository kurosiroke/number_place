import { View } from './js/view.js'
import { Input } from './js/input.js'

export const Main = {
  stage_id : 'NumberPlace',
}

function init(){
  Main.view = new View()
  Main.input = new Input()
}

switch (document.readyState) {
  case 'complete':
  case 'interactive':
    init()
    break
  default:
    window.addEventListener('DOMContetLoaded' , init)
    break
}