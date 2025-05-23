"use client";

import { TrendingUp, Users, UserPlus, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
  iconColor: string;
  trendIcon?: React.ReactNode;
  trendColor?: string;
}

interface NetworkCardProps {
  name: string;
  role: string;
  company: string;
  companyTag: string;
  isConnected?: boolean;
}

const DashboardCard = ({ title, value, trend, icon, iconColor, trendIcon, trendColor = "text-[#16A34A]" }: DashboardCardProps) => (
  <div className="w-[148px] h-32 bg-gradient-to-br from-[#DDECFF] to-[#E3EAFF] rounded-xl">
    <div className="h-full px-4 py-4 flex flex-col justify-between">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
          <span className={`${iconColor}`}>
            {icon}
          </span>
        </div>
        <div className="ml-3">
          <h3 className="text-[#1F2937] font-medium text-sm">{title}</h3>
        </div>
      </div>
      <div>
        <p className="text-[#1F2937] text-2xl font-semibold">{value}</p>
        <div className="flex items-center gap-1 mt-1">
          {trendIcon && (
            <span className={`${trendColor}`}>
              {trendIcon}
            </span>
          )}
          <p className="text-xs text-[#6B7280]">{trend}</p>
        </div>
      </div>
    </div>
  </div>
);

const NetworkCard = ({ name, role, company, companyTag, isConnected }: NetworkCardProps) => (
  <div className="bg-white rounded-xl shadow-sm w-[180px] h-[260px] shrink-0">
    <div className="p-4 h-full flex flex-col">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 mb-2 bg-[#F3F4F6] rounded-full flex items-center justify-center">
          <User size={32} className="text-[#6B7280]" />
        </div>
        <h3 className="text-[#1F2937] text-base font-medium text-center">{name}</h3>
        <div className="mt-1 text-center">
          <p className="text-[#6B7280] text-sm">{role}</p>
          <p className="text-[#6B7280] text-sm">{company}</p>
        </div>
        <div className="mt-3">
          <span className="bg-[#F3F4F6] text-[#374151] text-xs px-3 py-1.5 rounded-full">
            {companyTag}
          </span>
        </div>
      </div>
      <button 
        className={`mt-auto w-full h-10 rounded flex items-center justify-center gap-2 ${
          isConnected ? 'bg-[#F3F4F6] text-[#374151]' : 'bg-[#2563EB] text-white'
        }`}
      >
        <Users size={16} />
        {isConnected ? 'Message' : 'Connect'}
      </button>
    </div>
  </div>
);

const MainContent = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const dashboardCards: DashboardCardProps[] = [
    {
      title: 'Total Connections',
      value: '248',
      trend: '12% from last month',
      icon: <Users size={16} />,
      iconColor: 'text-[#EF4444]',
      trendIcon: <TrendingUp size={12} />,
      trendColor: 'text-[#16A34A]'
    },
    {
      title: 'Joined Groups',
      value: '16',
      trend: '3 new this month',
      icon: <Users size={16} />,
      iconColor: 'text-[#3B82F6]',
      trendIcon: <TrendingUp size={12} />,
      trendColor: 'text-[#16A34A]'
    },
    {
      title: 'Pending Requests',
      value: '24',
      trend: '5 new this week',
      icon: <UserPlus size={16} />,
      iconColor: 'text-[#22C55E]',
      trendIcon: <Clock size={12} />,
      trendColor: 'text-[#F59E0B]'
    },
    {
      title: 'Network Growth',
      value: '2.4K',
      trend: '5.7% this month',
      icon: <TrendingUp size={16} />,
      iconColor: 'text-[#A855F7]',
      trendIcon: <TrendingUp size={12} />,
      trendColor: 'text-[#16A34A]'
    }
  ];

  const networkCards: NetworkCardProps[] = [
    {
      name: "Jennifer Lee",
      role: "VP of Product at",
      company: "TechGiant",
      companyTag: "TechGiant",
      isConnected: false
    },
    {
      name: "Robert Chen",
      role: "CTO at",
      company: "InnovateTech",
      companyTag: "InnovateTech",
      isConnected: false
    },
    {
      name: "Sarah Williams",
      role: "Design Director at",
      company: "CreativeStudio",
      companyTag: "CreativeStudio",
      isConnected: false
    },
    {
      name: "Michael Brown",
      role: "Senior Developer at",
      company: "CodeCraft",
      companyTag: "CodeCraft",
      isConnected: false
    },
    {
      name: "Emily Parker",
      role: "Product Designer at",
      company: "DesignHub",
      companyTag: "DesignHub",
      isConnected: false
    }
  ];

  const suggestedConnections = [
    {
      name: "Thomas Wilson",
      role: "Frontend Developer at",
      company: "WebTech",
      companyTag: "WebTech",
      mutualConnections: 12,
      isConnected: false
    },
    {
      name: "Olivia Martinez",
      role: "Marketing Manager at",
      company: "BrandX",
      companyTag: "BrandX",
      mutualConnections: 5,
      isConnected: false
    },
    {
      name: "David Thompson",
      role: "Data Analyst at",
      company: "AnalyticsPro",
      companyTag: "AnalyticsPro",
      mutualConnections: 3,
      isConnected: false
    },
    {
      name: "Sophie Anderson",
      role: "UX Designer at",
      company: "DesignCo",
      companyTag: "DesignCo",
      mutualConnections: 8,
      isConnected: false
    },
    {
      name: "James Wilson",
      role: "Backend Developer at",
      company: "TechStack",
      companyTag: "TechStack",
      mutualConnections: 6,
      isConnected: false
    },
    {
      name: "Emma Davis",
      role: "Product Manager at",
      company: "ProductHub",
      companyTag: "ProductHub",
      mutualConnections: 4,
      isConnected: false
    },
    {
      name: "Alex Turner",
      role: "DevOps Engineer at",
      company: "CloudTech",
      companyTag: "CloudTech",
      mutualConnections: 7,
      isConnected: false
    },
    {
      name: "Rachel Green",
      role: "Content Writer at",
      company: "ContentPro",
      companyTag: "ContentPro",
      mutualConnections: 9,
      isConnected: false
    },
    {
      name: "Mike Johnson",
      role: "QA Engineer at",
      company: "QualityFirst",
      companyTag: "QualityFirst",
      mutualConnections: 5,
      isConnected: false
    }
  ];

  return (
    <div className="flex-1">
      <div className="flex justify-center w-full">
        <div className="w-[640px] mt-6">
          <div className="flex flex-wrap gap-4 mb-8">
            {dashboardCards.map((card, index) => (
              <div key={index} className="w-[148px]">
                <DashboardCard {...card} />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#1F2937] text-lg font-medium">Popular in Your Network</h2>
              <button className="text-[#2563EB] text-sm font-medium">View All</button>
            </div>
            <div className="relative">
              {showLeftButton && (
                <button 
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-50"
                >
                  <ChevronLeft size={20} className="text-[#6B7280]" />
                </button>
              )}
              <div className="relative">
                <div 
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {networkCards.map((card, index) => (
                    <NetworkCard key={index} {...card} />
                  ))}
                </div>
                <div className={`absolute left-0 top-0 bottom-0 w-8 pointer-events-none ${
                  showLeftButton ? 'bg-gradient-to-r from-[#EEF0F4] to-transparent' : ''
                }`} />
                <div className={`absolute right-0 top-0 bottom-0 w-8 pointer-events-none ${
                  showRightButton ? 'bg-gradient-to-l from-[#EEF0F4] to-transparent' : ''
                }`} />
              </div>
              {showRightButton && (
                <button 
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-50"
                >
                  <ChevronRight size={20} className="text-[#6B7280]" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#1F2937] text-lg font-medium">People You May Know</h2>
              <button className="text-[#2563EB] text-sm font-medium">See More</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {suggestedConnections.map((connection, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-4 h-[260px] flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-3 bg-[#F3F4F6] rounded-full flex items-center justify-center">
                      <User size={32} className="text-[#6B7280]" />
                    </div>
                    <h3 className="text-[#1F2937] text-base font-medium text-center">{connection.name}</h3>
                    <div className="mt-1 text-center">
                      <p className="text-[#6B7280] text-sm">{connection.role} {connection.company}</p>
                    </div>
                    <div className="mt-3 flex items-center gap-1 bg-[#F3F4F6] px-2 py-1.5 rounded-full">
                      <Users size={12} className="text-[#4B5563]" />
                      <span className="text-[#4B5563] text-xs">{connection.mutualConnections} mutual</span>
                    </div>
                  </div>
                  <button className="mt-auto w-full h-10 bg-[#2563EB] text-white rounded flex items-center justify-center gap-2">
                    <Users size={16} />
                    <span className="text-sm">Connect</span>
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <button className="text-[#2563EB] text-sm font-medium py-2 px-4">View More Suggestions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent; 