'use client';
import { useState, useRef } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Plus } from 'lucide-react';
import Image from 'next/image';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

export default function ProductCarousels({ products, categories }) {

  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const carouselRefs = useRef({});

  const scrollCarousel = (categorySlug, direction) => {
    const container = carouselRefs.current[categorySlug];
    if (!container) return;
    const scrollAmount = container.offsetWidth;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  const validCategories = categories.filter((category) =>
    products.some((p) => p.category === category.slug)
  );

  const { addToCart } = useCart();

  return (
    <>
      <Toaster position="top-right" />
      {/* Filter categories */}
      <form className="filter flex gap-2 flex-wrap py-4 items-center">
        <input
          className="btn btn-sm btn-outline"
          type="reset"
          value="×"
          onClick={() => setSelectedCategory('')}
        />
        {validCategories.map((category) => (
          <label key={category.slug}>
            <input
              type="radio"
              name="category"
              value={category.slug}
              onChange={handleCategoryChange}
              checked={selectedCategory === category.slug}
              className="hidden"
            />
            <span className={`btn btn-sm ${selectedCategory === category.slug ? 'btn-active btn-primary' : 'btn-outline'}`}>
              {category.name}
            </span>
          </label>
        ))}
      </form>
      
      {/* Product Carousels with cards */}
      {validCategories
        .filter((category) => selectedCategory === '' || selectedCategory === category.slug)
        .map((category) => {
          const categoryProducts = products.filter(p => p.category === category.slug);
          // Debugging: Log category and product matches
          /* Uncomment for debugging
          /* console.log(
            'Category:', category.slug,
            '| Matches:', categoryProducts.length
          ); */
          /* categoryProducts.forEach(product => {
            console.log(`Product Stock: ${product.stock}, Product Rating: ${product.rating}`);
          }); */
          if (categoryProducts.length === 0) return null;
          return (
            <section key={category.slug} className="p-4">
              <h2 className="text-2xl font-bold mb-2 uppercase border-b-2 border-[#d9b028]">{category.name}</h2>
              {/* Carousel navigation buttons */}
              <div className="relative">
                <button
                  className="absolute left-0 top-1/2 z-20 -translate-y-1/2 btn btn-secondary btn-circle btn-md"
                  onClick={() => scrollCarousel(category.slug, 'left')}
                >
                  ❮
                </button>

                {/* Left fade-out gradient */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />

                {/* Carousel per category */}
                <div
                  ref={(el) => (carouselRefs.current[category.slug] = el)}
                  className="flex overflow-hidden gap-4 px-8"
                >
                  {categoryProducts.map((product, index) => (
                    <div key={product.id} className="flex-shrink-0 w-80">
                      <div className="card w-full h-full shadow-lg bg-gradient-to-b from-[#a09c97] to-[#ece6dd]">
                        <div className="absolute top-3 left-3">
                          <a href={`/category/${product.category}`} className="btn btn-category btn-xs">
                            {product.category}
                          </a>
                        </div>
                        <figure className="relative h-48">
                          <Image
                            src={product.thumbnail || product.images?.[0]}
                            alt={product.title}
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 768px) 100vw, 200px"
                            priority={index === 0}
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title text-sm">{product.title}</h2>
                          <p className="text-sm text-[#303030] mb-2 line-clamp-2">{product.description}</p>
                          <p className="text-[#292108] font-black text-2xl">
                            {new Intl.NumberFormat('de-DE', {
                              style: 'currency',
                              currency: 'EUR',
                            }).format(product.price)}
                          </p>
                            
                          <div className="flex gap-1 justify-center items-center mt-2">
                            <p className="text-sm text-[#303030]">
                              ★ {product.rating}
                            </p>
                            <p className="text-sm text-[#303030]">
                              {product.stock? `${product.stock} in stock` : 'Out of stock'}
                            </p>
                            <div className="card-actions justify-end">
                              <button 
                              onClick={() => {
                                addToCart(product);
                                toast.success(`${product.title} added to cart`, {
                                  style: {
                                    background: '#303030',
                                    color: '#fff',
                                    maxWidth: '250px',
                                  },
                                  iconTheme: {
                                    primary: '#d9b028',
                                    secondary: '#fff',
                                  }
                                });
                              }} 
                              className="btn btn-primary btn-sm rounded-full"
                              disabled={product.stock <= 0}
                              ><Plus className='-mr-2'/><ShoppingCart /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right fade-out gradient */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />
                {/* Carousel navigation button */}
                <button
                  className="absolute right-0 top-1/2 z-10 -translate-y-1/2 btn btn-secondary btn-circle btn-md"
                  onClick={() => scrollCarousel(category.slug, 'right')}
                >
                  ❯
                </button>
              </div>
            </section>
          );
        })}
    </>
  )
};