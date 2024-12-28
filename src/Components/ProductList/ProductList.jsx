import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "./ProductList.css";

const ProductList = ({ category }) => {
  const { products, addToCart } = useCart();
 const [buttonText,setButtonText] = useState("Add to Cart")
  // Filter products based on category
  const filteredProducts =
    category && category !== "All"
      ? products.filter((p) => p.categoryName === category)
      : products;
 const textHanlder=(productId)=>{
  setButtonText((prev) => ({
    ...prev,
    [productId]: prev[productId] === "Go to Cart" ? "Add to Cart" : "Go to Cart",
  }));
 }
  return (
    <div className="app">
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product._id}>
            <Link to={`/products/${product._id}`} className="product-card-link">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-author">{product.author}</p>
              <p className="product-price">₹{product.price}</p>
            </Link>
            <button
              className="product-button"
              onClick={() => {addToCart(product._id); textHanlder(product._id);}}
            style={{
                backgroundColor: buttonText[product._id] === "Go to Cart" ? "white" : "#FF6200",
                color: buttonText[product._id] === "Go to Cart" ? "#FF6200" : "white",
                border: "1px solid #FF6200",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize:"16px",
                fontWeight:"600",
              }}
            >
              {buttonText[product._id] || "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
