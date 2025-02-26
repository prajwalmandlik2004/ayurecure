// import React from "react";
import {
  Plane as Plant,
  Home,
  Info,
  User,
  LayoutDashboard,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

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
              to="/signin"
              className={`flex items-center space-x-1 ${isActive("/signin")}`}
            >
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
