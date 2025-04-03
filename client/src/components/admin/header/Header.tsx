import { useState } from "react";
import { ThemeToggleButton } from "../../common/ThemeToggleButton";
import NotificationDropdown from "./NotificationDropdown";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

interface HeaderProps {
  onToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggle }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white border-b border-gray-200 z-10 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Hamburger menu and logo */}
        <div className="flex items-center space-x-4">
          {/* Hamburger menu button - only visible on mobile */}
          <button
            className="text-gray-500 lg:hidden dark:text-gray-400"
            onClick={onToggle}
          >
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
                fill="currentColor"
              />
            </svg>
          </button>

          {/* Logo - hidden on mobile if you want */}
          <Link to="/" className="hidden lg:block">
            <img
              className="dark:hidden"
              src="./images/logo/logo.svg"
              alt="Logo"
            />
            <img
              className="hidden dark:block"
              src="./images/logo/logo-dark.svg"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Search bar - centered on desktop, hidden on mobile */}
        <div className="hidden lg:block flex-1 max-w-md mx-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 border border-transparent rounded-lg dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#BD9455] focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side - icons and user menu */}
        <div className="flex items-center space-x-4">
          {/* Mobile search button */}
          <button
            className="lg:hidden text-gray-500 dark:text-gray-400"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Theme toggle */}
          <ThemeToggleButton />

          {/* Notifications */}
          <NotificationDropdown />

          {/* User avatar or menu */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#BD9455] flex items-center justify-center text-white font-medium">
              U
            </div>
          </div>
        </div>
      </div>

      {/* Mobile search bar - appears when search is clicked */}
      {isSearchOpen && (
        <div className="px-4 pb-3 lg:hidden">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 border border-transparent rounded-lg dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#BD9455] focus:border-transparent"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;