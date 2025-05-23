"use client";

import TopBar from '../shared/components/TopBar';
import Navbar from '../shared/components/Navbar';
import MainContent from './components/MainContent';

const MessagingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEF0F4]">
      <TopBar />
      <div className="flex flex-1 pt-[61px]">
        <div className="w-[239px]" /> {/* Placeholder for fixed navbar */}
        <Navbar activeItem="Messaging" />
        <main className="flex-1 px-6 ml-6">
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default MessagingPage; 