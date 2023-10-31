import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/cart";
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const { cartItems, addToCart } = useContext(CartContext);

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={150} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="product-details">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h4 className="display-5">${product.price}</h4>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <p>{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="px-4 py-2 bg-black text-white text-xs font-bold uppercase rounded hover-bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              ADD TO CART
            </button>
            <Link to="/cart" className="btn btn-dark">
              GO TO CART
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;

