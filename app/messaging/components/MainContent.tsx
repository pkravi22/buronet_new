"use client";

import { useState } from 'react';
import { Search, CheckCircle, ChevronDown, Paperclip, Send } from 'lucide-react';

const recentChats = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    lastMessage: 'See you at 5pm!',
    time: '4:45 PM',
    unread: 2,
  },
  {
    id: 2,
    name: 'Amit Verma',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMessage: 'Thanks for the notes!',
    time: '3:20 PM',
    unread: 0,
  },
  {
    id: 3,
    name: 'Study Group',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    lastMessage: "Let's start at 7pm sharp.",
    time: 'Yesterday',
    unread: 1,
  },
];

const messages = [
  { id: 1, fromMe: false, text: 'Hey! Are you coming to the session today?', time: '4:40 PM' },
  { id: 2, fromMe: true, text: 'Yes, I will be there in 10 minutes.', time: '4:41 PM' },
  { id: 3, fromMe: false, text: 'Great! See you soon.', time: '4:42 PM' },
  { id: 4, fromMe: true, text: 'See you at 5pm!', time: '4:45 PM' },
];

const MainContent = () => {
  const [selectedChat, setSelectedChat] = useState(recentChats[0]);

  return (
    <div className="flex bg-white rounded-lg shadow-sm border border-[#E5E7EB] mt-8 mb-8 mr-8 ml-0 h-[calc(100vh-61px-3rem)]">
      {/* Recent Chats Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col h-full">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <span className="font-semibold text-lg">Chats</span>
          <button className="text-gray-400 hover:text-blue-600">
            <ChevronDown size={20} />
          </button>
        </div>
        <div className="p-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search chats"
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {recentChats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-blue-50 transition ${selectedChat.id === chat.id ? 'bg-blue-50' : ''}`}
              onClick={() => setSelectedChat(chat)}
            >
              <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <span className="font-medium truncate">{chat.name}</span>
                  <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-gray-500 truncate">{chat.lastMessage}</span>
                  {chat.unread > 0 && (
                    <span className="ml-2 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 font-semibold">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Chatbox */}
      <div className="flex-1 flex flex-col h-full">
        {/* Chat Header */}
        <div className="flex items-center gap-4 border-b border-gray-100 px-6 py-4">
          <img src={selectedChat.avatar} alt={selectedChat.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <div className="font-semibold">{selectedChat.name}</div>
            <div className="text-xs text-gray-400">Online</div>
          </div>
        </div>
        {/* Messages */}
        <div className="flex-1 px-6 py-4 overflow-y-auto bg-[#F7F9FB] scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex flex-col gap-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.fromMe ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-2xl px-4 py-2 max-w-xs break-words text-sm shadow-sm ${
                    msg.fromMe
                      ? 'bg-blue-600 text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md border border-gray-200'
                  }`}
                >
                  {msg.text}
                  <span className="block text-[10px] text-right mt-1 opacity-60">
                    {msg.time} {msg.fromMe && <CheckCircle size={12} className="inline ml-1 text-white" />}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Message Input */}
        <div className="flex items-center gap-2 px-6 py-4 border-t border-gray-100">
          <button className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-gray-100">
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 rounded-full bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button className="p-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent; 