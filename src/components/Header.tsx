import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 px-6 md:px-12 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-indigo-600 transition-colors">
          Imane Benkhati
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-indigo-600 transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-indigo-600 transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-indigo-600 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-indigo-600 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button - can be expanded later */}
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 