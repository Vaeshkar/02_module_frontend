import ProductGrid from './ProductCarousels';

// Fetch the products from the API
const API_URL = 'https://dummyjson.com';
export async function getProducts() {
  const response = await fetch(`${API_URL}/products?limit=0&select=title,price,description,thumbnail,rating,category,stock`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  /* console.log(data.products[0]); */ 
  return data.products;
}

// Fetch the categories from the API
export async function getCategories() {
  const response = await fetch(`${API_URL}/products/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  const data = await response.json();
  return data;
}

// Main page component
export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories();
  if (!products || !categories) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <main className="container mx-auto px-4">
      <ProductGrid products={products} categories={categories} />
    </main>
  );
}
