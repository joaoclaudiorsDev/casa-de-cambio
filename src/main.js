import './style.css'
import './reset.style.css'
import { renderCoins } from './components'
import { fetchExchange } from './services/exchange'
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
    const inputElement = document.querySelector('header form input')
    const inputValue = inputElement.value;

    fetchExchange(inputValue)
      .then(exchange => {
        const rates = exchange.rates;
        const base = exchange.base;
        const ratesArray = Object.entries(rates)
        const ratesArrayToObject = ratesArray.map(rateCoin => {
        const [name, value] = rateCoin;
        
            return {
                name: name,
                value: value,
            }
        })
        renderCoins(ratesArrayToObject, base);
    })
});