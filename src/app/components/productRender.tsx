import React, {useRef} from 'react';
import { mainProduct } from './Buttonsection';

interface Product {
    name: string;
    price: number;
        id: number;
        image: string;
        current_price: number;
}

interface ProductData {
    data: Product[];
}
function chooseProduct(product: Object) {
    localStorage.setItem('product', JSON.stringify(product));
    window.location.reload();
  }


function productRender(response: ProductData, root: HTMLDivElement | null) {
    if (!root) return;
    const data = response.data; 
    root.innerHTML = '';
    data.forEach((product) => {
        const button = document.createElement('button');
        button.id = product.id.toString();
        button.className = 'product-container';
        const name = document.createElement('div');
        name.className = 'product-container__name';
        name.textContent = product.name;
        const price = document.createElement('div');
        price.className = 'product-container__price';
        price.textContent = `${product.current_price}KR`;
        const imageContainer = document.createElement('div');
        imageContainer.className = 'product-container__image_container';
        const image = document.createElement('img');
        image.src = product.image || 'https://placehold.co/600x400.png';
        image.alt = 'product image';
        imageContainer.appendChild(image);
        button.addEventListener('click', (e) => {
            e.preventDefault();
            chooseProduct(product);
        })
        button.appendChild(name);
        button.appendChild(price);
        button.appendChild(imageContainer);
        root.appendChild(button);
    })
}

export default productRender;
