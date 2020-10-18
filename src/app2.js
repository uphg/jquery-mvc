import './app2.scss'
import $ from 'jquery'

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

/* 触发一次tab点击 */
$tabBar
  .children()
  .eq(tabIndex)
  .trigger('click')