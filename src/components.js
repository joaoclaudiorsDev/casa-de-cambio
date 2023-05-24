
const ulELement = document.querySelector('.container main ul')
const h2ELement = document.querySelector('.container main h2')

function createLiELement (name,value) {
    const liELement = document.createElement('li');
    liELement.innerHTML= `
    <b>${name}</b>
    <span>${value}</span>
    `
    return liELement;
    // <li>
    //     <b>USD</b>
    //     <span>5.00</span>
    // </li>
};

export function renderCoins(coins, baseCoin){
  ulELement.innerHTML = '';
  h2ELement.innerHTML = `Valores referentes a 1 ${baseCoin}`;

  coins.forEach(element => {
    const name = element.name;
    const value = element.value;
    const liELement = createLiELement(name, value)
    ulELement.appendChild(liELement)
  });
}