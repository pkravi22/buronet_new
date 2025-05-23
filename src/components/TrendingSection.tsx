interface TrendingItemProps {
  tag: string;
  title: string;
  stats: string;
}

const TrendingItem = ({ tag, title, stats }: TrendingItemProps) => {
  return (
    <div className="py-3">
      <div className="flex items-center text-sm text-gray-500 mb-1">
        <span>#{tag}</span>
        <span className="mx-2">•</span>
        <span>{stats}</span>
      </div>
      <h4 className="font-medium text-gray-900">{title}</h4>
    </div>
  );
};

const TrendingSection = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="font-semibold text-lg mb-4">Trending Now</h3>
      
      <div className="divide-y">
        <TrendingItem
          tag="TechNews"
          title="Apple announces new AI features for next iOS update"
          stats="7K posts • 1.2K comments"
        />
        <TrendingItem
          tag="DesignTrends"
          title="Minimalism making a comeback in UX design"
          stats="3K posts • 856 comments"
        />
        <TrendingItem
          tag="WorkCulture"
          title="Remote work policies changing post-pandemic"
          stats="12K posts • 2.3K comments"
        />
        <TrendingItem
          tag="AIInnovation"
          title="New breakthrough in generative AI technology"
          stats="5K posts • 1.1K comments"
        />
      </div>
    </div>
  );
};

export default TrendingSection; 