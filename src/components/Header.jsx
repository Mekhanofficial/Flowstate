import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faSearch,
  faShoppingBag,
  faTimes,
  faUser,
  faBookmark,
  faHistory,
  faEnvelope,
  faStar,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function HeaderPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const toggleDesktopSidebar = () => {
    setIsDesktopSidebarOpen(!isDesktopSidebarOpen);
  };

  const closeSidebar = () => {
    setIsDesktopSidebarOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery("");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  const categories = ["Lifestyle", "Travel", "Style", "Interior"];
  const navItems = [
    "DEMOS",
    "FEATURES",
    "POST",
    "CATEGORIES",
    "SHOP",
    "BUY NOW",
  ];

  const featuredItems = [
    { icon: faFire, title: "Trending Now", description: "Discover what's hot" },
    {
      icon: faStar,
      title: "Editor's Picks",
      description: "Curated selections",
    },
    {
      icon: faHistory,
      title: "Popular Reads",
      description: "Most viewed articles",
    },
  ];

  const accountItems = [
    { icon: faUser, label: "Profile" },
    { icon: faBookmark, label: "Saved Articles" },
    { icon: faHistory, label: "Reading History" },
  ];

  const socialStats = [
    {
      icon: faFacebook,
      label: "53K Likes",
      url: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      icon: faTwitter,
      label: "71K Followers",
      url: "https://twitter.com",
      color: "hover:text-blue-400",
    },
    {
      icon: faInstagram,
      label: "50K Followers",
      url: "https://instagram.com",
      color: "hover:text-pink-500",
    },
    {
      icon: faPinterest,
      label: "32K Followers",
      url: "https://pinterest.com",
      color: "hover:text-red-600",
    },
  ];

  const dropdownContent = {
    DEMOS: [
      { name: "Homepage 1", url: "/" },
      { name: "Homepage 2", url: "/" },
      { name: "Homepage 3", url: "/" },
      { name: "Article Layouts", url: "/" },
      { name: "Gallery Styles", url: "/" },
    ],
    FEATURES: [
      { name: "Typography", url: "/" },
      { name: "Custom Widgets", url: "/" },
      { name: "Author Profiles", url: "/" },
      { name: "Dark Mode", url: "/" },
      { name: "Reading Progress", url: "/" },
    ],
    POST: [
      { name: "Standard Post", url: "/" },
      { name: "Gallery Post", url: "/" },
      { name: "Video Post", url: "/" },
      { name: "Audio Post", url: "/" },
      { name: "Quote Post", url: "/" },
    ],
    CATEGORIES: categories.map((category) => ({
      name: category,
      url: `/${category.toLowerCase()}`,
    })),
    SHOP: [
      { name: "Magazine Issues", url: "/" },
      { name: "Merchandise", url: "/" },
      { name: "Digital Products", url: "/" },
      { name: "Subscriptions", url: "/" },
    ],
    "BUY NOW": [
      { name: "Purchase Theme", url: "/" },
      { name: "Documentation", url: "/" },
      { name: "Support Center", url: "/" },
      { name: "Contact Us", url: "/contact" },
    ],
  };

  const MobileSidebar = () => (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
        onClick={toggleMobileMenu}
      ></div>
      <div className="absolute left-0 top-0 h-full w-72 bg-zinc-900 p-6 overflow-y-auto transform transition-all duration-300 ease-in-out">
        <button
          onClick={toggleMobileMenu}
          className="absolute top-6 right-6 text-white hover:text-purple-400 transition-colors"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <div className="mt-16">
          <h1 className="text-3xl font-serif font-bold mb-2 text-white">
            AnOther
          </h1>
          <p className="text-zinc-300 mb-8">Culture, Music and Art Magazine</p>

          <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white w-full py-3 mb-8 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg">
            Subscribe
          </button>

          <div className="mb-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-2.5 text-zinc-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>

          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-wider mb-4 text-zinc-400">
              Menu
            </h2>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item} className="border-b border-zinc-700 pb-2">
                  <Link
                    to="#"
                    className="flex items-center justify-between text-white hover:text-purple-400 py-2 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown(item);
                    }}
                  >
                    <span className="font-medium">{item}</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="xs"
                      className={`transition-transform ${
                        activeDropdown === item ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                  {activeDropdown === item && (
                    <ul className="ml-4 mt-2 space-y-2 animate-fadeIn">
                      {dropdownContent[item].map((link) => (
                        <li key={link.name}>
                          <Link
                            to={link.url}
                            className="block py-1.5 text-zinc-300 hover:text-white text-sm transition-colors"
                            onClick={toggleMobileMenu}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-wider mb-4 text-zinc-400">
              Categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  to={`/${category.toLowerCase()}`}
                  key={category}
                  className="rounded-full px-4 py-1.5 text-xs bg-zinc-700 hover:bg-purple-600 text-white transition-all hover:shadow-md"
                  onClick={toggleMobileMenu}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-wider mb-4 text-zinc-400">
              Account
            </h2>
            <ul className="space-y-3">
              {accountItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to="#"
                    className="flex items-center gap-3 text-white hover:text-purple-400 py-2 transition-colors"
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xs uppercase tracking-wider mb-4 text-zinc-400">
              Follow Us
            </h2>
            <div className="flex gap-5">
              {socialStats.map((stat, i) => (
                <a
                  key={i}
                  href={stat.url}
                  className={`text-white text-xl ${stat.color} transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={stat.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DesktopSidebar = () => (
    <div
      className={`hidden lg:block fixed left-0 top-0 h-full w-80 bg-zinc-900 p-8 z-40 transition-all duration-300 ease-in-out ${
        isDesktopSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full flex flex-col">
        <button
          onClick={toggleDesktopSidebar}
          className="self-end text-white hover:text-purple-400 mb-10 transition-colors"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <div className="flex-1 overflow-y-auto">
          <h1 className="text-4xl font-serif font-bold mb-3 text-white">
            AnOther
          </h1>
          <p className="text-lg text-zinc-300 mb-10">
            Culture, Music and Art Magazine
          </p>

          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-wider mb-6 text-zinc-400">
              Featured
            </h2>
            <ul className="space-y-6">
              {featuredItems.map((item, index) => (
                <li key={index} className="group">
                  <Link
                    to="#"
                    className="flex items-start gap-4"
                    onClick={closeSidebar}
                  >
                    <div className="text-purple-500 group-hover:text-purple-400 mt-1 transition-colors">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-wider mb-6 text-zinc-400">
              Newsletter
            </h2>
            <p className="text-zinc-300 mb-4">
              Stay updated with our latest stories
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-zinc-400"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] shadow-md"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>

        <div>
          <h2 className="text-sm uppercase tracking-wider mb-5 text-zinc-400">
            Connect
          </h2>
          <div className="flex gap-6">
            {socialStats.map((stat, i) => (
              <a
                key={i}
                href={stat.url}
                className={`text-white text-xl ${stat.color} transition-colors`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={stat.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {isMobileMenuOpen && <MobileSidebar />}
      <DesktopSidebar />

      {isDesktopSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:block hidden"
          onClick={toggleDesktopSidebar}
        ></div>
      )}

      <header
        className={`bg-zinc-950 text-white sticky top-0 z-20 transition-all duration-300 ${
          scrolled ? "shadow-xl py-2" : "py-4"
        }`}
      >
        {/* Top Bar */}
        <div className="hidden md:block border-b border-zinc-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between py-2">
              <div className="flex flex-wrap gap-1 mb-2 md:mb-0">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/${category.toLowerCase()}`}
                    className="px-3 py-1 text-sm text-zinc-300 hover:text-white transition-colors rounded-full hover:bg-zinc-800"
                  >
                    {category}
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                {socialStats.map((stat, index) => (
                  <a
                    key={index}
                    href={stat.url}
                    className={`flex items-center gap-2 ${stat.color} transition-colors text-sm`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={stat.icon} />
                    <span className="hidden lg:inline">{stat.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-4">
              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-white hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faBars} size="lg" />
              </button>

              <button
                onClick={toggleDesktopSidebar}
                className="hidden lg:flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faBars} size="lg" />
                <span className="text-sm font-medium">MENU</span>
              </button>

              <button className="hidden md:block bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105 shadow-md">
                Subscribe
              </button>
            </div>

            {/* Logo Section */}
            <div
              className={`flex-1 text-center transition-all ${
                isSearchOpen ? "hidden md:block" : ""
              }`}
            >
              <Link to="/" className="inline-block">
                <h1
                  className={`text-3xl md:text-4xl font-serif font-bold text-white transition-all ${
                    scrolled ? "text-2xl md:text-3xl" : ""
                  }`}
                >
                  AnOther
                </h1>
                <p className="hidden md:block text-sm text-zinc-300">
                  Culture, Music and Art Magazine
                </p>
              </Link>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-5 md:gap-6">
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <form
                    onSubmit={handleSearch}
                    className="absolute right-0 top-full mt-2 bg-zinc-800 p-2 rounded-lg shadow-xl w-72"
                  >
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search articles..."
                        className="bg-zinc-700 text-white px-4 py-2 rounded-lg w-full pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={toggleSearch}
                        className="absolute right-2 top-2.5 text-zinc-400 hover:text-white"
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </div>
                  </form>
                ) : null}
                <button
                  onClick={toggleSearch}
                  className="text-white hover:text-purple-400 transition-colors"
                  aria-label="Search"
                >
                  <FontAwesomeIcon
                    icon={isSearchOpen ? faTimes : faSearch}
                    size="lg"
                  />
                </button>
              </div>

              {/* Shopping Cart with badge */}
              <button className="relative text-white hover:text-purple-400 transition-colors">
                <FontAwesomeIcon icon={faShoppingBag} size="lg" />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>

              {/* User Account */}
              <div className="hidden md:block relative group">
                <button className="text-white hover:text-purple-400 transition-colors">
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-zinc-800 rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <ul className="py-1">
                    {accountItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          to="#"
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-zinc-700 transition-colors"
                        >
                          <FontAwesomeIcon icon={item.icon} className="w-4" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Menu Bar */}
        <div className="hidden md:block border-t border-zinc-800">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <div key={item} className="group relative">
                    <button
                      className="flex items-center gap-1 text-white hover:text-purple-400 px-4 py-2 transition-colors font-medium"
                      onClick={() => toggleDropdown(item)}
                      onMouseEnter={() => toggleDropdown(item)}
                    >
                      {item}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        size="xs"
                        className={`transition-transform ${
                          activeDropdown === item ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === item && (
                      <div
                        className="absolute left-0 mt-0 w-56 bg-zinc-800 rounded-b-lg shadow-xl z-50 animate-fadeIn"
                        onMouseLeave={() => toggleDropdown(item)}
                      >
                        <ul className="py-2">
                          {dropdownContent[item].map((link) => (
                            <li key={link.name}>
                              <Link
                                to={link.url}
                                className="block px-4 py-2.5 text-sm text-white hover:bg-zinc-700 transition-colors"
                                onClick={closeAllDropdowns}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  className="text-sm text-white hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
