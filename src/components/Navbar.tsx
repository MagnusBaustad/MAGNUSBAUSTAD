import React from 'react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  selectedProjectId: string | null;
  onClearProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  selectedProjectId,
  onClearProject,
}) => {
  const [hoveredNav, setHoveredNav] = React.useState<PageType | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  // Close mobile dropdown when clicking outside
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  // Close mobile dropdown on resize to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const handleBrandClick = () => {
    setIsMobileMenuOpen(false);
    onClearProject();
    onNavigate('design');
  };

  const handleNavClick = (page: PageType) => {
    setIsMobileMenuOpen(false);
    onClearProject();
    onNavigate(page);
  };

  // Determine active states
  // When hovering over one nav item, that item becomes the darkest;
  // otherwise, the active page is darker than the others.
  const isDesignActive = (currentPage === 'design' || selectedProjectId !== null) && (hoveredNav === null || hoveredNav === 'design');
  const isAboutActive = currentPage === 'about' && (hoveredNav === null || hoveredNav === 'about');
  const isContactActive = currentPage === 'contact' && (hoveredNav === null || hoveredNav === 'contact');

  const getNavClasses = (page: PageType) => {
    const isCurrent = (page === 'design' && (currentPage === 'design' || selectedProjectId !== null)) ||
                      (page === 'about' && currentPage === 'about' && selectedProjectId === null) ||
                      (page === 'contact' && currentPage === 'contact' && selectedProjectId === null);
    
    const isHovered = hoveredNav === page;
    const isAnyHovered = hoveredNav !== null;

    if (isHovered) {
      return 'text-black font-medium';
    }

    if (isAnyHovered) {
      return 'text-neutral-400 font-normal';
    }

    if (isCurrent) {
      return 'text-black font-medium';
    }

    return 'text-neutral-400 font-normal';
  };

  return (
    <header
      id="main-navigation-bar"
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-200 border-b border-neutral-100/60"
    >
      <div className="relative w-full px-6 sm:px-10 lg:px-14 py-6 md:py-8 flex items-center justify-between">
        {/* Continuous Helvetica Neue Brand */}
        <button
          id="nav-brand-button"
          onClick={handleBrandClick}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-sans text-base sm:text-lg tracking-tight font-medium text-black uppercase transition-opacity duration-150 group-hover:opacity-75">
            MAGNUSBAUSTAD
          </span>
        </button>

        {/* Desktop Navigation links: design, about, contact (preserved unchanged on desktop) */}
        <nav
          id="nav-links-container"
          className="hidden md:flex items-center space-x-6 sm:space-x-10 text-sm sm:text-base tracking-normal lowercase"
          onMouseLeave={() => setHoveredNav(null)}
        >
          <button
            id="nav-link-design"
            onClick={() => handleNavClick('design')}
            onMouseEnter={() => setHoveredNav('design')}
            className={`cursor-pointer transition-colors duration-150 focus:outline-none ${getNavClasses('design')}`}
          >
            design
          </button>

          <button
            id="nav-link-about"
            onClick={() => handleNavClick('about')}
            onMouseEnter={() => setHoveredNav('about')}
            className={`cursor-pointer transition-colors duration-150 focus:outline-none ${getNavClasses('about')}`}
          >
            about
          </button>

          <button
            id="nav-link-contact"
            onClick={() => handleNavClick('contact')}
            onMouseEnter={() => setHoveredNav('contact')}
            className={`cursor-pointer transition-colors duration-150 focus:outline-none ${getNavClasses('contact')}`}
          >
            contact
          </button>
        </nav>

        {/* Mobile Two-line Hamburger Menu (=) that animates to a cross (X) */}
        <button
          ref={buttonRef}
          id="mobile-menu-toggle-button"
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden relative z-50 w-9 h-9 flex items-center justify-center p-2 cursor-pointer focus:outline-none -mr-2 select-none"
        >
          <div className="relative w-5 h-4 flex items-center justify-center">
            {/* Top horizontal line */}
            <span
              className={`absolute w-5 h-[1.5px] bg-black rounded-full transform transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-[3.5px]'
              }`}
            />
            {/* Bottom horizontal line */}
            <span
              className={`absolute w-5 h-[1.5px] bg-black rounded-full transform transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[3.5px]'
              }`}
            />
          </div>
        </button>

        {/* Drop out white menu on mobile: extends to max right width and top of screen */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            id="mobile-dropdown-menu"
            className="md:hidden absolute top-0 right-0 w-44 sm:w-52 bg-white border-l border-b border-neutral-200/90 shadow-xl z-40 transition-all duration-200 pt-20 pb-5 px-6"
          >
            <nav className="flex flex-col space-y-3.5 text-left font-sans text-sm tracking-normal lowercase">
              <button
                id="mobile-dropdown-design"
                onClick={() => handleNavClick('design')}
                className={`text-left cursor-pointer transition-colors duration-150 focus:outline-none ${
                  (currentPage === 'design' || selectedProjectId !== null)
                    ? 'text-black font-medium'
                    : 'text-neutral-500 hover:text-black font-normal'
                }`}
              >
                design
              </button>

              <button
                id="mobile-dropdown-about"
                onClick={() => handleNavClick('about')}
                className={`text-left cursor-pointer transition-colors duration-150 focus:outline-none ${
                  currentPage === 'about' && selectedProjectId === null
                    ? 'text-black font-medium'
                    : 'text-neutral-500 hover:text-black font-normal'
                }`}
              >
                about
              </button>

              <button
                id="mobile-dropdown-contact"
                onClick={() => handleNavClick('contact')}
                className={`text-left cursor-pointer transition-colors duration-150 focus:outline-none ${
                  currentPage === 'contact' && selectedProjectId === null
                    ? 'text-black font-medium'
                    : 'text-neutral-500 hover:text-black font-normal'
                }`}
              >
                contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
