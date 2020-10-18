import './app1.scss'
import $ from 'jquery'

const $number = $('#app1 .number')

const $add = $('#app1 #add')
const $minus = $('#app1 #minus')
const $mcl = $('#app1 #mcl')
const $divide = $('#app1 #divide')
const $clear = $('#app1 #clear')
const value = localStorage.getItem('MVCResult')
$number.text(value || 0)

$add.on('click', ()=>{
  let result = Number($number.text())
  result += 2
  localStorage.setItem('MVCResult', result)
  $number.text(result)
})
$minus.on('click', ()=>{
  let result = Number($number.text())
  result -= 2
  localStorage.setItem('MVCResult', result)
  $number.text(result)
})
$mcl.on('click', ()=>{
  let result = Number($number.text())
  result *= 2
  localStorage.setItem('MVCResult', result)
  $number.text(result)
})
$divide.on('click', ()=>{
  let result = Number($number.text())
  result /= 2
  localStorage.setItem('MVCResult', result)
  $number.text(result)
})
$clear.on('click', ()=>{
  localStorage.setItem('MVCResult', 0)
  $number.text(0)
})