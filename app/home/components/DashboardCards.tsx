import { FaFire, FaNewspaper, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

interface UpdateCardProps {
  icon: React.ReactNode;
  title: string;
  updates: number;
  iconColor: string;
}

const UpdateCard: React.FC<UpdateCardProps> = ({ icon, title, updates, iconColor }) => {
  return (
    <div className="w-[148px] h-24 bg-gradient-to-br from-[#DDECFF] to-[#E3EAFF] rounded-xl">
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
        <p className="text-sm text-[#6B7280]">{updates} new updates</p>
      </div>
    </div>
  );
};

const DashboardCards = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <UpdateCard
        icon={<FaFire size={16} />}
        title="Trending Topics"
        updates={111}
        iconColor="text-[#EF4444]"
      />
      <UpdateCard
        icon={<FaNewspaper size={16} />}
        title="Industry News"
        updates={49}
        iconColor="text-[#3B82F6]"
      />
      <UpdateCard
        icon={<FaLaptopCode size={16} />}
        title="Tech Updates"
        updates={74}
        iconColor="text-[#22C55E]"
      />
      <UpdateCard
        icon={<FaGraduationCap size={16} />}
        title="Career Growth"
        updates={62}
        iconColor="text-[#A855F7]"
      />
    </div>
  );
};

export default DashboardCards; 