import { useState } from "react";
import { Link, useParams } from "react-router";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";
import { Switch } from "@/app/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  ChevronLeft,
  Star,
  Users,
  MessageSquare,
  Download,
  Eye,
  Calendar,
  Clock,
  Globe,
  Upload,
  Image as ImageIcon,
  Film,
  Trash2,
  Save,
  AlertCircle,
} from "lucide-react";

export function GameDetail() {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  // Mock game data
  const game = {
    id: id || "1",
    title: "Cyber Nexus",
    description: "사이버펑크 세계를 배경으로 한 액션 RPG 게임입니다. 미래 도시를 탐험하고 강력한 적들과 전투하세요.",
    genre: "RPG",
    platform: ["PC", "PlayStation", "Xbox"],
    status: "진행중",
    releaseDate: "2024.06.15",
    testPeriod: "2024.02.01 - 2024.05.31",
    rating: 4.8,
    testers: 2450,
    downloads: 892,
    feedback: 342,
    views: 15420,
  };

  const stats = [
    {
      label: "테스터",
      value: game.testers.toLocaleString(),
      icon: <Users className="w-5 h-5" />,
      color: "text-blue-400",
    },
    {
      label: "다운로드",
      value: game.downloads,
      icon: <Download className="w-5 h-5" />,
      color: "text-green-400",
    },
    {
      label: "피드백",
      value: game.feedback,
      icon: <MessageSquare className="w-5 h-5" />,
      color: "text-purple-400",
    },
    {
      label: "조회수",
      value: game.views.toLocaleString(),
      icon: <Eye className="w-5 h-5" />,
      color: "text-orange-400",
    },
  ];

  const screenshots = [
    { id: 1, url: "screenshot1.jpg" },
    { id: 2, url: "screenshot2.jpg" },
    { id: 3, url: "screenshot3.jpg" },
    { id: 4, url: "screenshot4.jpg" },
  ];

  const recentFeedback = [
    {
      id: 1,
      user: "김게이머",
      rating: 5,
      comment: "정말 재미있는 게임입니다! 그래픽도 훌륭하고 스토리도 흥미진진해요.",
      date: "2024.02.08",
      type: "긍정",
    },
    {
      id: 2,
      user: "이플레이어",
      rating: 4,
      comment: "전투 시스템은 좋은데 로딩 시간이 조금 길어요.",
      date: "2024.02.07",
      type: "제안",
    },
    {
      id: 3,
      user: "박유저",
      rating: 3,
      comment: "레벨 15에서 버그가 발견되었습니다. 캐릭터가 벽을 통과합니다.",
      date: "2024.02.06",
      type: "버그",
    },
  ];

  const testMilestones = [
    { date: "2024.02.01", event: "베타 테스트 시작", status: "completed" },
    { date: "2024.03.01", event: "중간 피드백 분석", status: "completed" },
    { date: "2024.04.01", event: "주요 업데이트 배포", status: "upcoming" },
    { date: "2024.05.31", event: "베타 테스트 종료", status: "upcoming" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/developer/games">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <ChevronLeft className="w-4 h-4 mr-1" />
              게임 목록
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold mb-1">{game.title}</h1>
            <div className="flex items-center gap-3">
              <Badge
                className={`${
                  game.status === "진행중"
                    ? "bg-green-500/20 text-green-400 border-green-500/50"
                    : "bg-orange-500/20 text-orange-400 border-orange-500/50"
                }`}
              >
                {game.status}
              </Badge>
              <div className="flex items-center gap-1 text-slate-400">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{game.rating}</span>
                <span className="text-sm">({game.testers} 평가)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="border-slate-800 hover:bg-slate-900"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "취소" : "편집"}
          </Button>
          {isEditing && (
            <Button className="bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              저장
            </Button>
          )}
          <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10">
            <Trash2 className="w-4 h-4 mr-2" />
            삭제
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className={`${stat.color}`}>{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Game Information */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">게임 정보</h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="gameTitle" className="text-sm text-slate-400 mb-2 block">
                    게임 제목
                  </Label>
                  {isEditing ? (
                    <Input
                      id="gameTitle"
                      defaultValue={game.title}
                      className="bg-slate-800 border-slate-700 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-white">{game.title}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="description" className="text-sm text-slate-400 mb-2 block">
                    게임 설명
                  </Label>
                  {isEditing ? (
                    <Textarea
                      id="description"
                      defaultValue={game.description}
                      className="bg-slate-800 border-slate-700 focus:border-green-500 min-h-32"
                    />
                  ) : (
                    <p className="text-slate-300">{game.description}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-slate-400 mb-2 block">장르</Label>
                    {isEditing ? (
                      <Select defaultValue={game.genre.toLowerCase()}>
                        <SelectTrigger className="bg-slate-800 border-slate-700">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-800">
                          <SelectItem value="rpg">RPG</SelectItem>
                          <SelectItem value="action">액션</SelectItem>
                          <SelectItem value="adventure">어드벤처</SelectItem>
                          <SelectItem value="strategy">전략</SelectItem>
                          <SelectItem value="simulation">시뮬레이션</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-white">{game.genre}</p>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm text-slate-400 mb-2 block">플랫폼</Label>
                    {isEditing ? (
                      <Input
                        defaultValue={game.platform.join(", ")}
                        className="bg-slate-800 border-slate-700 focus:border-green-500"
                      />
                    ) : (
                      <div className="flex gap-2">
                        {game.platform.map((p) => (
                          <Badge key={p} variant="outline" className="border-slate-700">
                            {p}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      출시 예정일
                    </Label>
                    {isEditing ? (
                      <Input
                        type="date"
                        defaultValue="2024-06-15"
                        className="bg-slate-800 border-slate-700 focus:border-green-500"
                      />
                    ) : (
                      <p className="text-white">{game.releaseDate}</p>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      테스트 기간
                    </Label>
                    <p className="text-white">{game.testPeriod}</p>
                  </div>
                </div>

                <Separator className="bg-slate-800" />

                <div>
                  <Label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    공개 여부
                  </Label>
                  <div className="flex items-center gap-3 mt-2">
                    <Switch defaultChecked={isEditing} disabled={!isEditing} />
                    <span className="text-sm text-slate-300">
                      베타존에 게임 공개
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Screenshots & Media */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">스크린샷 및 미디어</h2>
                {isEditing && (
                  <Button variant="outline" size="sm" className="border-slate-800 hover:bg-slate-800">
                    <Upload className="w-4 h-4 mr-2" />
                    업로드
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {screenshots.map((screenshot) => (
                  <div
                    key={screenshot.id}
                    className="aspect-video bg-slate-800/50 rounded-lg border-2 border-dashed border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-center relative group"
                  >
                    <ImageIcon className="w-8 h-8 text-slate-600" />
                    {isEditing && (
                      <button className="absolute inset-0 bg-red-500/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                        <Trash2 className="w-6 h-6 text-white" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <Separator className="my-6 bg-slate-800" />

              <div>
                <h3 className="font-semibold mb-4">트레일러 동영상</h3>
                <div className="aspect-video bg-slate-800/50 rounded-lg border-2 border-dashed border-slate-800 flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <Film className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">트레일러 영상 영역</p>
                    {isEditing && (
                      <Button variant="ghost" size="sm" className="mt-2">
                        <Upload className="w-4 h-4 mr-2" />
                        동영상 업로드
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Feedback */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">최근 피드백</h2>
                <Link to={`/developer/feedback?game=${game.id}`}>
                  <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300">
                    모두 보기 →
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                {recentFeedback.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="p-4 bg-slate-800/30 rounded-lg border border-slate-800 hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold">{feedback.user[0]}</span>
                        </div>
                        <div>
                          <p className="font-semibold">{feedback.user}</p>
                          <p className="text-xs text-slate-500">{feedback.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
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
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < feedback.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-slate-700"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">{feedback.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Test Timeline */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">테스트 일정</h2>

              <div className="space-y-4">
                {testMilestones.map((milestone, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="relative">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          milestone.status === "completed"
                            ? "bg-green-500/20 border-2 border-green-500"
                            : "bg-slate-800 border-2 border-slate-700"
                        }`}
                      >
                        {milestone.status === "completed" && (
                          <div className="w-3 h-3 bg-green-500 rounded-full" />
                        )}
                      </div>
                      {index < testMilestones.length - 1 && (
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-800" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <p className="text-sm text-slate-400 mb-1">{milestone.date}</p>
                      <p className="font-medium">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">빠른 작업</h2>

              <div className="space-y-3">
                <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700">
                  <Users className="w-4 h-4 mr-2" />
                  테스터 관리
                </Button>
                <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  피드백 확인
                </Button>
                <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700">
                  <Download className="w-4 h-4 mr-2" />
                  빌드 업로드
                </Button>
                <Button className="w-full justify-start bg-slate-800 hover:bg-slate-700">
                  <Globe className="w-4 h-4 mr-2" />
                  베타존에서 보기
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">알림</h2>

              <div className="space-y-3">
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-red-400 font-medium mb-1">긴급 버그 리포트</p>
                    <p className="text-slate-400 text-xs">3건의 긴급 버그가 보고되었습니다</p>
                  </div>
                </div>

                <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-yellow-400 font-medium mb-1">업데이트 권장</p>
                    <p className="text-slate-400 text-xs">새 빌드 업로드가 필요합니다</p>
                  </div>
                </div>

                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg flex gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-blue-400 font-medium mb-1">테스터 증가</p>
                    <p className="text-slate-400 text-xs">이번 주 +150명의 신규 테스터</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
