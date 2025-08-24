import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  const navigate = useNavigate();
  
  const slugify = (text) =>

    text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');

  const Products = [
    {
      productImage: "https://cdn.shopify.com/s/files/1/0264/9243/6565/files/Lady_Eve_480x480.webp?v=1716016447",
      productTitle: "Scents N Stories (100ml)",
      productPrice: "Rs.1,790"
    },

    {
      productImage: "https://ik.imagekit.io/lzweo9lra/erasebg-transformed.png?updatedAt=1755855104779",
      productTitle: "J. Fragrances (100ml)",
      productPrice: "Rs.10,700"
    },

    {
      productImage: "https://cdn.shopify.com/s/files/1/0264/9243/6565/files/haider_perfume_480x480.webp?v=1737476024",
      productTitle: "Saeed Ghani Cents (125ml)",
      productPrice: "Rs.1,590"
    },

    {
      productImage: "https://cdn.shopify.com/s/files/1/0264/9243/6565/files/Wadi_Al_Oud_perfume_480x480.webp?v=1736342882",
      productTitle: "Rivaj Perfume (100ml)",
      productPrice: "Rs.4,980"
    },

    {
      productImage: "https://cdn.shopify.com/s/files/1/0264/9243/6565/files/stolen_moment_perfume_480x480.webp?v=1736504842",
      productTitle: "Khaadi Perfume (100ml)",
      productPrice: "Rs.4,500"
    },

    {
      productImage: "https://cdn.shopify.com/s/files/1/0264/9243/6565/files/swat_perfume_0553814a-8237-4e70-8049-df8263132d06_480x480.webp?v=1737476321",
      productTitle: "Amir Adnan (100ml)",
      productPrice: "Rs.3,925"
    }
  ];


  return (
    <>

      {/* Hero Section  */}

      <section className="home-hero"> 
        <div className="slide1"></div>
        <div className="slide2"></div>
        <div className="slide3"></div>
        <div className="hero-banner container">

          <div className="hero-banner-content">
            <div className="promo-offer">
              <h1>Flat <span className='price-tag-container' style={{ color: 'rgb(180, 1, 1)' }}>20% <i className="price-tag">Sale</i> </span> Off on Perfumes</h1>
              <p>Limited time offer. Shop now and save big!</p>
              <Link to="/shop"><button className="shop-now-btn">Shop Now</button></Link>
            </div>

            <div className="signature-text">
              <h1>Signature <span style={{ color: 'var(--btn-color)' }}>Scents</span></h1>
              <p>Discover the essence of luxury with our exclusive perfume collection with Centora online store smoothly!</p>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Products Section  */}

      <section className="featured-products-section">

        <div className="featured-products container">
          <h1 className='section-title'>Featured Products</h1>
          <p className='section-title-para' style={{ textAlign: 'center', marginBottom: '30px' }}>Express your fragrance with our standout collection perfumes meets sophistication.</p>
          <div className="featured-products-content">
            <div className="featured-product">
              {
                Products.map((product, index) => {
                  return (
                    <div className="product-card" key={index}>  
                      <img src={product.productImage} alt={product.productTitle} />
                      <h2>{product.productTitle}</h2>
                      <div className="btn-and-product-price">
                        <p className='product-price'>{product.productPrice}</p>
                        <button onClick={() => navigate(`/ProductDetails/${slugify(product.productTitle)}`)} className='shop-now-btn'>Shop now</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Home