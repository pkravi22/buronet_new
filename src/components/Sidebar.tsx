import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaUsers, FaBriefcase, FaIdCard, FaBolt, FaComments } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-48 bg-white h-screen fixed left-0 border-r border-gray-200">
      <div className="p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Buronet" width={120} height={40} priority />
        </Link>
      </div>
      
      <nav className="mt-6">
        <Link href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
          <FaHome className="w-5 h-5 mr-3" />
          <span>Home</span>
        </Link>

        <Link href="/circle" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
          <FaUsers className="w-5 h-5 mr-3" />
          <span>My Circle</span>
        </Link>

        <Link href="/jobs" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
          <FaBriefcase className="w-5 h-5 mr-3" />
          <span>Jobs</span>
        </Link>

        <Link href="/membership" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
          <FaIdCard className="w-5 h-5 mr-3" />
          <span>Membership</span>
        </Link>

        <Link href="/bytes" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
          <FaBolt className="w-5 h-5 mr-3" />
          <span>Bytes</span>
        </Link>

        <Link href="/messaging" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
          <FaComments className="w-5 h-5 mr-3" />
          <span>Messaging</span>
          <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar; 