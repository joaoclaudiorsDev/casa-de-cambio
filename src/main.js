import './style.css'
import './reset.style.css'
import { renderCoins } from './components'

const inputElement = document.querySelector('header form input')
const buttonElement = document.querySelector('header form button')

const prototype = [
    { name: 'USD', value: '5.00'},
    { name: 'USD', value: '5.00'},
    { name: 'USD', value: '5.00'},
    { name: 'USD', value: '5.00'},
    { name: 'USD', value: '5.00'},
]

renderCoins(prototype, 'BRL');

buttonElement.addEventListener('click', () => {
    const inputValue = inputElement.value;
    fetch(`https://api.exchangerate.host/latest?base=${inputValue}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
})