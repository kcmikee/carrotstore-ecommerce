import React, { useEffect } from "react";
import { Product } from "../components/product";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

function Homescreen() {
    const dispatch = useDispatch()
    const productList = useSelector((state)=>state.productList)
    const {loading, error, products} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);
  
  return (
    <div className="row center">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Homescreen;
