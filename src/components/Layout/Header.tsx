import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/20 dark:bg-slate-900/20 backdrop-blur-xl shadow-lg border-b border-white/10 dark:border-slate-700/20'
          : 'bg-white/5 dark:bg-slate-900/5 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
              <Crown className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white drop-shadow-sm">
                Grandeur Hotel
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-300 drop-shadow-sm">
                Luxury & Comfort
              </p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-slate-800 dark:text-white drop-shadow-sm">
                Grandeur
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 text-sm xl:text-base drop-shadow-sm ${
                  location.pathname === item.path
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-slate-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 dark:bg-slate-800/20 text-slate-800 dark:text-white hover:bg-white/20 dark:hover:bg-slate-700/30 transition-colors backdrop-blur-sm border border-white/10 dark:border-slate-700/20"
            >
              {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>

            <Link
              to="/booking"
              className="hidden sm:inline-flex px-4 lg:px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm lg:text-base"
            >
              Book Now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 dark:bg-slate-800/20 text-slate-800 dark:text-white backdrop-blur-sm border border-white/10 dark:border-slate-700/20"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl border-t border-white/10 dark:border-slate-700/20"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium py-2 text-base drop-shadow-sm ${
                      location.pathname === item.path
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-slate-800 dark:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/booking"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg justify-center mt-4"
                >
                  Book Now
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;