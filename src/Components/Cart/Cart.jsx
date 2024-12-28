import { useCart } from "../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, updateCartQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const delivery = 30;
  const total = subtotal + delivery;

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item._id}>
              <td className="product-details">
                <img src={item.image} alt={item.title} className="product-image" />
                <div className="product-info">
                  <h4>{item.title}</h4>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateCartQuantity(item._id, parseInt(e.target.value))
                  }
                />
              </td>
              <td>₹{item.price * item.quantity}</td>
              <td>
                <button onClick={() => removeFromCart(item._id)} className="product-button">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <p>Subtotal: ₹{subtotal}</p>
        <p>Delivery: ₹{delivery}</p>
        <hr />
        <p className="total">Total: ₹{total}</p>
        <button className="checkout-btn">Go to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
