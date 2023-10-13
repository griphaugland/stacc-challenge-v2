export default async function getProducts(input: string) {
    const res = await fetch(`https://kassal.app/api/v1/products?search=${input}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer I3euGyBCWJixGNGE5fvY1DaoatV2nMHFPw8Pvbdg`,
        },
    });
    
const products = await res.json();
return products
}
  