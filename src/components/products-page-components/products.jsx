import React, { useContext, useEffect, useState } from "react";import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import ImageSlider from "./imageSlider";
import { CartContext } from "../../context/cartContext";
import { formatCompactNumber } from "../../constants/formatNumber";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { useParams } from "react-router";
import { rentHouses } from "../../constants/data";
import ExculusivePropertyCard from "../home-page-components/exculusivePropertyCard";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";

import Button from "../buttons-component/solidbutton";

const Product = ({
  id,
  title,
  moreImages,
  mainImage,
  descr,
  details,
  price,
}) => {
  const [btnLoader, setBtnLoader] = useState(false);

  const [inpt, setInpt] = useState(1);
  const { cartItems, addToCart, modal, setModal } = useContext(CartContext);

  const [otherItems, setOtherItems] = useState([]);

  const handleAddToCart = () => {
    setBtnLoader(true);
    setTimeout(() => {
      setBtnLoader(false);
      let currentInpValue = document.getElementById("inp");

      const newItem = {
        id: id,
        name: title,
        image: mainImage,
        quantity: Number(currentInpValue.value),
        price: price,
      };
      addToCart(newItem);
      setInpt(1);
      setModal(true);
    }, 400);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setOtherItems(
      rentHouses.filter((e, i) => {
        return e.id != id;
      })
    );
  }, []);
  useEffect(() => {
    const body = document.getElementsByTagName("body").item(0);
    if (modal) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [modal]);
  return (
    <>
      {/* <ImageSlider images={moreImages} /> */}
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto mt-40 max-lg:mt-32 max-md:mt-28  pt-0 p-20 px-10 max-lg:px-5 flex max-lg:flex-wrap-reverse gap-10 "
      >
        <div className="w-2/4 max-lg:w-full  flex flex-col gap-5">
          {moreImages.map((e, i) => {
            return (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                variants={animationVariants.zoomIn}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  className="w-full h-[500px] max-md:h-[400px] max-sm:h-[300px] object-cover"
                  src={e}
                  alt={e}
                  loading="lazy"
                />
              </motion.div>
            );
          })}
        </div>
        <div className="w-2/4 max-lg:w-full relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="sticky max-lg:static top-32 flex flex-col gap-4"
          >
            <h1 className="text-5xl font-semibold">House in {title}</h1>
            <p className="details text-2xl">{descr}</p>
            <div>
              <h2 className="text-xl text-red-500 font-semibold">السعر</h2>
              <h2 className="text-2xl mt-2 font-semibold">
                {formatCompactNumber(price)} جنية
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              {/* <Link
                to={"/contact"}
                className="mt-4 max-lg:w-72 max-sm:w-full text-center p-4 rounded-sm"
                style={{
                  backgroundColor: "#d5515e",
                  borderColor: "#d5515e",
                  color: "white",
                }}
              >
                اشتري الآن
              </Link> */}
              <Link onClick={scrollToTop} to="/contact">
                <Button
                  content={"اشتري الآن"}
                  fontSize={"text-xl"}
                  fontWeight={""}
                  padding={"px-5  py-2"}
                />
              </Link>

              {/* <Button
                // _hover={{ borderColor: "#d5515e" }}
                _hover={{ backgroundColor: "white", color: "#d5515e" }}
                backgroundColor={"#d5515e"}
                color={"white"}
                borderColor={"#d5515e"}
                variant={"outline"}
                size={"lg"}
                isLoading={btnLoader}
                loadingText={"Adding to Cart"}
                onClick={handleAddToCart}
                className="mt-4 max-lg:w-72 max-sm:w-full"
              >
                Add to Cart
              </Button> */}
            </div>
            <div className="flex text-xl flex-col gap-2">
              <h2 className=" text-red-500 font-semibold">تفاصيل المقبرة</h2>
              <p>{descr}</p>
              <ul className="list-disc list-inside ml-2">
                {details.map((e, i) => {
                  return <li key={i}>{e}</li>;
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto mt-10 pt-0 p-20 px-10 max-lg:px-5 "
      >
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl font-semibold"
        >
          بس عشانك
        </motion.h1>
        <div className="grid grid-cols-2 grid-rows-3 max-sm:grid-cols-1 max-sm:grid-rows-5 gap-5 mt-10">
          {otherItems.map((e, i) => {
            return (
              <div
                key={i}
                className={
                  i === otherItems.length - 1
                    ? "col-span-2 max-sm:col-auto"
                    : ""
                }
              >
                <ExculusivePropertyCard
                  imgSrc={e.mainImage}
                  titlePart1={"مقابر  "}
                  titlePart2={e.name}
                  pricing={e.price}
                  href={e.id}
                  type={e.type}
                  bgColor={"bg-white"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
