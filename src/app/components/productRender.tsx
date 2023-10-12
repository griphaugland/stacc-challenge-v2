import React from 'react';

interface Product {
  name: string;
  price: number;
    id: number;
    img: string;
    current_price: number;
}

interface ProductData {
  data: Product[];
}

function productRender(response: ProductData, root: HTMLDivElement | null) {
  if (!root) return;

  const data = response.data;
  console.log(data)
  data.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.className = `product-container ${product.id}`;
    productDiv.innerHTML = `
      <div class="product-container__name">${product.name}</div>
      <div class="product-container__price">${product.price}</div>
    `;
    root.appendChild(productDiv);
  })
}

export default productRender;
