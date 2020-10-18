import './app1.scss'
import $ from 'jquery'

const model = {
  data: {
    number: parseInt(localStorage.getItem('mvc.computedReault') || 0)
  }
}

const view = {
  element: null,
  html: `
  <div>
    <div id="number" class="number">{{number}}</div>
    <div class="operating">
      <button id="add">+2</button>
      <button id="minus">-2</button>
      <button id="mcl">×2</button>
      <button id="divide">÷2</button>
      <button id="clear">清空</button>
    </div>
  </div>
  `,
  init(container) {
    /* container：指定渲染的容器 */
    view.element = $(container)
    view.render()
  },
  render() {
    /* 判断 element 内是否存在元素，存在则清空 */
    if (view.element.children.length !== 0) { view.element.empty() }
    $(view.html.replace('{{number}}', model.data.number))
      .appendTo(view.element)
  }
} 

const controller = {
  init(container) {
    view.init(container)
    controller.bindEvents()
  },
  /* 绑定事件 */
  bindEvents() {
    view.element.on('click', '#add', () => {
      model.data.number += 2
      view.render()
    })
    view.element.on('click', '#minus', () => {
      model.data.number -= 2
      view.render()
    })
    view.element.on('click', '#mcl', () => {
      model.data.number *= 2
      view.render()
    })
    view.element.on('click', '#divide', () => {
      model.data.number /= 2
      view.render()
    })
    view.element.on('click', '#clear', () => {
      model.data.number = 0
      view.render()
    })
  }
}

export default controller

/* const html = `
<section id="app1" class="block">
  <div class="number">0</div>
  <div class="operating">
    <button id="add">+2</button>
    <button id="minus">-2</button>
    <button id="mcl">×2</button>
    <button id="divide">÷2</button>
    <button id="clear">清空</button>
  </div>
</section>
`
$(html).appendTo($('body > .content'))

const $number = $('#app1 .number')

const $add = $('#app1 #add')
const $minus = $('#app1 #minus')
const $mcl = $('#app1 #mcl')
const $divide = $('#app1 #divide')
const $clear = $('#app1 #clear')
const value = localStorage.getItem('MVCResult')

$number.text(value || 0)

$add.on('click', () => {
  let result = Number($number.text())
  result += 2
  localStorage.setItem('MVCResult', result)
  $number.text(result)
})
$minus.on('click', () => {
  let result = Number($number.text())
  result -= 2
  localStorage.setItem('MVCResult', result)
  $number.text(result)
})
$mcl.on('click', () => {
  let result = Number($number.text())
  result *= 2
  localStorage.setItem('MVCResult', result)
  $number.text(result)
})
$divide.on('click', () => {
  let result = Number($number.text())
  result /= 2
  localStorage.setItem('MVCResult', result)
  $number.text(result)
})
$clear.on('click', () => {
  localStorage.setItem('MVCResult', 0)
  $number.text(0)
}) */