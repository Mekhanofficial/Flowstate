import td1 from "../../public/images/td1.jpg";
import td2 from "../../public/images/td2.jpg";
import td3 from "../../public/images/td3.jpg";
import td4 from "../../public/images/td4.jpg";
import td5 from "../../public/images/td5.jpg";
import td6 from "../../public/images/td6.jpg";
import td7 from "../../public/images/td7.jpg";
import td8 from "../../public/images/td8.jpg";
import td9 from "../../public/images/td9.jpg";
import td10 from "../../public/images/td10.jpg";
import td11 from "../../public/images/td11.jpg";
import td12 from "../../public/images/td12.jpg";
import td13 from "../../public/images/td13.jpg";
import td14 from "../../public/images/td14.jpg";
import td15 from "../../public/images/td15.jpg";
import td16 from "../../public/images/td16.jpg";
import td17 from "../../public/images/td17.jpg";
import td18 from "../../public/images/td18.jpg";
import td19 from "../../public/images/td19.jpg";
import td20 from "../../public/images/td20.jpg";
import td21 from "../../public/images/td21.jpg";
import td22 from "../../public/images/td22.jpg";
import td23 from "../../public/images/td23.jpg";
import td24 from "../../public/images/td24.jpg";
import td25 from "../../public/images/td25.jpg";
import td26 from "../../public/images/td26.jpg";
import td27 from "../../public/images/td27.jpg";
import td28 from "../../public/images/td28.jpg";
import td29 from "../../public/images/td29.jpg";
import td30 from "../../public/images/td30.jpg";
import td31 from "../../public/images/td31.jpg";
import td32 from "../../public/images/td32.jpg";
import td33 from "../../public/images/td33.jpg";
import td34 from "../../public/images/td34.jpg";
import ballerina from "../../public/images/ballerina.jpg";
import Slider from "react-slick";
import TrendingPosts from "./TrendingPost";
import ArticleCard from "./ArticleCard";
import SocialShare from "./SocialShare";
import InstagramGrid from "./InstagramGrid";
import FeaturedImageCard from "./FeaturedImageCard";
import InstagramProfile from "./InstagramProfile";
import ProfileCard from "./ProfileCard";
import SocialIcons from "./SocialIcons";
import TrendingPostsSidebar from "./TrendingPostSidebar";
import SliderCard from "./SliderCard";
import { Link } from "react-router-dom";

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
      link: "/page4",
    },
    {
      id: 2,
      img: td2,
      category: "STYLE",
      title: "How Not To Be Loud: Artists Against the Economy",
      date: "JOANNA WELLICK . APRIL 28,2019",
      link: "/page5",
    },
    {
      id: 3,
      img: td3,
      category: "STYLE",
      title: "The 21st Century Art Movement - What is it?",
      date: "JOANNA WELLICK . APRIL 28,2019",
      link: "/page6",
    },
    {
      id: 4,
      img: td4,
      category: "STYLE",
      title: "10 Famous Female Painters Every Art Lover Should Know",
      date: "JOANNA WELLICK . APRIL 28,2019",
      link: "/page7",
    },
    {
      id: 5,
      img: td5,
      category: "STYLE",
      title: "8 of the Most Shocking Artworks Throughout History",
      date: "JOANNA WELLICK . APRIL 28,2019",
      link: "/page8",
    },
    {
      id: 6,
      img: td6,
      category: "STYLE",
      title: "10 Interactive Street Art Works That Rocked",
      date: "JOANNA WELLICK . APRIL 28,2019",
      link: "/page9",
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

  return (
    <>
      <section className="bg-zinc-950 ">
        <div className="relative top-20 p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: td32,
                category: "LIFESTYLE",
                title: "8 Ways to Use Digital Drawing in the Art Room",
                author: "JOANNA WELLICK . APRIL 28,2019",
                link: "/Page1",
              },
              {
                image: td33,
                category: "INTERIOR",
                title:
                  "Interior Collector Favorites: Bestselling Artists of the Year",
                author: "JOANNA WELLICK . APRIL 28,2019",
                link: "/page2",
              },
              {
                image: td34,
                category: "TRAVEL",
                title: "8 Essential Steps to Collecting Emerging Art",
                author: "JOANNA WELLICK . APRIL 28,2019",
                link: "/page3",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="relative h-[300px] sm:h-[250px] md:h-[500px] lg:h-[550px] overflow-hidden group block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center lg:bg-fixed transition-all duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center text-white z-10 p-5">
                  <div className="text-center transform transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:scale-105">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                      {item.category}
                    </h3>
                    <h1 className="text-3xl sm:text-2xl font-bold group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h1>
                    <h5 className="text-xs mt-5 font-bold opacity-80 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500">
                      {item.author}
                    </h5>
                    <button className="bg-zinc-700 p-2 text-xs mt-2 w-24 font-bold hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-4">
                      VIEW POST
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-40 text-center p-10">
          <h2 className="font-bold text-white mb-10">TRENDING POSTS</h2>

          {/* Slider Component */}
          <div className="slider-container ">
            <Slider {...settings}>
              {products.map((product, index) => (
                <Link key={index} to={product.link}>
                  <div key={product.id} className="slider-item group relative">
                    {/* Image with hover overlay */}
                    <div className="relative overflow-hidden p-2">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="slider-image transition-transform duration-500 "
                        style={{
                          height: "300px",
                          width: "500px",
                          objectFit: "cover",
                        }}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 ">
                        <div className="text-center">
                          <button className="bg-white text-black px-6 py-2 font-bold text-sm hover:bg-black hover:text-white transition-all duration-300">
                            VIEW POST
                          </button>
                          {/* Icons - replace with your actual icon components */}
                          <div className="flex justify-center mt-4 space-x-4">
                            <svg
                              className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                              />
                            </svg>
                            <svg
                              className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="slider-info text-gray-300 mt-5">
                      <h2 className="font-bold text-xs">{product.category}</h2>
                      <h2 className="text-xl mt-3 font-bold">
                        {product.title}
                      </h2>
                      <h5 className="text-xs mt-2">{product.date}</h5>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
          <hr className="relative top-7 border-t-1 border-zinc-800" />
        </div>

        <section>
          <div className="flex flex-col lg:flex-row mx-4 md:mx-10">
            {/* Left Content Section */}
            <div className="flex-1">
              <Link to={"/page7"}>
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
              </Link>

              {/* Articles Grid */}
              <div className="mt-16 lg:mt-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                {/* Left Column Articles */}
                <div className="space-y-16 md:space-y-20">
                  <Link to={"/page8"}>
                    <ArticleCard
                      image={td8}
                      category="STYLE"
                      title="The Best Way to Introduce Students to 3-D Pens"
                      author="ELLIOT ALDERSON AND JOANNA WELLICK . MAY 22,2019"
                      description="Structured gripped tape invisible moulded cups..."
                      className="max-w-full"
                    />
                  </Link>
                  <Link to={"/page9"}>
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
                  </Link>
                  <Link to={"/page10"}>
                    <FeaturedImageCard
                      image={td2}
                      category="LIFESTYLE"
                      title="6 Contemporary Artists Questioning Gender Norms"
                      className="h-[300px] md:h-[400px] w-full"
                    />
                  </Link>

                  <div className="flex justify-center ">
                    <Link to={"/lifestyle"}>
                      <img
                        className="h-[200px] md:h-[250px] w-full max-w-[300px] object-cover mb-10"
                        src={td16}
                        alt="Decorative"
                      />
                    </Link>
                  </div>
                  <Link to={"/interior"}>
                    <ArticleCard
                      image={td15}
                      category="STYLE"
                      title="Art and Wellbeing: The Healing Power of Art"
                      author="ELLIOT ALDERSON. MAY 21,2019"
                      description="Structured gripped tape invisible moulded cups..."
                      className="max-w-full "
                    />
                  </Link>
                  <Link to={"/lifestyle"}>
                    <ArticleCard
                      image={td17}
                      category="LIFESTYLE"
                      title="The Future of the Art Market: 4 Trends"
                      author="Joanna Wellick. MAY 22,2019"
                      description="Structured gripped tape invisible moulded cups..."
                      className="max-w-full"
                    />
                  </Link>
                  <Link to={"/style"}>
                    <FeaturedImageCard
                      image={td2}
                      category="LIFESTYLE"
                      title="6 Contemporary Artists Questioning Gender Norms"
                      className="h-[400px] md:h-[600px] w-full"
                    />
                  </Link>
                  <Link to={"/page1"}>
                    <ArticleCard
                      image={td20}
                      category="LIFESTYLE"
                      title="Top 6 TV Shows and Films for Art Lovers"
                      author="Joanna Wellick. MAY 22,2019"
                      description="Structured gripped tape invisible moulded cups..."
                      className="max-w-full"
                    />
                  </Link>
                </div>

                {/* Right Column Articles */}
                <div className="space-y-16 md:space-y-20 mt-10 lg:mt-0">
                  <Link to={"/travel"}>
                    <ArticleCard
                      image={ballerina}
                      category="TRAVEL"
                      title="Arts Philanthropy: Should Museums Refuse Dirty Money"
                      author="ELLIOT ALDERSON. MAY 22,2019"
                      className="max-w-full"
                    />
                  </Link>
                  <Link to={"/page3"}>
                    <ArticleCard
                      image={td13}
                      category="INTERIOR"
                      title="How to Start an Art Collection on Any Budget"
                      author="ELLIOT ALDERSON. MAY 22,2019"
                      description="Structured gripped tape invisible moulded cups..."
                      className="max-w-full"
                    />
                  </Link>
                  <Link to={"/page5"}>
                    <ArticleCard
                      image={td14}
                      category="INTERIOR"
                      title="How to Start an Art Collection on Any Budget"
                      author="ELLIOT ALDERSON. MAY 22,2019"
                      description="Structured gripped tape invisible moulded cups..."
                      className="h-[500px] md:h-[600px] w-full"
                    />
                  </Link>
                  <Link to={"/page3"}>
                    <ArticleCard
                      image={td18}
                      category="INTERIOR"
                      title="7 Cracking Christmas Outfits From Art History"
                      author="Joanna Wellick. MAY 22,2019"
                      description="Structured gripped tape invisible moulded cups..."
                      className="max-w-full"
                    />
                  </Link>

                  <div className="text-center p-6 ">
                    <Link to={"/page8"}>
                      <h1 className="font-bold text-sm text-zinc-500 mb-4">
                        FOLLOW US
                      </h1>
                      <SocialIcons className="justify-center " />
                    </Link>
                    <Link to={"/page10"}>
                      <ArticleCard
                        image={td19}
                        category="LIFESTYLE"
                        title="5 Art-Tastic Hotels Around the Globe"
                        author="Joanna Wellick. MAY 22,2019"
                        description="Structured gripped tape invisible moulded cups..."
                        className="h-[500px] md:h-[700px] w-full mt-6"
                      />
                    </Link>
                  </div>
                  <Link to={"/page9"}>
                    <InstagramGrid
                      images={[td21, td22, td23, td24]}
                      className="max-w-full"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-[30%] mt-10 lg:mt-0 lg:ml-5 lg:pl-5 space-y-8">
              <div className="hidden lg:block">
                <Slider {...settingsTwo}>
                  {productsTwo.map((product) => (
                    <Link to={"/travel"}>
                      <SliderCard key={product.id} product={product} />
                    </Link>
                  ))}
                </Slider>
              </div>
              <Link to={"/style"}>
                <InstagramProfile
                  profileImg={td28}
                  username="CODESUPPLY.CO"
                  handle="CODE SUPPLY CO."
                  stats="33 FOLLOWING 35 FOLLOWERS"
                  images={[td21, td22, td23, td24, td29, td30]}
                  className="hidden lg:block"
                />
              </Link>
              <Link to={"/page2"}>
                <ProfileCard
                  profileImg={td28}
                  username="CODESUPPLY.CO"
                  handle="CODE SUPPLY CO."
                  stats="3 FOLLOWING 129 FOLLOWERS"
                  bio="It's been a long way, but we've just reached a huge 10k sales milestone..."
                  className="hidden lg:block"
                />
              </Link>
              <Link to={"/page6"}>
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
              </Link>

              <div
                className={`shop-sidebar w-full p-6 overflow-y-auto transition-all duration-300 md:sticky top-0 bottom-0 z-40 
              }`}
              >
                <Link to={"/page9"}>
                  <img
                    className="h-full w-full object-cover "
                    src={td31}
                    alt="Sticky"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

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
                className="flex-grow px-5 py-3 bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <section className="">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
            {[td21, td22, td23, td24, td29, td30].map((imgSrc, index) => (
              <div key={index} className="aspect-square overflow-hidden group">
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
      </section>
    </>
  );
}
