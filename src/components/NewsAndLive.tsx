'use client';

import { NewsItem, LiveMatch } from "@/types";
import { useRouter } from 'next/navigation';

interface NewsAndLiveProps {
  news: NewsItem[];
  matches: LiveMatch[];
}

export function NewsAndLive({ news, matches }: NewsAndLiveProps) {
  const router = useRouter();

  const handleNewsClick = (newsId: string) => {
    // 导航到新闻详情页
    router.push(`/news/${newsId}`);
  };

  const handleLiveClick = (matchId: string) => {
    // 导航到直播页面
    router.push(`/live/${matchId}`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* 新闻资讯 */}
      <div className="lg:col-span-2 space-y-6">
        <h2 className="text-2xl font-bold">最新网球资讯</h2>
        <div className="space-y-4">
          {news.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleNewsClick(item.id)}
            >
              <span className="text-sm text-blue-600">{item.category}</span>
              <h3 className="font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 直播和集锦 */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">赛事直播</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="space-y-4">
            {matches.map((match) => (
              <div 
                key={match.id}
                className={`${
                  match.status === 'live' ? 'border-b pb-4' : ''
                } cursor-pointer hover:bg-gray-50 transition-colors`}
                onClick={() => handleLiveClick(match.id)}
              >
                {match.status === 'live' ? (
                  <span className="text-sm text-red-500">直播中</span>
                ) : (
                  <p className="font-semibold">即将开始</p>
                )}
                <p className="font-semibold mt-1">{match.tournament}</p>
                <p className="text-sm text-gray-600 mt-1">{match.players}</p>
                {match.startTime && (
                  <p className="text-sm text-gray-600">{match.startTime}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 