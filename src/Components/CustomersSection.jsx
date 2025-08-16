import { TiStar } from "react-icons/ti";
import { MdVerified } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

const customers = [
  {
    title: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    title: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    title: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    title: "Emily T.",
    text: "Shopping here has been such a breeze. The checkout process is quick, and I love the fast shipping!",
  },
  {
    title: "Daniel R.",
    text: "Great variety, amazing deals, and excellent customer service. I found everything I needed in one place!",
  },
];

const CustomersSection = () => {
  const sliderRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(350);

  useEffect(() => {
    const updateScrollAmount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScrollAmount(280);
      } else if (width < 1024) {
        setScrollAmount(350);
      } else {
        setScrollAmount(420);
      }
    };

    updateScrollAmount();
    window.addEventListener("resize", updateScrollAmount);

    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 350;
      sliderRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-10 lg:mt-20 py-12 px-5 lg:px-10">
      <h2 className="font-integral font-bold text-3xl lg:text-5xl">
        OUR HAPPY CUSTOMERS
      </h2>
      <div className="flex items-center justify-end -mt-5 lg:mr-10 space-x-5 cursor-pointer">
        <span onClick={() => scroll(-1)}>
          <FaArrowLeft size={20} />
        </span>
        <span onClick={() => scroll(1)}>
          <FaArrowRight size={20} />
        </span>
      </div>
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-6 scroll-smooth no-scrollbar mt-10 snap-x "
      >
        {customers.map((item, index) => (
          <div
            key={index}
            className="w-[320px] lg:w-[400px] bg-white rounded-3xl border border-gray-200 p-6 shadow-sm flex-shrink-0 snap-center"
          >
            <span className="text-[#FFC633] flex text-2xl">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <TiStar key={index} />
                ))}
            </span>
            <h4 className="flex items-center font-satochi font-bold py-2">
              {item.title}
              <span className="text-[#01AB31] px-1">
                <MdVerified />
              </span>
            </h4>
            <p className="font-satochi text-black/60">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersSection;
