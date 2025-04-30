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
import td1 from "../../public/images/td1.jpg";
import td2 from "../../public/images/td1.jpg";
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
import td35 from "../../public/images/td35.png";
import td36 from "../../public/images/td36.jpg";
import td37 from "../../public/images/td37.jpg";
import td38 from "../../public/images/td38.jpg";
import td39 from "../../public/images/td39.jpg";
import td40 from "../../public/images/td40.jpg";
import td41 from "../../public/images/td41.jpg";
import td42 from "../../public/images/td42.jpg";
import td43 from "../../public/images/td43.jpg";
import td44 from "../../public/images/td44.jpg";
import ballerina from "../../public/images/ballerina.jpg";

export default function StYle() {
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
  return (
    <>
      <div className="bg-zinc-950">
        <div className="flex flex-col lg:flex-row mx-4 md:mx-10">
          {/* Left Content Section */}
          <div className="flex-1">
            <div className="text-gray-300 text-center mt-10 lg:mt-20 mx-auto max-w-4xl">
              <h2 className="text-5xl font-semibold my-4">Style</h2>
              <p className="text-xs text-gray-700">10 POSTS</p>
              <hr className="relative my-6 border-t-1 border-zinc-800" />
              <h2 className="text-xs mb-5 font-bold">Style</h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                The Best Way to Introduce Students to 3-D Pens
              </h1>
              <h5 className="text-xs mt-5 mb-10 font-bold">
                May 22, 2019 . Elliot Alderson{" "}
                <span className="text-gray-700">and</span> Joanna Wellick
              </h5>

              <img
                className="w-full mx-auto h-64 md:h-96 object-cover"
                src={td8}
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
                  image={td14}
                  category="STYLE"
                  title="13 Cool Artists Turning Trash Into Treasure"
                  author="May 21, 2019 . Joanna Wellick"
                  description="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
                  className="max-w-full"
                />

                <ArticleCard
                  image={td25}
                  category="STYLE"
                  title="5 Artworks That Celebrate Strong Women"
                  author="Joanna Wellick. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
                  className="max-w-full"
                />

                <ArticleCard
                  image={td3}
                  category="STYLE"
                  title="The 21st Century Art Movement — What Is It?"
                  author="ELLIOT ALDERSON. MAY 21,2019"
                  description="Structured gripped tape invisible moulded cups for suppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
                  className="max-w-full"
                />

                <ArticleCard
                  image={td5}
                  category="STYLE"
                  title="8 of the Most Shocking Artworks Throughout History"
                  author="Joanna Wellick. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
                  className="max-w-full"
                />

                <ArticleCard
                  image={td6}
                  category="STYLE"
                  title="10 Interactive Street Art Works That Rocked"
                  author="Joanna Wellick. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
                  className="max-w-full"
                />

                <ArticleCard
                  image={td20}
                  category="LIFESTYLE"
                  title="Top 6 TV Shows and Films for Art Lovers"
                  author="Joanna Wellick. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
                  className="max-w-full"
                />
              </div>

              {/* Right Column Articles */}
              <div className="space-y-16 md:space-y-20 mt-10 lg:mt-0">
                <ArticleCard
                  image={td15}
                  category="STYLE"
                  title="Art and Wellbeing: The Healing Power of Art"
                  author="ELLIOT ALDERSON. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
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

                <ArticleCard
                  image={td1}
                  category="STYLE"
                  title="6 Winning Artists Take On Modern Photography"
                  author="ELLIOT ALDERSON. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
                  className="max-w-full"
                />

                <div className="flex justify-center">
                  <img
                    className="h-[200px] md:h-[250px] w-full max-w-[300px] object-cover"
                    src={td16}
                    alt="Decorative"
                  />
                </div>

                <ArticleCard
                  image={td2}
                  category="STYLE"
                  title="How to Start an Art Collection on Any Budget"
                  author="ELLIOT ALDERSON. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
                  className="h-[500px] md:h-[600px] w-full"
                />

                <ArticleCard
                  image={td18}
                  category="STYLE"
                  title="7 Cracking Christmas Outfits From Art History"
                  author="Joanna Wellick. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
                  className="max-w-full"
                />
                <ArticleCard
                  image={td4}
                  category="STYLE"
                  title="10 Famous Female Painters Every Art Lover Should Know"
                  author="Joanna Wellick. MAY 22,2019"
                  description="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
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

            <div
              className={`shop-sidebar w-full p-6 overflow-y-auto transition-all duration-300 md:sticky top-0 bottom-0 z-40 
      }`}
            >
              <img
                className="h-full w-full object-cover "
                src={td31}
                alt="Sticky"
              />
            </div>
          </div>
        </div>
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

        {/* Gallery Grid */}
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
      </div>
    </>
  );
}
