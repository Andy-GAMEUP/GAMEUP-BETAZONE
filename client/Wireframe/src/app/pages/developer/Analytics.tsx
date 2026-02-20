import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Download,
  Eye,
  Star,
  Clock,
  Activity,
  Target,
  Calendar,
  DollarSign,
  Percent,
  Zap,
  Gamepad2,
} from "lucide-react";

export function Analytics() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedGame, setSelectedGame] = useState("all");

  const overviewStats = [
    {
      label: "총 조회수",
      value: "145,240",
      change: "+12.5%",
      trend: "up",
      icon: <Eye className="w-5 h-5" />,
    },
    {
      label: "다운로드",
      value: "8,942",
      change: "+8.2%",
      trend: "up",
      icon: <Download className="w-5 h-5" />,
    },
    {
      label: "활성 사용자",
      value: "12,450",
      change: "+15.3%",
      trend: "up",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "평균 평점",
      value: "4.7",
      change: "+0.1",
      trend: "up",
      icon: <Star className="w-5 h-5" />,
    },
  ];

  const allGames = [
    {
      id: 1,
      name: "Cyber Nexus",
      serviceType: "beta",
      monetization: "free",
      users: 2450,
      downloads: 892,
      rating: 4.8,
      playtime: "3.2h",
      revenue: 8450000,
      arppu: 32400,
      conversion: 12.5,
      retention: { d1: 75, d7: 45, d14: 32, d30: 18 },
    },
    {
      id: 2,
      name: "Stellar Warfare",
      serviceType: "beta",
      monetization: "ad",
      users: 1820,
      downloads: 645,
      rating: 4.6,
      playtime: "2.8h",
      revenue: 3200000,
      arppu: 0,
      conversion: 0,
      retention: { d1: 68, d7: 38, d14: 25, d30: 12 },
    },
    {
      id: 3,
      name: "Racing Legends",
      serviceType: "live",
      monetization: "paid",
      users: 8500,
      downloads: 3421,
      rating: 4.7,
      playtime: "4.1h",
      revenue: 28450000,
      arppu: 45200,
      conversion: 25.3,
      retention: { d1: 82, d7: 58, d14: 42, d30: 28 },
    },
    {
      id: 4,
      name: "Mystic Realms",
      serviceType: "beta",
      monetization: "free",
      users: 980,
      downloads: 234,
      rating: 4.5,
      playtime: "2.1h",
      revenue: 1850000,
      arppu: 18900,
      conversion: 8.2,
      retention: { d1: 72, d7: 42, d14: 28, d30: 15 },
    },
    {
      id: 5,
      name: "Battle Arena Pro",
      serviceType: "live",
      monetization: "free",
      users: 15200,
      downloads: 5821,
      rating: 4.8,
      playtime: "5.2h",
      revenue: 52300000,
      arppu: 38500,
      conversion: 18.7,
      retention: { d1: 88, d7: 65, d14: 52, d30: 38 },
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

  // 선택된 게임 필터링
  const gameAnalytics = selectedGame === "all"
    ? filteredGames
    : filteredGames.filter((g) => g.id === parseInt(selectedGame));

  // 매출 통계
  const totalRevenue = gameAnalytics.reduce((sum, game) => sum + game.revenue, 0);
  const paidRevenue = gameAnalytics
    .filter((g) => g.monetization === "paid" || g.monetization === "free")
    .reduce((sum, game) => sum + game.revenue, 0);
  const adRevenue = gameAnalytics
    .filter((g) => g.monetization === "ad")
    .reduce((sum, game) => sum + game.revenue, 0);

  // 평균 지표
  const avgMetrics = {
    arppu: Math.round(
      gameAnalytics
        .filter((g) => g.arppu > 0)
        .reduce((sum, game) => sum + game.arppu, 0) /
        gameAnalytics.filter((g) => g.arppu > 0).length || 0
    ),
    conversion:
      (gameAnalytics
        .filter((g) => g.conversion > 0)
        .reduce((sum, game) => sum + game.conversion, 0) /
        gameAnalytics.filter((g) => g.conversion > 0).length || 0).toFixed(1),
    retention: {
      d1: Math.round(gameAnalytics.reduce((sum, game) => sum + game.retention.d1, 0) / gameAnalytics.length),
      d7: Math.round(gameAnalytics.reduce((sum, game) => sum + game.retention.d7, 0) / gameAnalytics.length),
      d14: Math.round(gameAnalytics.reduce((sum, game) => sum + game.retention.d14, 0) / gameAnalytics.length),
      d30: Math.round(gameAnalytics.reduce((sum, game) => sum + game.retention.d30, 0) / gameAnalytics.length),
    },
  };

  const userEngagement = [
    { label: "일일 활성 사용자 (DAU)", value: "4,250", percentage: 34 },
    { label: "주간 활성 사용자 (WAU)", value: "12,450", percentage: 85 },
    { label: "월간 활성 사용자 (MAU)", value: "28,500", percentage: 95 },
    { label: "평균 세션 시간", value: "45분", percentage: 75 },
  ];

  const feedbackTrends = [
    { category: "버그 리포트", count: 342, trend: "-12%", status: "good" },
    { category: "기능 제안", count: 189, trend: "+23%", status: "normal" },
    { category: "긍정적 피드백", count: 1246, trend: "+45%", status: "excellent" },
    { category: "부정적 피드백", count: 87, trend: "-8%", status: "good" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">분석</h1>
          <p className="text-slate-400">게임 성과와 사용자 행동을 분석하세요</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="7days">
            <SelectTrigger className="w-[180px] bg-slate-900 border-slate-800">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-800">
              <SelectItem value="7days">최근 7일</SelectItem>
              <SelectItem value="30days">최근 30일</SelectItem>
              <SelectItem value="90days">최근 90일</SelectItem>
              <SelectItem value="custom">사용자 지정</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-slate-800 hover:bg-slate-900">
            <Calendar className="w-4 h-4 mr-2" />
            내보내기
          </Button>
        </div>
      </div>

      {/* 게임 구분 탭 */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between">
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

          {/* 게임 선택 */}
          <Select value={selectedGame} onValueChange={setSelectedGame}>
            <SelectTrigger className="w-[220px] bg-slate-900 border-slate-800">
              <SelectValue placeholder="게임 선택" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-800">
              <SelectItem value="all">전체 게임</SelectItem>
              {filteredGames.map((game) => (
                <SelectItem key={game.id} value={game.id.toString()}>
                  {game.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <TabsContent value={activeTab} className="space-y-6 mt-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewStats.map((stat, index) => (
              <Card key={index} className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-green-400">{stat.icon}</div>
                    <Badge
                      className={`${
                        stat.trend === "up"
                          ? "bg-green-500/20 text-green-400 border-green-500/50"
                          : "bg-red-500/20 text-red-400 border-red-500/50"
                      }`}
                    >
                      {stat.trend === "up" ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 매출 분석 */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">매출 분석</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-400">총 매출</span>
                    <DollarSign className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    ₩{totalRevenue.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500">이번 달</div>
                </div>

                <div className="p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-400">유료 판매</span>
                    <DollarSign className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold mb-1">
                    ₩{paidRevenue.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500">
                    전체의 {totalRevenue > 0 ? ((paidRevenue / totalRevenue) * 100).toFixed(1) : 0}%
                  </div>
                </div>

                <div className="p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-400">광고 매출</span>
                    <Eye className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold mb-1">
                    ₩{adRevenue.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500">
                    전체의 {totalRevenue > 0 ? ((adRevenue / totalRevenue) * 100).toFixed(1) : 0}%
                  </div>
                </div>
              </div>

              {/* 매출 차트 영역 */}
              <div className="mt-6">
                <div className="h-64 bg-slate-800/30 border border-slate-800 rounded-lg flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <Activity className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">매출 추이 그래프</p>
                    <p className="text-xs">일별/주별/월별 매출 변화</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 리텐션 분석 */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">리텐션 분석</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">D+1 리텐션</span>
                      <span className="text-2xl font-bold text-green-400">{avgMetrics.retention.d1}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all"
                        style={{ width: `${avgMetrics.retention.d1}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">가입 다음날 재접속 비율</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">D+7 리텐션</span>
                      <span className="text-2xl font-bold text-blue-400">{avgMetrics.retention.d7}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 h-3 rounded-full transition-all"
                        style={{ width: `${avgMetrics.retention.d7}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">가입 7일 후 재접속 비율</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">D+14 리텐션</span>
                      <span className="text-2xl font-bold text-purple-400">{avgMetrics.retention.d14}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full transition-all"
                        style={{ width: `${avgMetrics.retention.d14}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">가입 14일 후 재접속 비율</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">D+30 리텐션</span>
                      <span className="text-2xl font-bold text-orange-400">{avgMetrics.retention.d30}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full transition-all"
                        style={{ width: `${avgMetrics.retention.d30}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">가입 30일 후 재접속 비율</p>
                  </div>
                </div>

                {/* 리텐션 차트 영역 */}
                <div>
                  <div className="h-full bg-slate-800/30 border border-slate-800 rounded-lg flex items-center justify-center">
                    <div className="text-center text-slate-500">
                      <Activity className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">리텐션 커브 그래프</p>
                      <p className="text-xs">코호트별 리텐션 변화</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ARPPU 및 결제전환율 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">ARPPU</h2>
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-5xl font-bold text-green-400 mb-4">
                  ₩{avgMetrics.arppu.toLocaleString()}
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Average Revenue Per Paying User
                  <br />
                  결제 유저당 평균 매출
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded">
                    <span className="text-sm text-slate-400">최고 ARPPU</span>
                    <span className="font-semibold">
                      ₩{Math.max(...gameAnalytics.map((g) => g.arppu)).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded">
                    <span className="text-sm text-slate-400">최저 ARPPU</span>
                    <span className="font-semibold">
                      ₩{Math.min(...gameAnalytics.filter((g) => g.arppu > 0).map((g) => g.arppu)).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded">
                    <span className="text-sm text-slate-400">전월 대비</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +8.2%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">결제전환율</h2>
                  <Percent className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-5xl font-bold text-blue-400 mb-4">
                  {avgMetrics.conversion}%
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Payment Conversion Rate
                  <br />
                  무료 유저 대비 결제 유저 비율
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded">
                    <span className="text-sm text-slate-400">최고 전환율</span>
                    <span className="font-semibold">
                      {Math.max(...gameAnalytics.filter((g) => g.conversion > 0).map((g) => g.conversion)).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded">
                    <span className="text-sm text-slate-400">최저 전환율</span>
                    <span className="font-semibold">
                      {Math.min(...gameAnalytics.filter((g) => g.conversion > 0).map((g) => g.conversion)).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded">
                    <span className="text-sm text-slate-400">전월 대비</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +2.1%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Game Performance Table */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">게임별 상세 성과</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-800">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">게임명</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">매출</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">ARPPU</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">전환율</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">D+1</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">D+7</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">D+14</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">D+30</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gameAnalytics.map((game, index) => (
                      <tr key={index} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-medium">{game.name}</p>
                            <div className="flex gap-2 mt-1">
                              <Badge
                                variant="outline"
                                className={`text-xs ${
                                  game.serviceType === "beta"
                                    ? "border-blue-500/50 text-blue-400"
                                    : "border-green-500/50 text-green-400"
                                }`}
                              >
                                {game.serviceType === "beta" ? "베타" : "라이브"}
                              </Badge>
                              <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                                {game.monetization === "free"
                                  ? "무료"
                                  : game.monetization === "ad"
                                  ? "광고"
                                  : "유료"}
                              </Badge>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-green-400 font-semibold">
                            ₩{game.revenue.toLocaleString()}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-slate-400">
                          {game.arppu > 0 ? (
                            <span className="font-semibold">₩{game.arppu.toLocaleString()}</span>
                          ) : (
                            <span className="text-slate-600">-</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-slate-400">
                          {game.conversion > 0 ? (
                            <span className="font-semibold text-blue-400">{game.conversion}%</span>
                          ) : (
                            <span className="text-slate-600">-</span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                            {game.retention.d1}%
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">
                            {game.retention.d7}%
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">
                            {game.retention.d14}%
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">
                            {game.retention.d30}%
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Trends */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">피드백 트렌드</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {feedbackTrends.map((item, index) => (
                  <div key={index} className="p-4 bg-slate-800/30 rounded-lg border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">{item.category}</span>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          item.status === "excellent"
                            ? "border-green-500/50 text-green-400"
                            : item.status === "good"
                            ? "border-blue-500/50 text-blue-400"
                            : "border-slate-500/50 text-slate-400"
                        }`}
                      >
                        {item.trend}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold">{item.count}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
