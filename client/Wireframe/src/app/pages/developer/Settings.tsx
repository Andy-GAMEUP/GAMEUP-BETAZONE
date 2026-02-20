import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Switch } from "@/app/components/ui/switch";
import { Textarea } from "@/app/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  User,
  Building2,
  Mail,
  Phone,
  Globe,
  Lock,
  Bell,
  Palette,
  CreditCard,
  Shield,
  Key,
  AlertCircle,
  Check,
  Camera,
} from "lucide-react";

export function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">설정</h1>
        <p className="text-slate-400">계정과 개발자 센터 설정을 관리하세요</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card className="bg-slate-900 border-slate-800 sticky top-6">
            <CardContent className="p-4">
              <nav className="space-y-1">
                <button className="w-full text-left px-4 py-3 rounded-lg bg-green-600 text-white flex items-center gap-3">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">프로필</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white flex items-center gap-3">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm font-medium">회사 정보</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white flex items-center gap-3">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm font-medium">보안</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white flex items-center gap-3">
                  <Bell className="w-4 h-4" />
                  <span className="text-sm font-medium">알림</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white flex items-center gap-3">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm font-medium">결제 및 요금제</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white flex items-center gap-3">
                  <Key className="w-4 h-4" />
                  <span className="text-sm font-medium">API 키</span>
                </button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">프로필 설정</h2>
                <Badge variant="outline" className="border-green-500/50 text-green-400">
                  <Check className="w-3 h-3 mr-1" />
                  인증됨
                </Badge>
              </div>

              {/* Profile Picture */}
              <div className="mb-6">
                <Label className="text-sm text-slate-400 mb-3 block">프로필 사진</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="bg-green-600 text-2xl">개</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" size="sm" className="border-slate-800 hover:bg-slate-800 mb-2">
                      <Camera className="w-4 h-4 mr-2" />
                      사진 변경
                    </Button>
                    <p className="text-xs text-slate-500">JPG, PNG 또는 GIF (최대 5MB)</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6 bg-slate-800" />

              {/* Profile Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm text-slate-400 mb-2 block">
                      이름
                    </Label>
                    <Input
                      id="firstName"
                      defaultValue="김개발"
                      className="bg-slate-800 border-slate-700 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm text-slate-400 mb-2 block">
                      성
                    </Label>
                    <Input
                      id="lastName"
                      defaultValue="개발자"
                      className="bg-slate-800 border-slate-700 focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    이메일
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="developer@game.com"
                    className="bg-slate-800 border-slate-700 focus:border-green-500"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    연락처
                  </Label>
                  <Input
                    id="phone"
                    defaultValue="010-1234-5678"
                    className="bg-slate-800 border-slate-700 focus:border-green-500"
                  />
                </div>

                <div>
                  <Label htmlFor="bio" className="text-sm text-slate-400 mb-2 block">
                    자기소개
                  </Label>
                  <Textarea
                    id="bio"
                    placeholder="간단한 자기소개를 작성해주세요"
                    className="bg-slate-800 border-slate-700 focus:border-green-500 min-h-24"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" className="border-slate-800 hover:bg-slate-800">
                  취소
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  변경사항 저장
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Company Information */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">회사 정보</h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="companyName" className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    회사명
                  </Label>
                  <Input
                    id="companyName"
                    defaultValue="게임개발 스튜디오"
                    className="bg-slate-800 border-slate-700 focus:border-green-500"
                  />
                </div>

                <div>
                  <Label htmlFor="website" className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    웹사이트
                  </Label>
                  <Input
                    id="website"
                    defaultValue="https://gamestudio.com"
                    className="bg-slate-800 border-slate-700 focus:border-green-500"
                  />
                </div>

                <div>
                  <Label htmlFor="businessNumber" className="text-sm text-slate-400 mb-2 block">
                    사업자등록번호
                  </Label>
                  <Input
                    id="businessNumber"
                    defaultValue="123-45-67890"
                    className="bg-slate-800 border-slate-700 focus:border-green-500"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-sm text-slate-400 mb-2 block">
                    회사 주소
                  </Label>
                  <Textarea
                    id="address"
                    defaultValue="서울특별시 강남구 테헤란로 123"
                    className="bg-slate-800 border-slate-700 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" className="border-slate-800 hover:bg-slate-800">
                  취소
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  변경사항 저장
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-bold">보안</h2>
              </div>

              <div className="space-y-6">
                {/* Password Change */}
                <div>
                  <h3 className="font-semibold mb-4">비밀번호 변경</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword" className="text-sm text-slate-400 mb-2 block">
                        현재 비밀번호
                      </Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        className="bg-slate-800 border-slate-700 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="newPassword" className="text-sm text-slate-400 mb-2 block">
                        새 비밀번호
                      </Label>
                      <Input
                        id="newPassword"
                        type="password"
                        className="bg-slate-800 border-slate-700 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword" className="text-sm text-slate-400 mb-2 block">
                        비밀번호 확인
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        className="bg-slate-800 border-slate-700 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700">
                    비밀번호 업데이트
                  </Button>
                </div>

                <Separator className="bg-slate-800" />

                {/* Two-Factor Authentication */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">2단계 인증 (2FA)</h3>
                    <p className="text-sm text-slate-400">
                      계정 보안을 강화하기 위해 2단계 인증을 활성화하세요
                    </p>
                  </div>
                  <Switch />
                </div>

                <Separator className="bg-slate-800" />

                {/* Login Sessions */}
                <div>
                  <h3 className="font-semibold mb-4">로그인 세션</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-800">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium mb-1">Chrome on Windows</p>
                          <p className="text-sm text-slate-400">서울, 대한민국 • 현재 세션</p>
                          <p className="text-xs text-slate-500 mt-1">마지막 활동: 방금 전</p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                          활성
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-800">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium mb-1">Safari on macOS</p>
                          <p className="text-sm text-slate-400">서울, 대한민국</p>
                          <p className="text-xs text-slate-500 mt-1">마지막 활동: 2일 전</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                          종료
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Bell className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-bold">알림 설정</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between py-3">
                  <div>
                    <h3 className="font-semibold mb-1">새로운 피드백</h3>
                    <p className="text-sm text-slate-400">테스터가 새 피드백을 남길 때 알림</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator className="bg-slate-800" />

                <div className="flex items-center justify-between py-3">
                  <div>
                    <h3 className="font-semibold mb-1">테스터 신청</h3>
                    <p className="text-sm text-slate-400">새로운 테스터 신청이 있을 때</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator className="bg-slate-800" />

                <div className="flex items-center justify-between py-3">
                  <div>
                    <h3 className="font-semibold mb-1">주간 리포트</h3>
                    <p className="text-sm text-slate-400">매주 게임 성과 리포트 받기</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator className="bg-slate-800" />

                <div className="flex items-center justify-between py-3">
                  <div>
                    <h3 className="font-semibold mb-1">마케팅 이메일</h3>
                    <p className="text-sm text-slate-400">새로운 기능 및 업데이트 소식</p>
                  </div>
                  <Switch />
                </div>

                <Separator className="bg-slate-800" />

                <div>
                  <Label className="text-sm text-slate-400 mb-2 block">알림 수신 시간</Label>
                  <Select defaultValue="anytime">
                    <SelectTrigger className="bg-slate-800 border-slate-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-800">
                      <SelectItem value="anytime">언제든지</SelectItem>
                      <SelectItem value="business">업무 시간만 (9-18시)</SelectItem>
                      <SelectItem value="evening">저녁 시간만 (18-22시)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button className="bg-green-600 hover:bg-green-700">
                  변경사항 저장
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* API Keys */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Key className="w-5 h-5 text-green-400" />
                    <h2 className="text-xl font-bold">API 키</h2>
                  </div>
                  <p className="text-sm text-slate-400">
                    외부 통합을 위한 API 키를 관리하세요
                  </p>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  새 키 생성
                </Button>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-800">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">Production API Key</h3>
                      <p className="text-sm text-slate-400">생성일: 2024.01.15</p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                      활성
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <code className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded text-sm font-mono text-slate-300">
                      gup_prod_••••••••••••••••••••••••
                    </code>
                    <Button variant="outline" size="sm" className="border-slate-800 hover:bg-slate-800">
                      복사
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      권한 수정
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                      삭제
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-800">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">Development API Key</h3>
                      <p className="text-sm text-slate-400">생성일: 2024.02.01</p>
                    </div>
                    <Badge variant="outline" className="border-slate-500/50 text-slate-400">
                      테스트
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <code className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded text-sm font-mono text-slate-300">
                      gup_dev_••••••••••••••••••••••••
                    </code>
                    <Button variant="outline" size="sm" className="border-slate-800 hover:bg-slate-800">
                      복사
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      권한 수정
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                      삭제
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-400 font-medium mb-1">API 키 보안</p>
                  <p className="text-slate-400">
                    API 키는 안전하게 보관하고, 절대 공개 저장소나 클라이언트 코드에 노출하지 마세요.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="bg-slate-900 border-red-900/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <h2 className="text-xl font-bold text-red-400">위험 구역</h2>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                아래 작업은 되돌릴 수 없습니다. 신중하게 진행해주세요.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-slate-800">
                  <div>
                    <h3 className="font-semibold mb-1">계정 비활성화</h3>
                    <p className="text-sm text-slate-400">일시적으로 계정을 비활성화합니다</p>
                  </div>
                  <Button variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
                    비활성화
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-red-900/50">
                  <div>
                    <h3 className="font-semibold text-red-400 mb-1">계정 삭제</h3>
                    <p className="text-sm text-slate-400">
                      모든 데이터가 영구적으로 삭제됩니다
                    </p>
                  </div>
                  <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10">
                    삭제
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
