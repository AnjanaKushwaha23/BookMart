import "./Header.css";
import personIcon from '../../assets/person.png';
import heartIcon from '../../assets/heart.png';
import cartIcon from '../../assets/cart.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar"> 
      <div className='main-container_nav app'>
        <Link to={`/`}>
        <div className='logo'>
            <img src='../../Logo.svg' alt='book icon and bookmart'/>
        </div>
        </Link>
        <div className="icons">
            <div className="login-img">
                <img src={personIcon} alt="person icon"/>
            </div>
            <Link to={`/wishlist`}>
            <div className="wishlist-img">
                <img src={heartIcon} alt="heart shape icon"/>
            </div>
            </Link>
            <Link to={`/cart`}>
            <div className="cart-img">
                <img src={cartIcon} alt="cart shape icon"/>
            </div>
            </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
