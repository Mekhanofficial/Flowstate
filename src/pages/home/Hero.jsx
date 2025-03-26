// import { Link } from "react-router-dom";
import ballerina from "../../pictures/ballerina.jpg";
import td1 from "../../pictures/td1.jpg";
import td2 from "../../pictures/td2.jpg";
import td3 from "../../pictures/td3.jpg";
import td4 from "../../pictures/td4.jpg";
import td5 from "../../pictures/td5.jpg";
import td6 from "../../pictures/td6.jpg";
import td7 from "../../pictures/td7.jpg";
import td8 from "../../pictures/td8.jpg";
import td9 from "../../pictures/td9.jpg";
import td10 from "../../pictures/td10.jpg";
import td11 from "../../pictures/td11.jpg";
import td12 from "../../pictures/td12.jpg";
import td13 from "../../pictures/td13.jpg";
import td14 from "../../pictures/td14.jpg";
import td15 from "../../pictures/td15.jpg";
import td16 from "../../pictures/td16.jpg";
import td17 from "../../pictures/td17.jpg";
import td18 from "../../pictures/td18.jpg";
import td19 from "../../pictures/td19.jpg";
import td20 from "../../pictures/td20.jpg";
import td21 from "../../pictures/td21.jpg";
import td22 from "../../pictures/td22.jpg";
import td23 from "../../pictures/td23.jpg";
import td24 from "../../pictures/td24.jpg";
import td25 from "../../pictures/td25.jpg";
import td26 from "../../pictures/td26.jpg";
import td27 from "../../pictures/td27.jpg";
import td28 from "../../pictures/td28.jpg";
import td29 from "../../pictures/td29.jpg";
import td30 from "../../pictures/td30.jpg";
import td31 from "../../pictures/td31.jpg";
import td32 from "../../pictures/td32.jpg";
import td33 from "../../pictures/td33.jpg";
import td34 from "../../pictures/td34.jpg";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronDown,
  faEye,
  faHeart,
  faMessage,
  faReply,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faVimeo,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function HomeHeroPage() {
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

  const navigationItems = [
    {
      title: "DEMOS",
      subItems: ["DEMOS 1-13", "DEMOS 14-26", "DEMOS 27-39", "DEMOS 40-50"],
    },
    {
      title: "FEATURES",
    },
    {
      title: "POST",
    },
    {
      title: "CATEGORIES",
      subItems: ["Lifestyle", "Style", "Interior", "Travel"],
    },
    {
      title: "SHOP",
    },
    {
      title: "BUY NOW",
    },
  ];

  const recentArticles = [
    {
      img: td32,
      title: "8 Ways to Use Digital Drawing in the Art Room",
      date: "MAY 24,2019",
    },
    {
      img: td33,
      title: "Collector Favorites: Bestselling Artists of the Year",
      date: "MAY 23,2019",
    },
    {
      img: td34,
      title: "8 Essential Steps to Collecting Emerging Art",
      date: "MAY 23,2019",
    },
    {
      img: td26,
      title: "Why Successful People Are Also Art Collectors",
      date: "MAY 23,2019",
    },
  ];


  // Reusable Components
  const SocialShare = () => (
    <div className="flex mt-5 items-center justify-center gap-4 text-zinc-500">
      <h2 className="text-sm">SHARE</h2>
      <FontAwesomeIcon className="h-4" icon={faArrowRight} />
      <FontAwesomeIcon className="h-4" icon={faFacebook} />
      <FontAwesomeIcon className="h-4" icon={faTwitter} />
      <FontAwesomeIcon className="h-4" icon={faPinterest} />
    </div>
  );

  const ArticleCard = ({
    image,
    category,
    title,
    author,
    description,
    imageSize = "w-full",
  }) => (
    <div className="text-center text-zinc-400">
      <img className={`${imageSize} object-cover mx-auto`} src={image} alt="" />
      <h2 className="text-xs mt-10 font-semibold">{category}</h2>
      <h2 className="text-2xl font-bold">{title}</h2>
      <h5 className="text-xs mt-2 mb-5 font-bold">{author} . NO COMMENTS</h5>
      {description && <h2 className="text-sm">{description}</h2>}
      <button className="bg-zinc-700 p-2 text-xs mt-2 w-24 font-bold">
        VIEW POST
      </button>
      <SocialShare />
    </div>
  );

  const FeaturedImageCard = ({ image, category, title, className }) => (
    <div className={`relative ${className}`}>
      <img className="h-full w-full object-cover" src={image} alt="" />
      <div className="absolute inset-0 flex items-center justify-center text-white z-10 p-20">
        <div className="text-center">
          <h3 className="font-bold text-sm mb-3">{category}</h3>
          <h1 className="text-3xl font-semibold">{title}</h1>
          <div className="flex mt-5 items-center justify-center gap-4 text-zinc-200">
            <h2>SHARE</h2>
            <FontAwesomeIcon className="h-4" icon={faArrowRight} />
            <FontAwesomeIcon className="h-4" icon={faFacebook} />
            <FontAwesomeIcon className="h-4" icon={faTwitter} />
            <FontAwesomeIcon className="h-4" icon={faPinterest} />
          </div>
        </div>
      </div>
    </div>
  );

  const TrendingPosts = ({ posts }) => (
    <div className="text-zinc-500 text-center mt-20 font-bold">
      <h2 className="text-sm mb-10">TRENDING POSTS</h2>
      {posts.map((post, index) => (
        <div key={index} className="ml-20 flex items-center text-left mb-3">
          <img
            className="h-[90px] w-[90px] object-cover"
            src={post.img}
            alt="Trending Post"
          />
          <div className="text-sm ml-2">
            <h2>{post.title}</h2>
            <h2 className="text-xs">{post.date}</h2>
          </div>
        </div>
      ))}
    </div>
  );

  const InstagramGrid = ({ images }) => (
    <div className="text-center text-white mt-24 font-bold">
      <h1>INSTAGRAM</h1>
      <div className="my-20 grid gap-2 grid-cols-2 overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            className="h-[120px] w-[200px] object-cover"
            src={img}
            alt="Instagram Post"
          />
        ))}
      </div>
      <hr />
    </div>
  );

  const SliderCard = ({ product }) => (
    <div className="relative text-center mb-6 mt-24">
      <img
        className="h-[400px] w-[350px] object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="absolute inset-0 flex items-center justify-center text-zinc-300 mr-20 z-10 p-5">
        <div className="text-center">
          <h3 className="font-semibold text-sm mb-3">{product.category}</h3>
          <h1>{product.title}</h1>
          <div className="flex justify-center items-center gap-2 text-xs mt-3">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon className="h-4" icon={faMessage} />
              <h2>{product.comments} .</h2>
            </div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon className="h-4" icon={faEye} />
              <h2>{product.views}</h2>
            </div>
          </div>
          <button className="bg-zinc-700 p-2 text-xs mt-2 w-24 font-bold">
            VIEW POST
          </button>
        </div>
      </div>
    </div>
  );

  const InstagramProfile = ({
    profileImg,
    username,
    handle,
    stats,
    images,
  }) => (
    <div className="text-center text-zinc-300 text-sm mt-20">
      <h1 className="font-bold">INSTAGRAM</h1>
      <div className="mt-5 mx-10 mb-2 flex justify-center">
        <img
          className="h-[70px] w-[70px] rounded-full object-cover"
          src={profileImg}
          alt="Profile"
        />
      </div>
      <h2 className="font-bold">{username}</h2>
      <h2 className="text-zinc-600 text-xs mt-1">{handle}</h2>
      <h2 className="text-zinc-600 text-sm">{stats}</h2>
      <div className="grid grid-cols-3 mt-5">
        {images.map((img, index) => (
          <img
            key={index}
            className="h-[100px] w-[130px] object-cover"
            src={img}
            alt="Instagram Post"
          />
        ))}
      </div>
      <button className="bg-zinc-700 p-2 text-xs mt-10 w-24 font-bold">
        FOLLOW
      </button>
      <h2 className="font-bold mt-4">FOLLOW US</h2>
      <SocialIcons />
    </div>
  );

  const ProfileCard = ({ profileImg, username, handle, stats, bio }) => (
    <div className="mt-10 p-10 bg-zinc-800 ml-7 mr-7 text-center">
      <div className="justify-center flex">
        <img
          className="h-[50px] w-[50px] rounded-full object-cover"
          src={profileImg}
          alt="Profile"
        />
      </div>
      <div className="text-center text-zinc-500">
        <h2 className="font-bold">{username}</h2>
        <h2 className="text-zinc-600 text-xs">{handle}</h2>
        <h2 className="text-zinc-600 mt-2 text-xs">{stats}</h2>
        <h2 className="font-semibold mt-2 text-zinc-300">{bio}</h2>
        <h2 className="text-xs font-bold mt-2 text-zinc-700">
          OVER A YEAR AGO
        </h2>
        <div className="text-zinc-300">
          <FontAwesomeIcon className="h-4 p-2 rounded-3xl" icon={faReply} />
          <FontAwesomeIcon className="h-4 p-2 rounded-3xl" icon={faRetweet} />
          <FontAwesomeIcon className="h-4 p-2 rounded-3xl" icon={faHeart} />
        </div>
        <button className="bg-zinc-700 p-2 text-zinc-400 text-xs mt-2 w-24 font-bold">
          FOLLOW
        </button>
      </div>
    </div>
  );

  const SocialIcons = () => (
    <div className="flex mt-5 gap-4 justify-center text-zinc-500">
      {[
        { icon: faFacebook, count: "53" },
        { icon: faTwitter, count: "71k" },
        { icon: faInstagram, count: "51" },
        { icon: faPinterest, count: "15k" },
        { icon: faYoutube, count: "192k" },
        { icon: faVimeo, count: "21" },
      ].map((item, index) => (
        <div key={index}>
          <FontAwesomeIcon
            className="h-4 bg-black p-2 rounded-3xl"
            icon={item.icon}
          />
          <h2>{item.count}</h2>
        </div>
      ))}
    </div>
  );

  const TrendingPostsSidebar = ({ posts }) => (
    <div className="text-zinc-400 items-start text-center mt-20 font-bold">
      <h2 className="text-sm mb-10">TRENDING POSTS</h2>
      {posts.map((post, index) => (
        <div key={index} className="ml-10 flex items-center text-left mb-3">
          <img
            className="h-[90px] w-[90px] object-cover"
            src={post.img}
            alt="Trending Post"
          />
          <div className="text-sm ml-2">
            <h2>{post.title}</h2>
            <h2 className="text-xs">
              {post.date} .{" "}
              <span className="text-zinc-600 text-xs">{post.views}</span>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );

  const DropdownItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <li>
        <div
          className="flex justify-between items-center py-3 border-b border-zinc-800 cursor-pointer group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-white group-hover:text-blue-400 transition-colors">
            {item.title}
          </span>
          <FontAwesomeIcon
            className={`h-3 text-zinc-500 group-hover:text-white transition-all duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            icon={faChevronDown}
          />
        </div>

        {item.subItems && isOpen && (
          <ul className="ml-4 mt-2 space-y-3 animate-fadeIn">
            {item.subItems.map((subItem) => (
              <li
                key={subItem}
                className="flex justify-between items-center py-1"
              >
                <span className="text-xs text-zinc-400 hover:text-white cursor-pointer transition-colors">
                  {subItem}
                </span>
                <FontAwesomeIcon
                  className="h-3 text-zinc-500"
                  icon={faChevronDown}
                />
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };


  return (
    <>
      <section className="bg-zinc-950 overflow-x-hidden">
        <div className="relative top-20 p-10 mx-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: td2,
                category: "LIFESTYLE",
                title: "8 Ways to Use Digital Drawing in the Art Room",
                author: "JOANNA WELLICK . APRIL 28,2019",
              },
              {
                image: td1,
                category: "INTERIOR",
                title:
                  "Interior Collector Favorites: Bestselling Artists of the Year",
                author: "JOANNA WELLICK . APRIL 28,2019",
              },
              {
                image: td6,
                category: "TRAVEL",
                title: "8 Essential Steps to Collecting Emerging Art",
                author: "JOANNA WELLICK . APRIL 28,2019",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="sticky top-0">
                  <img
                    className="w-full h-[300px] sm:h-[250px] md:h-[300px] object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-white z-10 p-5">
                  <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">{item.category}</h3>
                    <h1 className="text-3xl sm:text-2xl font-bold">
                      {item.title}
                    </h1>
                    <h5 className="text-xs mt-5 font-bold">{item.author}</h5>
                    <button className="bg-zinc-700 p-2 text-xs mt-2 w-24 font-bold">
                      VIEW POST
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-40 text-center mx-10">
          <h2 className="font-bold text-white mb-10">TRENDING POSTS</h2>

          {/* Slider Component */}
          <div className="slider-container mx-10">
            <Slider {...settings}>
              {products.map((product) => (
                <div key={product.id} className="slider-item ">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="slider-image p-10"
                    style={{
                      position: "relative",
                      height: "300px",
                      width: "500px",
                      objectFit: "cover",
                      zIndex: 1,
                    }}
                  />
                  <div className="slider-info text-gray-300  mt-5">
                    <h2 className="font-bold text-xs">{product.category}</h2>
                    <h2 className="text-xl mt-3 font-bold">{product.title}</h2>
                    <h5 className="text-xs mt-2">{product.date}</h5>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <hr className="relative top-7 border-t-1 border-zinc-800" />
        </div>

        <div className="flex flex-col lg:flex-row mx-4 md:mx-10">
          {/* Left Content Section */}
          <div className="flex-1">
            <div className="text-gray-300 text-center mt-10 lg:mt-20 mx-auto max-w-4xl">
              <h2 className="text-xs mb-5 font-bold">LIFESTYLE</h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Why Successful People Are Also Art Collectors
              </h1>
              <h5 className="text-xs mt-5 mb-10 font-bold">
                JOANNA WELLICK . APRIL 28,2019 . NO COMMENTS
              </h5>

              <img
                className="w-full mx-auto h-64 md:h-96 object-cover"
                src={td7}
                alt="Ballerina"
              />

              <h2 className="mt-10 text-gray-400 text-sm md:text-base lg:text-lg">
                Structured gripped tape invisible moulded cups for support firm
                hold...
              </h2>

              <button className="bg-zinc-700 p-2 text-xs mt-4 w-24 font-bold mx-auto block hover:bg-zinc-600 transition">
                VIEW POST
              </button>

              <SocialShare className="mt-6" />
            </div>

            {/* Articles Grid */}
            <div className="mt-16 lg:mt-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              {/* Left Column Articles */}
              <div className="space-y-16 md:space-y-20">
                <ArticleCard
                  image={td8}
                  category="STYLE"
                  title="The Best Way to Introduce Students to 3-D Pens"
                  author="ELLIOT ALDERSON AND JOANNA WELLICK . MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups..."
                  className="max-w-full"
                />

                <TrendingPosts
                  posts={[
                    {
                      img: td9,
                      title: "The 14 Best Art Museums in the World",
                      date: "MAY 11,2019",
                    },
                    {
                      img: td10,
                      title: "The 14 Best Art Museums in the World",
                      date: "MAY 11,2019",
                    },
                    {
                      img: td11,
                      title: "The 14 Best Art Museums in the World",
                      date: "MAY 11,2019",
                    },
                    {
                      img: td12,
                      title: "The 14 Best Art Museums in the World",
                      date: "MAY 11,2019",
                    },
                  ]}
                  className="max-w-full"
                />

                <FeaturedImageCard
                  image={td2}
                  category="LIFESTYLE"
                  title="6 Contemporary Artists Questioning Gender Norms"
                  className="h-[300px] md:h-[400px] w-full"
                />

                <div className="flex justify-center">
                  <img
                    className="h-[200px] md:h-[250px] w-full max-w-[300px] object-cover"
                    src={td16}
                    alt="Decorative"
                  />
                </div>

                <ArticleCard
                  image={td15}
                  category="STYLE"
                  title="Art and Wellbeing: The Healing Power of Art"
                  author="ELLIOT ALDERSON. MAY 21,2019"
                  description="Structured gripped tape invisible moulded cups..."
                  className="max-w-full"
                />

                <ArticleCard
                  image={td17}
                  category="LIFESTYLE"
                  title="The Future of the Art Market: 4 Trends"
                  author="Joanna Wellick. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups..."
                  className="max-w-full"
                />

                <FeaturedImageCard
                  image={td2}
                  category="LIFESTYLE"
                  title="6 Contemporary Artists Questioning Gender Norms"
                  className="h-[400px] md:h-[600px] w-full"
                />

                <ArticleCard
                  image={td20}
                  category="LIFESTYLE"
                  title="Top 6 TV Shows and Films for Art Lovers"
                  author="Joanna Wellick. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups..."
                  className="max-w-full"
                />
              </div>

              {/* Right Column Articles */}
              <div className="space-y-16 md:space-y-20 mt-10 lg:mt-0">
                <ArticleCard
                  image={ballerina}
                  category="TRAVEL"
                  title="Arts Philanthropy: Should Museums Refuse Dirty Money"
                  author="ELLIOT ALDERSON. MAY 22,2019"
                  className="max-w-full"
                />

                <ArticleCard
                  image={td13}
                  category="INTERIOR"
                  title="How to Start an Art Collection on Any Budget"
                  author="ELLIOT ALDERSON. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups..."
                  className="max-w-full"
                />

                <ArticleCard
                  image={td14}
                  category="INTERIOR"
                  title="How to Start an Art Collection on Any Budget"
                  author="ELLIOT ALDERSON. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups..."
                  className="h-[500px] md:h-[600px] w-full"
                />

                <ArticleCard
                  image={td18}
                  category="INTERIOR"
                  title="7 Cracking Christmas Outfits From Art History"
                  author="Joanna Wellick. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups..."
                  className="max-w-full"
                />

                <div className="text-center bg-zinc-800 p-6 rounded">
                  <h1 className="font-bold text-sm text-zinc-500 mb-4">
                    FOLLOW US
                  </h1>
                  <SocialIcons className="justify-center" />

                  <ArticleCard
                    image={td19}
                    category="LIFESTYLE"
                    title="5 Art-Tastic Hotels Around the Globe"
                    author="Joanna Wellick. MAY 22,2019"
                    description="Structured gripped tape invisible moulded cups..."
                    className="h-[500px] md:h-[700px] w-full mt-6"
                  />
                </div>

                <InstagramGrid
                  images={[td21, td22, td23, td24]}
                  className="max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[30%] mt-10 lg:mt-0 lg:ml-5 lg:pl-5 space-y-8">
            <div className="hidden lg:block">
              <Slider {...settingsTwo}>
                {productsTwo.map((product) => (
                  <SliderCard key={product.id} product={product} />
                ))}
              </Slider>
            </div>

            <InstagramProfile
              profileImg={td28}
              username="CODESUPPLY.CO"
              handle="CODE SUPPLY CO."
              stats="33 FOLLOWING 35 FOLLOWERS"
              images={[td21, td22, td23, td24, td29, td30]}
              className="hidden lg:block"
            />

            <ProfileCard
              profileImg={td28}
              username="CODESUPPLY.CO"
              handle="CODE SUPPLY CO."
              stats="3 FOLLOWING 129 FOLLOWERS"
              bio="It's been a long way, but we've just reached a huge 10k sales milestone..."
              className="hidden lg:block"
            />

            <TrendingPostsSidebar
              posts={[
                {
                  img: td9,
                  title: "The 14 Best Art Museums in the World",
                  date: "MAY 11,2019",
                  views: "230 VIEWS",
                },
                {
                  img: td10,
                  title: "The 14 Best Art Museums in the World",
                  date: "MAY 11,2019",
                  views: "2.4k VIEWS",
                },
                {
                  img: td11,
                  title: "The 14 Best Art Museums in the World",
                  date: "MAY 11,2019",
                  views: "1.9k VIEWS",
                },
                {
                  img: td12,
                  title: "The 14 Best Art Museums in the World",
                  date: "MAY 11,2019",
                  views: "2.6k VIEWS",
                },
              ]}
              className="hidden lg:block"
            />

            <div className="hidden lg:block sticky top-10 h-[600px]">
              <img
                className="h-full w-full object-cover"
                src={td31}
                alt="Sticky"
              />
              <div className="text-gray-300 text-center mt-10 lg:mt-20 mx-auto max-w-4xl">
                <h2 className="text-xs mb-5 font-bold">LIFESTYLE</h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Why Successful People Are Also Art Collectors
                </h1>
                <h5 className="text-xs mt-5 mb-10 font-bold">
                  JOANNA WELLICK . APRIL 28,2019 . NO COMMENTS
                </h5>

                <img
                  className="w-full mx-auto h-64 md:h-96 object-cover"
                  src={td7}
                  alt="Ballerina"
                />

                <h2 className="mt-10 text-gray-400 text-sm md:text-base lg:text-lg">
                  Structured gripped tape invisible moulded cups for support
                  firm hold...
                </h2>

                <button className="bg-zinc-700 p-2 text-xs mt-4 w-24 font-bold mx-auto block hover:bg-zinc-600 transition">
                  VIEW POST
                </button>

                <SocialShare className="mt-6" />
              </div>
              <FeaturedImageCard
                image={td2}
                category="LIFESTYLE"
                title="6 Contemporary Artists Questioning Gender Norms"
                className="h-[300px] md:h-[400px] w-full"
              />
              <ArticleCard
                image={td15}
                category="STYLE"
                title="Art and Wellbeing: The Healing Power of Art"
                author="ELLIOT ALDERSON. MAY 21,2019"
                description="Structured gripped tape invisible moulded cups..."
                className="max-w-full"
              />
              <div className="text-gray-300 text-center mt-10 lg:mt-20 mx-auto max-w-4xl">
                <h2 className="text-xs mb-5 font-bold">LIFESTYLE</h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Why Successful People Are Also Art Collectors
                </h1>
                <h5 className="text-xs mt-5 mb-10 font-bold">
                  JOANNA WELLICK . APRIL 28,2019 . NO COMMENTS
                </h5>

                <img
                  className="w-full mx-auto h-64 md:h-96 object-cover"
                  src={td7}
                  alt="Ballerina"
                />

                <h2 className="mt-10 text-gray-400 text-sm md:text-base lg:text-lg">
                  Structured gripped tape invisible moulded cups for support
                  firm hold...
                </h2>

                <button className="bg-zinc-700 p-2 text-xs mt-4 w-24 font-bold mx-auto block hover:bg-zinc-600 transition">
                  VIEW POST
                </button>

                <SocialShare className="mt-6" />
              </div>
            </div>

            {/* Mobile-only sidebar content */}
            <div className="lg:hidden space-y-8">
              <Slider {...settingsTwo}>
                {productsTwo.map((product) => (
                  <SliderCard key={product.id} product={product} />
                ))}
              </Slider>

              <TrendingPostsSidebar
                posts={[
                  {
                    img: td9,
                    title: "The 14 Best Art Museums in the World",
                    date: "MAY 11,2019",
                    views: "230 VIEWS",
                  },
                  {
                    img: td10,
                    title: "The 14 Best Art Museums in the World",
                    date: "MAY 11,2019",
                    views: "2.4k VIEWS",
                  },
                  {
                    img: td11,
                    title: "The 14 Best Art Museums in the World",
                    date: "MAY 11,2019",
                    views: "1.9k VIEWS",
                  },
                  {
                    img: td12,
                    title: "The 14 Best Art Museums in the World",
                    date: "MAY 11,2019",
                    views: "2.6k VIEWS",
                  },
                ]}
              />

              <div className="bg-zinc-800 p-6 rounded">
                <h3 className="text-xl font-bold mb-4">About The Blog</h3>
                <p className="text-gray-400 mb-4">
                  We explore the intersection of art, culture, and lifestyle.
                  Our mission is to bring you the most inspiring content from
                  the art world.
                </p>
                <button className="bg-zinc-700 hover:bg-zinc-600 text-white p-2 text-sm font-bold transition w-full">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Newsletter Section (remains same) */}
          <section className="bg-black py-16 px-8 my-16">
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
                  BY CHECKING THIS BOX, YOU CONFIRM THAT YOU HAVE READ AND ARE
                  AGREEING TO OUR TERMS OF USE REGARDING THE STORAGE OF THE DATA
                  SUBMITTED THROUGH THIS FORM.
                </label>
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="my-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
              {[td21, td22, td23, td24, td29, td30].map((imgSrc, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden group"
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={imgSrc}
                    alt={`Gallery item ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* 3-column layout */}
          <div className="my-16 flex flex-col lg:flex-row gap-8">
            {/* Recent Articles - Left Column */}
            <div className="lg:w-1/3 order-2 lg:order-1">
              <h3 className="text-lg font-semibold text-white mb-6">
                RECENT ARTICLES
              </h3>

              <div className="space-y-8">
                {recentArticles.map((article) => (
                  <article
                    key={article.title}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src={article.img}
                        alt={article.title}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1 group-hover:text-blue-400 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-xs text-zinc-500">{article.date}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Navigation - Middle Column */}
            <div className="lg:w-1/3 order-1 lg:order-2">
              <h3 className="text-lg font-semibold text-white mb-6">
                NAVIGATION
              </h3>

              <ul className="space-y-6">
                {navigationItems.map((item) => (
                  <DropdownItem key={item.title} item={item} />
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-white mt-12 mb-6">
                TAGS
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
                    className="px-3 py-1 bg-zinc-900 hover:bg-zinc-800 text-sm text-zinc-300 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Article - Right Column */}
            <div className="lg:w-1/3 order-3">
              <h3 className="text-lg font-semibold text-white mb-6">
                FEATURED
              </h3>

              <div className="text-left">
                <img
                  className="w-full h-auto object-cover mb-6"
                  src={td4}
                  alt="Featured article visual"
                  loading="lazy"
                />

                <span className="inline-block text-xs uppercase tracking-wider text-zinc-500 mb-2">
                  LIFESTYLE
                </span>
                <h2 className="text-xl font-medium text-white mb-4">
                  5 Art-Tastic Hotels Around the Globe
                </h2>
                <p className="text-sm text-zinc-400 font-medium mb-6">
                  Joanna Wellick • MAY 22, 2019 • NO COMMENTS
                </p>

                <p className="text-zinc-300 mb-6 leading-relaxed text-sm">
                  Structured gripped tape invisible moulded cups for sauppor
                  firm hold strong powermesh front liner sport detail. Warmth
                  comfort hangs loosely from the body large pocket at the front
                  full button…
                </p>

                <button className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium mb-6 transition-colors duration-200">
                  VIEW POST
                </button>

                <div className="flex items-center gap-6 text-zinc-500">
                  <span className="text-sm">SHARE</span>
                  <FontAwesomeIcon
                    className="h-3 hover:text-blue-500 cursor-pointer transition-colors"
                    icon={faArrowRight}
                  />
                  <FontAwesomeIcon
                    className="h-4 hover:text-blue-600 cursor-pointer transition-colors"
                    icon={faFacebook}
                  />
                  <FontAwesomeIcon
                    className="h-4 hover:text-blue-400 cursor-pointer transition-colors"
                    icon={faTwitter}
                  />
                  <FontAwesomeIcon
                    className="h-4 hover:text-red-600 cursor-pointer transition-colors"
                    icon={faPinterest}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="py-16 border-t border-zinc-800">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white">AnOther</h2>
              <nav className="flex justify-center flex-wrap gap-6 mt-6 mb-4">
                {["LIFESTYLE", "TRAVEL", "STYLE", "INTERIOR"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white hover:text-blue-400 text-sm font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <p className="text-zinc-500 text-sm">
                Lifestyle Blog & Magazine WordPress Theme
              </p>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
