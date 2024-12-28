// import "./ProductDescription.css";
// import products from "../../db/products";
import heartIcon from "../../assets/heart.png";
// import { useParams } from "react-router-dom";

// const ProductDescription = () => {
//   const { id } = useParams();
//   const product = products.find((p) => p._id === id);

//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   return (
//     <div className="product--details">
//       <div className="product--img">
//         <img src={product.image} alt={product.title} />
//       </div>

//       <div className="product--info">
//         <h2>{product.title}</h2>
//         <p className="product--description">
//           {product?.description || "No description available."}
//         </p>
//         <p className="product--price">₹{product.price}</p>

//         <div className="product--quantity">
//           <label htmlFor="quantity">Quantity:</label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             min="1"
//             defaultValue="1"
//           />
//         </div>
//         <div className="product--actions">
//           <button className="add-to-cart">Add to Cart</button>
//           <img src={heartIcon} alt="Wishlist Icon" className="wishlist-icon" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDescription;

import { useParams } from "react-router-dom";
import "./ProductDescription.css";
import { useCart } from "../Context/CartContext";

const ProductDescription = () => {
  const { id } = useParams();
  const { products, addToCart,addToWishlist } = useCart();

  const product = products.find((p) => p._id === id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product--details">
      <div className="product--img">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product--info">
        <h2>{product.title}</h2>
        <p className="product--description">{product.description}</p>
        <p className="product--price">₹{product.price}</p>

        <div className="product--actions">
          <button
            className="add-to-cart"
            onClick={() => addToCart(product._id)}
          >
            Add to Cart
          </button>
          <img src={heartIcon} alt="Wishlist Icon" className="wishlist-icon" onClick={()=>addToWishlist(product._id)}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
