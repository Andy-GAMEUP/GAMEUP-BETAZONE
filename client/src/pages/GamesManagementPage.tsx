import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import Input from '../components/Input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/Table'

export default function GamesManagementPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const games = [
    {
      id: 1,
      title: 'Cyber Nexus',
      genre: '액션 RPG',
      status: '진행중',
      approvalStatus: 'approved',
      serviceType: 'beta',
      monetization: 'free',
      testers: 2450,
      feedback: 892,
      rating: 4.8,
      startDate: '2026-01-15',
      endDate: '2026-03-15',
    },
    {
      id: 2,
      title: 'Stellar Warfare',
      genre: 'FPS',
      status: '모집중',
      approvalStatus: 'approved',
      serviceType: 'beta',
      monetization: 'ad',
      testers: 1820,
      feedback: 645,
      rating: 4.6,
      startDate: '2026-02-10',
      endDate: '2026-04-10',
    },
    {
      id: 3,
      title: 'Mystic Realms',
      genre: '판타지 RPG',
      status: '곧 시작',
      approvalStatus: 'pending',
      serviceType: 'beta',
      monetization: 'free',
      testers: 980,
      feedback: 234,
      rating: 4.7,
      startDate: '2026-02-20',
      endDate: '2026-05-20',
    },
    {
      id: 4,
      title: 'Racing Legends',
      genre: '레이싱',
      status: '진행중',
      approvalStatus: 'approved',
      serviceType: 'live',
      monetization: 'paid',
      testers: 3200,
      feedback: 1205,
      rating: 4.5,
      startDate: '2026-01-01',
      endDate: '2026-03-01',
    },
    {
      id: 5,
      title: 'Dark Chronicles',
      genre: '호러 어드벤처',
      status: '종료',
      approvalStatus: 'approved',
      serviceType: 'beta',
      monetization: 'free',
      testers: 1500,
      feedback: 567,
      rating: 4.3,
      startDate: '2025-12-01',
      endDate: '2026-01-31',
    },
    {
      id: 6,
      title: 'Space Odyssey',
      genre: '전략',
      status: '검토중',
      approvalStatus: 'review',
      serviceType: 'beta',
      monetization: 'free',
      testers: 0,
      feedback: 0,
      rating: 0,
      startDate: '2026-03-01',
      endDate: '2026-05-01',
    },
  ]

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDelete = (gameId: number) => {
    if (confirm('정말 이 게임을 삭제하시겠습니까?')) {
      console.log('Delete game:', gameId)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">게임 관리</h1>
          <p className="text-slate-400">등록된 베타 게임을 관리하세요</p>
        </div>
        <Link to="/upload">
          <Button className="bg-green-600 hover:bg-green-700">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            새 게임 등록
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border border-slate-800">
          <div className="p-4">
            <div className="text-2xl font-bold mb-1">8</div>
            <div className="text-sm text-slate-400">전체 게임</div>
          </div>
        </Card>
        <Card className="bg-slate-900 border border-slate-800">
          <div className="p-4">
            <div className="text-2xl font-bold mb-1 text-green-400">4</div>
            <div className="text-sm text-slate-400">진행중</div>
          </div>
        </Card>
        <Card className="bg-slate-900 border border-slate-800">
          <div className="p-4">
            <div className="text-2xl font-bold mb-1 text-blue-400">2</div>
            <div className="text-sm text-slate-400">모집중</div>
          </div>
        </Card>
        <Card className="bg-slate-900 border border-slate-800">
          <div className="p-4">
            <div className="text-2xl font-bold mb-1 text-slate-400">2</div>
            <div className="text-sm text-slate-400">종료됨</div>
          </div>
        </Card>
      </div>

      {/* Search */}
      <Card className="bg-slate-900 border border-slate-800">
        <div className="p-6">
          <div className="relative">
            <svg 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <Input
              type="text"
              placeholder="게임 검색..."
              className="pl-10 bg-slate-800 border-slate-700 text-white"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </Card>

      {/* Games Table */}
      <Card className="bg-slate-900 border border-slate-800">
        <div className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-800">
                  <TableHead className="text-slate-400">게임명</TableHead>
                  <TableHead className="text-slate-400">서비스</TableHead>
                  <TableHead className="text-slate-400">수익모델</TableHead>
                  <TableHead className="text-slate-400">승인상태</TableHead>
                  <TableHead className="text-slate-400">상태</TableHead>
                  <TableHead className="text-slate-400">테스터</TableHead>
                  <TableHead className="text-slate-400">평점</TableHead>
                  <TableHead className="text-slate-400 text-right">작업</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredGames.map((game) => (
                  <TableRow key={game.id} className="border-slate-800">
                    <TableCell>
                      <div>
                        <p className="font-semibold text-white">{game.title}</p>
                        <p className="text-xs text-slate-500">{game.genre}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`text-xs ${
                          game.serviceType === 'beta'
                            ? 'border-blue-500/50 text-blue-400'
                            : 'border-green-500/50 text-green-400'
                        }`}
                        variant="outline"
                      >
                        {game.serviceType === 'beta' ? '베타' : '라이브'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="text-xs border-slate-600 text-slate-400"
                      >
                        {game.monetization === 'free'
                          ? '무료'
                          : game.monetization === 'ad'
                          ? '광고'
                          : '유료'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`text-xs ${
                          game.approvalStatus === 'approved'
                            ? 'bg-green-500/20 text-green-400 border-green-500/50'
                            : game.approvalStatus === 'pending'
                            ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                            : game.approvalStatus === 'review'
                            ? 'bg-blue-500/20 text-blue-400 border-blue-500/50'
                            : 'bg-red-500/20 text-red-400 border-red-500/50'
                        }`}
                      >
                        <svg className="w-3 h-3 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {game.approvalStatus === 'approved' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          )}
                          {(game.approvalStatus === 'pending' || game.approvalStatus === 'review') && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          )}
                          {game.approvalStatus === 'rejected' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          )}
                        </svg>
                        {game.approvalStatus === 'approved'
                          ? '승인완료'
                          : game.approvalStatus === 'pending'
                          ? '승인대기'
                          : game.approvalStatus === 'review'
                          ? '검토중'
                          : '반려'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`text-xs ${
                          game.status === '진행중'
                            ? 'bg-green-500/20 text-green-400 border-green-500/50'
                            : game.status === '모집중'
                            ? 'bg-blue-500/20 text-blue-400 border-blue-500/50'
                            : game.status === '곧 시작'
                            ? 'bg-orange-500/20 text-orange-400 border-orange-500/50'
                            : 'bg-slate-500/20 text-slate-400 border-slate-500/50'
                        }`}
                      >
                        {game.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-slate-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {game.testers.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      {game.rating > 0 ? (
                        <div className="flex items-center gap-1 text-white">
                          <svg className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                          <span>{game.rating}</span>
                        </div>
                      ) : (
                        <span className="text-slate-500 text-sm">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-2">
                        <Link to={`/games/${game.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-slate-400 hover:text-white hover:bg-slate-800"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </Button>
                        </Link>
                        <Link to={`/games-management/${game.id}/edit`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-slate-400 hover:text-white hover:bg-slate-800"
                            disabled={game.approvalStatus === 'review'}
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Button>
                        </Link>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-slate-400 hover:text-red-400 hover:bg-slate-800"
                          onClick={() => handleDelete(game.id)}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>

      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400">검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  )
}
