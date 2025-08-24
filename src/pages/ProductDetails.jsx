import { useParams } from 'react-router-dom';
import ProductsData from '../data/ProductsData';
import './Product-details.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const slugify = (text) => text.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

const ProductDetails = ({ addToCart }) => {
    const [isCount, setCount] = useState(1);
    const [mainImage, setMainImage] = useState("");
    const navigate = useNavigate();

    const handleCount = (type) => {
        if (type === "decrement" && isCount >= 1) {
            setCount(isCount - 1);
        } else if (type === "increment") {
            setCount(isCount + 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(product, isCount);
        navigate("/ShoppingCart");
    };


    const { id } = useParams();
    const product = ProductsData.find((p) => slugify(p.productTitle) === id);

    useEffect(() => {
        if (product) {
            setMainImage(product.productImage);
        }
    }, [product]);



    if (!product) {
        return <h2 style={{ color: "white" }}>Product not found</h2>;
    }

    const priceNumber = parseFloat(product.productPrice.replace(/[^0-9]/g, ''));
    const totalPrice = (priceNumber * isCount).toLocaleString('en-PK');

    return (
        <div className="product-details">
            <div className="details-container">
                <div className="gallery">
                    <img className="gallery-main" src={mainImage} alt={product.productTitle} />
                    <div className="gallery-thumbs">
                        {product.thumbImages.map((src, i) => (
                            <img
                                key={i}
                                className={`thumb ${src === mainImage ? "is-active" : ""}`}
                                src={src}
                                alt={`${product.productTitle} thumbnail ${i + 1}`}
                                onClick={() => setMainImage(src)} 
                            />
                        ))}
                    </div>

                </div>

                <div className="info">
                    <h1 className="title">{product.productTitle}</h1>

                    <div className="rating">
                        <span className="stars" aria-label={`${product.productRating} out of 5`}>
                            {product.productRating}
                        </span>
                        <span className="rating-count">({product.productReviews})</span>
                    </div>

                    <p className="description">{product.productDescription}</p>

                    <ul>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', listStyleType: 'square', marginLeft: '16px', marginBottom: '60px' }}>
                            {product.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>

                    </ul>

                    <div className="price-row">
                        <span className="price">Rs. {totalPrice}</span>
                    </div>

                    <div className="purchase-row">
                        <div className="qty">
                            <button className="qty-btn" type="button" onClick={() => handleCount('decrement')}>−</button>
                            <input className="qty-input" type="number" min="1" value={isCount} readOnly />
                            <button className="qty-btn" type="button" onClick={() => handleCount('increment')}>+</button>
                        </div>
                        <button onClick={handleAddToCart} className="add-to-cart" type="button">🛒 Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
