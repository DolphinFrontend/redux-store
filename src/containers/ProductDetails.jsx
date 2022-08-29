import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectedProducts } from "../redux/actions/productActions";

const ProductDetails = () => {
  let product = useSelector((state) => state.product);
  const { productId } = useParams();
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetails = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails(productId);
  }, [productId]);
  

  return <div></div>;
};

export default ProductDetails;
