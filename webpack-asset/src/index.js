import _ from 'lodash';
import './style.less';
import Logo from './logo.png';
function component(){
  var element = document.createElement('div');
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // 添加图片
  var myLogo = new Image();
  myLogo.src = Logo;
  element.appendChild(myLogo)
  return element;
}
const a = 11;
console.log('a:', a)
document.body.appendChild(component());