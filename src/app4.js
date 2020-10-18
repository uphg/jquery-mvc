import './app4.scss'
import $ from 'jquery'

const $circle = $('#app4 .circle')

$circle.on('mouseenter', ()=>{
  $circle.addClass('active')
}).on('mouseleave', ()=>{
  $circle.removeClass('active')
})