import {  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWindows,
} from "react-icons/fa";
import "./aboutProject.css";
import Button from "../buttons-component/solidbutton";
import { Link, useParams } from "react-router-dom";
import { showCase } from "../../constants/showcase";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
import { scrollToTop } from "../../constants/scrollToTop";
import { useEffect } from "react";
import hero from "../../assets/images/maqbara/w21.jpg";
import bg from "../../assets/images/hero-bg-image.jpg";
const AboutProject = ({ heroImageSrc, attachment }) => {
  const param = useParams();
  const project = showCase[param.id - 1];
  useEffect(() => {
    document.title = `${project.city} - Homyz `;
  }, [param]);
  return (
    <div className="overflow-hidden">
      <div
        style={{ backgroundImage: "url(" + bg + ")" }}
        className={`h-screen relative ${attachment}  bg-top bg-no-repeat bg-cover`}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/50">
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="text-8xl max-lg:text-6xl max-md:text-5xl  font-semibold text-white"
          >
            {project.city}
          </motion.h1>
        </div>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="flex mx-auto p-10 max-sm:px-5 gap-16 max-sm:gap-14 max-md:flex-col"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-start gap-5"
        >
          <h1 className="text-5xl font-bold">{project.city}</h1>
          <p className="text-xl">{project.shortDescription}</p>
          <Link to={"/contact"} onClick={scrollToTop}>
            <Button
              content={"تواصل معنا"}
              fontSize={"text-xl max-md:text-xl"}
              padding={"px-4 py-2"}
            />
          </Link>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeRight}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-4"
        >
          <div className="">
            <h2 className="text-xl mb-2 ">مسؤل خدمة العملاء</h2>
            <h3 className="text-xl opacity-80">م/ محمد جمعة</h3>
          </div>

          <div className="">
            <h2 className="text-xl mb-2 ">
              لمزيد من التفاصيل يرجى الاتصال على الرقم
            </h2>
            <h3 className="text-xl opacity-80">1010757651</h3>
          </div>
          <div className="">
            <h2 className="text-xl mb-2 ">تاريخ انشاء المقبرة</h2>
            <h3 className="text-xl opacity-80">December 7, 2022</h3>
          </div>
          <div className="">
            <h2 className="text-xl mb-2 ">شارك مع اصدقائك على</h2>
            <div className="text-xl text-red-500 flex gap-3">
              <a
                style={{ borderWidth: 1 }}
                className="w-12 h-12  border-red-500 rounded-full  flex justify-center  items-center"
                href="https://www.facebook.com/ghallab12345.gmail?mibextid=qi2Omg&rdid=zVFVpsIdJsarBobO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FwYhpN9nJjuX4V3qN%2F%3Fmibextid%3Dqi2Omg"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                style={{ borderWidth: 1 }}
                className="w-12 h-12  border-red-500 rounded-full  flex justify-center  items-center"
                href=""
              >
                <FaInstagram />
              </a>
              <a
                style={{ borderWidth: 1 }}
                className="w-12 h-12  border-red-500 rounded-full  flex justify-center  items-center"
                href=""
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* description */}
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.fadeRight}
        viewport={{ once: true, amount: 0.05 }}
        style={{ maxWidth: 1200 }}
        className="text-lg mx-auto p-10 max-sm:px-5 max-sm:pt-5  max-sm:mb-8 mb-20"
      >
        <p>
          التي تتميز بمستواها العالي التابعة للمحافظة وموثقة في الشهر العقاري
          ومحاطة بأسوار عالية مرسوم عليها رسومات اسلامية وآيات قرآنية وفيها
          أشجار وزهور بألوان جذابة، حتى تستطيع تنقية الجو من الملوثات وتحوله إلى
          جو نقي خالي من الملوثات والأجمل من كل هذا أنها موجودة بالقرب من
          المناطق الحيوية والاستثمارية مما يزيد سعر المتر فيها يومًا بعد يوم
          وبالتالي ستحصل بعد شراء مدافن التابعة للجهاز المحافظة عن طريق شركة
          العربي للمقابر على أفضل عائد استثماري، كما أنك ستزيد من خصوصية المكان
          وتستطيع زيارات المتوفى وقراءة له الفاتحة في أي وقت تريده ولا تقلق من
          الجلوس لأن مقابر ومدافن التي يتم شرائها من العربي للمقابر سوف يتم
          تخصيص أماكن للجلوس فيها حتى تستطيع الجلوس بالقرب من أمواتك الغاليين
          وقراءة الفاتحة والقرآن الكريم لهم والإستمتاع بالهدوء والسكينة والجو
          النقي، كما توفر الشركة!
        </p>
        <div className="p-5 px-10 max-sm:px-4">
          <h2 className="text-2xl text-center font-semibold p-5 max-sm:p-3 border-l-4 border-red-500">
            ايه اللي يميز موقع غلّاب عن غيره
          </h2>
        </div>
        <p>
          أسعارنا بسيطة للغاية متوافقة مع معظم الفئات والأفضل من كل ذلك أن شركة
          العربي للمقابر تعتبر من أفضل شركات المقاولات التي تعمل في بيع وشراء
          مقابر بمحافظة القاهرة التابعة لجهاز المدينة الموجود فيها مقابر ومدافن
          وليس فقط بل يوجد خدمات أخرى كثيرة مثل تقديم أسعار بسيطة تتناسب مع معظم
          الفئات في معظم أنحاء الجمهورية فهي لديها مقابر مدينه العبور و السلام
          طريق بلبيس و مدافن ٦ اكتوبر طريق الفيوم و طريق الواحات و مدافن وادي
          الراحة مقابر صندوق اسكان القوات المسلحه الجبل الاحمر المصممة على أحدث
          مستوى ومحاطة بأسوار عالية وبوابة حديدية جميع مقابر و مدافن متخصص لها
          تربي للدفن بالطرق الشرعية و حراسة مؤمنة خلال 24 ساعة يتم نزول خصومات
          تصل ما بين 30 إلى 50% على معظم مقابر بمحافظة القاهرة حتى يستفيد معظم
          الفئات بالأسعار المميزة و يستطيعون شراء مدافن في أي مكان يريدونه في
          معظم الجمهورية مثل
        </p>
        <div className="flex flex-col gap-1 mt-4">
          <h2 className="text-2xl font-semibold">رضا العميل أولويتُنْا</h2>
          <p>
            يمكن أن تختلف اسعار مدافن للبيع والمقابر من مكان إلى آخر من حيث
            المساحات او شعبية او ريفية حيث يقل بها الأسعار مقارنة بالمناطق
            الحديثة مثل الشروق ومدينة بدر والقاهرة الجديدة وغيرها، لذلك ستكون
            شركتنا الاختيار الأمثل لك لأنها ستعمل على توفير افضل الاسعار واعلى
            مستوى من تشطيبات المقابر من الداخل والخارج مع توفير مساحات متنوعة
            على حسب تفضيلات العميل، تختلف احياناً أسعار المقابر من حيث التغييرات
            الاقتصادية بشكل مستمر، قُم الآن بالاتصال بنا لمعرفة التفاصيل الهامة
            حول شراء المقابر و سنحدد لك جميع الأماكن الخاصة بنا والكثير من
            العروض والخصومات على جميع اسعارنا وسنقوم بالوصول إلى السعر المناسب
            للميزانية الخاصة بك.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 max-md:grid-cols-1">
        {project.moreImages.map((e, i) => {
          return (
            <motion.div
              key={i}
              initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeUp}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                className={"w-full object-cover"}
                style={{ height: 420 }}
                src={e}
                alt="e"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </div>
      <div className=" flex">
        <Link
          onClick={scrollToTop}
          to={project.prevHref}
          id="prev-btn"
          className="w-2/5  hover:text-red-500  py-7 flex justify-center items-center gap-3"
        >
          <FaArrowLeft className="prev-arrow transition-all" />
          <p className="transition-all">المنشور السابق</p>
        </Link>
        <div className="w-1/5 py-7 border-l-2 border-r-2 flex justify-center items-center">
          <FaWindows />
        </div>
        <Link
          onClick={scrollToTop}
          to={project.nextHref}
          id="next-btn"
          className="w-2/5  hover:text-red-500  py-7 flex justify-center items-center gap-3"
        >
          <p className="transition-all">المقبرة الاتية</p>
          <FaArrowRight className="next-arrow transition-all " />
        </Link>
      </div>
    </div>
  );
};

export default AboutProject;
