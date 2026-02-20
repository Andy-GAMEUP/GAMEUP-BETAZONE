import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Link } from "react-router";
import {
  Users,
  Gamepad2,
  MessageSquare,
  TrendingUp,
  Download,
  Eye,
  Star,
  AlertCircle,
  DollarSign,
  Zap,
  TrendingDown,
  Percent,
} from "lucide-react";

export function DeveloperDashboard() {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    {
      label: "등록된 게임",
      value: "8",
      change: "+2",
      trend: "up",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "text-blue-400",
    },
    {
      label: "총 매출",
      value: "₩45,280,000",
      change: "+18.2%",
      trend: "up",
      icon: <DollarSign className="w-6 h-6" />,
      color: "text-green-400",
    },
    {
      label: "활성 유저",
      value: "12,450",
      change: "+1,250",
      trend: "up",
      icon: <Users className="w-6 h-6" />,
      color: "text-purple-400",
    },
    {
      label: "평균 ARPPU",
      value: "₩28,400",
      change: "+5.3%",
      trend: "up",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-yellow-400",
    },
  ];

  const allGames = [
    {
      id: 1,
      title: "Cyber Nexus",
      status: "진행중",
      serviceType: "beta",
      monetization: "free",
      testers: 2450,
      feedback: 892,
      rating: 4.8,
      revenue: 8450000,
      retention: { d1: 75, d7: 45, d14: 32, d30: 18 },
      arppu: 32400,
      conversion: 12.5,
    },
    {
      id: 2,
      title: "Stellar Warfare",
      status: "모집중",
      serviceType: "beta",
      monetization: "ad",
      testers: 1820,
      feedback: 645,
      rating: 4.6,
      revenue: 3200000,
      retention: { d1: 68, d7: 38, d14: 25, d30: 12 },
      arppu: 0,
      conversion: 0,
    },
    {
      id: 3,
      title: "Racing Legends",
      status: "운영중",
      serviceType: "live",
      monetization: "paid",
      testers: 8500,
      feedback: 2341,
      rating: 4.7,
      revenue: 28450000,
      retention: { d1: 82, d7: 58, d14: 42, d30: 28 },
      arppu: 45200,
      conversion: 25.3,
    },
    {
      id: 4,
      title: "Mystic Realms",
      status: "곧 시작",
      serviceType: "beta",
      monetization: "free",
      testers: 980,
      feedback: 234,
      rating: 4.5,
      revenue: 1850000,
      retention: { d1: 72, d7: 42, d14: 28, d30: 15 },
      arppu: 18900,
      conversion: 8.2,
    },
    {
      id: 5,
      title: "Battle Arena Pro",
      status: "운영중",
      serviceType: "live",
      monetization: "free",
      testers: 15200,
      feedback: 4521,
      rating: 4.8,
      revenue: 52300000,
      retention: { d1: 88, d7: 65, d14: 52, d30: 38 },
      arppu: 38500,
      conversion: 18.7,
    },
  ];

  const betaGames = allGames.filter((game) => game.serviceType === "beta");
  const liveGames = allGames.filter((game) => game.serviceType === "live");

  const getFilteredGames = () => {
    switch (activeTab) {
      case "beta":
        return betaGames;
      case "live":
        return liveGames;
      default:
        return allGames;
    }
  };

  const filteredGames = getFilteredGames();

  // 매출 통계 계산
  const totalRevenue = filteredGames.reduce((sum, game) => sum + game.revenue, 0);
  const paidRevenue = filteredGames
    .filter((g) => g.monetization === "paid" || g.monetization === "free")
    .reduce((sum, game) => sum + game.revenue, 0);
  const adRevenue = filteredGames
    .filter((g) => g.monetization === "ad")
    .reduce((sum, game) => sum + game.revenue, 0);

  // 평균 리텐션 계산
  const avgRetention = {
    d1: Math.round(filteredGames.reduce((sum, game) => sum + game.retention.d1, 0) / filteredGames.length),
    d7: Math.round(filteredGames.reduce((sum, game) => sum + game.retention.d7, 0) / filteredGames.length),
    d14: Math.round(filteredGames.reduce((sum, game) => sum + game.retention.d14, 0) / filteredGames.length),
    d30: Math.round(filteredGames.reduce((sum, game) => sum + game.retention.d30, 0) / filteredGames.length),
  };

  const recentFeedback = [
    {
      id: 1,
      game: "Cyber Nexus",
      user: "김게이머",
      type: "버그",
      message: "레벨 15에서 캐릭터가 벽을 통과하는 버그 발견",
      time: "30분 전",
      priority: "high",
    },
    {
      id: 2,
      game: "Stellar Warfare",
      user: "이플레이어",
      type: "제안",
      message: "무기 밸런스 조정이 필요합니다",
      time: "1시간 전",
      priority: "medium",
    },
    {
      id: 3,
      game: "Mystic Realms",
      user: "박유저",
      type: "긍정",
      message: "스토리라인이 정말 흥미진진합니다!",
      time: "2시간 전",
      priority: "low",
    },
  ];

  const weeklyData = [
    { day: "월", testers: 2100, downloads: 450 },
    { day: "화", testers: 2300, downloads: 520 },
    { day: "수", testers: 2800, downloads: 680 },
    { day: "목", testers: 3200, downloads: 750 },
    { day: "금", testers: 3600, downloads: 820 },
    { day: "토", testers: 4100, downloads: 950 },
    { day: "일", testers: 4500, downloads: 1020 },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">대시보드</h1>
        <p className="text-slate-400">게임 성과를 한눈에 확인하세요</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.color}`}>{stat.icon}</div>
                <Badge
                  className={`${
                    stat.trend === "up"
                      ? "bg-green-500/20 text-green-400 border-green-500/50"
                      : "bg-red-500/20 text-red-400 border-red-500/50"
                  }`}
                >
                  {stat.change}
                </Badge>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 게임 탭 */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-slate-900 border border-slate-800">
          <TabsTrigger value="all">
            전체 게임 ({allGames.length})
          </TabsTrigger>
          <TabsTrigger value="beta">
            <Zap className="w-4 h-4 mr-2" />
            베타 테스트 ({betaGames.length})
          </TabsTrigger>
          <TabsTrigger value="live">
            <Gamepad2 className="w-4 h-4 mr-2" />
            라이브 게임 ({liveGames.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-6 mt-6">
          {/* 매출 요약 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-slate-400 text-sm">총 매출</div>
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-green-400 mb-1">
                  ₩{totalRevenue.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500">이번 달</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-slate-400 text-sm">유료 판매</div>
                  <DollarSign className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-3xl font-bold mb-1">
                  ₩{paidRevenue.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500">
                  전체의 {((paidRevenue / totalRevenue) * 100).toFixed(1)}%
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-slate-400 text-sm">광고 매출</div>
                  <Eye className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold mb-1">
                  ₩{adRevenue.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500">
                  전체의 {((adRevenue / totalRevenue) * 100).toFixed(1)}%
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 리텐션 & 전환율 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 평균 리텐션 */}
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">평균 리텐션</h2>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">D+1 리텐션</span>
                      <span className="font-semibold text-lg">{avgRetention.d1}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                        style={{ width: `${avgRetention.d1}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">D+7 리텐션</span>
                      <span className="font-semibold text-lg">{avgRetention.d7}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full"
                        style={{ width: `${avgRetention.d7}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">D+14 리텐션</span>
                      <span className="font-semibold text-lg">{avgRetention.d14}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full"
                        style={{ width: `${avgRetention.d14}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">D+30 리텐션</span>
                      <span className="font-semibold text-lg">{avgRetention.d30}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                        style={{ width: `${avgRetention.d30}%` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ARPPU 및 전환율 */}
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">수익화 지표</h2>
                <div className="space-y-6">
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-slate-400">평균 ARPPU</span>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                        +5.3%
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-green-400">
                      ₩{Math.round(
                        filteredGames.reduce((sum, game) => sum + game.arppu, 0) /
                          filteredGames.filter((g) => g.arppu > 0).length || 0
                      ).toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      결제 유저당 평균 매출
                    </div>
                  </div>

                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Percent className="w-5 h-5 text-blue-400" />
                        <span className="text-sm text-slate-400">평균 결제전환율</span>
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">
                        +2.1%
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-blue-400">
                      {(
                        filteredGames.reduce((sum, game) => sum + game.conversion, 0) /
                        filteredGames.filter((g) => g.conversion > 0).length || 0
                      ).toFixed(1)}%
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      무료 유저 대비 결제 유저 비율
                    </div>
                  </div>

                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-purple-400" />
                      <span className="text-sm text-slate-400">총 활성 유저</span>
                    </div>
                    <div className="text-3xl font-bold">
                      {filteredGames.reduce((sum, game) => sum + game.testers, 0).toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      결제 유저: {Math.round(
                        filteredGames.reduce((sum, game) => sum + (game.testers * game.conversion / 100), 0)
                      ).toLocaleString()}명
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 게임 성과 */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">게임별 성과</h2>
              <div className="space-y-4">
                {filteredGames.map((game) => (
                  <Link
                    key={game.id}
                    to={`/developer/games/${game.id}`}
                    className="block p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{game.title}</h3>
                          <div className="flex items-center gap-2">
                            <Badge
                              className={`text-xs ${
                                game.serviceType === "beta"
                                  ? "bg-blue-500/20 text-blue-400 border-blue-500/50"
                                  : "bg-green-500/20 text-green-400 border-green-500/50"
                              }`}
                            >
                              {game.serviceType === "beta" ? "베타" : "라이브"}
                            </Badge>
                            <Badge variant="outline" className="text-xs border-slate-700">
                              {game.monetization === "free"
                                ? "무료"
                                : game.monetization === "ad"
                                ? "광고"
                                : "유료"}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>{game.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-400">
                          ₩{game.revenue.toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-500">매출</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                      <div className="p-2 bg-slate-800/50 rounded">
                        <p className="text-slate-400 text-xs mb-1">활성 유저</p>
                        <p className="font-semibold">{game.testers.toLocaleString()}</p>
                      </div>
                      <div className="p-2 bg-slate-800/50 rounded">
                        <p className="text-slate-400 text-xs mb-1">D+1 리텐션</p>
                        <p className="font-semibold text-green-400">{game.retention.d1}%</p>
                      </div>
                      <div className="p-2 bg-slate-800/50 rounded">
                        <p className="text-slate-400 text-xs mb-1">D+30 리텐션</p>
                        <p className="font-semibold text-blue-400">{game.retention.d30}%</p>
                      </div>
                      {game.arppu > 0 && (
                        <>
                          <div className="p-2 bg-slate-800/50 rounded">
                            <p className="text-slate-400 text-xs mb-1">ARPPU</p>
                            <p className="font-semibold">₩{game.arppu.toLocaleString()}</p>
                          </div>
                          <div className="p-2 bg-slate-800/50 rounded">
                            <p className="text-slate-400 text-xs mb-1">전환율</p>
                            <p className="font-semibold text-purple-400">{game.conversion}%</p>
                          </div>
                        </>
                      )}
                      {game.arppu === 0 && (
                        <div className="col-span-2 p-2 bg-slate-800/50 rounded">
                          <p className="text-slate-400 text-xs mb-1">수익 모델</p>
                          <p className="font-semibold">광고 기반</p>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Feedback */}
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">최근 피드백</h2>
            <a href="/developer/feedback" className="text-sm text-green-400 hover:text-green-300">
              모두 보기 →
            </a>
          </div>
          <div className="space-y-4">
            {recentFeedback.map((feedback) => (
              <div
                key={feedback.id}
                className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    feedback.priority === "high"
                      ? "bg-red-500/20"
                      : feedback.priority === "medium"
                      ? "bg-yellow-500/20"
                      : "bg-blue-500/20"
                  }`}
                >
                  <AlertCircle
                    className={`w-5 h-5 ${
                      feedback.priority === "high"
                        ? "text-red-400"
                        : feedback.priority === "medium"
                        ? "text-yellow-400"
                        : "text-blue-400"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{feedback.user}</span>
                    <span className="text-sm text-slate-500">•</span>
                    <Badge variant="outline" className="text-xs">
                      {feedback.game}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        feedback.type === "버그"
                          ? "border-red-500/50 text-red-400"
                          : feedback.type === "제안"
                          ? "border-yellow-500/50 text-yellow-400"
                          : "border-green-500/50 text-green-400"
                      }`}
                    >
                      {feedback.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-300 mb-2">{feedback.message}</p>
                  <span className="text-xs text-slate-500">{feedback.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
