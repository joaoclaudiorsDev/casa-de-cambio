export function fetchExchange(inputValue) {
   return fetch(`https://api.exchangerate.host/latest?base=${inputValue}`)
    .then(response => response.json())
    .then(result => {
        const base =result.base;
        if(base !== inputValue){
            throw new Error('Crie moeda não, companheiro(a). Me diga uma que já exista!');
        }
        return result;
    });
}