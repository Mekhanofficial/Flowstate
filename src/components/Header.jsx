import { useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function HeaderPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDesktopSidebar = () => {
    setIsDesktopSidebarOpen(!isDesktopSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  // Data
  const categories = ["Lifestyle", "Travel", "Style", "Interior"];
  const navItems = [
    "DEMOS",
    "FEATURES",
    "POST",
    "CATEGORIES",
    "SHOP",
    "BUY NOW",
  ];

  const accountItems = [
    { icon: faUser, label: "Profile" },
    { icon: faBookmark, label: "Saved Articles" },
    { icon: faHistory, label: "Reading History" },
  ];

  const socialStats = [
    { icon: faFacebook, label: "53K Likes" },
    { icon: faTwitter, label: "71K Followers" },
    { icon: faInstagram, label: "50K Followers" },
  ];

  // Components
  const MobileSidebar = () => (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={toggleMobileMenu}
      ></div>
      <div className="absolute left-0 top-0 h-full w-64 bg-zinc-900 p-4">
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 hover:text-zinc-300"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <div className="mt-12">
          <h1 className="text-2xl font-bold mb-6">AnOther</h1>
          <p className="text-sm mb-8">Culture, Music and Art Magazine</p>

          <button className="bg-zinc-700 hover:bg-zinc-600 w-full py-2 mb-8">
            Subscribe
          </button>

          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-wider mb-4">Menu</h2>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center justify-between hover:text-zinc-300 py-2"
                  >
                    {item}
                    <FontAwesomeIcon icon={faChevronDown} size="xs" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between hover:text-zinc-300 py-2"
                >
                  TRENDING
                  <FontAwesomeIcon icon={faChevronDown} size="xs" />
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-wider mb-4">
              Categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full px-3 py-1 text-xs bg-zinc-700"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-wider mb-4">Account</h2>
            <ul className="space-y-2">
              {accountItems.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:text-zinc-300 py-2"
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <h2 className="text-xs uppercase tracking-wider mb-4">Follow Us</h2>
            <div className="flex gap-4">
              <a href="#" className="hover:text-zinc-300">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="hover:text-zinc-300">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-zinc-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DesktopSidebar = () => (
    <div className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-zinc-900 p-6 z-40">
      <div className="h-full flex flex-col">
        <button
          onClick={toggleDesktopSidebar}
          className="self-end hover:text-zinc-300 mb-8"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">AnOther</h1>
          <p className="text-lg mb-8">Culture, Music and Art Magazine</p>

          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-wider mb-6">Featured</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-lg hover:text-zinc-300 block">
                  Latest Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-zinc-300 block">
                  Editor's Picks
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-zinc-300 block">
                  Popular This Week
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-wider mb-6">
              Newsletter
            </h2>
            <p className="mb-4">Stay updated with our latest stories</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-zinc-700 text-white px-4 py-2 rounded-l flex-1"
              />
              <button
                type="submit"
                className="bg-zinc-600 hover:bg-zinc-500 px-4 py-2 rounded-r"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div>
          <h2 className="text-sm uppercase tracking-wider mb-4">Connect</h2>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 text-xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="hover:text-zinc-300 text-xl">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-zinc-300 text-xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Mobile Sidebar */}
      {isMobileMenuOpen && <MobileSidebar />}

      {/* Desktop Sidebar */}
      {isDesktopSidebarOpen && <DesktopSidebar />}

      {/* Original Header */}
      <header className="bg-zinc-900 text-white">
        {/* Top Social Bar - hidden on mobile */}
        <div className="hidden md:block">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                {categories.map((category) => (
                  <span key={category} className="px-3 py-1 text-sm">
                    {category}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 md:gap-6">
                {socialStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <FontAwesomeIcon icon={stat.icon} />
                    <span className="text-xs md:text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-800" />

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left section - mobile menu (mobile) / subscribe (desktop) */}
            <div className="flex items-center">
              {/* Mobile menu button - shows on small screens */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden hover:text-zinc-300 mr-4"
              >
                <FontAwesomeIcon icon={faBars} size="lg" />
              </button>

              {/* Subscribe button - hidden on mobile */}
              <button className="hidden md:block bg-zinc-700 hover:bg-zinc-600 transition-colors px-4 py-2">
                Subscribe
              </button>
            </div>

            {/* Center section - logo */}
            <div
              className={`flex-1 text-center ${
                isSearchOpen ? "hidden md:block" : ""
              }`}
            >
              <h1 className="text-2xl md:text-3xl font-bold">AnOther</h1>
              <p className="hidden md:block text-sm md:text-base">
                Culture, Music and Art Magazine
              </p>
            </div>

            {/* Right section - search and cart */}
            <div className="flex items-center gap-4">
              <div className={`search-container ${isSearchOpen ? "open" : ""}`}>
                {isSearchOpen && (
                  <form
                    onSubmit={handleSearch}
                    className="absolute right-0 top-full mt-2 bg-zinc-800 p-2 rounded"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="bg-zinc-700 text-white px-2 py-1 rounded"
                    />
                    <button type="submit" className="ml-2">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </form>
                )}
                <button onClick={toggleSearch} className="hover:text-zinc-300">
                  <FontAwesomeIcon icon={isSearchOpen ? faTimes : faSearch} />
                </button>
              </div>
              <button className="hover:text-zinc-300">
                <FontAwesomeIcon icon={faShoppingBag} />
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-800 mx-10" />

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden md:block">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={toggleDesktopSidebar}
                className="hidden lg:flex hover:text-zinc-300"
              >
                <FontAwesomeIcon icon={faBars} size="lg" />
              </button>
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <div key={item} className="group relative">
                    <button className="flex items-center gap-1 hover:text-zinc-300">
                      {item}
                      <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="group relative">
                  <button className="flex items-center gap-1 hover:text-zinc-300">
                    TRENDING
                    <FontAwesomeIcon icon={faChevronDown} size="xs" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-gray-800 mx-10" />
        </div>
      </header>
    </div>
  );
}
