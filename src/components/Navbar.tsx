import { useState } from "react";
import {
  Plane as Plant,
  Home,
  Info,
  User,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-green-200"
      : "text-white hover:text-green-200";
  };

  return (
    <nav className="bg-green-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Plant className="h-6 w-6" />
            <span className="text-xl font-semibold">Ayurcure</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 ${isActive("/")}`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              className={`flex items-center space-x-1 ${isActive("/about")}`}
            >
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center space-x-1 ${isActive(
                "/dashboard"
              )}`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/search"
              className={`flex items-center space-x-1 ${isActive("/search")}`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Illness</span>
            </Link>
            <Link
              to="/signin"
              className={`flex items-center space-x-1 ${isActive("/signin")}`}
            >
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
            <Link
              to="/thank-you"
              className={`flex items-center space-x-1 ${isActive(
                "/thank-you"
              )}`}
            >
              <User className="h-4 w-4" />
              <span>Thank You</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-3 pb-4 pt-2 border-t border-green-700">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md ${isActive(
                  "/"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md ${isActive(
                  "/about"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Info className="h-5 w-5" />
                <span>About</span>
              </Link>
              <Link
                to="/dashboard"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md ${isActive(
                  "/dashboard"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                to="/search"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md ${isActive(
                  "/search"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Illness</span>
              </Link>
              <Link
                to="/signin"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md ${isActive(
                  "/signin"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
              <Link
                to="/thank-you"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md ${isActive(
                  "/thank-you"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>Thank You</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
