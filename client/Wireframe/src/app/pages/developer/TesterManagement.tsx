import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Search, Download, UserCheck, UserX, MessageSquare, Star } from "lucide-react";

export function TesterManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGame, setFilterGame] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const testers = [
    {
      id: 1,
      name: "김게이머",
      email: "gamer@example.com",
      game: "Cyber Nexus",
      status: "승인됨",
      feedback: 45,
      bugs: 12,
      rating: 4.8,
      joinDate: "2026-01-20",
    },
    {
      id: 2,
      name: "이플레이어",
      email: "player@example.com",
      game: "Stellar Warfare",
      status: "승인됨",
      feedback: 32,
      bugs: 8,
      rating: 4.5,
      joinDate: "2026-01-22",
    },
    {
      id: 3,
      name: "박유저",
      email: "user@example.com",
      game: "Mystic Realms",
      status: "대기중",
      feedback: 0,
      bugs: 0,
      rating: 0,
      joinDate: "2026-02-01",
    },
    {
      id: 4,
      name: "최테스터",
      email: "tester@example.com",
      game: "Racing Legends",
      status: "승인됨",
      feedback: 67,
      bugs: 23,
      rating: 4.9,
      joinDate: "2026-01-15",
    },
    {
      id: 5,
      name: "정베타",
      email: "beta@example.com",
      game: "Cyber Nexus",
      status: "거절됨",
      feedback: 0,
      bugs: 0,
      rating: 0,
      joinDate: "2026-01-28",
    },
  ];

  const filteredTesters = testers.filter((tester) => {
    const matchesSearch =
      tester.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tester.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGame = filterGame === "all" || tester.game === filterGame;
    const matchesStatus = filterStatus === "all" || tester.status === filterStatus;
    return matchesSearch && matchesGame && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">테스터 관리</h1>
        <p className="text-slate-400">베타 테스터 신청을 검토하고 관리하세요</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-2xl font-bold mb-1">12,450</div>
            <div className="text-sm text-slate-400">총 테스터</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-2xl font-bold mb-1 text-green-400">10,230</div>
            <div className="text-sm text-slate-400">승인됨</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-2xl font-bold mb-1 text-yellow-400">1,850</div>
            <div className="text-sm text-slate-400">대기중</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-2xl font-bold mb-1 text-red-400">370</div>
            <div className="text-sm text-slate-400">거절됨</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="테스터 검색..."
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
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="bg-slate-800 border-slate-700">
                <SelectValue placeholder="상태 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">모든 상태</SelectItem>
                <SelectItem value="승인됨">승인됨</SelectItem>
                <SelectItem value="대기중">대기중</SelectItem>
                <SelectItem value="거절됨">거절됨</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Testers Table */}
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="p-0">
          <div className="flex items-center justify-between p-6 border-b border-slate-800">
            <h2 className="text-lg font-semibold">
              테스터 목록 ({filteredTesters.length})
            </h2>
            <Button variant="outline" className="border-slate-700">
              <Download className="w-4 h-4 mr-2" />
              CSV 내보내기
            </Button>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-800">
                  <TableHead className="text-slate-400">테스터</TableHead>
                  <TableHead className="text-slate-400">게임</TableHead>
                  <TableHead className="text-slate-400">상태</TableHead>
                  <TableHead className="text-slate-400">피드백</TableHead>
                  <TableHead className="text-slate-400">버그 리포트</TableHead>
                  <TableHead className="text-slate-400">평점</TableHead>
                  <TableHead className="text-slate-400">가입일</TableHead>
                  <TableHead className="text-slate-400 text-right">작업</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTesters.map((tester) => (
                  <TableRow key={tester.id} className="border-slate-800">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-green-600 text-sm">
                            {tester.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{tester.name}</div>
                          <div className="text-sm text-slate-400">{tester.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="border-green-500/50 text-green-400">
                        {tester.game}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          tester.status === "승인됨"
                            ? "bg-green-500/20 text-green-400 border-green-500/50"
                            : tester.status === "대기중"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
                            : "bg-red-500/20 text-red-400 border-red-500/50"
                        }`}
                      >
                        {tester.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                        {tester.feedback}
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-400">{tester.bugs}</TableCell>
                    <TableCell>
                      {tester.rating > 0 ? (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{tester.rating}</span>
                        </div>
                      ) : (
                        <span className="text-slate-500">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-slate-400 text-sm">
                      {tester.joinDate}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-2">
                        {tester.status === "대기중" && (
                          <>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <UserCheck className="w-4 h-4 mr-1" />
                              승인
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                            >
                              <UserX className="w-4 h-4 mr-1" />
                              거절
                            </Button>
                          </>
                        )}
                        {tester.status === "승인됨" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-700"
                          >
                            상세보기
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {filteredTesters.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400">검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
