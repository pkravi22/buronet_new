import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TopicSection from '../components/TopicSection';
import Feed from '../components/Feed';
import TrendingSection from '../components/TrendingSection';
import { FaFire, FaNewspaper, FaLaptopCode, FaChartLine } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      
      <main className="ml-48 pt-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="col-span-8">
            {/* Topics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <TopicSection
                title="Trending Topics"
                count="111"
                icon={<FaFire className="w-5 h-5" />}
              />
              <TopicSection
                title="Industry News"
                count="49"
                icon={<FaNewspaper className="w-5 h-5" />}
              />
              <TopicSection
                title="Tech Updates"
                count="74"
                icon={<FaLaptopCode className="w-5 h-5" />}
              />
              <TopicSection
                title="Career Growth"
                count="62"
                icon={<FaChartLine className="w-5 h-5" />}
              />
            </div>

            {/* Feed */}
            <Feed />
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4">
            <TrendingSection />
          </div>
        </div>
      </main>
    </div>
  );
} 