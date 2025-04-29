import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faMessage, faShare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import InstagramProfile from "../InstagramProfile";
import ProfileCard from "../ProfileCard";
import SocialIcons from "../SocialIcons";
import TrendingPostsSidebar from "../TrendingPostSidebar";
import SliderCard from "../SliderCard";
import td1 from "../../images/td1.jpg";
import td2 from "../../images/td1.jpg";
import td3 from "../../images/td3.jpg";
import td4 from "../../images/td4.jpg";
import td5 from "../../images/td5.jpg";
import td6 from "../../images/td6.jpg";
import td7 from "../../images/td7.jpg";
import td8 from "../../images/td8.jpg";
import td9 from "../../images/td9.jpg";
import td10 from "../../images/td10.jpg";
import td11 from "../../images/td11.jpg";
import td12 from "../../images/td12.jpg";
import td13 from "../../images/td13.jpg";
import td14 from "../../images/td14.jpg";
import td15 from "../../images/td15.jpg";
import td16 from "../../images/td16.jpg";
import td17 from "../../images/td17.jpg";
import td18 from "../../images/td18.jpg";
import td19 from "../../images/td19.jpg";
import td20 from "../../images/td20.jpg";
import td21 from "../../images/td21.jpg";
import td22 from "../../images/td22.jpg";
import td23 from "../../images/td23.jpg";
import td24 from "../../images/td24.jpg";
import td25 from "../../images/td25.jpg";
import td26 from "../../images/td26.jpg";
import td27 from "../../images/td27.jpg";
import td28 from "../../images/td28.jpg";
import td29 from "../../images/td29.jpg";
import td30 from "../../images/td30.jpg";
import td31 from "../../images/td31.jpg";
import td32 from "../../images/td32.jpg";
import td33 from "../../images/td33.jpg";
import td34 from "../../images/td34.jpg";
import td35 from "../../images/td35.png";
import td36 from "../../images/td36.jpg";
import td37 from "../../images/td37.jpg";
import td38 from "../../images/td38.jpg";
import td39 from "../../images/td39.jpg";
import td40 from "../../images/td40.jpg";
import td41 from "../../images/td41.jpg";
import td42 from "../../images/td42.jpg";
import td43 from "../../images/td43.jpg";
import td44 from "../../images/td44.jpg";
import ballerina from "../../images/ballerina.jpg";

export default function PageThree() {
  const productsTwo = [
    {
      id: 1,
      category: "LIFESTYLE",
      title: "5 Artworks That Celebrate Strong Women",
      image: td25,
      comments: 0,
      views: "1.3k",
    },
    {
      id: 2,
      category: "INTERIOR",
      title: "Has Shock Art Become an Obsolete Term",
      image: td26,
      comments: 0,
      views: "1.3k",
    },
    {
      id: 3,
      category: "TRAVEL",
      title: "7 21st-Century Artworks You Need to Know Now",
      image: td27,
      comments: 0,
      views: "1.3k",
    },
  ];

  const settingsTwo = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      img: td1,
      category: "STYLE",
      title: "6 Winning Artists Take On Modern Photography",
      date: "JOANNA WELLICK . APRIL 28,2019",
    },
    {
      id: 2,
      img: td2,
      category: "STYLE",
      title: "How Not To Be Loud: Artists Against the Economy",
      date: "JOANNA WELLICK . APRIL 28,2019",
    },
    {
      id: 3,
      img: td3,
      category: "STYLE",
      title: "The 21st Century Art Movement - What is it?",
      date: "JOANNA WELLICK . APRIL 28,2019",
    },
    {
      id: 4,
      img: td4,
      category: "STYLE",
      title: "10 Famous Female Painters Every Art Lover Should Know",
      date: "JOANNA WELLICK . APRIL 28,2019",
    },
    {
      id: 5,
      img: td5,
      category: "STYLE",
      title: "8 of the Most Shocking Artworks Throughout History",
      date: "JOANNA WELLICK . APRIL 28,2019",
    },
    {
      id: 6,
      img: td6,
      category: "STYLE",
      title: "10 Interactive Street Art Works That Rocked",
      date: "JOANNA WELLICK . APRIL 28,2019",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-gray-300">
      <div
        className="relative w-full h-96 bg-cover mb-10 bg-center lg:bg-fixed flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${td15})` }}
      >
        {/* Semi-transparent black overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Text Content Container */}
        <div className="text-center text-gray-200 px-4 sm:px-6 md:px-8 max-w-4xl relative z-10">
          {/* Subheading */}
          <h2 className="text-sm sm:text-base lg:text-xs font-bold mb-1 uppercase tracking-widest">
            Casual & Everyday
          </h2>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Effortlessly blend comfort <br className="hidden sm:block" /> &
            style!
          </h1>

          {/* Description */}
          <h3 className="text-sm sm:text-base lg:text-md mb-8 text-gray-300 font-semibold">
            Effortlessly blend comfort and style with our Casual & Everyday
            collection, featuring cozy sweaters, versatile denim, laid-back
            tees, and relaxed-fit joggers for your everyday adventures.
          </h3>

          {/* Call-to-Action Button */}
          <a
            href="#"
            className="inline-block px-8 py-3 text-sm border border-white text-white font-semibold hover:text-[#16bb7c]"
          >
            VIEW COLLECTION
          </a>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Left Social Sidebar - Fixed width and sticky */}
        <div className="hidden  lg:block order-first w-16 lg:w-20 xl:w-20 flex-shrink-0">
          <div className="h-full w-full p-2 lg:p-4 transition-all duration-300 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
            <div className="flex flex-col items-center justify-start space-y-8 h-full py-8">
              <div className="text-center group">
                <h2 className="text-xl font-bold text-white">477</h2>
                <h2 className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                  SHARE
                </h2>
              </div>
              <div className="text-center group">
                <h2 className="text-xl font-bold text-white">217</h2>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-500 text-xl mt-2 group-hover:text-blue-400 transition-colors"
                />
              </div>
              <div className="text-center group">
                <h2 className="text-xl font-bold text-white">477</h2>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-blue-400 text-xl mt-2 group-hover:text-blue-300 transition-colors"
                />
              </div>
              <div className="text-center group">
                <h2 className="text-xl font-bold text-white">216</h2>
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="text-red-500 text-xl mt-2 group-hover:text-red-400 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Article Content - Center Column */}
          <div className="flex-1 py-8 px-4 md:px-8 lg:px-12 max-w-4xl mx-auto">
            <div>
              <div className="space-y-10">
                <div className="text-center">
                  <div className="flex items-start">
                    <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-700 mr-3 mt-1">
                      S
                    </div>
                    <p className="text-sm leading-relaxed flex-1 -mt-1">
                      tructured gripped tape invisible moulded cups for suppor
                      firm hold strong powermesh front liner sport detail.
                      Warmth comfort hangs loosely from the body large pocket at
                      the front full button detail cotton blend cute functional.
                      Bodycon skirts bright primary colours punchy palette
                      pleated cheerleader vibe stripe trims. Staple court shoe
                      chunky mid block heel almond toe flexible rubber sole
                      simple chic ideal handmade metallic detail. Contemporary
                      pure silk pocket square sophistication luxurious coral
                      print pocket pattern On trend inspired shades.
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    Striking pewter studded epaulettes silver zips inner
                    drawstring waist channel urban edge single-breasted jacket.
                    Engraved attention to detail elegant with neutral colours
                    scheme quartz leather strap fastens with a pin a buckle
                    clasp.
                  </p>
                  <p className="text-sm text-gray-500 mb-10">
                    Workwear bow detailing a slingback buckle strap stiletto
                    heel timeless go-to shoe sophistication slipper shoe. Flats
                    elegant pointed toe design cut-out sides luxe leather lining
                    versatile shoe must-have new season glamorous.
                  </p>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Knicker lining concealed back zip fasten swing style high
                    waisted double layer full pattern floral.
                  </h1>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-8">
                    TIMELESS CLEAN PERFUME
                  </h4>
                  <SocialIcons />
                </div>
                <div className="space-y-8">
                  <p>
                    Foam padding in the insoles leather finest quality staple
                    flat slip-on design pointed toe off-duty shoe. Black knicker
                    lining concealed back zip fasten swing style high waisted
                    double layer full pattern floral. Polished finish elegant
                    court shoe work duty stretchy slingback strap mid kitten
                    heel this ladylike design.
                  </p>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>Crisp fresh iconic elegant timeless clean perfume</li>
                    <li>Neck straight sharp silhouette and dart detail</li>
                    <li>
                      Machine wash cold slim fit premium stretch selvedge denim
                      comfortable low waist
                    </li>
                  </ul>
                  <p>
                    See-through delicate embroidered organza blue lining luxury
                    acetate-mix stretch pleat detailing. Leather detail shoulder
                    contrasting colour contour stunning silhouette working
                    peplum. Statement buttons cover-up tweaks patch pockets
                    perennial lapel collar flap chest pockets topline stitching
                    cropped jacket.
                  </p>
                  <img
                    className="w-full h-auto rounded-lg object-cover"
                    src={td35}
                    alt="Featured content"
                  />
                  <p>
                    Effortless comfortable full leather lining eye-catching
                    unique detail to the toe low 'cut-away' sides clean and
                    sleek. Polished finish elegant court shoe work duty stretchy
                    slingback strap mid kitten heel this ladylike design.
                  </p>

                  {/* Share Section */}
                  <div className="py-8">
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <div className="text-center">
                        <h3 className="text-xl font-bold">477</h3>
                        <h3 className="text-xs text-gray-400 uppercase">
                          SHARES
                        </h3>
                      </div>
                      <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded transition-colors">
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="text-blue-500"
                        />
                        <span className="text-xs">
                          SHARE <span className="font-bold">216</span>
                        </span>
                      </button>
                      <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded transition-colors">
                        <FontAwesomeIcon
                          icon={faPinterest}
                          className="text-red-500"
                        />
                        <span className="text-xs">
                          PIN IT <span className="font-bold">216</span>
                        </span>
                      </button>
                      <button className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded transition-colors">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="text-blue-400"
                        />
                      </button>
                      <button className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded transition-colors">
                        <FontAwesomeIcon
                          icon={faMessage}
                          className="text-gray-300"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-12">
                    {/* Related Topics */}
                    <h3 className="text-lg font-semibold mb-4 w-full">
                      Related Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "#IDEAS",
                        "#INDIE",
                        "#LONG ROAD",
                        "#LOOKBOOKS",
                        "#ORIGINALS",
                        "#SWEATSHIRTS",
                        "#VIDEO",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-sm rounded-full cursor-pointer transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
                    <img
                      className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover"
                      src={td10}
                      alt="Joanna Wellick"
                    />
                    <div>
                      <h1 className="text-xl font-bold mb-2">Joanna Wellick</h1>
                      <p className="text-gray-400">
                        Sed cras nec a nulla sapien adipiscing ut etiam. In sem
                        viverra mollis metus quam adipiscing vel nascetur
                        condimentum felis sapien. Pede consequat laoreet enim
                        sit aliquet mollis semper.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <section className="bg-black py-16 px-4 sm:px-8 my-16 rounded-lg">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-medium text-zinc-100 mb-4">
                    Sign Up for Our Newsletters
                  </h2>
                  <p className="text-xl text-zinc-400 mb-8">
                    Get notified of the best deals on our WordPress themes.
                  </p>

                  <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
                    <input
                      className="flex-grow px-5 py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <button className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors duration-200">
                      SUBSCRIBE
                    </button>
                  </div>

                  <div className="flex items-start mt-8 max-w-2xl mx-auto">
                    <input
                      type="checkbox"
                      id="terms-checkbox"
                      className="mt-1 mr-3"
                    />
                    <label
                      htmlFor="terms-checkbox"
                      className="text-xs text-zinc-400 text-left"
                    >
                      BY CHECKING THIS BOX, YOU CONFIRM THAT YOU HAVE READ AND
                      ARE AGREEING TO OUR TERMS OF USE REGARDING THE STORAGE OF
                      THE DATA SUBMITTED THROUGH THIS FORM.
                    </label>
                  </div>
                </div>
              </section>
              <div className="mt-10 text-center p-4 sm:p-10">
                <h2 className="font-bold text-white mb-10">
                  You May Also Like
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative transition-transform duration-300 hover:scale-[1.02]"
                    >
                      {/* Image with hover overlay */}
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-full h-[200px] object-cover"
                        />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="text-center">
                            <button className="bg-white text-black px-4 py-2 text-sm font-bold hover:bg-black hover:text-white transition-all duration-300 rounded-full">
                              VIEW POST
                            </button>
                            <div className="flex justify-center mt-4 space-x-4">
                              <FontAwesomeIcon
                                icon={faShare}
                                className="text-white hover:text-gray-300 cursor-pointer w-5 h-5"
                              />
                              <FontAwesomeIcon
                                icon={faHeart}
                                className="text-white hover:text-gray-300 cursor-pointer w-5 h-5"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="text-gray-300 mt-4 p-2">
                        <h2 className="font-bold text-xs uppercase tracking-wide">
                          {product.category}
                        </h2>
                        <h2 className="text-xl mt-2 font-bold line-clamp-2">
                          {product.title}
                        </h2>
                        <h5 className="text-xs mt-2 text-gray-400">
                          {product.date}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="relative top-7 border-t-1 border-zinc-800" />
              </div>
              <hr className="relative top-7 border-t-1 border-zinc-800" />

              <div className="py-12 px-4 sm:px-6 bg-zinc-900 text-white text-left rounded-lg">
                <div className="max-w-4xl mx-auto md:mx-24">
                  <h1 className="text-4xl font-bold text-left">
                    Leave a Reply
                  </h1>
                  <h3 className="text-md font-semibold text-left text-gray-500 my-4">
                    Your email address will not be published. Required fields
                    are marked <span className="text-red-700">*</span>
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-left text-gray-700"
                      >
                        Comment <span className="text-red-700">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full p-3 mt-2 bg-zinc-800 border border-gray-600 rounded-md"
                        required
                      ></textarea>
                    </div>
                    {/* Name and Email on the same line */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-lg font-semibold"
                        >
                          Name <span className="text-red-700">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 mt-2 bg-zinc-800 border border-gray-600 rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-lg font-semibold"
                        >
                          Email <span className="text-red-700">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 mt-2 bg-zinc-800 border border-gray-600 rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-lg font-semibold"
                        >
                          Website <span className="text-red-700">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-3 mt-2 bg-white border border-gray-600 rounded-md"
                          required
                        />
                      </div>
                    </div>

                    {/* Newsletter Checkbox */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="newsletter" className="text-lg">
                        Send me your Newsletter
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="text-left">
                      <button
                        type="submit"
                        className="bg-zinc-700 text-white font-semibold py-3 px-6 rounded-md mt-4 hover:bg-zinc-600"
                      >
                        POST COMMENT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[30%] lg:max-w-sm mt-10 lg:mt-0 lg:ml-5 lg:pl-5 space-y-8 px-4 md:px-0">
            {/* 1) Carousel (non-sticky) */}
            <div className="hidden lg:block">
              <Slider {...settingsTwo}>
                {productsTwo.map((product) => (
                  <SliderCard key={product.id} product={product} />
                ))}
              </Slider>
            </div>

            {/* Instagram Profile */}
            <InstagramProfile
              profileImg={td28}
              username="CODESUPPLY.CO"
              handle="CODE SUPPLY CO."
              stats="33 FOLLOWING 35 FOLLOWERS"
              images={[td21, td22, td23, td24, td29, td30]}
            />

            {/* Profile Card */}
            <ProfileCard
              profileImg={td28}
              username="CODESUPPLY.CO"
              handle="CODE SUPPLY CO."
              stats="3 FOLLOWING 129 FOLLOWERS"
              bio="It's been a long way, but we've just reached a huge 10k sales milestone..."
            />

            {/* Trending Posts Sidebar */}
            <TrendingPostsSidebar
              posts={[
                {
                  img: td9,
                  title: "The 14 Best Art Museums in the World",
                  date: "MAY 11, 2019",
                  views: "230 VIEWS",
                },
                {
                  img: td10,
                  title: "The 14 Best Art Museums in the World",
                  date: "MAY 11, 2019",
                  views: "2.4k VIEWS",
                },
                {
                  img: td11,
                  title: "The 14 Best Art Museums in the World",
                  date: "MAY 11, 2019",
                  views: "1.9k VIEWS",
                },
                {
                  img: td12,
                  title: "The 14 Best Art Museums in the World",
                  date: "MAY 11, 2019",
                  views: "2.6k VIEWS",
                },
              ]}
            />
            <div className="sticky top-0 z-10">
              <div className="w-full p-6">
                <img
                  className="w-full h-auto object-cover rounded-lg"
                  src={td31}
                  alt="Sticky content"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
