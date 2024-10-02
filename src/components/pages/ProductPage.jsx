import React from "react";
import Product from "../productPageComponent/Product";
import Header from '../Header'
import Footer from '../Footer'
import Comments from "../productPageComponent/Comments";
import ForYou from "../productPageComponent/ForYou";

import { useParams } from "react-router-dom";
// redux
import { fetchProductsRes } from "../../redux/slices/asyncProductsSlice";
import { useSelector, useDispatch } from "react-redux";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Извлекаем параметр id из URL

  const fetchProducts = async () => {
    const gender = "";
    const limit = "";
    const page = "";
    const order = "";
    const sort = "";
    const search = "";
    const idProduct = `&id=${id}`;

    dispatch(
      fetchProductsRes({
        gender,
        limit,
        order,
        page,
        sort,
        search,
        idProduct,
      })
    );
  };

  React.useEffect(() => {
    fetchProducts();
  }, [id]);

  const { products, isLoading } = useSelector(
    (state) => state.asyncProductsSlice
  );

  if (isLoading === 'loading') {
    return <div>Загрузка...</div>;
  }


  // Если продукт не найден
  if (!products || products.length === 0) {
    return <div>Продукт не найден</div>;
  }
  
  return (
    <>
      <Header/>
      <main className="main">
        <Product product={ products[0]} />
        <Comments />
        <ForYou/>
      </main>
      <Footer/>
    </>
  );
};


export default ProductPage