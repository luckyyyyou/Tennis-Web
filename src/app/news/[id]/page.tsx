'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const newsDatabase = {
  'news1': {
    id: 'news1',
    category: '赛事新闻',
    title: '2024年澳网精彩回顾：辛纳首夺大满贯',
    content: '回顾本届澳网精彩瞬间，意大利新科冠军诞生的激动时刻...',
    fullContent: `
      在2024年澳大利亚网球公开赛中，扬尼克·辛纳展现出惊人的实力和成熟度。
      这是他职业生涯的第一个大满贯冠军，也是意大利网坛的历史性突破。
      
      比赛精彩回顾：
      - 首轮：直落三盘轻松晋级
      - 第二轮：展现稳定发挥
      - 第三轮：技术全面施展
      - 第四轮：力克强敌继续前进
      - 四分之一决赛：击败赛会5号种子
      - 半决赛：战胜久经沙场的老将
      - 决赛：3-1战胜梅德韦杰夫，首夺大满贯
      
      这位年仅22岁的意大利新星用这场胜利证明了自己已经准备好在大满贯赛场上扮演重要角色。
      他在整个赛事中展现出的发球稳定性、底线进攻和关键分把握能力，都令人印象深刻。
    `,
    date: '2024-02-01',
    author: '网球邦体育'
  },
  'news2': {
    id: 'news2',
    category: '球员动态',
    title: '纳达尔宣布复出计划',
    content: '西班牙天王确认将参加即将到来的红土赛季...',
    fullContent: `
      拉斐尔·纳达尔正式宣布他的复出计划。这位西班牙网球天王将在即将到来的红土赛季重返赛场。
      
      复出计划详情：
      - 首站比赛：蒙特卡洛大师赛
      - 后续赛程：马德里公开赛、罗马大师赛
      - 终极目标：法国网球公开赛
      
      纳达尔表示："我已经为这次复出做好了充分的准备，迫不及待想要重返赛场。"
    `,
    date: '2024-03-15',
    author: '网球邦体育'
  }
};

export default function NewsPage() {
  const params = useParams();
  const newsId = params.id as string;
  const news = newsDatabase[newsId];

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">未找到该新闻</h1>
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
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="mb-6">
            <span className="text-sm text-blue-600">{news.category}</span>
            <h1 className="text-3xl font-bold mt-2">{news.title}</h1>
            <div className="flex items-center gap-4 mt-4 text-gray-600 text-sm">
              <span>{news.date}</span>
              <span>•</span>
              <span>{news.author}</span>
            </div>
          </div>
          
          <div className="prose prose-blue max-w-none">
            {news.fullContent.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← 返回首页
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
} 