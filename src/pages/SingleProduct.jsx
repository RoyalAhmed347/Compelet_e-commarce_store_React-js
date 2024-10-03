import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import ProductImgs from "../components/ProductImgs";
import FormatePrice from "../Helper/FormatePrice";
import PerDescount from "../Helper/PerDescount";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SiTcs } from "react-icons/si";
import CountStartRating from "../Helper/CountStartRating";
import ProductAddToCart from "../components/ProductAddToCart";
import ProductReviews from "../components/ProductReviews";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingelProduct, productIsLoading, singelProduct, productIsError } =
    useProductContext();


  useEffect(() => {
    getSingelProduct(id);
  }, []);
  const {
    id: alips,
    sku,
    title,
    images,
    price,
    reviews,
    thumbnail,
    rating,
    // stock,
    description,
    discountPercentage,
    returnPolicy,
    brand,
    warrantyInformation,
    availabilityStatus,
    shippingInformation
  } = singelProduct;

  if (productIsLoading) {
    return (
      <div className="lodingProduct">
        <p className="text">Loading...</p>
      </div>
    );
  } else if (productIsError) {
    return (
      <div className="container">
        <div className="error">
          {/* <h1 className="main_heading">Product is not found</h1> */}
          <h2 className="sub_heading">Product is not found</h2>
          <p className="text">
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <Link to="/products">
            <button className="btn"> Go To Products </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <section>
          <div className="page_navigation">
            <p className="text">
              <Link to="/products">
                <span className="S_nav_heading">Products</span>
              </Link>
              /{title}
            </p>
          </div>
          <div className="container">
            <div className="single_product_data">
              <div className="product_imgs">
                <ProductImgs
                  key={alips}
                  id={alips}
                  thumbnail={thumbnail}
                  images={images}
                />
              </div>

              <div className="product_details">
                <h2 className="title">{title}</h2>
                <div className="text">
                  <CountStartRating rating={rating} reviews={reviews?.length} />
                </div>
                <p className="text ">
                  <span>MRP: </span>
                  <del>
                    <FormatePrice price={price} />
                  </del>
                </p>
                <p className="text deal_of_day">
                  <span>Deal of the Day: </span>
                  <ins>
                    <PerDescount
                      price={price}
                      Percentage={discountPercentage}
                    />
                  </ins>
                </p>
                <p className="text">{description}</p>
                <div className="product_services">
                  <div className="product_service">
                    <TbTruckDelivery size={25} className="icon" />
                    <p className="text">Free Delivery</p>
                  </div>

                  <div className="product_service">
                    <TbReplace size={25} className="icon" />
                    <p className="text">{returnPolicy}</p>
                  </div>
                  <div className="product_service">
                    <SiTcs size={25} className="icon" />
                    <p className="text">{shippingInformation}</p>
                  </div>
                  <div className="product_service">
                    <RiSecurePaymentFill size={25} className="icon" />
                    <p className="text">{warrantyInformation}</p>
                  </div>
                </div>
                <p className="text">
                  Availabel:
                  <span> {availabilityStatus}</span>
                </p>
                <p className="text">
                  ID:
                  <span> {sku}</span>
                </p>
                {brand && <p className="text">
                  Brand:
                  <span> {brand}</span>
                </p>}
                <hr />
                {availabilityStatus && <ProductAddToCart product={singelProduct} />}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};


export default SingleProduct;
