import { NewsAndLive } from "@/components/NewsAndLive";
import { AuthButtons } from "@/components/AuthButtons";

const newsData = [
  {
    id: 'news1',
    category: '赛事新闻',
    title: '2024年澳网精彩回顾：辛纳首夺大满贯',
    content: '回顾本届澳网精彩瞬间，意大利新科冠军诞生的激动时刻...'
  },
  {
    id: 'news2',
    category: '球员动态',
    title: '纳达尔宣布复出计划',
    content: '西班牙天王确认将参加即将到来的红土赛季...'
  }
];

const matchesData = [
  {
    id: 'match1',
    status: 'live' as const,
    tournament: 'ATP1000迈阿密大师赛',
    players: '阿尔卡拉兹 vs 梅德韦杰夫'
  },
  {
    id: 'match2',
    status: 'upcoming' as const,
    tournament: 'WTA布达佩斯站',
    players: '待定',
    startTime: '19:30 开始'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 导航栏 */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-xl">🎾</span>
          </div>
          <span className="text-xl font-bold text-blue-600">网球邦</span>
        </div>
        <AuthButtons />
      </nav>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8">
        {/* 英雄区域 */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            寻找完美 <span className="text-blue-600">网球搭档</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            基于UTR评级系统，智能匹配相近水平的球友，让每一场比赛都充满竞技性与趣味性
          </p>
        </section>

        {/* 约球功能区 - 扩展功能 */}
        <section className="mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">快速约球</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 位置选择 */}
              <div className="space-y-4">
                <label className="block text-gray-700">选择位置范围</label>
                <div className="flex gap-4">
                  <select className="flex-1 rounded-lg border p-2">
                    <option>3公里</option>
                    <option>5公里</option>
                    <option>10公里</option>
                  </select>
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">
                    定位
                  </button>
                </div>
              </div>
              {/* UTR级别 */}
              <div className="space-y-4">
                <label className="block text-gray-700">UTR级别</label>
                <select className="w-full rounded-lg border p-2">
                  <option>UTR 1-3 (初学者)</option>
                  <option>UTR 4-6 (进阶选手)</option>
                  <option>UTR 7-8 (中级选手)</option>
                  <option>UTR 9+ (高级选手)</option>
                </select>
              </div>

              {/* 新增时间选择 */}
              <div className="space-y-4">
                <label className="block text-gray-700">选择时间</label>
                <input 
                  type="datetime-local" 
                  className="w-full rounded-lg border p-2"
                />
              </div>

              {/* 新增场地偏好 */}
              <div className="space-y-4">
                <label className="block text-gray-700">场地偏好</label>
                <select className="w-full rounded-lg border p-2">
                  <option>硬地</option>
                  <option>红土</option>
                  <option>草地</option>
                  <option>室内场地</option>
                </select>
              </div>
            </div>

            {/* 新增约球按钮 */}
            <div className="mt-6 flex justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                开始匹配
              </button>
            </div>
          </div>
        </section>

        {/* 附近场地推荐 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">推荐场地</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-blue-50 flex items-center justify-center">
                <span className="text-6xl">🎾</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">奥林匹克网球中心</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span>⭐ 4.8</span>
                  <span>•</span>
                  <span>距离 2.3km</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">硬地 • 室外 • 灯光设施</p>
                <button className="w-full py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                  预订场地
                </button>
              </div>
            </div>
            {/* 可以添加更多场地卡片 */}
          </div>
        </section>

        {/* 教练推荐 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">专业教练</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="w-24 h-24 mx-auto mb-4">
                <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-1">王教练</h3>
                <p className="text-sm text-gray-600 mb-2">前职业选手 • 10年教学经验</p>
                <div className="flex justify-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                    初级教学
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                    比赛指导
                  </span>
                </div>
                <button className="w-full py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                  预约课程
                </button>
              </div>
            </div>
            {/* 可以添加更多教练卡片 */}
          </div>
        </section>

        {/* 替换新闻和直播部分为客户端组件 */}
        <NewsAndLive 
          news={newsData} 
          matches={matchesData}
        />

        {/* 世界排名 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ATP排名 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">ATP世界排名</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="font-bold">1</span>
                  <span>德约科维奇</span>
                </div>
                <span>11,055分</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="font-bold">2</span>
                  <span>阿尔卡拉兹</span>
                </div>
                <span>9,255分</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="font-bold">3</span>
                  <span>梅德韦杰夫</span>
                </div>
                <span>8,765分</span>
              </div>
            </div>
          </div>

          {/* WTA排名 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">WTA世界排名</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="font-bold">1</span>
                  <span>斯瓦泰克</span>
                </div>
                <span>10,835分</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="font-bold">2</span>
                  <span>萨巴伦卡</span>
                </div>
                <span>8,495分</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="font-bold">3</span>
                  <span>加乌夫</span>
                </div>
                <span>7,750分</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 网球邦. 保留所有权利</p>
        </div>
      </footer>
    </div>
  );
}
