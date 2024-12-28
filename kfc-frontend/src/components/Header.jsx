
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-4">
        <img
          src="/logo.png" // Replace with your logo path
          alt="Yandex Eda Logo"
          className="h-8"
        />
        <input
          type="text"
          placeholder="Search for restaurants or dishes"
          className="border border-gray-300 rounded-lg px-4 py-2 w-64"
        />
        <FiSearch className="text-gray-500 ml-2" />
      </div>

      {/* Right: Account Actions */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600">English</button>
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md">
          Log in
        </button>
      </div>
    </header>
  );
};

export default Header;
