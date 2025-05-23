import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-48 right-0 bg-white border-b border-gray-200 z-10">
      <div className="flex items-center justify-between px-6 py-2">
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-blue-600">
            <FaBell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-2">
            <FaUserCircle className="w-8 h-8 text-gray-600" />
            <span className="text-sm text-gray-700">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 