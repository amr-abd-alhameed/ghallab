import React from "react";import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
import ReviewCard from "../home-page-components/reviewCard";
import Carousel from "../home-page-components/carousel";
import PartnerBrandCard from "../home-page-components/partnerBrandCard";
import { partnerBrands } from "../../constants/partnerBrands";
import "./about.css";

import bg from "../../../src/assets/images/service-hero-bg.jpg";
import logo1 from "../../../src/assets/images/what-we-do.jpg";
import logo2 from "../../assets/images/faq-bannar.jpg";
import special from "../../assets/images/maqbara/m20.jpg";

const AboutPage = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url(" + bg + ")" }}
        className="bg-
       bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 "
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-5xl font-bold">من نكون</h1>
            <p className="text-xl max-w-md">
              الموقع الأفضل لاختيار مقبرة مميزة في مصر. لدينا مجموعة متنوعة من
              المقابر الفاخرة والمتوسطة بسعر مناسب، مع ضمان راحة بال تامة في
              اختيار مأوى لِمن تُح
            </p>
          </div>
          <div className="flex gap-12 max-sm:text-center text-white">
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl title-font font-bold">2500+</h2>
              <p className="text-lg">مقبرة متاحة</p>
            </div>
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">1000+</h2>
              <p className="text-lg">عملية بيع ناجحة</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* what we offer section start */}
      <div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 "
        >
          <div className="flex w-full gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div className="flex flex-col items-start justify-between max-md:items-center">
              <h1 className="text-5xl font-bold title-font w-max">
                ما الذي نعرضه
              </h1>
              <Link onClick={scrollToTop} to={"/services"}>
                <Button
                  content={"الخدمات"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link>
            </div>
            <div className="w-full">
              <img
                src={logo1}
                loading="lazy"
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className="what-we-do-cards mt-14 gap-8 max-md:grid-cols-1 max-md:grid-rows-3 grid grid-cols-3 grid-rows-1">
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">بيع مقابر</h2>
              <p className="text-xl mt-2">
                يوفر الموقع معلومات كاملة عن كل مقبرة، بما في ذلك الموقع، الحجم،
                السعر، والمزايا الأخرى
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
                معابنة المقابر
              </h2>
              <p className="text-xl mt-2">
                يُقدم الموقع خدمة استشارات من أخصائيين ، لِمساعدة العميل في
                اختيار المقبرة المناسبة
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
                صور حية من الموقع
              </h2>
              <p className="text-xl mt-2">
                يعرض الموقع صورًا وفيديوهات للمقابر ، لتسهيل عملية الاختيار على
                العميل
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-black">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex max-md:flex-col justify-center items-center max-md:text-center gap-20 max-md:gap-12 p-10 py-28  max-sm:px-5 max-md:py-16  md:pb-36 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center"
          >
            <h1 className="text-5xl font-bold title-font w-max">
              خبرتنُا في المجال
            </h1>
            <p className="text-xl mt-5">
              نحن الرواد في المجال منذ عام 1989 ونمتلك باقة متنوعة من افضل
              المقابر على مستوى مصر
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full text-white/50"
          >
            <h2 className="text-2xl">زبوناً راضيا</h2>
            <div className="relative w-fit max-md:mx-auto -mt-7 max-md:-mt-5">
              <h1 className="text-[150px] max-sm:text-[120px] font-semibold relative text-red-500">
                740+
              </h1>
              <div
                className="absolute z-50 top-0 right-0 left-0 bottom-0 bg-no-repeat "
                style={{
                  backgroundPosition: "40% 100%",
                  backgroundSize: "95%",
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* we focus section start */}
      <div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" flex max-md:flex-wrap-reverse justify-center items-end max-md:text-center gap-10 max-md:gap-12  -mt-44 max-md:mt-0 "
          >
            {/* <div className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center">
              <img src="/we-focus.jpg" alt="" />
            </div> */}

            <div className=" w-1/2 text-5xl max-lg:text-4xl max-md:w-full my-9 ">
              <h1 className="font-semibold "></h1>
              <h1 className="font-semibold  text-red-500"></h1>
            </div>
          </motion.div>
          <div className="we-focus-cards grid grid-cols-3 max-md:grid-cols-1 grid-rows-1 max-md:grid-rows-3 gap-6 mt-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold">1</h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
                الشفافية والثقة{" "}
              </h2>
              <p className="mt-2">
                نُقدم لك كل المعلومات بشكل واضح ، ونضمن لك صفقات عادلة وآمنة.
              </p>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold">2</h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
                تفاصيل المقابر
              </h2>
              <p className="mt-2">
                يوفر الموقع معلومات كاملة عن كل مقبرة، بما في ذلك الموقع، الحجم،
                السعر
              </p>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold">3</h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
                خدمة المُتميزة{" "}
              </h2>
              <p className="mt-2">
                نُقدم لك دعم فني وإرشادات ، لضمان راحة بالك في كل خطوة.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* we focus section start */}
      <div
        className="bg-[50%] max-lg:bg-[55%] max-md:bg-[90%] bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url(" + logo2 + ")" }}
      >
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 flex justify-start  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="w-1/2 max-lg:w-2/3 max-md:w-full"
          >
            <h1 className="text-5xl ">
              <span className="text-red-500  leading-5"> ملاحظة </span>
              قد تُختلف الخدمات التي يُقدمها الموقع من مقبرة لأخرى. لذلك من
              المُهم المتابعة مع خدمة العملاء والتعرف على المميزات بشكل أفضل قبل
              اتخاذ القرار.
            </h1>
            <div className="flex flex-col gap-5 mt-7">
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>الاختيار المُتنوع</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>لتسهيلات السهلة</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>الشفافية والثقة </h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2> الخدمة المُتميزة</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* appreciation section start */}
      <div className="bg-white">
        <div
          style={{ maxWidth: 1200 }}
          className="p-10 max-md:px-5 py-28 mx-auto grid grid-cols-2 grid-rows-1 gap-20 max-lg:grid-cols-1 max-lg:grid-rows-2 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-full max-lg:w-full flex flex-col  items-start max-lg:items-center max-lg:text-center gap-7"
          >
            <motion.h1
              variants={animationVariants.fadeLeft}
              className="text-5xl max-md:text-4xl font-semibold"
            >
              لا تقلق أبدًا حول مستقبل أحبائك ، ونُقدم لك الراحة والتكريم الّذي
              يستحقونه{" "}
            </motion.h1>
            <motion.p
              variants={animationVariants.fadeLeft}
              className="text-2xl"
            >
              انتهز الفرصة واستكشف عالم الراحة والتكريم معنا!
            </motion.p>
            <motion.div
              variants={animationVariants.fadeLeft}
              className="grid grid-cols-2 grid-rows-2 gap-10"
            >
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  26
                </h2>
                <p className="text-xl">عاما من الخبرة </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  +1000
                </h2>
                <p className="text-xl">عملية بيع ناجحة </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  740
                </h2>
                <p className="text-xl">
                  <p className="text-xl">زبونا راضيا واكثر </p>
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  أنت
                </h2>
                <p className="text-xl">زبوننا القادم </p>
              </div>
            </motion.div>
            <motion.div variants={animationVariants.fadeLeft}>
              <Link onClick={scrollToTop} to={"/contact"}>
                <Button
                  content={"احجز مقبرتك الآن"}
                  padding={"px-6 py-3"}
                  fontSize={"text-xl"}
                />
              </Link>
            </motion.div>
          </motion.div>
          <div className="w-full max-lg:w-full h-full max-sm:max-h-[500px] ">
            <div className=" h-full w-full relative overflow-hidden rounded-lg">
              <img
                src={special}
                className="absolute w-full h-full object-cover object-center "
                alt=""
                // loading="lazy"
              />
              <div className="absolute w-full h-full bg-black/50 "></div>
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.toLeft}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute w-full h-full bg-white origin-left z-20 "
              >
                <div className=""></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* appreciation section end */}
      {/* review section start */}
      <div className="bg-gray-100">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-16 p-10 max-md:px-5 py-28 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-2/4 max-md:w-full max-md:px-3 items-center flex flex-col gap-5"
          >
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"/reviews/jane-cooper.jpg"}
                title={"سعيد الشاذلي"}
                from={"الشيخ ذايد"}
              />
            </motion.div>
            <motion.div
              className="w-full mr-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"/reviews/robert-fox.jpg"}
                title={"ميار ذكي"}
                from={"القاهرة الجديدة"}
              />
            </motion.div>
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"/reviews/marvin-mckinney.jpg"}
                title={"أحمد خالد"}
                from={"التجمع الأول"}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeRight}
            viewport={{ once: true, amount: 0.2 }}
            className="w-2/4 max-md:w-full max-md:text-center flex flex-col gap-8"
          >
            <h1 className="text-5xl max-md:text-4xl font-semibold">
              ليه الناس تحب تشتري من غللاب{" "}
            </h1>
            <div>
              <Carousel />
            </div>
          </motion.div>
        </div>
      </div>
      {/* review section end */}
      {/* partner brand section start */}
      <div className="bg-gray-100 border-t-2 border-black/30  border-dashed">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-10 p-10 max-md:px-5  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.1 }}
            className="flex gap-8 flex-wrap justify-center items-center"
          >
            {partnerBrands.map((e, i) => {
              return (
                <PartnerBrandCard
                  title={e.title}
                  // src={`/partner-brands/${e.src}.png`}
                  // alt={e.src}
                  key={i}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* partner brand section end */}
    </>
  );
};

export default AboutPage;
