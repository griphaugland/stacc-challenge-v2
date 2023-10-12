/* import api_key from "../../../next-env"; */


export default async function getProducts(input: string) {
    const res = await fetch(`https://kassal.app/api/v1/products?search=${input}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer kQFCAYLDdWl3tr9RhtuGts3VBAaj0TcMoaZZABb1`,
        },
    });
    
const products = await res.json();
return products
}
  