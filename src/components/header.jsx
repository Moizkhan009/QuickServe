import React, { useState } from "react";


const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleNotifications = () => setIsNotificationOpen(!isNotificationOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <nav className="bg-[#212529] p-4 flex justify-between items-center">
      {/* Logo or Brand Name */}
      <div className="m-stack__item m-stack__item--middle m-brand__logo">
        <a href="/" className="m-brand__logo-wrapper ml-0 header-logo">
          <strong
            style={{
              fontWeight: 700,
              fontSize: "1.7rem",
              color: "#9ed568",
              fontStyle: "italic",
            }}
          >
            QuickServe{" "}
            <sup
              style={{
                boxSizing: "border-box",
                position: "relative",
                lineHeight: 0,
                verticalAlign: "baseline",
                top: "1em",
                right: "-0.9em",
                float: "right",
                fontSize: "0.5rem",
                fontStyle: "normal",
                fontWeight: 100,
                color: "#fff",
              }}
            >
              QA
            </sup>
          </strong>
        </a>
      </div>

      {/* Search Bar and Icons */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative  ">
          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            className="text-white focus:outline-none hover:text-[#9ed568] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Search Modal (Conditional Rendering) */}
          {isSearchOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#9ed568] transition-all"
                  />
                  <button
                    onClick={toggleSearch}
                    className="text-gray-500 hover:text-[#9ed568] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <button
            onClick={toggleNotifications}
            className="text-white focus:outline-none hover:text-[#9ed568] transition-colors relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {/* Notification Badge */}
            <span className="absolute top-[-11px] right-[-6px] bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              3
            </span>
          </button>

          {/* Notification Modal (Conditional Rendering) */}
          {isNotificationOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              
              <div className="bg-white rounded-lg p-2 w-96 shadow-lg relative">
              <button
                  onClick={toggleNotifications}
                  className="absolute right-8 top-1 text-red-600 hover:bg-red-600 hover:text-white transition-colors hover:border border-red-700 border-b p-1"
                >
                  X
                </button>
                
                <h3 className="text-gray-800 font-bold mb-4">Notifications</h3>
              
                <ul>
                  {[1, 2, 3].map((item) => (
                    <li
                      key={item}
                      className="text-gray-700 text-sm mb-2 p-2 hover:bg-[#9ed568] rounded-lg transition-colors"
                    >
                     this is my notification {item}
                    </li>
                  ))}
                </ul>
              
              </div>
            </div>
          )}
        </div>

        {/* Profile Icon */}
          {/* Profile Section */}
      <div className="relative">
        <button
          onClick={toggleProfile}
          className="text-white focus:outline-none hover:text-[#9ed568] transition-colors flex items-center space-x-2"
        >
          <img
            src=""
            alt="Profile"
            className="rounded-full object-cover "
          />
          <div className="text-left">
            <p className="text-white font-semibold">John Doe</p>
            <p className="text-gray-400 text-sm">Admin</p>
          </div>
        </button>

        {/* Profile Dropdown (Conditional Rendering) */}
        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-4">
            <ul>
              <li className="text-gray-700 text-sm mb-2 p-2 hover:bg-[#9ed568] hover:text-white rounded-lg transition-colors">
                Edit Profile
              </li>
              <li className="text-gray-700 text-sm mb-2 p-2 hover:bg-[#9ed568] hover:text-white rounded-lg transition-colors">
                Settings
              </li>
              <li className="text-gray-700 text-sm p-2 hover:bg-red-600 hover:text-white rounded-lg transition-colors">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;