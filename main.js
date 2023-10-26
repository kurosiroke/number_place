import { View } from './js/view.js'

export const Main = {
  stage_id : 'NumberPlace',
}

function init(){
  Main.view = new View()
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