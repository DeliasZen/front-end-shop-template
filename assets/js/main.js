const contentContainer = document.querySelector('#content-container');
const cartCounterLabel = document.querySelector('#cart-counter-label');

let cartCounter = 0;
let cartPrice = 0;

const incrementCounter = () => {
  cartCounterLabel.innerHTML = `${++cartCounter}`;
  if (cartCounter === 1) cartCounterLabel.style.display = 'block';
  if (cartCounter === 0) cartCounterLabel.style.display = 'none';
};

const getMockData = (t) => +t.parentElement
  .previousElementSibling
  .innerHTML
  .replace(/^\$(\d+)\s\D+(\d+).*$/, '$1.$2');

const getPrice = (t, price) => Math.round((price + getMockData(t)) * 100) / 100;


const btnClickHandler = (e) => {
  const target = e.target;
  const interval = 2000;

  if (target && target.matches('.item-actions__cart')) {
    incrementCounter();

    const mockData = getMockData(target);

    cartPrice = getPrice(target, cartPrice);
    console.log(cartPrice)
  };
};

contentContainer.addEventListener('click', btnClickHandler)