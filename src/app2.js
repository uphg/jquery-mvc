import './app2.scss'
import $ from 'jquery'

const html = `
<section id="app2" class="block">
  <div class="tab">
    <ul class="tab-bar">
      <li><span>标题一</span></li>
      <li><span>标题二</span></li>
      <li><span>标题三</span></li>
    </ul>
    <ul class="tab-content">
      <li>内容一</li>
      <li>内容二</li>
      <li>内容三</li>
    </ul>
  </div>
</section>
`

$(html).appendTo($('body > .content'))

const localKey = 'mvc.tabIndex'
const tabIndex = localStorage.getItem(localKey) || 0 

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e)=>{
  const $li = $(e.currentTarget)
  const index = $li.index()
  localStorage.setItem(localKey, index)
  $li
    .addClass('active')
    .siblings()
    .removeClass('active')
  $tabContent
    .children()
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
})

/* 加载页面时触发一次tab点击 */
$tabBar
  .children()
  .eq(tabIndex)
  .trigger('click')
