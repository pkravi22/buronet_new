import Image from 'next/image';

interface RequestCardProps {
  name: string;
  role: string;
  timeAgo: string;
  imageUrl: string;
}

const RequestCard = ({ name, role, timeAgo, imageUrl }: RequestCardProps) => (
  <div className="bg-[#F9FAFB] rounded-xl p-3">
    <div className="flex justify-between items-start">
      <div className="flex">
        <Image
          src={imageUrl}
          alt={name}
          width={36}
          height={36}
          className="rounded-full"
        />
        <div className="ml-3">
          <h3 className="text-[#1F2937] font-medium">{name}</h3>
          <p className="text-[#6B7280] text-sm">{role}</p>
          <p className="text-[#9CA3AF] text-sm">{timeAgo}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="w-7 h-7 flex items-center justify-center bg-[#F0FCF4] rounded hover:bg-[#E6FAE9]">
          <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
            <path d="M1 4L4.5 7.5L11.5 1" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="w-7 h-7 flex items-center justify-center bg-[#FEF2F2] rounded hover:bg-[#FEE2E2]">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path d="M1 1L8 8M8 1L1 8" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

interface ConnectionCardProps {
  name: string;
  role: string;
  timeAgo: string;
  imageUrl: string;
}

const ConnectionCard = ({ name, role, timeAgo, imageUrl }: ConnectionCardProps) => (
  <div className="flex justify-between items-center">
    <div className="flex">
      <Image
        src={imageUrl}
        alt={name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="ml-3">
        <h3 className="text-[#1F2937] font-medium">{name}</h3>
        <p className="text-[#6B7280] text-sm">{role}</p>
        <p className="text-[#9CA3AF] text-sm mt-1">{timeAgo}</p>
      </div>
    </div>
    <button className="w-8 h-8 flex items-center justify-center hover:bg-[#F3F4F6] rounded">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM12 8.7H8.7V12H7.3V8.7H4V7.3H7.3V4H8.7V7.3H12V8.7Z" fill="#2563EB"/>
      </svg>
    </button>
  </div>
);

interface GroupCardProps {
  name: string;
  memberCount: string;
  iconBgColor?: string;
}

const GroupCard = ({ name, memberCount, iconBgColor = "bg-[#DBE9FE]" }: GroupCardProps) => (
  <div className="bg-[#F9FAFB] rounded-xl p-4">
    <div className="flex">
      <div className={`w-10 h-10 ${iconBgColor} rounded-lg flex items-center justify-center`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM12 8.7H8.7V12H7.3V8.7H4V7.3H7.3V4H8.7V7.3H12V8.7Z" fill="#2563EB"/>
        </svg>
      </div>
      <div className="ml-3">
        <h3 className="text-[#1F2937] font-medium">{name}</h3>
        <p className="text-[#6B7280] text-sm">{memberCount} members</p>
      </div>
    </div>
    <button className="w-full mt-4 h-[34px] bg-white border border-[#BFD9FE] text-[#2563EB] font-medium rounded flex items-center justify-center hover:bg-[#F8FAFC]">
      <svg className="mr-2" width="11" height="12" viewBox="0 0 11 12" fill="none">
        <path d="M10.5 5.5H6V1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V5.5H0.5C0.234784 5.5 -0.0195704 5.60536 -0.207107 5.79289C-0.394643 5.98043 -0.5 6.23478 -0.5 6.5C-0.5 6.76522 -0.394643 7.01957 -0.207107 7.20711C-0.0195704 7.39464 0.234784 7.5 0.5 7.5H4V11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12C5.26522 12 5.51957 11.8946 5.70711 11.7071C5.89464 11.5196 6 11.2652 6 11V7.5H10.5C10.7652 7.5 11.0196 7.39464 11.2071 7.20711C11.3946 7.01957 11.5 6.76522 11.5 6.5C11.5 6.23478 11.3946 5.98043 11.2071 5.79289C11.0196 5.60536 10.7652 5.5 10.5 5.5Z" fill="#2563EB"/>
      </svg>
      Join Group
    </button>
  </div>
);

const RightBar = () => {
  const requests = [
    {
      name: "Emma Wilson",
      role: "UX Designer at Creative Labs",
      timeAgo: "2 days ago",
      imageUrl: "/avatars/emma.jpg"
    },
    {
      name: "James Rodriguez",
      role: "Software Engineer at TechCorp",
      timeAgo: "3 days ago", 
      imageUrl: "/avatars/james.jpg"
    },
    {
      name: "Sophia Chen",
      role: "Product Manager at InnovateTech",
      timeAgo: "5 days ago",
      imageUrl: "/avatars/sophia.jpg"
    }
  ];

  const connections = [
    {
      name: "Alex Morgan",
      role: "Marketing Director at BrandX",
      timeAgo: "Connected 2 days ago",
      imageUrl: "/avatars/alex.jpg"
    },
    {
      name: "Daniel Kim",
      role: "Data Scientist at AnalyticsPro",
      timeAgo: "Connected 4 days ago",
      imageUrl: "/avatars/daniel.jpg"
    }
  ];

  const suggestedGroups = [
    {
      name: "UX Design Professionals",
      memberCount: "12,453",
      iconBgColor: "bg-[#DBE9FE]"
    },
    {
      name: "Tech Startups Network",
      memberCount: "8,762",
      iconBgColor: "bg-[#DBE9FE]"
    },
    {
      name: "Digital Marketing Experts",
      memberCount: "15,234",
      iconBgColor: "bg-[#DBE9FE]"
    }
  ];

  return (
    <div className="w-[287px] mr-6 mt-6 mb-6">
      <div className="bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-6">
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#1F2937] font-medium">Pending Requests</h2>
            <span className="text-[#6B7280] text-sm">3 requests</span>
          </div>
          <div className="space-y-4">
            {requests.map((request, index) => (
              <RequestCard key={index} {...request} />
            ))}
          </div>
          <button className="w-full text-[#2563EB] font-medium mt-[40px] py-2 hover:bg-[#F3F4F6] rounded">
            View All Requests
          </button>
        </div>

        <div className="mt-6 mb-10">
          <h2 className="text-[#1F2937] font-medium mb-4">Recent Connections</h2>
          <div className="space-y-4">
            {connections.map((connection, index) => (
              <ConnectionCard key={index} {...connection} />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-[#1F2937] font-medium mb-4">Groups You Might Like</h2>
          <div className="space-y-4">
            {suggestedGroups.map((group, index) => (
              <GroupCard key={index} {...group} />
            ))}
          </div>
          <button className="w-full text-[#2563EB] font-medium mt-[40px] py-2 hover:bg-[#F3F4F6] rounded">
            Discover More Groups
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar; 