import TopBar from '../shared/components/TopBar';
import Navbar from '../shared/components/Navbar';
import MainContent from '@/app/circle/components/MainContent';
import RightBar from './components/RightBar';

export default function CirclePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEF0F4]">
      <TopBar />
      <div className="flex flex-1 pt-[61px]">
        <div className="w-[239px]" /> {/* Placeholder for fixed navbar */}
        <Navbar activeItem="My Circle" />
        <main className="flex-1 px-6 ml-6">
          <MainContent />
        </main>
        <RightBar />
      </div>
    </div>
  );
} 