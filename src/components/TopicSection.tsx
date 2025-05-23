interface TopicProps {
  title: string;
  count: string;
  icon: React.ReactNode;
}

const TopicSection = ({ title, count, icon }: TopicProps) => {
  return (
    <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-blue-500">{icon}</span>
          <h3 className="font-medium text-gray-900">{title}</h3>
        </div>
        <span className="text-sm text-gray-500">{count} new updates</span>
      </div>
    </div>
  );
};

export default TopicSection; 