import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductsData from '../data/ProductsData';
import './Products.css';

const slugify = (text) => text.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

const Products = ({ addToCart }) => {
    const [sortOption, setSortOption] = useState("newest");
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
    addToCart(product, 1);
    navigate("/ShoppingCart");
};

    const parsePrice = (price) => parseInt(price.replace(/Rs\.|,/g, ''));

    const sortedProducts = [...ProductsData].sort((a, b) => {
        if (sortOption === "price-low-to-high") {
            return parsePrice(a.productPrice) - parsePrice(b.productPrice);
        } else if (sortOption === "price-high-to-low") {
            return parsePrice(b.productPrice) - parsePrice(a.productPrice);
        } else if (sortOption === "sort-by-alphabatic") {
            return a.productTitle.localeCompare(b.productTitle);
        } else {
            return 0;
        }
    });

    return (
        <section className="products-section container">
            <div className="filter">
                <div className="filter-title">
                    <h2>Filter</h2>
                </div>
                <div className="filter-options">
                    <p>Sort:</p>
                    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="newest">Newest</option>
                        <option value="price-low-to-high">Price: Low to High</option>
                        <option value="price-high-to-low">Price: High to Low</option>
                        <option value="sort-by-alphabatic">Sort by Alphabatically</option>
                    </select>
                </div>
            </div>

            <div className="products container">
                <h1 className='section-title'>The Fragnaces you must shop!</h1>
                <p className='section-title-para' style={{ textAlign: 'center', marginBottom: '30px' }}>
                    Elevate your essence with our refined fragrance collection
                </p>
                <div className="products-content">
                    {sortedProducts.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img
                                onClick={() => navigate(`/ProductDetails/${slugify(product.productTitle)}`)}
                                src={product.productImage}
                                alt={product.productTitle}
                                className='product-img'
                            />
                            <h2>{product.productTitle}</h2>
                            <div className="btn-and-product-price">
                                <p className='product-price'>{product.productPrice}</p>
                                <button onClick={() => handleAddToCart(product)} className='shop-now-btn'>
    🛒 ADD TO CART
</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
