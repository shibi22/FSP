import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const profileRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
    { path: '/offers-and-updates', label: 'Offers & Updates' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    isAuthenticated ? setIsProfileOpen((prev) => !prev) : navigate('/login');
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate('/');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-accent-olive hover:text-primary-teal transition-transform transform hover:scale-105">
          Freelancer Service Platform
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ path, label }) => (
            <NavLink key={path} path={path} label={label} active={location.pathname === path} />
          ))}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={handleProfileClick}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-mint hover:bg-primary-mint/80 transition-all"
            aria-label="User profile"
          >
            {isAuthenticated ? (
              <Player autoplay loop src="https://assets9.lottiefiles.com/packages/lf20_xafe7wfw.json" className="w-full h-full" />
            ) : (
              <User className="w-5 h-5 text-accent-olive" />
            )}
          </button>

          {isProfileOpen && <ProfileDropdown isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent-olive hover:text-primary-teal transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          {navLinks.map(({ path, label }) => (
            <NavLink key={path} path={path} label={label} active={location.pathname === path} onClick={() => setIsOpen(false)} />
          ))}
        </div>
      )}
    </nav>
  );
}

/* Reusable Components */
const NavLink = ({ path, label, active, onClick }) => (
  <Link
    to={path}
    onClick={onClick}
    className={`relative px-2 py-1 text-sm font-medium transition-all duration-300 ${
      active ? 'text-primary-teal before:scale-x-100' : 'text-black hover:text-primary-teal'
    } before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-primary-teal before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left`}
  >
    {label}
  </Link>
);

const ProfileDropdown = ({ isAuthenticated, user, onLogout }) => (
  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
    {isAuthenticated ? (
      <>
        <div className="px-4 py-2 text-sm text-gray-700 border-b">
          <p className="font-medium">{user?.username}</p>
          <p className="text-xs text-gray-500">{user?.email}</p>
        </div>
        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-mint/20 flex items-center">
          <Settings className="w-4 h-4 mr-2" /> Profile Settings
        </Link>
        <button onClick={onLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-mint/20 flex items-center">
          <LogOut className="w-4 h-4 mr-2" /> Logout
        </button>
      </>
    ) : (
      <>
        <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-mint/20">
          Login
        </Link>
        <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-mint/20">
          Sign Up
        </Link>
      </>
    )}
  </div>
);
