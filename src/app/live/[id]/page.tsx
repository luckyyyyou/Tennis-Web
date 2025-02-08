'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const liveDatabase = {
  'match1': {
    id: 'match1',
    tournament: 'ATP1000迈阿密大师赛',
    players: '阿尔卡拉兹 vs 梅德韦杰夫',
    status: 'live',
    score: '6-4, 4-6, 3-2',
    stats: {
      player1: {
        name: '阿尔卡拉兹',
        aces: 8,
        doubleFaults: 2,
        firstServePercentage: 65,
        breakPoints: '3/7'
      },
      player2: {
        name: '梅德韦杰夫',
        aces: 6,
        doubleFaults: 3,
        firstServePercentage: 62,
        breakPoints: '2/5'
      }
    }
  },
  'match2': {
    id: 'match2',
    tournament: 'WTA布达佩斯站',
    players: '待定',
    status: 'upcoming',
    startTime: '19:30 开始'
  }
};

export default function LivePage() {
  const params = useParams();
  const matchId = params.id as string;
  const match = liveDatabase[matchId];

  if (!match) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">未找到该比赛</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h1 className="text-2xl font-bold mb-4">{match.tournament}</h1>
            <div className="text-xl mb-6">{match.players}</div>
            
            {match.status === 'live' ? (
              <>
                <div className="text-3xl font-bold text-center mb-8">
                  {match.score}
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="text-right">{match.stats?.player1.aces}</div>
                  <div className="text-gray-600">发球得分</div>
                  <div className="text-left">{match.stats?.player2.aces}</div>
                  
                  <div className="text-right">{match.stats?.player1.doubleFaults}</div>
                  <div className="text-gray-600">双误</div>
                  <div className="text-left">{match.stats?.player2.doubleFaults}</div>
                  
                  <div className="text-right">{match.stats?.player1.firstServePercentage}%</div>
                  <div className="text-gray-600">一发成功率</div>
                  <div className="text-left">{match.stats?.player2.firstServePercentage}%</div>
                  
                  <div className="text-right">{match.stats?.player1.breakPoints}</div>
                  <div className="text-gray-600">破发点</div>
                  <div className="text-left">{match.stats?.player2.breakPoints}</div>
                </div>
              </>
            ) : (
              <div className="text-center text-xl text-gray-600">
                {match.startTime}
              </div>
            )}
          </div>

          <div className="text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← 返回首页
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 