import { FaPen, FaPoll, FaCalendarPlus } from 'react-icons/fa';
import Image from 'next/image';

const Feed = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Share Your Professional Insights</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className="flex items-center justify-center space-x-2 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200">
            <FaPen className="text-green-500" />
            <span>Share Article</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200">
            <FaPoll className="text-blue-500" />
            <span>Create Poll</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200">
            <FaCalendarPlus className="text-purple-500" />
            <span>Host Event</span>
          </button>
        </div>
      </div>

      {/* Sample Post */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="relative w-12 h-12">
            <Image
              src="/avatar.png"
              alt="User Avatar"
              className="rounded-full"
              fill
              sizes="48px"
            />
          </div>
          <div>
            <h3 className="font-semibold">Sarah Johnson</h3>
            <p className="text-sm text-gray-500">Senior Product Designer at TechCorp</p>
            <span className="text-xs text-gray-400">2h ago</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Revolutionizing User Experience: Our Latest Design System</h4>
          <p className="text-gray-700">
            Excited to share our team&apos;s latest innovation in design systems. We&apos;ve focused on accessibility, performance, and scalability to create a seamless experience for millions of users. Here&apos;s an exclusive preview of our work.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="relative h-32">
            <Image
              src="/design1.png"
              alt="Design Preview"
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative h-32">
            <Image
              src="/design2.png"
              alt="Design Preview"
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative h-32">
            <Image
              src="/design3.png"
              alt="Design Preview"
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1">
              <span>Like (142)</span>
            </button>
            <button className="flex items-center space-x-1">
              <span>Discuss (24)</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button>Save</button>
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed; 