"use client";

import { FiHome, FiUsers, FiBriefcase, FiBook, FiVideo, FiMessageSquare } from 'react-icons/fi';
import Link from 'next/link';

interface NavbarProps {
  activeItem: string;
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  isActive: boolean;
  badge?: number;
}

const NavItem = ({ icon, text, href, isActive, badge }: NavItemProps) => {
  return (
    <li>
      <Link 
        href={href}
        className={`flex items-center mx-4 my-1 px-4 py-3 rounded-md transition-colors ${
          isActive 
            ? 'bg-[#E3EAFF] text-[#5E98FF]' 
            : 'hover:bg-gray-50 text-[#505965]'
        }`}
      >
        <div className="flex items-center">
          <span className="w-5 h-5 flex items-center">{icon}</span>
          <span className="ml-8 text-sm font-medium">{text}</span>
          {badge && (
            <span className="ml-auto bg-[#EF4444] text-white text-xs rounded-full px-2 py-0.5">
              {badge}
            </span>
          )}
        </div>
      </Link>
    </li>
  );
};

const Navbar = ({ activeItem }: NavbarProps) => {
  const navItems = [
    { icon: <FiHome size={20} />, text: 'Home', href: '/home' },
    { icon: <FiUsers size={20} />, text: 'My Circle', href: '/circle' },
    { icon: <FiBriefcase size={20} />, text: 'Jobs', href: '/jobs' },
    { icon: <FiBook size={20} />, text: 'Mentorship', href: '/mentorship' },
    { icon: <FiVideo size={20} />, text: 'Bytes', href: '/bytes' },
    { icon: <FiMessageSquare size={20} />, text: 'Messaging', href: '/messaging', badge: 3 }
  ];

  return (
    <nav className="fixed left-6 top-[61px] w-[239px] bg-white rounded-lg shadow-sm border border-[#E5E7EB] my-6 min-h-[calc(100vh-61px-3rem)]">
      <ul className="py-5">
        {navItems.map((item) => (
          <NavItem 
            key={item.href}
            icon={item.icon}
            text={item.text}
            href={item.href}
            isActive={item.text === activeItem}
            badge={item.badge}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar; 