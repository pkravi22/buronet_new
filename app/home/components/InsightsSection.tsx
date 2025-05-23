import { FaPen, FaPoll, FaCalendarAlt } from 'react-icons/fa';

interface ActionButtonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, title, description, iconBgColor, iconColor }) => {
  return (
    <button className="flex items-center bg-white rounded h-[60px] flex-1 min-w-[180px]">
      <div className="px-3 py-3 flex items-center w-full">
        <div className={`w-8 h-8 ${iconBgColor} rounded-lg flex items-center justify-center shrink-0`}>
          <span className={`${iconColor}`}>
            {icon}
          </span>
        </div>
        <div className="ml-2 text-left">
          <h3 className="text-[#1F2937] font-medium text-sm whitespace-nowrap">{title}</h3>
          <p className="text-[#6B7280] text-xs whitespace-nowrap">{description}</p>
        </div>
      </div>
    </button>
  );
};

const InsightsSection = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="mt-6 bg-gradient-to-b from-[#DDECFF] to-[#E3EAFF] rounded-xl w-[640px]">
        <div className="px-5 py-4">
          <h2 className="text-[#1F2937] text-lg font-bold mb-4">Share Your Professional Insights</h2>
          <div className="flex gap-3">
            <ActionButton
              icon={<FaPen size={10} />}
              title="Share Article"
              description="Write your thoughts"
              iconBgColor="bg-[#F0FDF4]"
              iconColor="text-[#22C55E]"
            />
            <ActionButton
              icon={<FaPoll size={16} />}
              title="Create Poll"
              description="Get community feedback"
              iconBgColor="bg-[#EFF6FF]"
              iconColor="text-[#3B82F6]"
            />
            <ActionButton
              icon={<FaCalendarAlt size={12} />}
              title="Host Event"
              description="Schedule a meetup"
              iconBgColor="bg-[#FAF5FF]"
              iconColor="text-[#A855F7]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsSection; 