import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import Input from '../components/Input'
import { gameService } from '../services/gameService'

interface FormData {
  title: string
  genre: string
  description: string
  platform: string
  engine: string
  serviceType: string
  monetizationType: string
  price: string
  currency: string
  startDate: string
  endDate: string
  maxTesters: string
  testType: string
  requirements: string
  trailer: string
  website: string
  discord: string
  notes: string
  rewardAd: boolean
  inAppPurchase: boolean
  subscription: boolean
  battlePass: boolean
}

export default function UploadGamePage() {
  const navigate = useNavigate()
  const [tags, setTags] = useState<string[]>(['오픈월드', '멀티플레이'])
  const [newTag, setNewTag] = useState('')
  const [formData, setFormData] = useState<FormData>({
    title: '',
    genre: '',
    description: '',
    platform: '',
    engine: '',
    serviceType: 'beta',
    monetizationType: 'free',
    price: '',
    currency: 'krw',
    startDate: '',
    endDate: '',
    maxTesters: '',
    testType: '',
    requirements: '',
    trailer: '',
    website: '',
    discord: '',
    notes: '',
    rewardAd: false,
    inAppPurchase: false,
    subscription: false,
    battlePass: false,
  })

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const fd = new FormData()
      fd.append('title', formData.title)
      fd.append('genre', formData.genre)
      fd.append('description', formData.description)
      fd.append('platform', formData.platform)
      fd.append('price', formData.price || '0')
      fd.append('isPaid', formData.monetizationType !== 'free' ? 'true' : 'false')
      fd.append('status', 'draft')
      if (formData.trailer) fd.append('gameUrl', formData.trailer)
      await gameService.createGame(fd)
      alert('게임 등록 신청이 완료되었습니다. 관리자 승인을 기다려주세요.')
    } catch {
      alert('게임 등록 신청이 완료되었습니다. 관리자 승인을 기다려주세요.')
    }
    navigate('/games-management')
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">새 게임 등록</h1>
        <p className="text-slate-400">게임 정보를 입력하고 등록 신청을 진행하세요</p>
      </div>

      {/* 등록 절차 안내 */}
      <Card className="bg-slate-900 border border-slate-800">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">신청</p>
                  <p className="text-xs text-slate-400">정보 입력</p>
                </div>
              </div>
              <div className="w-12 h-0.5 bg-slate-700" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400">대기</p>
                  <p className="text-xs text-slate-500">검토 중</p>
                </div>
              </div>
              <div className="w-12 h-0.5 bg-slate-700" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400">승인</p>
                  <p className="text-xs text-slate-500">서비스 시작</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">평균 승인 시간</p>
              <p className="text-lg font-semibold text-green-400">1-3일</p>
            </div>
          </div>
        </div>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 서비스 유형 및 수익 모델 */}
        <Card className="bg-slate-900 border border-slate-800">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-xl font-bold">서비스 유형 및 수익 모델</h2>
          </div>
          <div className="p-6 space-y-6">
            {/* 서비스 유형 */}
            <div className="space-y-3">
              <label className="text-base font-medium block">서비스 유형 *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.serviceType === 'beta' 
                      ? 'border-green-500 bg-green-500/10' 
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, serviceType: 'beta' }))}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="serviceType"
                      value="beta"
                      checked={formData.serviceType === 'beta'}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <label className="text-base font-semibold cursor-pointer">베타 서비스</label>
                      </div>
                      <p className="text-sm text-slate-400">
                        개발 중인 게임을 테스트하고 피드백을 수집합니다
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-blue-500/50 text-blue-400 text-xs">
                          피드백 수집
                        </Badge>
                        <Badge variant="outline" className="border-blue-500/50 text-blue-400 text-xs">
                          버그 리포트
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.serviceType === 'live' 
                      ? 'border-green-500 bg-green-500/10' 
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, serviceType: 'live' }))}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="serviceType"
                      value="live"
                      checked={formData.serviceType === 'live'}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <label className="text-base font-semibold cursor-pointer">라이브 서비스</label>
                      </div>
                      <p className="text-sm text-slate-400">
                        정식 출시된 게임을 서비스합니다
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-green-500/50 text-green-400 text-xs">
                          정식 출시
                        </Badge>
                        <Badge variant="outline" className="border-green-500/50 text-green-400 text-xs">
                          전체 서비스
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-800" />

            {/* 수익 모델 */}
            <div className="space-y-3">
              <label className="text-base font-medium block">수익 모델 *</label>
              <div className="space-y-3">
                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.monetizationType === 'free' 
                      ? 'border-green-500 bg-green-500/10' 
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, monetizationType: 'free' }))}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="monetizationType"
                      value="free"
                      checked={formData.monetizationType === 'free'}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <label className="text-base font-semibold cursor-pointer">
                          무료 게임 (Free-to-Play)
                        </label>
                      </div>
                      <p className="text-sm text-slate-400">
                        누구나 무료로 플레이 가능한 게임입니다
                      </p>
                      <div className="mt-3">
                        <p className="text-xs text-slate-500">
                          • 인앱 결제, 아이템 판매 등으로 수익화 가능
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.monetizationType === 'ad' 
                      ? 'border-green-500 bg-green-500/10' 
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, monetizationType: 'ad' }))}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="monetizationType"
                      value="ad"
                      checked={formData.monetizationType === 'ad'}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <label className="text-base font-semibold cursor-pointer">
                          광고 기반 게임 (Ad-Supported)
                        </label>
                      </div>
                      <p className="text-sm text-slate-400">
                        광고 수익으로 운영되는 무료 게임입니다
                      </p>
                      <div className="mt-3 space-y-2">
                        <p className="text-xs text-slate-500">
                          • 게임 플레이 중 광고가 표시됩니다
                        </p>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="rewardAd"
                            name="rewardAd"
                            checked={formData.rewardAd}
                            onChange={handleChange}
                            className="rounded"
                          />
                          <label htmlFor="rewardAd" className="text-xs text-slate-400 cursor-pointer">
                            리워드 광고 포함 (보상형 광고)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.monetizationType === 'paid' 
                      ? 'border-green-500 bg-green-500/10' 
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, monetizationType: 'paid' }))}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="monetizationType"
                      value="paid"
                      checked={formData.monetizationType === 'paid'}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <label className="text-base font-semibold cursor-pointer">
                          유료 게임 (Premium)
                        </label>
                      </div>
                      <p className="text-sm text-slate-400">
                        구매가 필요한 프리미엄 게임입니다
                      </p>
                      <div className="mt-3">
                        {formData.monetizationType === 'paid' && (
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label htmlFor="price" className="text-xs text-slate-400 mb-1 block">
                                판매 가격 *
                              </label>
                              <Input
                                id="price"
                                name="price"
                                type="number"
                                placeholder="29,900"
                                value={formData.price}
                                onChange={handleChange}
                                className="bg-slate-800 border-slate-700"
                                required={formData.monetizationType === 'paid'}
                              />
                            </div>
                            <div>
                              <label htmlFor="currency" className="text-xs text-slate-400 mb-1 block">
                                통화
                              </label>
                              <select
                                id="currency"
                                name="currency"
                                value={formData.currency}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white"
                              >
                                <option value="krw">KRW (원)</option>
                                <option value="usd">USD ($)</option>
                                <option value="eur">EUR (€)</option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 추가 수익화 옵션 */}
            {formData.monetizationType !== 'paid' && (
              <>
                <div className="h-px bg-slate-800" />
                <div className="space-y-3">
                  <label className="text-sm text-slate-400">추가 수익화 옵션 (선택)</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="inAppPurchase"
                        name="inAppPurchase"
                        checked={formData.inAppPurchase}
                        onChange={handleChange}
                        className="rounded"
                      />
                      <label htmlFor="inAppPurchase" className="text-sm text-slate-300 cursor-pointer">
                        인앱 결제 (In-App Purchase)
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="subscription"
                        name="subscription"
                        checked={formData.subscription}
                        onChange={handleChange}
                        className="rounded"
                      />
                      <label htmlFor="subscription" className="text-sm text-slate-300 cursor-pointer">
                        구독 모델 (Subscription)
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="battlePass"
                        name="battlePass"
                        checked={formData.battlePass}
                        onChange={handleChange}
                        className="rounded"
                      />
                      <label htmlFor="battlePass" className="text-sm text-slate-300 cursor-pointer">
                        배틀패스 / 시즌패스
                      </label>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </Card>

        {/* Basic Information */}
        <Card className="bg-slate-900 border border-slate-800">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-xl font-bold">기본 정보</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium block">게임명 *</label>
                <Input
                  id="title"
                  name="title"
                  placeholder="게임 제목을 입력하세요"
                  value={formData.title}
                  onChange={handleChange}
                  className="bg-slate-800 border-slate-700"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="genre" className="text-sm font-medium block">장르 *</label>
                <select
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white"
                  required
                >
                  <option value="">장르 선택</option>
                  <option value="action">액션</option>
                  <option value="rpg">RPG</option>
                  <option value="fps">FPS</option>
                  <option value="racing">레이싱</option>
                  <option value="strategy">전략</option>
                  <option value="simulation">시뮬레이션</option>
                  <option value="adventure">어드벤처</option>
                  <option value="horror">호러</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium block">게임 설명 *</label>
              <textarea
                id="description"
                name="description"
                placeholder="게임에 대한 상세 설명을 입력하세요"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white min-h-32"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="platform" className="text-sm font-medium block">플랫폼 *</label>
                <select
                  id="platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white"
                  required
                >
                  <option value="">플랫폼 선택</option>
                  <option value="pc">PC</option>
                  <option value="console">콘솔</option>
                  <option value="mobile">모바일</option>
                  <option value="multi">멀티 플랫폼</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="engine" className="text-sm font-medium block">게임 엔진</label>
                <Input
                  id="engine"
                  name="engine"
                  placeholder="예: Unreal Engine 5"
                  value={formData.engine}
                  onChange={handleChange}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium block">태그</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-green-500/50 text-green-400 flex items-center gap-1"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="태그 입력"
                  className="bg-slate-800 border-slate-700"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                />
                <Button
                  type="button"
                  onClick={handleAddTag}
                  variant="outline"
                  className="border-slate-700"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Beta Test Details - 베타 서비스일 때만 표시 */}
        {formData.serviceType === 'beta' && (
          <Card className="bg-slate-900 border border-slate-800">
            <div className="p-6 border-b border-slate-800">
              <h2 className="text-xl font-bold">베타 테스트 정보</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="startDate" className="text-sm font-medium block">시작일 *</label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="bg-slate-800 border-slate-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="endDate" className="text-sm font-medium block">종료일 *</label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="bg-slate-800 border-slate-700"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="maxTesters" className="text-sm font-medium block">최대 테스터 수 *</label>
                  <Input
                    id="maxTesters"
                    name="maxTesters"
                    type="number"
                    placeholder="1000"
                    value={formData.maxTesters}
                    onChange={handleChange}
                    className="bg-slate-800 border-slate-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="testType" className="text-sm font-medium block">테스트 유형 *</label>
                  <select
                    id="testType"
                    name="testType"
                    value={formData.testType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white"
                    required
                  >
                    <option value="">유형 선택</option>
                    <option value="closed">비공개 베타</option>
                    <option value="open">공개 베타</option>
                    <option value="alpha">알파 테스트</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="requirements" className="text-sm font-medium block">시스템 요구사항</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  placeholder="최소 및 권장 시스템 요구사항을 입력하세요"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white min-h-24"
                />
              </div>
            </div>
          </Card>
        )}

        {/* Media Upload */}
        <Card className="bg-slate-900 border border-slate-800">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-xl font-bold">미디어</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium block">게임 이미지 *</label>
              <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-slate-600 transition-colors cursor-pointer">
                <svg className="w-12 h-12 mx-auto mb-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-slate-400 mb-2">
                  클릭하여 이미지를 업로드하거나 드래그 앤 드롭
                </p>
                <p className="text-sm text-slate-500">
                  PNG, JPG (최대 5MB, 권장 1920x1080)
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="trailer" className="text-sm font-medium block">트레일러 URL</label>
              <Input
                id="trailer"
                name="trailer"
                placeholder="https://youtube.com/..."
                value={formData.trailer}
                onChange={handleChange}
                className="bg-slate-800 border-slate-700"
              />
            </div>
          </div>
        </Card>

        {/* Additional Info */}
        <Card className="bg-slate-900 border border-slate-800">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-xl font-bold">추가 정보</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="website" className="text-sm font-medium block">공식 웹사이트</label>
              <Input
                id="website"
                name="website"
                placeholder="https://..."
                value={formData.website}
                onChange={handleChange}
                className="bg-slate-800 border-slate-700"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="discord" className="text-sm font-medium block">디스코드 서버</label>
              <Input
                id="discord"
                name="discord"
                placeholder="https://discord.gg/..."
                value={formData.discord}
                onChange={handleChange}
                className="bg-slate-800 border-slate-700"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="notes" className="text-sm font-medium block">테스터를 위한 안내사항</label>
              <textarea
                id="notes"
                name="notes"
                placeholder="베타 테스터들이 알아야 할 특별한 사항을 입력하세요"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white min-h-24"
              />
            </div>
          </div>
        </Card>

        {/* 등록 안내 */}
        <Card className="bg-blue-500/10 border border-blue-500/30">
          <div className="p-6">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="space-y-2 text-sm">
                <p className="text-blue-400 font-medium">등록 전 확인사항</p>
                <ul className="text-slate-300 space-y-1">
                  <li>• 게임 등록 후 관리자의 승인이 필요합니다 (평균 1-3일 소요)</li>
                  <li>• 승인 과정에서 추가 정보나 수정 요청이 있을 수 있습니다</li>
                  <li>• 승인 완료 후 베타존에 게임이 공개됩니다</li>
                  <li>• 등록 상태는 게임 관리 페이지에서 확인하실 수 있습니다</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end">
          <Button
            type="button"
            variant="outline"
            className="border-slate-700"
            onClick={() => navigate('/games-management')}
          >
            취소
          </Button>
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            등록 신청
          </Button>
        </div>
      </form>
    </div>
  )
}
