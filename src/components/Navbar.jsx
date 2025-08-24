import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaFacebook, FaInstagram, FaYoutube, FaPinterest, FaTiktok, FaSearch, FaUser } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {

  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const close = () => { setMenuOpen(false); }


  return (
    <>

      <div className="top-nav">
        <div className="top-nav-content container">
          <div className="top-nav-left">
            <p>Welcome to Centora Store!</p>
            <div className="social-icons">
              <i className='social-icon fb'><FaFacebook /></i>
              <i className='social-icon insta'><FaInstagram /></i>
              <i className='social-icon yt'><FaYoutube /></i>
              <i className='social-icon pinterest'><FaPinterest /></i>
              <i className='social-icon tiktok'><FaTiktok /></i>
            </div>
          </div>

          <div className="top-nav-right">
            <p>Free Shipping on Orders Over $50</p>
            <div className="search">
              <button><FaSearch /></button>
            </div>
            <div className="user">
              <Link to="/login"><FaUser /></Link>
            </div>
          </div>
        </div>
      </div>

      <header className={`header ${isSticky ? 'sticky' : ''}`}>

        <nav className='navbar container'>
          <div className="logo">
            Centora<span>.</span>
          </div>
                <div 
        className={`hamburger ${menuOpen ? 'open' : ''}`} 
        onClick={handleHamburgerClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

          <div className="nav-list">
            <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
              <li onClick={close}><Link to="/" >Home</Link></li>
              <li onClick={close}><Link to="shop" >Products</Link></li>
              <li onClick={close}><Link to="about" >About Us</Link></li>
              <li onClick={close}><Link to="contact" >Contact</Link></li>
            </ul>
          </div>

          <div className="cart">
            <Link to="/ShoppingCart">
              <MdOutlineShoppingCart className="cart-icon" />
              <span className="cart-count">{ cartCount }</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar