import { useState } from 'react'
import { Card, CardContent } from '../components/Card'
import Badge from '../components/Badge'
import Input from '../components/Input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/Tabs'
import {
  Search,
  MessageSquare,
  Bug,
  Lightbulb,
  ThumbsUp,
  AlertCircle,
  Clock,
  CheckCircle2,
  Star,
} from 'lucide-react'

interface Feedback {
  id: number
  game: string
  user: string
  type: 'bug' | 'suggestion' | 'positive'
  priority: 'high' | 'medium' | 'low'
  status: 'new' | 'in_progress' | 'resolved' | 'closed'
  message: string
  time: string
  rating?: number
}

export default function FeedbackPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const feedbackData: Feedback[] = [
    {
      id: 1,
      game: 'Cyber Nexus',
      user: '김게이머',
      type: 'bug',
      priority: 'high',
      status: 'new',
      message: '레벨 15에서 캐릭터가 벽을 통과하는 버그가 발생합니다. 재현율이 높아서 빠른 수정이 필요합니다.',
      time: '30분 전',
    },
    {
      id: 2,
      game: 'Stellar Warfare',
      user: '이플레이어',
      type: 'suggestion',
      priority: 'medium',
      status: 'in_progress',
      message: '무기 밸런스 조정이 필요합니다. 특히 스나이퍼 라이플의 데미지가 너무 높아요.',
      time: '1시간 전',
    },
    {
      id: 3,
      game: 'Racing Legends',
      user: '박유저',
      type: 'positive',
      priority: 'low',
      status: 'resolved',
      message: '스토리라인이 정말 흥미진진합니다! 계속 플레이하게 되네요.',
      time: '2시간 전',
      rating: 5,
    },
    {
      id: 4,
      game: 'Mystic Realms',
      user: '최테스터',
      type: 'bug',
      priority: 'medium',
      status: 'new',
      message: '퀘스트 완료 시 보상이 지급되지 않는 문제가 있습니다.',
      time: '3시간 전',
    },
    {
      id: 5,
      game: 'Battle Arena Pro',
      user: '정베타',
      type: 'suggestion',
      priority: 'low',
      status: 'closed',
      message: '매치메이킹 시간을 줄여주시면 좋을 것 같습니다.',
      time: '5시간 전',
    },
    {
      id: 6,
      game: 'Cyber Nexus',
      user: '강리뷰어',
      type: 'positive',
      priority: 'low',
      status: 'resolved',
      message: '그래픽이 정말 아름답네요! 개발진의 노력이 느껴집니다.',
      time: '6시간 전',
      rating: 5,
    },
    {
      id: 7,
      game: 'Stellar Warfare',
      user: '송게임',
      type: 'bug',
      priority: 'high',
      status: 'in_progress',
      message: '멀티플레이어 모드에서 서버 연결이 자주 끊깁니다.',
      time: '8시간 전',
    },
    {
      id: 8,
      game: 'Racing Legends',
      user: '윤드라이버',
      type: 'suggestion',
      priority: 'medium',
      status: 'new',
      message: '더 많은 차량 커스터마이징 옵션이 필요합니다.',
      time: '10시간 전',
    },
  ]

  const filteredFeedback = feedbackData
    .filter((feedback) => {
      if (activeTab === 'all') return true
      return feedback.type === activeTab
    })
    .filter((feedback) =>
      feedback.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.game.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.user.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'bug':
        return <Bug className="w-4 h-4" />
      case 'suggestion':
        return <Lightbulb className="w-4 h-4" />
      case 'positive':
        return <ThumbsUp className="w-4 h-4" />
      default:
        return <MessageSquare className="w-4 h-4" />
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'bug':
        return <Badge variant="danger" size="sm">{getTypeIcon(type)} 버그</Badge>
      case 'suggestion':
        return <Badge variant="warning" size="sm">{getTypeIcon(type)} 제안</Badge>
      case 'positive':
        return <Badge variant="success" size="sm">{getTypeIcon(type)} 긍정</Badge>
      default:
        return <Badge variant="default" size="sm">{type}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="danger" size="sm">높음</Badge>
      case 'medium':
        return <Badge variant="warning" size="sm">중간</Badge>
      case 'low':
        return <Badge variant="info" size="sm">낮음</Badge>
      default:
        return <Badge variant="default" size="sm">{priority}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return (
          <Badge variant="info" size="sm">
            <AlertCircle className="w-3 h-3 mr-1" />
            신규
          </Badge>
        )
      case 'in_progress':
        return (
          <Badge variant="warning" size="sm">
            <Clock className="w-3 h-3 mr-1" />
            처리중
          </Badge>
        )
      case 'resolved':
        return (
          <Badge variant="success" size="sm">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            해결됨
          </Badge>
        )
      case 'closed':
        return <Badge variant="secondary" size="sm">종료됨</Badge>
      default:
        return <Badge variant="default" size="sm">{status}</Badge>
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 border-red-500/50'
      case 'medium':
        return 'bg-yellow-500/20 border-yellow-500/50'
      case 'low':
        return 'bg-blue-500/20 border-blue-500/50'
      default:
        return 'bg-slate-500/20 border-slate-500/50'
    }
  }

  // 통계 계산
  const bugCount = feedbackData.filter(f => f.type === 'bug').length
  const suggestionCount = feedbackData.filter(f => f.type === 'suggestion').length
  const positiveCount = feedbackData.filter(f => f.type === 'positive').length
  const newCount = feedbackData.filter(f => f.status === 'new').length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2 text-white">피드백 관리</h1>
        <p className="text-slate-400">사용자 피드백을 확인하고 관리하세요</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-slate-400">버그 리포트</div>
              <Bug className="w-5 h-5 text-red-400" />
            </div>
            <div className="text-2xl font-bold text-white">{bugCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-slate-400">개선 제안</div>
              <Lightbulb className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-white">{suggestionCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-slate-400">긍정적 피드백</div>
              <ThumbsUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">{positiveCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-slate-400">미처리</div>
              <AlertCircle className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">{newCount}</div>
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
              placeholder="피드백 검색..."
              className="pl-10 bg-slate-800 border-slate-700 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Feedback Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-slate-900 border border-slate-800">
          <TabsTrigger value="all">
            전체 ({feedbackData.length})
          </TabsTrigger>
          <TabsTrigger value="bug">
            <Bug className="w-4 h-4 mr-2" />
            버그 ({bugCount})
          </TabsTrigger>
          <TabsTrigger value="suggestion">
            <Lightbulb className="w-4 h-4 mr-2" />
            제안 ({suggestionCount})
          </TabsTrigger>
          <TabsTrigger value="positive">
            <ThumbsUp className="w-4 h-4 mr-2" />
            긍정 ({positiveCount})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="space-y-4">
            {filteredFeedback.map((feedback) => (
              <Card key={feedback.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getPriorityColor(feedback.priority)}`}>
                      <AlertCircle className={`w-5 h-5 ${
                        feedback.priority === 'high' ? 'text-red-400' :
                        feedback.priority === 'medium' ? 'text-yellow-400' :
                        'text-blue-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-semibold text-white">{feedback.user}</span>
                        <span className="text-sm text-slate-500">•</span>
                        <Badge variant="secondary" size="sm">{feedback.game}</Badge>
                        {getTypeBadge(feedback.type)}
                        {getPriorityBadge(feedback.priority)}
                        {getStatusBadge(feedback.status)}
                      </div>
                      <p className="text-slate-300 mb-2">{feedback.message}</p>
                      {feedback.rating && (
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < feedback.rating!
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-slate-600'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                      <span className="text-xs text-slate-500">{feedback.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFeedback.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">피드백이 없습니다.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
