import '../sass/index.scss';

import storeItems from '../data/product-list.json';

class ItemList {
  constructor() {
    this.productContainer = document.querySelector('#product-container');
    this.imgSrc = 'https://picsum.photos/400/300?random=1';

    this.initial();
  }

  renderList() {
    storeItems.forEach((data) => {
      this.createListElement(data.name, data.description, data.price, this.imgSrc);
    });
  }

  createListElement(name, descriprion, price, imgSrc) {
    const columnEl = document.createElement('div');
    const cardEl = document.createElement('div');
    const imgEl = document.createElement('img');
    const cardBodyEl = document.createElement('div');
    const cardTitleEl = document.createElement('h4');
    const cardDecriptionEl = document.createElement('p');
    const cardPriceEl = document.createElement('div');

    columnEl.classList.add('col-md-4');
    cardEl.classList.add('card', 'mb-4');
    imgEl.classList.add('card-img-top');
    cardBodyEl.classList.add('card-body');
    cardTitleEl.classList.add('card-title', 'mb-0');
    cardDecriptionEl.classList.add('mt-0');
    cardPriceEl.classList.add('card-footer', 'text-center');

    cardTitleEl.innerText = name;
    cardDecriptionEl.innerText = descriprion;
    cardPriceEl.innerHTML = '$' + price;

    imgEl.setAttribute('src', imgSrc);

    columnEl.appendChild(cardEl);
    cardEl.appendChild(imgEl);
    cardEl.appendChild(cardBodyEl);
    cardBodyEl.appendChild(cardTitleEl);
    cardBodyEl.appendChild(cardDecriptionEl);
    cardBodyEl.appendChild(cardPriceEl);

    this.productContainer.appendChild(columnEl);
  }

  initial() {
    this.renderList();
  }
}

const shopList = new ItemList();
