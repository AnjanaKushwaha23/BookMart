import "./Wishlist.css";
import { useCart } from "../Context/CartContext";

const Wishlist = () => {
  const { wishList,removeFromWishlist } = useCart();

  return (
    <div>
      <div className="app">
        <div className="whislist-product-list">
          {wishList.map((item) => (
            <div className="product-card" key={item._id}>
              <img
                src={item.image}
                alt={item.title}
                className="product-image"
              />
              <h3 className="product-title">{item.title}</h3>
              <p className="product-author">{item.author}</p>
              <p className="product-price">₹{item.price}</p>

              <button className="product-button">Add to Cart</button>
              <img src="src/assets/Heartno.png" alt="Heart with minus sign" className="remove-item" onClick={() => removeFromWishlist(item._id)}/>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
