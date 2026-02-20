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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
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
  Plus,
  Edit,
  Bell,
  ShoppingBag,
  Gift,
  DollarSign,
  Package,
  Megaphone,
  Play,
  X,
  Send,
  Check,
} from "lucide-react";

export function GameDetailManagement() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("announcements");
  const [screenshots, setScreenshots] = useState([
    { id: 1, title: "메인 화면", url: "", uploaded: true },
    { id: 2, title: "전투 장면", url: "", uploaded: true },
    { id: 3, title: "도시 풍경", url: "", uploaded: true },
  ]);
  const [videos, setVideos] = useState([
    { id: 1, title: "공식 트레일러", url: "https://youtube.com/watch?v=example1", duration: "2:45", views: 15420 },
    { id: 2, title: "게임플레이 영상", url: "https://youtube.com/watch?v=example2", duration: "10:30", views: 8932 },
  ]);
  const [shopItems, setShopItems] = useState([
    { id: 1, name: "스타터 팩", price: 9900, currency: "KRW", type: "패키지", stock: "무제한", sales: 450, active: true },
    { id: 2, name: "프리미엄 스킨", price: 4900, currency: "KRW", type: "외형", stock: "무제한", sales: 892, active: true },
    { id: 3, name: "골드 1000개", price: 2900, currency: "KRW", type: "재화", stock: "무제한", sales: 1240, active: true },
  ]);
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "긴급 점검 안내", date: "2024.02.10", type: "점검", priority: "high", content: "서버 안정화를 위한 긴급 점검이 예정되어 있습니다.", sent: true, recipients: 2450 },
    { id: 2, title: "신규 콘텐츠 업데이트", date: "2024.02.08", type: "업데이트", priority: "normal", content: "새로운 던전과 아이템이 추가됩니다.", sent: true, recipients: 2450 },
  ]);

  // Modal states
  const [isScreenshotModalOpen, setIsScreenshotModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isAnnouncementModalOpen, setIsAnnouncementModalOpen] = useState(false);

  // Form states
  const [newScreenshot, setNewScreenshot] = useState({ title: "", file: null });
  const [newVideo, setNewVideo] = useState({ title: "", url: "", type: "youtube" });
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    currency: "KRW",
    type: "패키지",
    stock: "무제한",
    description: "",
  });
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    type: "notice",
    priority: "normal",
    sendPush: false,
  });

  const game = {
    id: id || "1",
    title: "Cyber Nexus",
    description: "사이버펑크 세계를 배경으로 한 액션 RPG 게임입니다.",
    genre: "RPG",
    platform: ["PC", "PlayStation", "Xbox"],
    status: "진행중",
    rating: 4.8,
    testers: 2450,
    downloads: 892,
    feedback: 342,
    views: 15420,
  };

  const stats = [
    { label: "테스터", value: game.testers.toLocaleString(), icon: <Users className="w-5 h-5" />, color: "text-blue-400" },
    { label: "다운로드", value: game.downloads, icon: <Download className="w-5 h-5" />, color: "text-green-400" },
    { label: "피드백", value: game.feedback, icon: <MessageSquare className="w-5 h-5" />, color: "text-purple-400" },
    { label: "조회수", value: game.views.toLocaleString(), icon: <Eye className="w-5 h-5" />, color: "text-orange-400" },
  ];

  // 스크린샷 추가
  const handleAddScreenshot = () => {
    if (newScreenshot.title) {
      const newId = screenshots.length + 1;
      setScreenshots([...screenshots, { id: newId, title: newScreenshot.title, url: "", uploaded: true }]);
      setNewScreenshot({ title: "", file: null });
      setIsScreenshotModalOpen(false);
    }
  };

  // 스크린샷 삭제
  const handleDeleteScreenshot = (id: number) => {
    setScreenshots(screenshots.filter((s) => s.id !== id));
  };

  // 동영상 추가
  const handleAddVideo = () => {
    if (newVideo.title && newVideo.url) {
      const newId = videos.length + 1;
      setVideos([...videos, { id: newId, title: newVideo.title, url: newVideo.url, duration: "0:00", views: 0 }]);
      setNewVideo({ title: "", url: "", type: "youtube" });
      setIsVideoModalOpen(false);
    }
  };

  // 동영상 삭제
  const handleDeleteVideo = (id: number) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  // 아이템 추가
  const handleAddItem = () => {
    if (newItem.name && newItem.price) {
      const newId = shopItems.length + 1;
      setShopItems([
        ...shopItems,
        {
          id: newId,
          name: newItem.name,
          price: parseInt(newItem.price),
          currency: newItem.currency,
          type: newItem.type,
          stock: newItem.stock,
          sales: 0,
          active: true,
        },
      ]);
      setNewItem({ name: "", price: "", currency: "KRW", type: "패키지", stock: "무제한", description: "" });
      setIsItemModalOpen(false);
    }
  };

  // 아이템 삭제
  const handleDeleteItem = (id: number) => {
    setShopItems(shopItems.filter((item) => item.id !== id));
  };

  // 아이템 활성화/비활성화
  const toggleItemActive = (id: number) => {
    setShopItems(
      shopItems.map((item) => (item.id === id ? { ...item, active: !item.active } : item))
    );
  };

  // 공지사항 추가
  const handleAddAnnouncement = () => {
    if (newAnnouncement.title && newAnnouncement.content) {
      const newId = announcements.length + 1;
      const today = new Date().toISOString().split("T")[0].replace(/-/g, ".");
      setAnnouncements([
        ...announcements,
        {
          id: newId,
          title: newAnnouncement.title,
          content: newAnnouncement.content,
          type: newAnnouncement.type,
          priority: newAnnouncement.priority,
          date: today,
          sent: newAnnouncement.sendPush,
          recipients: newAnnouncement.sendPush ? game.testers : 0,
        },
      ]);
      setNewAnnouncement({ title: "", content: "", type: "notice", priority: "normal", sendPush: false });
      setIsAnnouncementModalOpen(false);
    }
  };

  // 공지사항 삭제
  const handleDeleteAnnouncement = (id: number) => {
    setAnnouncements(announcements.filter((a) => a.id !== id));
  };

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
              <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                {game.status}
              </Badge>
              <div className="flex items-center gap-1 text-slate-400">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{game.rating}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-green-600 hover:bg-green-700">
            <Save className="w-4 h-4 mr-2" />
            변경사항 저장
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className={stat.color}>{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-slate-900 border border-slate-800">
          <TabsTrigger value="announcements">공지 & 알림</TabsTrigger>
          <TabsTrigger value="overview">기본 정보</TabsTrigger>
          <TabsTrigger value="media">미디어</TabsTrigger>
          <TabsTrigger value="shop">게임샵</TabsTrigger>
        </TabsList>

        {/* 공지사항 & 알림 탭 */}
        <TabsContent value="announcements" className="space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold">공지사항 및 푸시 알림</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    테스터들에게 중요한 소식을 전달하세요
                  </p>
                </div>
                <Dialog open={isAnnouncementModalOpen} onOpenChange={setIsAnnouncementModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Megaphone className="w-4 h-4 mr-2" />
                      공지 작성
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-slate-900 border-slate-800 max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>새 공지사항 작성</DialogTitle>
                      <DialogDescription className="text-slate-400">
                        게임 테스터들에게 전달할 공지를 작성하세요
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm text-slate-400 mb-2 block">공지 유형 *</Label>
                          <Select
                            value={newAnnouncement.type}
                            onValueChange={(value) =>
                              setNewAnnouncement({ ...newAnnouncement, type: value })
                            }
                          >
                            <SelectTrigger className="bg-slate-800 border-slate-700">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-slate-800">
                              <SelectItem value="notice">일반 공지</SelectItem>
                              <SelectItem value="update">업데이트</SelectItem>
                              <SelectItem value="maintenance">점검</SelectItem>
                              <SelectItem value="event">이벤트</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-sm text-slate-400 mb-2 block">우선순위 *</Label>
                          <Select
                            value={newAnnouncement.priority}
                            onValueChange={(value) =>
                              setNewAnnouncement({ ...newAnnouncement, priority: value })
                            }
                          >
                            <SelectTrigger className="bg-slate-800 border-slate-700">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-slate-800">
                              <SelectItem value="high">긴급</SelectItem>
                              <SelectItem value="normal">일반</SelectItem>
                              <SelectItem value="low">낮음</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="announcement-title" className="text-sm text-slate-400 mb-2 block">
                          제목 *
                        </Label>
                        <Input
                          id="announcement-title"
                          placeholder="공지사항 제목"
                          value={newAnnouncement.title}
                          onChange={(e) =>
                            setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
                          }
                          className="bg-slate-800 border-slate-700"
                        />
                      </div>

                      <div>
                        <Label htmlFor="announcement-content" className="text-sm text-slate-400 mb-2 block">
                          내용 *
                        </Label>
                        <Textarea
                          id="announcement-content"
                          placeholder="공지사항 내용을 입력하세요"
                          value={newAnnouncement.content}
                          onChange={(e) =>
                            setNewAnnouncement({ ...newAnnouncement, content: e.target.value })
                          }
                          className="bg-slate-800 border-slate-700 min-h-32"
                        />
                      </div>

                      <Separator className="bg-slate-800" />

                      <div className="p-4 bg-slate-800/50 rounded-lg">
                        <div className="flex items-start gap-3 mb-3">
                          <Switch
                            checked={newAnnouncement.sendPush}
                            onCheckedChange={(checked) =>
                              setNewAnnouncement({ ...newAnnouncement, sendPush: checked })
                            }
                          />
                          <div className="flex-1">
                            <Label className="text-sm font-semibold">푸시 알림 전송</Label>
                            <p className="text-xs text-slate-400 mt-1">
                              활성화 시 모든 테스터에게 푸시 알림이 발송됩니다
                            </p>
                          </div>
                        </div>
                        {newAnnouncement.sendPush && (
                          <div className="flex items-center gap-2 p-3 bg-blue-500/10 border border-blue-500/30 rounded">
                            <Bell className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-400">
                              {game.testers.toLocaleString()}명의 테스터에게 알림이 전송됩니다
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-end gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setIsAnnouncementModalOpen(false)}
                        className="border-slate-800"
                      >
                        취소
                      </Button>
                      <Button onClick={handleAddAnnouncement} className="bg-green-600 hover:bg-green-700">
                        <Send className="w-4 h-4 mr-2" />
                        {newAnnouncement.sendPush ? "발송 및 등록" : "등록"}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
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
                            announcement.priority === "high"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          <Megaphone className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{announcement.title}</h3>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                announcement.type === "maintenance"
                                  ? "border-orange-500/50 text-orange-400"
                                  : announcement.type === "update"
                                  ? "border-blue-500/50 text-blue-400"
                                  : announcement.type === "event"
                                  ? "border-purple-500/50 text-purple-400"
                                  : "border-slate-500/50 text-slate-400"
                              }`}
                            >
                              {announcement.type === "notice"
                                ? "일반"
                                : announcement.type === "update"
                                ? "업데이트"
                                : announcement.type === "maintenance"
                                ? "점검"
                                : "이벤트"}
                            </Badge>
                            {announcement.priority === "high" && (
                              <Badge className="bg-red-500/20 text-red-400 border-red-500/50 text-xs">
                                긴급
                              </Badge>
                            )}
                            {announcement.sent && (
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/50 text-xs">
                                <Check className="w-3 h-3 mr-1" />
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
                                  <Bell className="w-3 h-3" />
                                  <span>{announcement.recipients.toLocaleString()}명에게 발송</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-slate-400 hover:text-white"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDeleteAnnouncement(announcement.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="w-4 h-4" />
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
            </CardContent>
          </Card>
        </TabsContent>

        {/* 기본 정보 탭 */}
        <TabsContent value="overview" className="space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">게임 기본 정보</h2>
              <div className="space-y-6">
                {/* 게임 아이콘 */}
                <div>
                  <Label className="text-sm text-slate-400 mb-3 block">게임 아이콘</Label>
                  <div className="flex items-start gap-6">
                    <div className="w-32 h-32 bg-slate-800 rounded-lg border-2 border-dashed border-slate-700 flex items-center justify-center">
                      <div className="text-center text-slate-500">
                        <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-xs">512x512</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="space-y-3">
                        <Button variant="outline" className="border-slate-800 hover:bg-slate-800">
                          <Upload className="w-4 h-4 mr-2" />
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
                </div>

                <Separator className="bg-slate-800" />

                {/* 게임 제목 */}
                <div>
                  <Label htmlFor="gameTitle" className="text-sm text-slate-400 mb-2 block">
                    게임 제목 *
                  </Label>
                  <Input
                    id="gameTitle"
                    defaultValue={game.title}
                    className="bg-slate-800 border-slate-700 focus:border-green-500"
                  />
                </div>

                {/* 장르 */}
                <div>
                  <Label htmlFor="genre" className="text-sm text-slate-400 mb-2 block">
                    게임 장르 *
                  </Label>
                  <Select defaultValue={game.genre.toLowerCase()}>
                    <SelectTrigger className="bg-slate-800 border-slate-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-800">
                      <SelectItem value="rpg">RPG (롤플레잉)</SelectItem>
                      <SelectItem value="action">액션</SelectItem>
                      <SelectItem value="fps">FPS (1인칭 슈팅)</SelectItem>
                      <SelectItem value="moba">MOBA</SelectItem>
                      <SelectItem value="strategy">전략</SelectItem>
                      <SelectItem value="simulation">시뮬레이션</SelectItem>
                      <SelectItem value="adventure">어드벤처</SelectItem>
                      <SelectItem value="racing">레이싱</SelectItem>
                      <SelectItem value="horror">호러</SelectItem>
                      <SelectItem value="sports">스포츠</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-slate-500 mt-1">
                    게임의 주요 장르를 선택하세요
                  </p>
                </div>

                {/* 게임 특징 소개 */}
                <div>
                  <Label htmlFor="features" className="text-sm text-slate-400 mb-2 block">
                    게임 특징 소개 *
                  </Label>
                  <Textarea
                    id="features"
                    placeholder="게임의 주요 특징과 장점을 간단히 소개해주세요&#10;예:&#10;• 압도적인 그래픽과 몰입감 있는 사운드&#10;• 다양한 캐릭터 커스터마이징&#10;• 협동 플레이와 PvP 모드 지원&#10;• 지속적인 콘텐츠 업데이트"
                    defaultValue="• 압도적인 사이버펑크 그래픽과 네온 효과&#10;• 깊이 있는 스토리와 선택지 시스템&#10;• 40개 이상의 커스터마이징 가능한 무기&#10;• 오픈월드 탐험과 사이드 퀘스트"
                    className="bg-slate-800 border-slate-700 focus:border-green-500 min-h-40"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    베타존 게임 카드 및 상세 페이지에 표시됩니다 (최대 500자)
                  </p>
                </div>

                {/* 짧은 설명 */}
                <div>
                  <Label htmlFor="shortDesc" className="text-sm text-slate-400 mb-2 block">
                    짧은 설명 (한 줄 소개) *
                  </Label>
                  <Input
                    id="shortDesc"
                    defaultValue={game.description}
                    maxLength={100}
                    className="bg-slate-800 border-slate-700 focus:border-green-500"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    베타존 카드에 표시되는 짧은 설명입니다 (최대 100자)
                  </p>
                </div>

                {/* 상세 설명 */}
                <div>
                  <Label htmlFor="detailedDesc" className="text-sm text-slate-400 mb-2 block">
                    상세 설명
                  </Label>
                  <Textarea
                    id="detailedDesc"
                    placeholder="게임의 스토리, 배경, 게임플레이 등을 자세히 설명해주세요"
                    defaultValue="2077년, 네온으로 빛나는 메가시티를 배경으로 펼쳐지는 장대한 모험. 당신은 도시의 그림자 속에서 살아가는 용병이 되어 거대 기업들의 음모를 파헤치고 진실을 밝혀내야 합니다."
                    className="bg-slate-800 border-slate-700 focus:border-green-500 min-h-48"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    게임 상세 페이지에 표시되는 전체 설명입니다
                  </p>
                </div>

                <Separator className="bg-slate-800" />

                {/* 플랫폼 및 출시일 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-slate-400 mb-2 block">플랫폼 *</Label>
                    <Input
                      defaultValue={game.platform.join(", ")}
                      placeholder="PC, PlayStation, Xbox"
                      className="bg-slate-800 border-slate-700 focus:border-green-500"
                    />
                    <p className="text-xs text-slate-500 mt-1">콤마(,)로 구분하여 입력</p>
                  </div>

                  <div>
                    <Label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      출시 예정일
                    </Label>
                    <Input
                      type="date"
                      defaultValue="2024-06-15"
                      className="bg-slate-800 border-slate-700 focus:border-green-500"
                    />
                  </div>
                </div>

                {/* 공개 여부 */}
                <div>
                  <Label className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    공개 여부
                  </Label>
                  <div className="flex items-center gap-3 mt-2">
                    <Switch defaultChecked />
                    <span className="text-sm text-slate-300">베타존에 게임 공개</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    비활성화 시 게임이 베타존에 노출되지 않습니다
                  </p>
                </div>

                <Separator className="bg-slate-800" />

                {/* 시스템 요구사항 */}
                <div>
                  <Label className="text-sm text-slate-400 mb-3 block">시스템 요구사항</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <h4 className="font-semibold mb-3">최소 사양</h4>
                      <Textarea
                        placeholder="OS: Windows 10&#10;CPU: Intel i5-4460&#10;RAM: 8GB&#10;GPU: GTX 970&#10;DirectX: Version 11&#10;저장공간: 50GB"
                        defaultValue="OS: Windows 10 64-bit&#10;CPU: Intel i5-4460 / AMD FX-6300&#10;RAM: 8GB&#10;GPU: NVIDIA GTX 970 / AMD R9 290&#10;DirectX: Version 11&#10;저장공간: 50GB"
                        className="bg-slate-800 border-slate-700 focus:border-green-500 min-h-40"
                      />
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <h4 className="font-semibold mb-3">권장 사양</h4>
                      <Textarea
                        placeholder="OS: Windows 11&#10;CPU: Intel i7-8700&#10;RAM: 16GB&#10;GPU: RTX 3060&#10;DirectX: Version 12&#10;저장공간: 70GB SSD"
                        defaultValue="OS: Windows 11 64-bit&#10;CPU: Intel i7-8700 / AMD Ryzen 7 2700X&#10;RAM: 16GB&#10;GPU: NVIDIA RTX 3060 / AMD RX 6700 XT&#10;DirectX: Version 12&#10;저장공간: 70GB SSD"
                        className="bg-slate-800 border-slate-700 focus:border-green-500 min-h-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 게임 정보 미리보기 */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">베타존 노출 미리보기</h2>
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-800">
                <div className="flex gap-6">
                  <div className="w-32 h-32 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="w-12 h-12 text-slate-600" />
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
            </CardContent>
          </Card>
        </TabsContent>

        {/* 미디어 탭 */}
        <TabsContent value="media" className="space-y-6">
          {/* 스크린샷 */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold">게임 스크린샷</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    게임 화면을 보여주는 스크린샷을 등록하세요 (최대 10개)
                  </p>
                </div>
                <Dialog open={isScreenshotModalOpen} onOpenChange={setIsScreenshotModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Upload className="w-4 h-4 mr-2" />
                      스크린샷 추가
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-slate-900 border-slate-800">
                    <DialogHeader>
                      <DialogTitle>스크린샷 추가</DialogTitle>
                      <DialogDescription className="text-slate-400">
                        게임 스크린샷을 업로드하세요
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="screenshot-title" className="text-sm text-slate-400 mb-2 block">
                          제목
                        </Label>
                        <Input
                          id="screenshot-title"
                          placeholder="예: 메인 화면"
                          value={newScreenshot.title}
                          onChange={(e) => setNewScreenshot({ ...newScreenshot, title: e.target.value })}
                          className="bg-slate-800 border-slate-700"
                        />
                      </div>
                      <div>
                        <Label className="text-sm text-slate-400 mb-2 block">이미지 파일</Label>
                        <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-slate-600 transition-colors cursor-pointer">
                          <Upload className="w-12 h-12 mx-auto mb-4 text-slate-400" />
                          <p className="text-slate-400 mb-2">클릭하여 이미지를 업로드</p>
                          <p className="text-sm text-slate-500">PNG, JPG (최대 5MB, 권장 1920x1080)</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setIsScreenshotModalOpen(false)}
                        className="border-slate-800"
                      >
                        취소
                      </Button>
                      <Button onClick={handleAddScreenshot} className="bg-green-600 hover:bg-green-700">
                        추가
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {screenshots.map((screenshot) => (
                  <div key={screenshot.id} className="relative group">
                    <div className="aspect-video bg-slate-800/50 rounded-lg border-2 border-slate-700 hover:border-slate-600 transition-colors flex items-center justify-center overflow-hidden">
                      <div className="text-center text-slate-500">
                        <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">{screenshot.title}</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0 bg-slate-900 border-slate-700"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteScreenshot(screenshot.id)}
                        className="h-8 w-8 p-0 bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-400 font-medium mb-1">이미지 가이드라인</p>
                  <ul className="text-slate-400 space-y-1">
                    <li>• 권장 해상도: 1920x1080px 이상</li>
                    <li>• 지원 형식: PNG, JPG (각 최대 5MB)</li>
                    <li>• 게임의 핵심 콘텐츠를 보여주는 이미지를 사용하세요</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 플레이 동영상 */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold">게임 플레이 동영상</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    트레일러와 게임플레이 영상을 등록하세요 (최대 5개)
                  </p>
                </div>
                <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Plus className="w-4 h-4 mr-2" />
                      동영상 추가
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-slate-900 border-slate-800">
                    <DialogHeader>
                      <DialogTitle>동영상 추가</DialogTitle>
                      <DialogDescription className="text-slate-400">
                        YouTube URL 또는 직접 업로드하세요
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="video-title" className="text-sm text-slate-400 mb-2 block">
                          제목
                        </Label>
                        <Input
                          id="video-title"
                          placeholder="예: 공식 트레일러"
                          value={newVideo.title}
                          onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                          className="bg-slate-800 border-slate-700"
                        />
                      </div>
                      <div>
                        <Label className="text-sm text-slate-400 mb-2 block">동영상 타입</Label>
                        <Select
                          value={newVideo.type}
                          onValueChange={(value) => setNewVideo({ ...newVideo, type: value })}
                        >
                          <SelectTrigger className="bg-slate-800 border-slate-700">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-slate-800">
                            <SelectItem value="youtube">YouTube</SelectItem>
                            <SelectItem value="upload">직접 업로드</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {newVideo.type === "youtube" ? (
                        <div>
                          <Label htmlFor="video-url" className="text-sm text-slate-400 mb-2 block">
                            YouTube URL
                          </Label>
                          <Input
                            id="video-url"
                            placeholder="https://youtube.com/watch?v=..."
                            value={newVideo.url}
                            onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
                            className="bg-slate-800 border-slate-700"
                          />
                        </div>
                      ) : (
                        <div>
                          <Label className="text-sm text-slate-400 mb-2 block">동영상 파일</Label>
                          <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-slate-600 transition-colors cursor-pointer">
                            <Film className="w-12 h-12 mx-auto mb-4 text-slate-400" />
                            <p className="text-slate-400 mb-2">클릭하여 동영상 업로드</p>
                            <p className="text-sm text-slate-500">MP4 (최대 100MB)</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setIsVideoModalOpen(false)}
                        className="border-slate-800"
                      >
                        취소
                      </Button>
                      <Button onClick={handleAddVideo} className="bg-green-600 hover:bg-green-700">
                        추가
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="p-4 bg-slate-800/30 rounded-lg border border-slate-800 hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-48 aspect-video bg-slate-800 rounded-lg border-2 border-dashed border-slate-700 flex items-center justify-center flex-shrink-0">
                        <Play className="w-12 h-12 text-slate-600" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="font-semibold mb-1">{video.title}</h3>
                          <p className="text-sm text-slate-400">{video.url}</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{video.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{video.views.toLocaleString()} 조회</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-800 hover:bg-slate-800"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteVideo(video.id)}
                          className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 게임샵 탭 */}
        <TabsContent value="shop" className="space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold">게임샵 아이템 관리</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    인앱 결제 아이템과 가격을 설정하세요
                  </p>
                </div>
                <Dialog open={isItemModalOpen} onOpenChange={setIsItemModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      아이템 추가
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-slate-900 border-slate-800 max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>새 아이템 등록</DialogTitle>
                      <DialogDescription className="text-slate-400">
                        게임샵에 판매할 아이템 정보를 입력하세요
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="item-name" className="text-sm text-slate-400 mb-2 block">
                            아이템명 *
                          </Label>
                          <Input
                            id="item-name"
                            placeholder="예: 프리미엄 패스"
                            value={newItem.name}
                            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                            className="bg-slate-800 border-slate-700"
                          />
                        </div>
                        <div>
                          <Label className="text-sm text-slate-400 mb-2 block">카테고리 *</Label>
                          <Select
                            value={newItem.type}
                            onValueChange={(value) => setNewItem({ ...newItem, type: value })}
                          >
                            <SelectTrigger className="bg-slate-800 border-slate-700">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-slate-800">
                              <SelectItem value="패키지">패키지</SelectItem>
                              <SelectItem value="외형">외형/스킨</SelectItem>
                              <SelectItem value="재화">재화</SelectItem>
                              <SelectItem value="소모품">소모품</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="item-price" className="text-sm text-slate-400 mb-2 block">
                            가격 *
                          </Label>
                          <Input
                            id="item-price"
                            type="number"
                            placeholder="9900"
                            value={newItem.price}
                            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                            className="bg-slate-800 border-slate-700"
                          />
                        </div>
                        <div>
                          <Label className="text-sm text-slate-400 mb-2 block">통화</Label>
                          <Select
                            value={newItem.currency}
                            onValueChange={(value) => setNewItem({ ...newItem, currency: value })}
                          >
                            <SelectTrigger className="bg-slate-800 border-slate-700">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-slate-800">
                              <SelectItem value="KRW">KRW (원)</SelectItem>
                              <SelectItem value="USD">USD ($)</SelectItem>
                              <SelectItem value="EUR">EUR (€)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="item-stock" className="text-sm text-slate-400 mb-2 block">
                            재고
                          </Label>
                          <Input
                            id="item-stock"
                            placeholder="무제한"
                            value={newItem.stock}
                            onChange={(e) => setNewItem({ ...newItem, stock: e.target.value })}
                            className="bg-slate-800 border-slate-700"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="item-description" className="text-sm text-slate-400 mb-2 block">
                          아이템 설명
                        </Label>
                        <Textarea
                          id="item-description"
                          placeholder="아이템에 대한 상세 설명"
                          value={newItem.description}
                          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                          className="bg-slate-800 border-slate-700 min-h-24"
                        />
                      </div>

                      <div>
                        <Label className="text-sm text-slate-400 mb-2 block">아이템 아이콘</Label>
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 bg-slate-800 rounded-lg border-2 border-dashed border-slate-700 flex items-center justify-center">
                            <Package className="w-6 h-6 text-slate-600" />
                          </div>
                          <Button variant="outline" className="border-slate-800 hover:bg-slate-800">
                            <Upload className="w-4 h-4 mr-2" />
                            이미지 업로드
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setIsItemModalOpen(false)}
                        className="border-slate-800"
                      >
                        취소
                      </Button>
                      <Button onClick={handleAddItem} className="bg-green-600 hover:bg-green-700">
                        아이템 등록
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                {shopItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-slate-800/30 rounded-lg border border-slate-800 hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Package className="w-10 h-10" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <Badge variant="outline" className="border-slate-700 text-xs">
                              {item.type}
                            </Badge>
                            <Badge
                              className={`text-xs ${
                                item.active
                                  ? "bg-green-500/20 text-green-400 border-green-500/50"
                                  : "bg-slate-500/20 text-slate-400 border-slate-500/50"
                              }`}
                            >
                              {item.active ? "판매중" : "비활성"}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm mb-3">
                            <div className="flex items-center gap-2 text-green-400">
                              <DollarSign className="w-4 h-4" />
                              <span className="font-semibold text-lg">
                                {item.price.toLocaleString()} {item.currency}
                              </span>
                            </div>
                            <Separator orientation="vertical" className="h-4 bg-slate-700" />
                            <span className="text-slate-400">재고: {item.stock}</span>
                            <Separator orientation="vertical" className="h-4 bg-slate-700" />
                            <span className="text-slate-400">판매: {item.sales}개</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={item.active}
                              onCheckedChange={() => toggleItemActive(item.id)}
                            />
                            <span className="text-xs text-slate-400">판매 활성화</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-800 hover:bg-slate-800"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteItem(item.id)}
                          className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 판매 통계 */}
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <h3 className="font-semibold mb-3">판매 통계 (이번 달)</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">총 판매액</p>
                    <p className="text-2xl font-bold text-green-400">
                      ₩{shopItems.reduce((sum, item) => sum + item.price * item.sales, 0).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">판매 건수</p>
                    <p className="text-2xl font-bold">
                      {shopItems.reduce((sum, item) => sum + item.sales, 0).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">활성 아이템</p>
                    <p className="text-2xl font-bold">
                      {shopItems.filter((item) => item.active).length} / {shopItems.length}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}