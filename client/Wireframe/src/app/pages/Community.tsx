import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import {
  MessageSquare,
  ThumbsUp,
  Reply,
  TrendingUp,
  Clock,
  Users,
  Trophy,
  Flame,
} from "lucide-react";

export function Community() {
  const trendingTopics = [
    {
      id: 1,
      title: "Cyber Nexus 최적화 팁 공유",
      author: "김게이머",
      replies: 45,
      likes: 128,
      game: "Cyber Nexus",
      timeAgo: "2시간 전",
      isHot: true,
    },
    {
      id: 2,
      title: "Stellar Warfare 신규 무기 밸런스 피드백",
      author: "이플레이어",
      replies: 32,
      likes: 89,
      game: "Stellar Warfare",
      timeAgo: "5시간 전",
      isHot: true,
    },
    {
      id: 3,
      title: "Mystic Realms 스토리라인 이론",
      author: "박유저",
      replies: 67,
      likes: 203,
      game: "Mystic Realms",
      timeAgo: "1일 전",
      isHot: false,
    },
    {
      id: 4,
      title: "Racing Legends 버그 발견 - 트랙 이탈 문제",
      author: "최테스터",
      replies: 23,
      likes: 56,
      game: "Racing Legends",
      timeAgo: "3시간 전",
      isHot: false,
    },
  ];

  const recentActivity = [
    {
      user: "김게이머",
      action: "새로운 버그 리포트를 제출했습니다",
      game: "Cyber Nexus",
      time: "30분 전",
    },
    {
      user: "이플레이어",
      action: "피드백에 댓글을 남겼습니다",
      game: "Stellar Warfare",
      time: "1시간 전",
    },
    {
      user: "박유저",
      action: "레벨 50 달성 스크린샷을 공유했습니다",
      game: "Mystic Realms",
      time: "2시간 전",
    },
    {
      user: "최테스터",
      action: "게임 플레이 가이드를 작성했습니다",
      game: "Racing Legends",
      time: "3시간 전",
    },
  ];

  const topContributors = [
    {
      name: "김게이머",
      points: 2450,
      rank: 1,
      contributions: 89,
      badge: "전설",
    },
    {
      name: "이플레이어",
      points: 2100,
      rank: 2,
      contributions: 76,
      badge: "마스터",
    },
    {
      name: "박유저",
      points: 1850,
      rank: 3,
      contributions: 65,
      badge: "엘리트",
    },
    {
      name: "최테스터",
      points: 1620,
      rank: 4,
      contributions: 54,
      badge: "프로",
    },
    {
      name: "정버그헌터",
      points: 1450,
      rank: 5,
      contributions: 48,
      badge: "프로",
    },
  ];

  const gameForums = [
    { name: "Cyber Nexus", members: 2450, posts: 1823, active: true },
    { name: "Stellar Warfare", members: 1820, posts: 1245, active: true },
    { name: "Mystic Realms", members: 980, posts: 567, active: false },
    { name: "Racing Legends", members: 3200, posts: 2456, active: true },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">커뮤니티</h1>
          <p className="text-slate-400">
            베타 테스터들과 소통하고 게임 개발에 함께 참여하세요
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">12,450</div>
              <div className="text-sm text-slate-400">활성 테스터</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6 text-center">
              <MessageSquare className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">6,091</div>
              <div className="text-sm text-slate-400">토론 주제</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6 text-center">
              <Reply className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">45,320</div>
              <div className="text-sm text-slate-400">댓글</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">1,234</div>
              <div className="text-sm text-slate-400">버그 발견</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <Tabs defaultValue="trending">
              <TabsList className="bg-slate-900 border-slate-800">
                <TabsTrigger value="trending">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  인기 글
                </TabsTrigger>
                <TabsTrigger value="recent">
                  <Clock className="w-4 h-4 mr-2" />
                  최신 글
                </TabsTrigger>
              </TabsList>

              <TabsContent value="trending" className="space-y-4 mt-6">
                {trendingTopics.map((topic) => (
                  <Card
                    key={topic.id}
                    className="bg-slate-900 border-slate-800 hover:border-purple-500/50 transition-all cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {topic.isHot && (
                              <Flame className="w-4 h-4 text-orange-500" />
                            )}
                            <h3 className="font-bold text-lg hover:text-purple-400 transition-colors">
                              {topic.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-400">
                            <span>{topic.author}</span>
                            <span>•</span>
                            <Badge
                              variant="outline"
                              className="border-purple-500/50 text-purple-300"
                            >
                              {topic.game}
                            </Badge>
                            <span>•</span>
                            <span>{topic.timeAgo}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <Reply className="w-4 h-4" />
                          <span>{topic.replies} 댓글</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{topic.likes} 좋아요</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="recent" className="space-y-4 mt-6">
                {[...trendingTopics].reverse().map((topic) => (
                  <Card
                    key={topic.id}
                    className="bg-slate-900 border-slate-800 hover:border-purple-500/50 transition-all cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 hover:text-purple-400 transition-colors">
                            {topic.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-slate-400">
                            <span>{topic.author}</span>
                            <span>•</span>
                            <Badge
                              variant="outline"
                              className="border-purple-500/50 text-purple-300"
                            >
                              {topic.game}
                            </Badge>
                            <span>•</span>
                            <span>{topic.timeAgo}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <Reply className="w-4 h-4" />
                          <span>{topic.replies} 댓글</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{topic.likes} 좋아요</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  상위 기여자
                </h3>
                <div className="space-y-4">
                  {topContributors.map((contributor) => (
                    <div
                      key={contributor.rank}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          contributor.rank === 1
                            ? "bg-yellow-500 text-slate-900"
                            : contributor.rank === 2
                            ? "bg-slate-400 text-slate-900"
                            : contributor.rank === 3
                            ? "bg-orange-600 text-white"
                            : "bg-slate-700 text-slate-300"
                        }`}
                      >
                        {contributor.rank}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{contributor.name}</div>
                        <div className="text-xs text-slate-400">
                          {contributor.points} 포인트
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-purple-500/50 text-purple-300"
                      >
                        {contributor.badge}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Game Forums */}
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">게임별 포럼</h3>
                <div className="space-y-4">
                  {gameForums.map((forum, index) => (
                    <div
                      key={index}
                      className="p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{forum.name}</span>
                        {forum.active && (
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/50">
                            활성
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span>{forum.members} 멤버</span>
                        <span>•</span>
                        <span>{forum.posts} 게시글</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">최근 활동</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-purple-600 text-xs">
                          {activity.user[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm text-slate-300">
                          <span className="font-semibold">{activity.user}</span>{" "}
                          {activity.action}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                          <span>{activity.game}</span>
                          <span>•</span>
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="mt-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/50">
          <CardContent className="p-8 text-center">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h2 className="text-2xl font-bold mb-3">
              커뮤니티에 참여하세요
            </h2>
            <p className="text-slate-300 mb-6">
              다른 테스터들과 소통하고 게임 개발에 기여하세요
            </p>
            <Button className="bg-white text-slate-900 hover:bg-slate-100">
              토론 시작하기
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
