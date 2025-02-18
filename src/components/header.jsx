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
        <div className="relative">
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
                      This is my notification {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Profile Icon */}
        <div className="relative">
          <button
            onClick={toggleProfile}
            className="text-white focus:outline-none hover:text-[#9ed568] transition-colors"
          >
               <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                    alt="Profile"
                    className="rounded-full w-9 h-9 object-cover"
                  />
          </button>

          {/* Profile Modal (Conditional Rendering) */}
          {isProfileOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
                <button
                  onClick={toggleProfile}
                  className="absolute right-8 top-1 text-red-600 hover:bg-red-600 hover:text-white transition-colors hover:border border-red-700 border-b p-1"
                >
                  X
                </button>
                <div className="flex flex-col items-center space-y-4">
                  {/* Profile Picture */}
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                    alt="Profile"
                    className="rounded-full w-24 h-24 object-cover"
                  />
                  {/* Profile Name */}
                  <h3 className="text-gray-800 font-bold text-xl">John Doe</h3>
                  {/* Profile Role */}
                  <p className="text-gray-600 text-sm">Admin</p>
                  {/* Profile Options */}
                  <ul className="w-full">
                    <li className="text-gray-700 text-sm mb-2 p-2 hover:bg-[#9ed568] hover:text-white rounded-lg transition-colors flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      <span>Edit Profile</span>
                    </li>
                    <li className="text-gray-700 text-sm mb-2 p-2 hover:bg-[#9ed568] hover:text-white rounded-lg transition-colors flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Settings</span>
                    </li>
                    <li className="text-gray-700 text-sm p-2 hover:bg-red-600 hover:text-white rounded-lg transition-colors flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Logout</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;