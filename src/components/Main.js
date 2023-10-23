import React, { useState, useEffect } from "react";
import RecipeReviewCard from "./RecipeReviewCard";
import "../styles/main.css";
import axios from "axios";
import PaginationRounded from "./pagination";
import CustomLoader from "./Loader";
import ClearIcon from "@mui/icons-material/Clear";
import { toast } from "react-toastify";

const Main = ({ handleClick, handlePdp }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isSorting, setSorting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://dummyjson.com/products?limit=100`);
        const slicedProduct = data?.products?.slice(0, 10);
        setAllProducts(data.products);
        setProductList(slicedProduct);
        setLoading(false);
      } catch (error) {
        console.log(`Error in getting product list`, error);
        toast.error(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const pageChangeProduct = allProducts?.slice(page * 10 - 10, 10 * page);
    setProductList(pageChangeProduct);
    setSorting(false);
    setLoading(false);
  }, [page]);

  const handleSort = () => {
    setSorting(!isSorting);
    const sortedProducts = [...productList];
    sortedProducts.sort((a, b) => a.price - b.price);
    setProductList(sortedProducts);
    toast.success(`Applied Low to High`);
  };

  const handleClose = () => {
    setSorting(!isSorting);
    const originalOrder = [...allProducts].slice(page * 10 - 10, 10 * page);
    setProductList(originalOrder);
    toast.error(`Sorting Removed`);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="mt-5 d-flex justify-content-center">
            <PaginationRounded setPage={setPage} />
          </div>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-flex justify-content-end mb-2">
            <button
              className={`btn ${isSorting ? "btn-dark" : "btn-danger"} mx-2`}
              onClick={isSorting ? handleClose : handleSort}
            >
              {isSorting ? (
                <>
                  <span>Close</span>
                  <ClearIcon />
                </>
              ) : (
                "Sort by Price"
              )}
            </button>
          </div>
          <div className="row">
            {isLoading ? (
              <CustomLoader />
            ) : (
              productList.map((item) => (
                <div className="col-12 col-md-5 mb-2" key={item.id}>
                  <RecipeReviewCard
                    item={item}
                    handleClick={handleClick}
                    setProductList={setProductList}
                    productList={productList}
                    handlePdp={handlePdp}
                  />
                </div>
              ))
              // productList.map((item) => (
              //   <RecipeReviewCard
              //     key={item.id}
              //     item={item}
              //     handleClick={handleClick}
              //     setProductList={setProductList}
              //     productList={productList}
              //     handlePdp={handlePdp}
              //   />
              // ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
