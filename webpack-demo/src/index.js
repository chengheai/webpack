import { cube } from './math.js'
import printMe from './print.js';
import './style.css';
import Icon from './test.png';
import Data from './data.xml';
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
 }
function component() {
  var element = document.createElement('pre');
  var btn = document.createElement('button');


  //  Lodash, now imported by this script
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  element.classList.add('hello');
   // 将图像添加到我们现有的 div。
   var myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);

  console.log(Data);

  return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}
