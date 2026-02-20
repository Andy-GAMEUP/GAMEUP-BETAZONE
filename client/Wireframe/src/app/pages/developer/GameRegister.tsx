import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Badge } from "@/app/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Separator } from "@/app/components/ui/separator";
import { 
  Upload, 
  X, 
  Plus, 
  AlertCircle, 
  CheckCircle2, 
  Clock,
  DollarSign,
  Eye,
  Zap,
} from "lucide-react";

export function GameRegister() {
  const navigate = useNavigate();
  const [tags, setTags] = useState<string[]>(["오픈월드", "멀티플레이"]);
  const [newTag, setNewTag] = useState("");
  const [serviceType, setServiceType] = useState<string>("beta");
  const [monetizationType, setMonetizationType] = useState<string>("free");

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here - 신청 상태로 등록됨
    alert("게임 등록 신청이 완료되었습니다. 관리자 승인을 기다려주세요.");
    navigate("/developer/games");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">새 게임 등록</h1>
        <p className="text-slate-400">게임 정보를 입력하고 등록 신청을 진행하세요</p>
      </div>

      {/* 등록 절차 안내 */}
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="p-6">
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
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 서비스 유형 및 수익 모델 */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle>서비스 유형 및 수익 모델</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 서비스 유형 */}
            <div className="space-y-3">
              <Label className="text-base">서비스 유형 *</Label>
              <RadioGroup value={serviceType} onValueChange={setServiceType}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      serviceType === "beta" 
                        ? "border-green-500 bg-green-500/10" 
                        : "border-slate-700 hover:border-slate-600"
                    }`}
                    onClick={() => setServiceType("beta")}
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="beta" id="beta" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-blue-400" />
                          <Label htmlFor="beta" className="text-base font-semibold cursor-pointer">
                            베타 서비스
                          </Label>
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
                      serviceType === "live" 
                        ? "border-green-500 bg-green-500/10" 
                        : "border-slate-700 hover:border-slate-600"
                    }`}
                    onClick={() => setServiceType("live")}
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="live" id="live" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                          <Label htmlFor="live" className="text-base font-semibold cursor-pointer">
                            라이브 서비스
                          </Label>
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
              </RadioGroup>
            </div>

            <Separator className="bg-slate-800" />

            {/* 수익 모델 */}
            <div className="space-y-3">
              <Label className="text-base">수익 모델 *</Label>
              <RadioGroup value={monetizationType} onValueChange={setMonetizationType}>
                <div className="space-y-3">
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      monetizationType === "free" 
                        ? "border-green-500 bg-green-500/10" 
                        : "border-slate-700 hover:border-slate-600"
                    }`}
                    onClick={() => setMonetizationType("free")}
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="free" id="free" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                          <Label htmlFor="free" className="text-base font-semibold cursor-pointer">
                            무료 게임 (Free-to-Play)
                          </Label>
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
                      monetizationType === "ad" 
                        ? "border-green-500 bg-green-500/10" 
                        : "border-slate-700 hover:border-slate-600"
                    }`}
                    onClick={() => setMonetizationType("ad")}
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="ad" id="ad" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Eye className="w-5 h-5 text-yellow-400" />
                          <Label htmlFor="ad" className="text-base font-semibold cursor-pointer">
                            광고 기반 게임 (Ad-Supported)
                          </Label>
                        </div>
                        <p className="text-sm text-slate-400">
                          광고 수익으로 운영되는 무료 게임입니다
                        </p>
                        <div className="mt-3 space-y-2">
                          <p className="text-xs text-slate-500">
                            • 게임 플레이 중 광고가 표시됩니다
                          </p>
                          <div className="flex items-center gap-2">
                            <Checkbox id="reward-ad" />
                            <label htmlFor="reward-ad" className="text-xs text-slate-400 cursor-pointer">
                              리워드 광고 포함 (보상형 광고)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      monetizationType === "paid" 
                        ? "border-green-500 bg-green-500/10" 
                        : "border-slate-700 hover:border-slate-600"
                    }`}
                    onClick={() => setMonetizationType("paid")}
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="paid" id="paid" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-5 h-5 text-blue-400" />
                          <Label htmlFor="paid" className="text-base font-semibold cursor-pointer">
                            유료 게임 (Premium)
                          </Label>
                        </div>
                        <p className="text-sm text-slate-400">
                          구매가 필요한 프리미엄 게임입니다
                        </p>
                        <div className="mt-3">
                          {monetizationType === "paid" && (
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <Label htmlFor="price" className="text-xs text-slate-400 mb-1 block">
                                  판매 가격 *
                                </Label>
                                <Input
                                  id="price"
                                  type="number"
                                  placeholder="29,900"
                                  className="bg-slate-800 border-slate-700"
                                  required={monetizationType === "paid"}
                                />
                              </div>
                              <div>
                                <Label htmlFor="currency" className="text-xs text-slate-400 mb-1 block">
                                  통화
                                </Label>
                                <Select defaultValue="krw">
                                  <SelectTrigger className="bg-slate-800 border-slate-700">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="bg-slate-900 border-slate-800">
                                    <SelectItem value="krw">KRW (원)</SelectItem>
                                    <SelectItem value="usd">USD ($)</SelectItem>
                                    <SelectItem value="eur">EUR (€)</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* 추가 수익화 옵션 */}
            {monetizationType !== "paid" && (
              <>
                <Separator className="bg-slate-800" />
                <div className="space-y-3">
                  <Label className="text-sm text-slate-400">추가 수익화 옵션 (선택)</Label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Checkbox id="in-app" />
                      <label htmlFor="in-app" className="text-sm text-slate-300 cursor-pointer">
                        인앱 결제 (In-App Purchase)
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="subscription" />
                      <label htmlFor="subscription" className="text-sm text-slate-300 cursor-pointer">
                        구독 모델 (Subscription)
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="battle-pass" />
                      <label htmlFor="battle-pass" className="text-sm text-slate-300 cursor-pointer">
                        배틀패스 / 시즌패스
                      </label>
                    </div>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Basic Information */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle>기본 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">게임명 *</Label>
                <Input
                  id="title"
                  placeholder="게임 제목을 입력하세요"
                  className="bg-slate-800 border-slate-700"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="genre">장르 *</Label>
                <Select required>
                  <SelectTrigger className="bg-slate-800 border-slate-700">
                    <SelectValue placeholder="장르 선택" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-800">
                    <SelectItem value="action">액션</SelectItem>
                    <SelectItem value="rpg">RPG</SelectItem>
                    <SelectItem value="fps">FPS</SelectItem>
                    <SelectItem value="racing">레이싱</SelectItem>
                    <SelectItem value="strategy">전략</SelectItem>
                    <SelectItem value="simulation">시뮬레이션</SelectItem>
                    <SelectItem value="adventure">어드벤처</SelectItem>
                    <SelectItem value="horror">호러</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">게임 설명 *</Label>
              <Textarea
                id="description"
                placeholder="게임에 대한 상세 설명을 입력하세요"
                className="bg-slate-800 border-slate-700 min-h-32"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="platform">플랫폼 *</Label>
                <Select required>
                  <SelectTrigger className="bg-slate-800 border-slate-700">
                    <SelectValue placeholder="플랫폼 선택" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-800">
                    <SelectItem value="pc">PC</SelectItem>
                    <SelectItem value="console">콘솔</SelectItem>
                    <SelectItem value="mobile">모바일</SelectItem>
                    <SelectItem value="multi">멀티 플랫폼</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="engine">게임 엔진</Label>
                <Input
                  id="engine"
                  placeholder="예: Unreal Engine 5"
                  className="bg-slate-800 border-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>태그</Label>
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
                      <X className="w-3 h-3" />
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
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                />
                <Button
                  type="button"
                  onClick={handleAddTag}
                  variant="outline"
                  className="border-slate-700"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Beta Test Details - 베타 서비스일 때만 표시 */}
        {serviceType === "beta" && (
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle>베타 테스트 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">시작일 *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    className="bg-slate-800 border-slate-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">종료일 *</Label>
                  <Input
                    id="endDate"
                    type="date"
                    className="bg-slate-800 border-slate-700"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maxTesters">최대 테스터 수 *</Label>
                  <Input
                    id="maxTesters"
                    type="number"
                    placeholder="1000"
                    className="bg-slate-800 border-slate-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="testType">테스트 유형 *</Label>
                  <Select required>
                    <SelectTrigger className="bg-slate-800 border-slate-700">
                      <SelectValue placeholder="유형 선택" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-800">
                      <SelectItem value="closed">비공개 베타</SelectItem>
                      <SelectItem value="open">공개 베타</SelectItem>
                      <SelectItem value="alpha">알파 테스트</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">시스템 요구사항</Label>
                <Textarea
                  id="requirements"
                  placeholder="최소 및 권장 시스템 요구사항을 입력하세요"
                  className="bg-slate-800 border-slate-700 min-h-24"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Media Upload */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle>미디어</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>게임 이미지 *</Label>
              <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-slate-600 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 mx-auto mb-4 text-slate-400" />
                <p className="text-slate-400 mb-2">
                  클릭하여 이미지를 업로드하거나 드래그 앤 드롭
                </p>
                <p className="text-sm text-slate-500">
                  PNG, JPG (최대 5MB, 권장 1920x1080)
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="trailer">트레일러 URL</Label>
              <Input
                id="trailer"
                placeholder="https://youtube.com/..."
                className="bg-slate-800 border-slate-700"
              />
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle>추가 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="website">공식 웹사이트</Label>
              <Input
                id="website"
                placeholder="https://..."
                className="bg-slate-800 border-slate-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="discord">디스코드 서버</Label>
              <Input
                id="discord"
                placeholder="https://discord.gg/..."
                className="bg-slate-800 border-slate-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">테스터를 위한 안내사항</Label>
              <Textarea
                id="notes"
                placeholder="베타 테스터들이 알아야 할 특별한 사항을 입력하세요"
                className="bg-slate-800 border-slate-700 min-h-24"
              />
            </div>
          </CardContent>
        </Card>

        {/* 등록 안내 */}
        <Card className="bg-blue-500/10 border-blue-500/30">
          <CardContent className="p-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
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
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end">
          <Button
            type="button"
            variant="outline"
            className="border-slate-700"
            onClick={() => navigate("/developer/games")}
          >
            취소
          </Button>
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            <Clock className="w-4 h-4 mr-2" />
            등록 신청
          </Button>
        </div>
      </form>
    </div>
  );
}
