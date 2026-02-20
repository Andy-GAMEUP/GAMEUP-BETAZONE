import { useState } from 'react'
import { Card, CardContent } from '../components/Card'
import Badge from '../components/Badge'
import Input from '../components/Input'
import Button from '../components/Button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/Table'
import {
  Search,
  Users,
  MessageSquare,
  Trophy,
  Mail,
  UserPlus,
  Star,
  TrendingUp,
  Award,
} from 'lucide-react'

interface Tester {
  id: number
  name: string
  email: string
  joinDate: string
  gamesPlayed: number
  feedbackCount: number
  avgRating: number
  status: 'active' | 'inactive'
  level: 'bronze' | 'silver' | 'gold' | 'platinum'
}

export default function TestersPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const testers: Tester[] = [
    {
      id: 1,
      name: '김게이머',
      email: 'gamer@test.com',
      joinDate: '2026-01-15',
      gamesPlayed: 15,
      feedbackCount: 48,
      avgRating: 4.8,
      status: 'active',
      level: 'platinum',
    },
    {
      id: 2,
      name: '이플레이어',
      email: 'player@test.com',
      joinDate: '2026-01-20',
      gamesPlayed: 12,
      feedbackCount: 35,
      avgRating: 4.5,
      status: 'active',
      level: 'gold',
    },
    {
      id: 3,
      name: '박유저',
      email: 'user@test.com',
      joinDate: '2026-02-01',
      gamesPlayed: 8,
      feedbackCount: 22,
      avgRating: 4.2,
      status: 'active',
      level: 'silver',
    },
    {
      id: 4,
      name: '최테스터',
      email: 'tester@test.com',
      joinDate: '2026-02-05',
      gamesPlayed: 5,
      feedbackCount: 15,
      avgRating: 4.0,
      status: 'active',
      level: 'bronze',
    },
    {
      id: 5,
      name: '정베타',
      email: 'beta@test.com',
      joinDate: '2026-01-10',
      gamesPlayed: 10,
      feedbackCount: 28,
      avgRating: 4.6,
      status: 'inactive',
      level: 'gold',
    },
    {
      id: 6,
      name: '강리뷰어',
      email: 'reviewer@test.com',
      joinDate: '2026-01-25',
      gamesPlayed: 7,
      feedbackCount: 19,
      avgRating: 4.3,
      status: 'active',
      level: 'silver',
    },
  ]

  const filteredTesters = testers.filter((tester) =>
    tester.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tester.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'platinum':
        return (
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50" size="sm">
            <Award className="w-3 h-3 mr-1" />
            플래티넘
          </Badge>
        )
      case 'gold':
        return (
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50" size="sm">
            <Award className="w-3 h-3 mr-1" />
            골드
          </Badge>
        )
      case 'silver':
        return (
          <Badge className="bg-slate-400/20 text-slate-300 border-slate-400/50" size="sm">
            <Award className="w-3 h-3 mr-1" />
            실버
          </Badge>
        )
      case 'bronze':
        return (
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50" size="sm">
            <Award className="w-3 h-3 mr-1" />
            브론즈
          </Badge>
        )
      default:
        return <Badge variant="default" size="sm">{level}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    return status === 'active' ? (
      <Badge variant="success" size="sm">활성</Badge>
    ) : (
      <Badge variant="secondary" size="sm">비활성</Badge>
    )
  }

  // 통계 계산
  const totalTesters = testers.length
  const activeTesters = testers.filter(t => t.status === 'active').length
  const totalFeedback = testers.reduce((sum, t) => sum + t.feedbackCount, 0)
  const avgRating = (testers.reduce((sum, t) => sum + t.avgRating, 0) / testers.length).toFixed(1)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-white">테스터 관리</h1>
          <p className="text-slate-400">베타 테스터를 관리하고 활동을 모니터링하세요</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <UserPlus className="w-4 h-4 mr-2" />
          테스터 초대
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-slate-400">전체 테스터</div>
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">{totalTesters}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-slate-400">활성 테스터</div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">{activeTesters}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-slate-400">총 피드백</div>
              <MessageSquare className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-white">{totalFeedback}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-slate-400">평균 평점</div>
              <Star className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white">{avgRating}</div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="테스터 검색..."
              className="pl-10 bg-slate-800 border-slate-700 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Top Contributors */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">상위 기여자</h2>
            <Trophy className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testers
              .sort((a, b) => b.feedbackCount - a.feedbackCount)
              .slice(0, 3)
              .map((tester, index) => (
                <div
                  key={tester.id}
                  className="p-4 bg-slate-800/50 rounded-lg border border-slate-700"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-yellow-500' :
                      index === 1 ? 'bg-slate-400' :
                      'bg-orange-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{tester.name}</p>
                      {getLevelBadge(tester.level)}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-slate-400">피드백</div>
                    <div className="text-white font-semibold text-right">{tester.feedbackCount}</div>
                    <div className="text-slate-400">평점</div>
                    <div className="text-white font-semibold text-right">{tester.avgRating}</div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Testers Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-800 hover:bg-slate-900">
                  <TableHead className="text-slate-400">테스터</TableHead>
                  <TableHead className="text-slate-400">레벨</TableHead>
                  <TableHead className="text-slate-400">상태</TableHead>
                  <TableHead className="text-slate-400">참여 게임</TableHead>
                  <TableHead className="text-slate-400">피드백</TableHead>
                  <TableHead className="text-slate-400">평균 평점</TableHead>
                  <TableHead className="text-slate-400">가입일</TableHead>
                  <TableHead className="text-slate-400 text-right">작업</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTesters.map((tester) => (
                  <TableRow key={tester.id} className="border-slate-800 hover:bg-slate-800/50">
                    <TableCell>
                      <div>
                        <p className="font-semibold text-white">{tester.name}</p>
                        <p className="text-xs text-slate-500">{tester.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>{getLevelBadge(tester.level)}</TableCell>
                    <TableCell>{getStatusBadge(tester.status)}</TableCell>
                    <TableCell>
                      <div className="text-white">{tester.gamesPlayed}개</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-white">
                        <MessageSquare className="w-4 h-4 text-slate-400" />
                        {tester.feedbackCount}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-white">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {tester.avgRating}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-slate-400 text-sm">
                        {new Date(tester.joinDate).toLocaleDateString('ko-KR')}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-slate-400 hover:text-white hover:bg-slate-800"
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
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
          <Users className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400">검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  )
}
