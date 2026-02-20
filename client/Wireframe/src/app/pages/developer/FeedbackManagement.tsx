import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Search,
  AlertCircle,
  ThumbsUp,
  MessageSquare,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

export function FeedbackManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGame, setFilterGame] = useState("all");

  const feedbackData = [
    {
      id: 1,
      game: "Cyber Nexus",
      user: "김게이머",
      type: "버그",
      priority: "high",
      status: "진행중",
      title: "레벨 15에서 캐릭터가 벽을 통과하는 버그",
      description: "특정 스킬 사용 후 벽을 통과할 수 있습니다.",
      time: "30분 전",
      votes: 24,
      replies: 5,
    },
    {
      id: 2,
      game: "Stellar Warfare",
      user: "이플레이어",
      type: "제안",
      priority: "medium",
      status: "검토중",
      title: "무기 밸런스 조정 제안",
      description: "현재 저격총이 너무 강력합니다. 데미지 조정이 필요할 것 같습니다.",
      time: "1시간 전",
      votes: 18,
      replies: 3,
    },
    {
      id: 3,
      game: "Mystic Realms",
      user: "박유저",
      type: "긍정",
      priority: "low",
      status: "완료",
      title: "스토리라인이 정말 흥미진진합니다!",
      description: "메인 퀘스트 스토리가 매우 잘 짜여져 있어요. 계속 플레이하고 싶게 만듭니다.",
      time: "2시간 전",
      votes: 45,
      replies: 12,
    },
    {
      id: 4,
      game: "Racing Legends",
      user: "최테스터",
      type: "버그",
      priority: "high",
      status: "새로운",
      title: "트랙 3에서 게임이 크래시됨",
      description: "트랙 3 진입 시 게임이 강제 종료됩니다.",
      time: "3시간 전",
      votes: 31,
      replies: 8,
    },
    {
      id: 5,
      game: "Cyber Nexus",
      user: "정베타",
      type: "제안",
      priority: "low",
      status: "거절됨",
      title: "UI 개선 제안",
      description: "인벤토리 UI가 너무 복잡합니다. 단순화가 필요합니다.",
      time: "5시간 전",
      votes: 9,
      replies: 2,
    },
  ];

  const filteredFeedback = feedbackData.filter((feedback) => {
    const matchesSearch =
      feedback.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.user.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGame = filterGame === "all" || feedback.game === filterGame;
    return matchesSearch && matchesGame;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "새로운":
        return "bg-blue-500/20 text-blue-400 border-blue-500/50";
      case "검토중":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
      case "진행중":
        return "bg-purple-500/20 text-purple-400 border-purple-500/50";
      case "완료":
        return "bg-green-500/20 text-green-400 border-green-500/50";
      case "거절됨":
        return "bg-red-500/20 text-red-400 border-red-500/50";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/50";
    }
  };

  const getPriorityIcon = (priority: string) => {
    const className = `w-5 h-5 ${
      priority === "high"
        ? "text-red-400"
        : priority === "medium"
        ? "text-yellow-400"
        : "text-blue-400"
    }`;
    return <AlertCircle className={className} />;
  };

  const FeedbackCard = ({ feedback }: { feedback: typeof feedbackData[0] }) => (
    <Card className="bg-slate-900 border-slate-800 hover:border-green-500/50 transition-colors cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Priority Icon */}
          <div className="flex-shrink-0 mt-1">{getPriorityIcon(feedback.priority)}</div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{feedback.title}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="border-green-500/50 text-green-400">
                    {feedback.game}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={
                      feedback.type === "버그"
                        ? "border-red-500/50 text-red-400"
                        : feedback.type === "제안"
                        ? "border-yellow-500/50 text-yellow-400"
                        : "border-green-500/50 text-green-400"
                    }
                  >
                    {feedback.type}
                  </Badge>
                  <Badge className={getStatusColor(feedback.status)}>
                    {feedback.status}
                  </Badge>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 mb-4">{feedback.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="bg-green-600 text-xs">
                      {feedback.user[0]}
                    </AvatarFallback>
                  </Avatar>
                  <span>{feedback.user}</span>
                </div>
                <span>•</span>
                <span>{feedback.time}</span>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-slate-400">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{feedback.votes}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <MessageSquare className="w-4 h-4" />
                  <span>{feedback.replies}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {feedback.status === "새로운" && (
          <div className="flex gap-2 mt-4 pt-4 border-t border-slate-800">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <CheckCircle className="w-4 h-4 mr-1" />
              승인
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-yellow-500/50 text-yellow-400"
            >
              <Clock className="w-4 h-4 mr-1" />
              검토
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-red-500/50 text-red-400"
            >
              <XCircle className="w-4 h-4 mr-1" />
              거절
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">피드백 관리</h1>
        <p className="text-slate-400">테스터 피드백과 버그 리포트를 관리하세요</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-2xl font-bold mb-1">3,842</div>
            <div className="text-sm text-slate-400">총 피드백</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-2xl font-bold mb-1 text-blue-400">892</div>
            <div className="text-sm text-slate-400">새로운</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-2xl font-bold mb-1 text-yellow-400">645</div>
            <div className="text-sm text-slate-400">검토중</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-2xl font-bold mb-1 text-purple-400">1,234</div>
            <div className="text-sm text-slate-400">진행중</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-2xl font-bold mb-1 text-green-400">1,071</div>
            <div className="text-sm text-slate-400">완료</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="피드백 검색..."
                className="pl-10 bg-slate-800 border-slate-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={filterGame} onValueChange={setFilterGame}>
              <SelectTrigger className="bg-slate-800 border-slate-700">
                <SelectValue placeholder="게임 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">모든 게임</SelectItem>
                <SelectItem value="Cyber Nexus">Cyber Nexus</SelectItem>
                <SelectItem value="Stellar Warfare">Stellar Warfare</SelectItem>
                <SelectItem value="Mystic Realms">Mystic Realms</SelectItem>
                <SelectItem value="Racing Legends">Racing Legends</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="all">
        <TabsList className="bg-slate-900 border-slate-800">
          <TabsTrigger value="all">전체</TabsTrigger>
          <TabsTrigger value="bugs">버그</TabsTrigger>
          <TabsTrigger value="suggestions">제안</TabsTrigger>
          <TabsTrigger value="positive">긍정</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {filteredFeedback.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </TabsContent>

        <TabsContent value="bugs" className="space-y-4 mt-6">
          {filteredFeedback
            .filter((f) => f.type === "버그")
            .map((feedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-4 mt-6">
          {filteredFeedback
            .filter((f) => f.type === "제안")
            .map((feedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
        </TabsContent>

        <TabsContent value="positive" className="space-y-4 mt-6">
          {filteredFeedback
            .filter((f) => f.type === "긍정")
            .map((feedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
        </TabsContent>
      </Tabs>

      {filteredFeedback.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400">검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
