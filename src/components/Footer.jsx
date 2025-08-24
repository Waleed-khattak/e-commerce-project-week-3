import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content container">
                <div className="footer-about">
                    <h2>About Centora</h2>
                    <p>Centora Perfume Store brings you an exclusive collection of premium fragrances that define elegance, style, and personality. From timeless classics to modern scents, our perfumes are carefully curated to suit every occasion and mood. At Centora, we believe fragrance is more than just a scent. <Link style={{color: 'var(--btn-color)', textDecoration: 'underline', fontWeight: 'bolder'}} to='about'>Read more</Link> </p>
                </div>

                <div className="footer-quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shop'>Products</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-contact-info">
                    <h2>Contact Info</h2>
                    <p>Gujranwala Street 2 Madina Colony</p>
                    <p>Email: support@centora.com</p>
                    <p>Phone: +92-3127277788</p>
                    <div className="social-media">
                        <a href="#" target="_blank" aria-label="Facebook"><FaFacebook/></a>
                        <a href="#" target="_blank" aria-label="Instagram"><FaInstagram/></a>
                        <a href="#" target="_blank" aria-label="Youtube"><FaYoutube/></a>
                        <a href="#" target="_blank" aria-label="LinkedIn"><FaTiktok/></a>    
                    </div>
                </div>
            </div>

            <div className="bottom-footer">
                <p className="container">&copy; {new Date().getFullYear()} Centora Perfume Store. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer