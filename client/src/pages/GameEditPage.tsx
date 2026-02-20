import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import Input from '../components/Input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/Tabs'

interface Screenshot {
  id: number
  title: string
  url: string
  uploaded: boolean
}

interface Video {
  id: number
  title: string
  url: string
  duration: string
  views: number
}

interface ShopItem {
  id: number
  name: string
  price: number
  currency: string
  type: string
  stock: string
  sales: number
  active: boolean
}

interface Announcement {
  id: number
  title: string
  date: string
  type: string
  priority: string
  content: string
  sent: boolean
  recipients: number
}

export default function GameEditPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  
  // 스크린샷 상태
  const [screenshots, setScreenshots] = useState<Screenshot[]>([
    { id: 1, title: '메인 화면', url: '', uploaded: true },
    { id: 2, title: '전투 장면', url: '', uploaded: true },
    { id: 3, title: '도시 풍경', url: '', uploaded: true },
  ])
  const [isScreenshotModalOpen, setIsScreenshotModalOpen] = useState(false)
  const [newScreenshotTitle, setNewScreenshotTitle] = useState('')

  // 동영상 상태
  const [videos, setVideos] = useState<Video[]>([
    { id: 1, title: '공식 트레일러', url: 'https://youtube.com/watch?v=example1', duration: '2:45', views: 15420 },
    { id: 2, title: '게임플레이 영상', url: 'https://youtube.com/watch?v=example2', duration: '10:30', views: 8932 },
  ])
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [newVideo, setNewVideo] = useState({ title: '', url: '' })

  // 게임샵 아이템 상태
  const [shopItems, setShopItems] = useState<ShopItem[]>([
    { id: 1, name: '스타터 팩', price: 9900, currency: 'KRW', type: '패키지', stock: '무제한', sales: 450, active: true },
    { id: 2, name: '프리미엄 스킨', price: 4900, currency: 'KRW', type: '외형', stock: '무제한', sales: 892, active: true },
    { id: 3, name: '골드 1000개', price: 2900, currency: 'KRW', type: '재화', stock: '무제한', sales: 1240, active: true },
  ])
  const [isItemModalOpen, setIsItemModalOpen] = useState(false)
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    currency: 'KRW',
    type: '패키지',
    stock: '무제한',
  })

  // 공지사항 상태
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    { id: 1, title: '긴급 점검 안내', date: '2024.02.10', type: '점검', priority: 'high', content: '서버 안정화를 위한 긴급 점검이 예정되어 있습니다.', sent: true, recipients: 2450 },
    { id: 2, title: '신규 콘텐츠 업데이트', date: '2024.02.08', type: '업데이트', priority: 'normal', content: '새로운 던전과 아이템이 추가됩니다.', sent: true, recipients: 2450 },
  ])
  const [isAnnouncementModalOpen, setIsAnnouncementModalOpen] = useState(false)
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    type: 'notice',
    priority: 'normal',
    sendPush: false,
  })

  const game = {
    id: id || '1',
    title: 'Cyber Nexus',
    description: '사이버펑크 세계를 배경으로 한 액션 RPG 게임입니다.',
    genre: 'RPG',
    platform: ['PC', 'PlayStation', 'Xbox'],
    status: '진행중',
    rating: 4.8,
    testers: 2450,
    downloads: 892,
    feedback: 342,
    views: 15420,
  }

  const stats = [
    {
      label: '테스터',
      value: game.testers.toLocaleString(),
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'text-blue-400',
    },
    {
      label: '다운로드',
      value: game.downloads,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      color: 'text-green-400',
    },
    {
      label: '피드백',
      value: game.feedback,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'text-purple-400',
    },
    {
      label: '조회수',
      value: game.views.toLocaleString(),
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: 'text-orange-400',
    },
  ]

  // 핸들러 함수들
  const handleAddScreenshot = () => {
    if (newScreenshotTitle) {
      setScreenshots([
        ...screenshots,
        { id: screenshots.length + 1, title: newScreenshotTitle, url: '', uploaded: true },
      ])
      setNewScreenshotTitle('')
      setIsScreenshotModalOpen(false)
    }
  }

  const handleDeleteScreenshot = (id: number) => {
    setScreenshots(screenshots.filter((s) => s.id !== id))
  }

  const handleAddVideo = () => {
    if (newVideo.title && newVideo.url) {
      setVideos([
        ...videos,
        { id: videos.length + 1, title: newVideo.title, url: newVideo.url, duration: '0:00', views: 0 },
      ])
      setNewVideo({ title: '', url: '' })
      setIsVideoModalOpen(false)
    }
  }

  const handleDeleteVideo = (id: number) => {
    setVideos(videos.filter((v) => v.id !== id))
  }

  const handleAddItem = () => {
    if (newItem.name && newItem.price) {
      setShopItems([
        ...shopItems,
        {
          id: shopItems.length + 1,
          name: newItem.name,
          price: parseInt(newItem.price),
          currency: newItem.currency,
          type: newItem.type,
          stock: newItem.stock,
          sales: 0,
          active: true,
        },
      ])
      setNewItem({ name: '', price: '', currency: 'KRW', type: '패키지', stock: '무제한' })
      setIsItemModalOpen(false)
    }
  }

  const handleDeleteItem = (id: number) => {
    setShopItems(shopItems.filter((item) => item.id !== id))
  }

  const toggleItemActive = (id: number) => {
    setShopItems(shopItems.map((item) => (item.id === id ? { ...item, active: !item.active } : item)))
  }

  const handleAddAnnouncement = () => {
    if (newAnnouncement.title && newAnnouncement.content) {
      const today = new Date().toISOString().split('T')[0].replace(/-/g, '.')
      setAnnouncements([
        ...announcements,
        {
          id: announcements.length + 1,
          title: newAnnouncement.title,
          content: newAnnouncement.content,
          type: newAnnouncement.type,
          priority: newAnnouncement.priority,
          date: today,
          sent: newAnnouncement.sendPush,
          recipients: newAnnouncement.sendPush ? game.testers : 0,
        },
      ])
      setNewAnnouncement({ title: '', content: '', type: 'notice', priority: 'normal', sendPush: false })
      setIsAnnouncementModalOpen(false)
    }
  }

  const handleDeleteAnnouncement = (id: number) => {
    setAnnouncements(announcements.filter((a) => a.id !== id))
  }

  const handleSave = () => {
    alert('변경사항이 저장되었습니다.')
    navigate('/games-management')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/games-management">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              게임 목록
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold mb-1">{game.title}</h1>
            <div className="flex items-center gap-3">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                {game.status}
              </Badge>
              <div className="flex items-center gap-1 text-slate-400">
                <svg className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-semibold">{game.rating}</span>
              </div>
            </div>
          </div>
        </div>
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
          변경사항 저장
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-900 border border-slate-800">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className={stat.color}>{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-slate-900 border border-slate-800">
          <TabsTrigger value="overview">기본 정보</TabsTrigger>
          <TabsTrigger value="media">미디어</TabsTrigger>
          <TabsTrigger value="shop">게임샵</TabsTrigger>
          <TabsTrigger value="announcements">공지 & 알림</TabsTrigger>
        </TabsList>

        {/* 기본 정보 탭 */}
        <TabsContent value={activeTab} className="space-y-6 mt-6">
          {activeTab === 'overview' && (
            <>
              <Card className="bg-slate-900 border border-slate-800">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6">게임 기본 정보</h2>
                  <div className="space-y-6">
                    {/* 게임 아이콘 */}
                    <div>
                      <label className="text-sm text-slate-400 mb-3 block">게임 아이콘</label>
                      <div className="flex items-start gap-6">
                        <div className="w-32 h-32 bg-slate-800 rounded-lg border-2 border-dashed border-slate-700 flex items-center justify-center">
                          <div className="text-center text-slate-500">
                            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-xs">512x512</p>
                          </div>
                        </div>
                        <div className="flex-1">
                          <Button variant="outline" className="border-slate-800 hover:bg-slate-800 mb-3">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            아이콘 업로드
                          </Button>
                          <div className="text-sm text-slate-400 space-y-1">
                            <p>• 권장 크기: 512x512px</p>
                            <p>• 지원 형식: PNG, JPG (최대 2MB)</p>
                            <p>• 정사각형 이미지를 사용해주세요</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* 게임 제목 */}
                    <div>
                      <label htmlFor="gameTitle" className="text-sm text-slate-400 mb-2 block">
                        게임 제목 *
                      </label>
                      <Input
                        id="gameTitle"
                        defaultValue={game.title}
                        className="bg-slate-800 border-slate-700"
                      />
                    </div>

                    {/* 장르 */}
                    <div>
                      <label htmlFor="genre" className="text-sm text-slate-400 mb-2 block">
                        게임 장르 *
                      </label>
                      <select
                        id="genre"
                        defaultValue={game.genre.toLowerCase()}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white"
                      >
                        <option value="rpg">RPG (롤플레잉)</option>
                        <option value="action">액션</option>
                        <option value="fps">FPS (1인칭 슈팅)</option>
                        <option value="moba">MOBA</option>
                        <option value="strategy">전략</option>
                        <option value="simulation">시뮬레이션</option>
                        <option value="adventure">어드벤처</option>
                        <option value="racing">레이싱</option>
                        <option value="horror">호러</option>
                        <option value="sports">스포츠</option>
                      </select>
                      <p className="text-xs text-slate-500 mt-1">게임의 주요 장르를 선택하세요</p>
                    </div>

                    {/* 게임 특징 소개 */}
                    <div>
                      <label htmlFor="features" className="text-sm text-slate-400 mb-2 block">
                        게임 특징 소개 *
                      </label>
                      <textarea
                        id="features"
                        placeholder="게임의 주요 특징과 장점을 간단히 소개해주세요"
                        defaultValue="• 압도적인 사이버펑크 그래픽과 네온 효과&#10;• 깊이 있는 스토리와 선택지 시스템&#10;• 40개 이상의 커스터마이징 가능한 무기&#10;• 오픈월드 탐험과 사이드 퀘스트"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white min-h-40"
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        베타존 게임 카드 및 상세 페이지에 표시됩니다 (최대 500자)
                      </p>
                    </div>

                    {/* 짧은 설명 */}
                    <div>
                      <label htmlFor="shortDesc" className="text-sm text-slate-400 mb-2 block">
                        짧은 설명 (한 줄 소개) *
                      </label>
                      <Input
                        id="shortDesc"
                        defaultValue={game.description}
                        maxLength={100}
                        className="bg-slate-800 border-slate-700"
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        베타존 카드에 표시되는 짧은 설명입니다 (최대 100자)
                      </p>
                    </div>

                    {/* 상세 설명 */}
                    <div>
                      <label htmlFor="detailedDesc" className="text-sm text-slate-400 mb-2 block">
                        상세 설명
                      </label>
                      <textarea
                        id="detailedDesc"
                        placeholder="게임의 스토리, 배경, 게임플레이 등을 자세히 설명해주세요"
                        defaultValue="2077년, 네온으로 빛나는 메가시티를 배경으로 펼쳐지는 장대한 모험. 당신은 도시의 그림자 속에서 살아가는 용병이 되어 거대 기업들의 음모를 파헤치고 진실을 밝혀내야 합니다."
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white min-h-48"
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        게임 상세 페이지에 표시되는 전체 설명입니다
                      </p>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* 플랫폼 및 출시일 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-slate-400 mb-2 block">플랫폼 *</label>
                        <Input
                          defaultValue={game.platform.join(', ')}
                          placeholder="PC, PlayStation, Xbox"
                          className="bg-slate-800 border-slate-700"
                        />
                        <p className="text-xs text-slate-500 mt-1">콤마(,)로 구분하여 입력</p>
                      </div>

                      <div>
                        <label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          출시 예정일
                        </label>
                        <Input
                          type="date"
                          defaultValue="2024-06-15"
                          className="bg-slate-800 border-slate-700"
                        />
                      </div>
                    </div>

                    {/* 공개 여부 */}
                    <div>
                      <label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        공개 여부
                      </label>
                      <div className="flex items-center gap-3 mt-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm text-slate-300">베타존에 게임 공개</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        비활성화 시 게임이 베타존에 노출되지 않습니다
                      </p>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* 시스템 요구사항 */}
                    <div>
                      <label className="text-sm text-slate-400 mb-3 block">시스템 요구사항</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-800/50 rounded-lg">
                          <h4 className="font-semibold mb-3">최소 사양</h4>
                          <textarea
                            placeholder="OS: Windows 10&#10;CPU: Intel i5-4460&#10;RAM: 8GB&#10;GPU: GTX 970&#10;DirectX: Version 11&#10;저장공간: 50GB"
                            defaultValue="OS: Windows 10 64-bit&#10;CPU: Intel i5-4460 / AMD FX-6300&#10;RAM: 8GB&#10;GPU: NVIDIA GTX 970 / AMD R9 290&#10;DirectX: Version 11&#10;저장공간: 50GB"
                            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white min-h-40"
                          />
                        </div>
                        <div className="p-4 bg-slate-800/50 rounded-lg">
                          <h4 className="font-semibold mb-3">권장 사양</h4>
                          <textarea
                            placeholder="OS: Windows 11&#10;CPU: Intel i7-8700&#10;RAM: 16GB&#10;GPU: RTX 3060&#10;DirectX: Version 12&#10;저장공간: 70GB SSD"
                            defaultValue="OS: Windows 11 64-bit&#10;CPU: Intel i7-8700 / AMD Ryzen 7 2700X&#10;RAM: 16GB&#10;GPU: NVIDIA RTX 3060 / AMD RX 6700 XT&#10;DirectX: Version 12&#10;저장공간: 70GB SSD"
                            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white min-h-40"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* 게임 정보 미리보기 */}
              <Card className="bg-slate-900 border border-slate-800">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6">베타존 노출 미리보기</h2>
                  <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-800">
                    <div className="flex gap-6">
                      <div className="w-32 h-32 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-12 h-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                        <Badge variant="outline" className="border-green-500/50 text-green-400 mb-3">
                          {game.genre}
                        </Badge>
                        <p className="text-slate-300 mb-3">{game.description}</p>
                        <div className="space-y-1 text-sm text-slate-400">
                          <p>• 압도적인 사이버펑크 그래픽과 네온 효과</p>
                          <p>• 깊이 있는 스토리와 선택지 시스템</p>
                          <p>• 40개 이상의 커스터마이징 가능한 무기</p>
                          <p>• 오픈월드 탐험과 사이드 퀘스트</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-3 text-center">
                    위 내용이 베타존 게임 상세 페이지에 표시됩니다
                  </p>
                </div>
              </Card>
            </>
          )}

          {/* 미디어 탭 */}
          {activeTab === 'media' && (
            <>
              {/* 스크린샷 */}
              <Card className="bg-slate-900 border border-slate-800">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold">게임 스크린샷</h2>
                      <p className="text-sm text-slate-400 mt-1">
                        게임 화면을 보여주는 스크린샷을 등록하세요 (최대 10개)
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsScreenshotModalOpen(true)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      스크린샷 추가
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {screenshots.map((screenshot) => (
                      <div key={screenshot.id} className="relative group">
                        <div className="aspect-video bg-slate-800/50 rounded-lg border-2 border-slate-700 hover:border-slate-600 transition-colors flex items-center justify-center overflow-hidden">
                          <div className="text-center text-slate-500">
                            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm">{screenshot.title}</p>
                          </div>
                        </div>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 bg-slate-900 border border-slate-700"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteScreenshot(screenshot.id)}
                            className="h-8 w-8 p-0 bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex gap-3">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-sm">
                      <p className="text-blue-400 font-medium mb-1">이미지 가이드라인</p>
                      <ul className="text-slate-400 space-y-1">
                        <li>• 권장 해상도: 1920x1080px 이상</li>
                        <li>• 지원 형식: PNG, JPG (각 최대 5MB)</li>
                        <li>• 게임의 핵심 콘텐츠를 보여주는 이미지를 사용하세요</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* 플레이 동영상 */}
              <Card className="bg-slate-900 border border-slate-800">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold">게임 플레이 동영상</h2>
                      <p className="text-sm text-slate-400 mt-1">
                        트레일러와 게임플레이 영상을 등록하세요 (최대 5개)
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      동영상 추가
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {videos.map((video) => (
                      <div
                        key={video.id}
                        className="p-4 bg-slate-800/30 rounded-lg border border-slate-800 hover:bg-slate-800/50 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-40 h-24 bg-slate-800 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{video.title}</h4>
                            <p className="text-sm text-slate-400 mb-2">{video.url}</p>
                            <div className="flex items-center gap-4 text-xs text-slate-500">
                              <span>재생시간: {video.duration}</span>
                              <span>•</span>
                              <span>조회수: {video.views.toLocaleString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDeleteVideo(video.id)}
                              className="text-red-400 hover:text-red-300"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </>
          )}

          {/* 게임샵 탭 */}
          {activeTab === 'shop' && (
            <Card className="bg-slate-900 border border-slate-800">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold">게임 내 아이템 상점</h2>
                    <p className="text-sm text-slate-400 mt-1">
                      게임 내에서 판매할 아이템을 관리하세요
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsItemModalOpen(true)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    아이템 추가
                  </Button>
                </div>

                <div className="space-y-4">
                  {shopItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-slate-800/30 rounded-lg border border-slate-800"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-lg">{item.name}</h4>
                            <Badge
                              variant="outline"
                              className="text-xs border-slate-700"
                            >
                              {item.type}
                            </Badge>
                            <Badge
                              className={`text-xs ${
                                item.active
                                  ? 'bg-green-500/20 text-green-400 border-green-500/50'
                                  : 'bg-slate-500/20 text-slate-400 border-slate-500/50'
                              }`}
                            >
                              {item.active ? '판매중' : '판매중지'}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-slate-400 text-xs mb-1">가격</p>
                              <p className="font-semibold">
                                {item.currency === 'KRW' ? '₩' : '$'}
                                {item.price.toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-xs mb-1">재고</p>
                              <p className="font-semibold">{item.stock}</p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-xs mb-1">판매량</p>
                              <p className="font-semibold">{item.sales.toLocaleString()}개</p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-xs mb-1">매출</p>
                              <p className="font-semibold text-green-400">
                                ₩{(item.price * item.sales).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={item.active}
                              onChange={() => toggleItemActive(item.id)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                          </label>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-slate-400 hover:text-white"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteItem(item.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 매출 통계 */}
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <h3 className="font-semibold mb-3">매출 통계</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-slate-400 mb-1">총 매출</p>
                      <p className="text-2xl font-bold text-green-400">
                        ₩{shopItems
                          .reduce((sum, item) => sum + item.price * item.sales, 0)
                          .toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">총 판매량</p>
                      <p className="text-2xl font-bold">
                        {shopItems.reduce((sum, item) => sum + item.sales, 0).toLocaleString()}개
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">등록 아이템</p>
                      <p className="text-2xl font-bold">{shopItems.length}개</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* 공지사항 탭 */}
          {activeTab === 'announcements' && (
            <Card className="bg-slate-900 border border-slate-800">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold">공지사항 및 푸시 알림</h2>
                    <p className="text-sm text-slate-400 mt-1">
                      테스터들에게 중요한 소식을 전달하세요
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsAnnouncementModalOpen(true)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    공지 작성
                  </Button>
                </div>

                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div
                      key={announcement.id}
                      className="p-4 bg-slate-800/30 rounded-lg border border-slate-800 hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3 flex-1">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              announcement.priority === 'high'
                                ? 'bg-red-500/20 text-red-400'
                                : 'bg-blue-500/20 text-blue-400'
                            }`}
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold">{announcement.title}</h3>
                              <Badge
                                variant="outline"
                                className={`text-xs ${
                                  announcement.type === 'maintenance' || announcement.type === '점검'
                                    ? 'border-orange-500/50 text-orange-400'
                                    : announcement.type === 'update' || announcement.type === '업데이트'
                                    ? 'border-blue-500/50 text-blue-400'
                                    : 'border-slate-500/50 text-slate-400'
                                }`}
                              >
                                {announcement.type === 'notice'
                                  ? '일반'
                                  : announcement.type === 'update' || announcement.type === '업데이트'
                                  ? '업데이트'
                                  : announcement.type === 'maintenance' || announcement.type === '점검'
                                  ? '점검'
                                  : '이벤트'}
                              </Badge>
                              {announcement.priority === 'high' && (
                                <Badge className="bg-red-500/20 text-red-400 border-red-500/50 text-xs">
                                  긴급
                                </Badge>
                              )}
                              {announcement.sent && (
                                <Badge className="bg-green-500/20 text-green-400 border-green-500/50 text-xs">
                                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  발송완료
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-slate-300 mb-2">{announcement.content}</p>
                            <div className="flex items-center gap-4 text-xs text-slate-400">
                              <span>{announcement.date}</span>
                              {announcement.sent && (
                                <>
                                  <span>•</span>
                                  <div className="flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    <span>{announcement.recipients.toLocaleString()}명에게 발송</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteAnnouncement(announcement.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 알림 통계 */}
                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <h3 className="font-semibold mb-3">알림 통계</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-slate-400 mb-1">총 공지</p>
                      <p className="text-2xl font-bold">{announcements.length}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">푸시 발송</p>
                      <p className="text-2xl font-bold text-green-400">
                        {announcements.filter((a) => a.sent).length}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">도달률</p>
                      <p className="text-2xl font-bold text-blue-400">98.5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* 모달들은 간단하게 처리 - 실제 구현 시 Dialog 컴포넌트 사용 */}
      {isScreenshotModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">스크린샷 추가</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">제목</label>
                <Input
                  placeholder="예: 메인 화면"
                  value={newScreenshotTitle}
                  onChange={(e) => setNewScreenshotTitle(e.target.value)}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsScreenshotModalOpen(false)}>
                  취소
                </Button>
                <Button onClick={handleAddScreenshot} className="bg-green-600 hover:bg-green-700">
                  추가
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">동영상 추가</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">제목</label>
                <Input
                  placeholder="예: 공식 트레일러"
                  value={newVideo.title}
                  onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-2 block">URL</label>
                <Input
                  placeholder="https://youtube.com/watch?v=..."
                  value={newVideo.url}
                  onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsVideoModalOpen(false)}>
                  취소
                </Button>
                <Button onClick={handleAddVideo} className="bg-green-600 hover:bg-green-700">
                  추가
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isItemModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">아이템 추가</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">아이템명</label>
                <Input
                  placeholder="예: 스타터 팩"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-2 block">가격</label>
                <Input
                  type="number"
                  placeholder="9900"
                  value={newItem.price}
                  onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsItemModalOpen(false)}>
                  취소
                </Button>
                <Button onClick={handleAddItem} className="bg-green-600 hover:bg-green-700">
                  추가
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAnnouncementModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 max-w-2xl w-full">
            <h3 className="text-xl font-bold mb-4">새 공지사항 작성</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-400 mb-2 block">공지 유형</label>
                  <select
                    value={newAnnouncement.type}
                    onChange={(e) => setNewAnnouncement({ ...newAnnouncement, type: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white"
                  >
                    <option value="notice">일반 공지</option>
                    <option value="update">업데이트</option>
                    <option value="maintenance">점검</option>
                    <option value="event">이벤트</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-slate-400 mb-2 block">우선순위</label>
                  <select
                    value={newAnnouncement.priority}
                    onChange={(e) => setNewAnnouncement({ ...newAnnouncement, priority: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white"
                  >
                    <option value="high">긴급</option>
                    <option value="normal">일반</option>
                    <option value="low">낮음</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-2 block">제목</label>
                <Input
                  placeholder="공지사항 제목"
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-2 block">내용</label>
                <textarea
                  placeholder="공지사항 내용을 입력하세요"
                  value={newAnnouncement.content}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white min-h-32"
                />
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <input
                    type="checkbox"
                    checked={newAnnouncement.sendPush}
                    onChange={(e) => setNewAnnouncement({ ...newAnnouncement, sendPush: e.target.checked })}
                    className="rounded"
                  />
                  <label className="text-sm font-semibold">푸시 알림 전송</label>
                </div>
                {newAnnouncement.sendPush && (
                  <div className="flex items-center gap-2 p-3 bg-blue-500/10 border border-blue-500/30 rounded">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="text-sm text-blue-400">
                      {game.testers.toLocaleString()}명의 테스터에게 알림이 전송됩니다
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsAnnouncementModalOpen(false)}>
                  취소
                </Button>
                <Button onClick={handleAddAnnouncement} className="bg-green-600 hover:bg-green-700">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {newAnnouncement.sendPush ? '발송 및 등록' : '등록'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
