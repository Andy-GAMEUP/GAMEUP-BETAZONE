import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  Play,
  Users,
  MessageSquare,
  Trophy,
  Zap,
  Shield,
  Star,
  ChevronRight,
  Heart,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Home() {
  const featuredGames = [
    {
      id: 1,
      title: "Cyber Nexus",
      genre: "액션 RPG",
      image: "https://images.unsplash.com/photo-1615511678275-bde5f97ecc17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwbmVvbnxlbnwxfHx8fDE3Njk5NjU4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "진행중",
      players: "2,450",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Stellar Warfare",
      genre: "FPS",
      image: "https://images.unsplash.com/photo-1759701547646-acb29362adf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBhY3Rpb24lMjBnYW1lfGVufDF8fHx8MTc3MDAxNzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      status: "모집중",
      players: "1,820",
      rating: 4.6,
    },
    {
      id: 3,
      title: "Mystic Realms",
      genre: "판타지 RPG",
      image: "https://images.unsplash.com/photo-1759688168277-185a0c623968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwcnBnJTIwZ2FtZXxlbnwxfHx8fDE3Njk5NDA2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "곧 시작",
      players: "980",
      rating: 4.7,
    },
  ];

  const features = [
    {
      icon: <Play className="w-6 h-6" />,
      title: "최신 게임 미리 플레이",
      description: "정식 출시 전 독점적으로 게임을 체험하세요",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "개발진과 직접 소통",
      description: "피드백을 통해 게임 개발에 직접 참여하세요",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "특별 보상 획득",
      description: "베타 참여자 전용 아이템과 특전을 받으세요",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "게이머 커뮤니티",
      description: "같은 관심사를 가진 게이머들과 연결되세요",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "가입 및 프로필 설정",
      description: "관심 있는 게임 장르와 플레이 스타일을 선택하세요",
    },
    {
      step: "02",
      title: "베타 게임 탐색",
      description: "다양한 베타 테스트 중인 게임을 둘러보세요",
    },
    {
      step: "03",
      title: "베타 신청 및 참여",
      description: "원하는 게임에 신청하고 선정되면 즉시 플레이하세요",
    },
    {
      step: "04",
      title: "피드백 제공",
      description: "게임 경험을 공유하고 개발에 기여하세요",
    },
  ];

  const testimonials = [
    {
      name: "김게이머",
      role: "베타 테스터",
      content: "정식 출시 전에 게임을 플레이하고 개발에 참여할 수 있어서 정말 뜻깊었습니다!",
      rating: 5,
    },
    {
      name: "이플레이어",
      role: "베타 테스터",
      content: "개발팀과 소통하며 내 의견이 실제 게임에 반영되는 걸 보니 자부심이 느껴져요.",
      rating: 5,
    },
    {
      name: "박유저",
      role: "베타 테스터",
      content: "베타 전용 보상과 커뮤니티 활동이 정말 재밌어요. 새로운 게임 친구들도 많이 만났습니다!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-slate-950 z-10" />
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1766052631095-c16328022120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZ2FtaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzcwMDE1ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Gaming Setup"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 py-32 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-500/50">
              <Zap className="w-3 h-3 mr-1" />
              게임의 미래를 함께 만들어요
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-green-400">베타 테스트의</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                새로운 기준
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              최신 게임을 가장 먼저 플레이하고, 개발 과정에 참여하며,
              <br />
              특별한 보상을 받으세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg"
              >
                무료로 시작하기
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-200 hover:bg-slate-800 text-lg"
              >
                <Link to="/games" className="flex items-center">
                  게임 둘러보기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">현재 진행중인 베타</h2>
          <p className="text-slate-400">가장 인기있는 베타 테스트에 지금 참여하세요</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGames.map((game) => (
            <Card
              key={game.id}
              className="bg-slate-900 border-2 border-green-500/30 overflow-hidden hover:border-green-500 transition-all cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${
                      game.status === "진행중"
                        ? "bg-green-500/20 text-green-300 border-green-500/50"
                        : game.status === "모집중"
                        ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                        : "bg-orange-500/20 text-orange-300 border-orange-500/50"
                    }`}
                  >
                    {game.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-8 h-8 rounded-full bg-slate-950/70 backdrop-blur-sm flex items-center justify-center hover:bg-slate-900 transition-colors">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-slate-400 mb-4">{game.genre}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Users className="w-4 h-4" />
                    <span>{game.players} 테스터</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(game.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  참여하기
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/games">
            <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
              모든 게임 보기
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-green-400">GameUP</span>를 선택해야 하는 이유
            </h2>
            <p className="text-slate-400">게이머와 개발자를 연결하는 최고의 플랫폼</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-900 border-slate-800 hover:border-green-500/50 transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">참여 방법</h2>
          <p className="text-slate-400">4단계로 쉽게 시작하세요</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-500/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
              {index < howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-green-500/30" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/how-it-works">
            <Button className="bg-green-600 hover:bg-green-700">
              자세히 알아보기
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">테스터 후기</h2>
            <p className="text-slate-400">실제 베타 테스터들의 생생한 경험담</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-slate-900 border-slate-800"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-500/50">
          <CardContent className="p-12 text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-green-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              지금 바로 시작하세요
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              수천 명의 게이머들과 함께 최신 게임의 베타 테스트에 참여하고,
              개발 과정에서 중요한 역할을 담당하세요
            </p>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              무료로 가입하기
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}