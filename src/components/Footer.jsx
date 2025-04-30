import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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

export default function FooterPage() {
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
      date: "MAY 24, 2019",
    },
    {
      img: td33,
      title: "Collector Favorites: Bestselling Artists of the Year",
      date: "MAY 23, 2019",
    },
    {
      img: td34,
      title: "8 Essential Steps to Collecting Emerging Art",
      date: "MAY 23, 2019",
    },
    {
      img: td26,
      title: "Why Successful People Are Also Art Collectors",
      date: "MAY 23, 2019",
    },
  ];

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
            {item.subItems.map((subItem, index) => (
              <li
                key={index}
                className="text-zinc-400 hover:text-white cursor-pointer transition-colors"
              >
                {subItem}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      <div className="bg-zinc-900 pt-12">
        <div className="mx-16 flex flex-col lg:flex-row gap-8">
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
            <h3 className="text-lg font-semibold text-white mb-6">FEATURED</h3>

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
                Structured gripped tape invisible moulded cups for sauppor firm
                hold strong powermesh front liner sport detail. Warmth comfort
                hangs loosely from the body large pocket at the front full
                button…
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
    </>
  );
}
