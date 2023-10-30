import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../context/cart";

const Product = () => {
  const { cartItems, addToCart } = useContext(CartContext);

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const Loading = () => {
    return <>Loading...</>;
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
            style={{ marginTop: "20px" }}
          />
        </div>

        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h4 className="card-text">${product.price}</h4>
          <p>{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 bg-black text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Add to Cart
          </button>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
