import { FiTrendingUp, FiMoreHorizontal } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';

interface TrendingItemProps {
  hashtag: string;
  title: string;
  posts: string;
  newPosts: string;
  isHot?: boolean;
}

interface SuggestedUserProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TrendingItem: React.FC<TrendingItemProps> = ({ hashtag, title, posts, newPosts, isHot }) => {
  return (
    <div className="bg-[#F9FAFD] rounded-xl p-3 mb-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-[#6B728B] text-sm">{hashtag}</span>
          {isHot && (
            <div className="ml-2 bg-[#FEE2E2] rounded px-2 py-0.5 flex items-center">
              <FaFire className="text-[#DC2626] w-2.5 h-3" />
              <span className="ml-1 text-[#DC2626] text-sm">Hot</span>
            </div>
          )}
        </div>
        <FiMoreHorizontal className="text-[#9CA3AF] w-3.5" />
      </div>
      <h3 className="text-[#1F2937] text-base font-medium mt-1 mb-2 leading-5">
        {title}
      </h3>
      <p className="text-[#6B728B] text-sm">
        {posts} • {newPosts}
      </p>
    </div>
  );
};

const SuggestedUser: React.FC<SuggestedUserProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center">
        <img src={imageUrl} alt={name} className="w-10 h-10 rounded-full" />
        <div className="ml-3">
          <h3 className="text-[#1F2937] text-base font-medium">{name}</h3>
          <p className="text-[#6B728B] text-sm">{role}</p>
        </div>
      </div>
      <button className="text-[#2563EB] text-sm font-medium px-4 py-1 rounded hover:bg-[#EEF2FF]">
        Connect
      </button>
    </div>
  );
};

const RightSidebar = () => {
  return (
    <div className="w-[287px] mr-6 mt-6 mb-6">
      <div className="bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-4 mb-6">
        <div className="flex items-center mb-4">
          <FiTrendingUp className="text-[#5E98FF] w-5 h-5" />
          <span className="ml-2 text-[#1F2937] font-semibold">Trending Now</span>
        </div>
        <div>
          <TrendingItem 
            hashtag="#TechNews"
            title="Apple announces new AI features for next iOS update"
            posts="7K posts"
            newPosts="1 new post"
            isHot={true}
          />
          <TrendingItem 
            hashtag="#DesignTrends"
            title="Minimalism making a comeback in UX design"
            posts="8K posts"
            newPosts="85 new posts"
          />
          <TrendingItem 
            hashtag="#WorkFromHome"
            title="Remote work policies changing post-pandemic"
            posts="10K posts"
            newPosts="13 new posts"
          />
          <TrendingItem 
            hashtag="#AIinnovation"
            title="New breakthrough in generative AI technology"
            posts="3K posts"
            newPosts="63 new posts"
          />
        </div>
        
        <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
          <div className="flex items-center mb-4">
            <span className="text-[#1F2937] font-semibold">Suggested For You</span>
          </div>
          <div>
            <SuggestedUser
              name="David Wilson"
              role="UX Designer at DesignLab"
              imageUrl="/placeholder-avatar.jpg"
            />
            <SuggestedUser
              name="Sarah Chen"
              role="Product Designer at TechCo"
              imageUrl="/placeholder-avatar.jpg"
            />
            <SuggestedUser
              name="Michael Brown"
              role="UI Developer at WebStudio"
              imageUrl="/placeholder-avatar.jpg"
            />
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#E5E7EB] text-sm">
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-4">
            <a href="#" className="text-[#6B728B] hover:underline">About</a>
            <a href="#" className="text-[#6B728B] hover:underline">Help Center</a>
            <a href="#" className="text-[#6B728B] hover:underline">Privacy & Terms</a>
            <a href="#" className="text-[#6B728B] hover:underline">Advertising</a>
            <a href="#" className="text-[#6B728B] hover:underline">Business Services</a>
            <a href="#" className="text-[#6B728B] hover:underline">Get the App</a>
          </div>
          <p className="text-[#6B728B]">© 2025 Nexus Corporation</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar; 