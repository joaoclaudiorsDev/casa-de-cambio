import Swal from 'sweetalert2'

import './style.css'
import './reset.style.css'

import { renderCoins } from './components'
import { fetchExchange } from './services/exchange'
const buttonElement = document.querySelector('header form button')

buttonElement.addEventListener('click', () => {
    const inputElement = document.querySelector('header form input')
    const inputValue = inputElement.value.toUpperCase();
    
    if(inputValue === ''){
        Swal.fire({
            title: 'Digitou nadinha...',
            text: 'O exemplo não estava claro? Escreve algo aí, por favor.',
            icon: 'error',
            confirmButtonText: 'Foi mal!'
        });
        return;
    }

    fetchExchange(inputValue)
      .then(exchange => {
        const base = exchange.base;
            if (base !== inputValue){
                Swal.fire({
                    title: 'Digitou errado, hein...',
                    text: 'Crie moeda não, companheiro(a). Me diga uma que já exista!',
                    icon: 'error',
                    confirmButtonText: 'Foi mal!'
                });
            return;
            }
        const rates = exchange.rates;
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
    .catch(error =>{
            Swal.fire({
                title: 'Digitou errado, hein...',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Foi mal!'
        });
    })
});