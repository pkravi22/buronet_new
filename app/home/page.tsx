import TopBar from '../shared/components/TopBar';
import Navbar from '../shared/components/Navbar';
import RightSidebar from '../home/components/RightSidebar';
import DashboardCards from '../home/components/DashboardCards';
import InsightsSection from '../home/components/InsightsSection';
import PostSection from '../home/components/PostSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEF0F4]">
      <TopBar />
      <div className="flex flex-1 pt-[61px]">
        <div className="w-[239px]" /> {/* Placeholder for fixed navbar */}
        <Navbar activeItem="Home" />
        <main className="flex-1 px-6 ml-6">
          <div className="mt-6">
            <DashboardCards />
            <InsightsSection />
            <PostSection />
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}
