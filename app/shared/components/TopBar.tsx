"use client";

import { FiBell, FiSearch, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const TopBar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    {
      id: 1,
      title: 'New job alert',
      message: 'Railway Recruitment Board has posted new jobs',
      time: '5 min ago',
      read: false
    },
    {
      id: 2,
      title: 'Application update',
      message: 'Your application for SSC CGL has been shortlisted',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      title: 'Profile view',
      message: 'Someone viewed your profile',
      time: '2 hours ago',
      read: true
    }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center h-[61px] bg-white border-b border-[#E5E7EB]">
      {/* Logo Section */}
      <div className="flex items-center px-10 h-full">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-9 h-9">
            <img
              src="/Logo.png"
              alt="Buronet Logo"
              className="w-7 h-7"
            />
          </div>
          <span className="text-xl font-semibold bg-gradient-to-b from-[#488AFF] to-[#2563EB] text-transparent bg-clip-text">
            Buronet
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-[448px]">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
            <FiSearch size={14} />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-9 pl-12 pr-4 bg-[#F3F4F6] rounded-full text-[#6B7280] focus:outline-none"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 px-10">
        {/* Notification Bell */}
        <div className="relative" ref={notificationsRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 hover:bg-gray-50 rounded-full cursor-pointer"
          >
            <FiBell size={18} className="text-[#6B7280]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#EF4444] rounded-full flex items-center justify-center text-xs text-white">
              5
            </span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-[#E5E7EB] py-2">
              <div className="px-4 py-2 border-b border-[#E5E7EB]">
                <h3 className="font-medium text-[#1F2937]">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-[#1F2937]">{notification.title}</p>
                        <p className="text-sm text-[#6B7280] mt-1">{notification.message}</p>
                      </div>
                      <span className="text-xs text-[#9CA3AF]">{notification.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-[#E5E7EB]">
                <button className="w-full text-center text-[#2563EB] text-sm font-medium hover:text-[#1D4ED8]">
                  View All Notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center bg-[#F3F4F6] rounded-full h-[31px] px-1 border border-[#E5E7EB] hover:bg-gray-100 cursor-pointer"
          >
            <div className="w-[25px] h-[25px] bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600">
              U
            </div>
            <img
              src="/chevron-down.svg"
              alt="Expand"
              className="w-3 h-3 ml-2 opacity-50"
            />
          </button>

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#E5E7EB] py-2">
              <div className="px-4 py-2 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm text-gray-600">
                    U
                  </div>
                  <div>
                    <p className="font-medium text-[#1F2937]">User Name</p>
                    <p className="text-sm text-[#6B7280]">user@example.com</p>
                  </div>
                </div>
              </div>
              <div className="py-1">
                <Link href="/profile" className="w-full px-4 py-2 text-left text-[#1F2937] hover:bg-gray-50 flex items-center gap-2">
                  <FiUser size={16} />
                  <span>Profile</span>
                </Link>
                <button className="w-full px-4 py-2 text-left text-[#1F2937] hover:bg-gray-50 flex items-center gap-2">
                  <FiSettings size={16} />
                  <span>Settings</span>
                </button>
                <button className="w-full px-4 py-2 text-left text-[#EF4444] hover:bg-gray-50 flex items-center gap-2">
                  <FiLogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar; 