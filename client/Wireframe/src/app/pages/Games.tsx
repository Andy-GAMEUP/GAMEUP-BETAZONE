import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Heart, Star, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Games() {
  const [activeTab, setActiveTab] = useState("genre");

  const featuredGame = {
    title: "CYBERPUNK NEXUS: ZERO HOUR",
    subtitle: "Dive into the neon-drenched future.",
    image: "https://images.unsplash.com/photo-1615511678275-bde5f97ecc17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwbmVvbnxlbnwxfHx8fDE3Njk5NjU4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  };

  const popularGames = [
    {
      id: 1,
      title: "Dragonheart Saga",
      image: "https://images.unsplash.com/photo-1646577482825-3fb6ff560de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGZhbnRhc3klMjB3YXJyaW9yfGVufDF8fHx8MTc3MDAxNTM2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.5,
      genre: "RPG",
      isFavorite: false,
    },
    {
      id: 2,
      title: "Starship Pioneers",
      image: "https://images.unsplash.com/photo-1738071665033-7ba9885c2c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHNob290ZXIlMjBnYW1lfGVufDF8fHx8MTc2OTk1MDg0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      genre: "우주 탐험",
      isFavorite: true,
    },
    {
      id: 3,
      title: "Combat Warriors",
      image: "https://images.unsplash.com/photo-1758862493283-51f1e23b8883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBnYW1lJTIwY2hhcmFjdGVyc3xlbnwxfHx8fDE3NzAwMTk3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6,
      genre: "액션",
      isFavorite: false,
    },
    {
      id: 4,
      title: "Neon Racers",
      image: "https://images.unsplash.com/photo-1757119163075-fca8444244ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBnYW1lJTIwY2Fyc3xlbnwxfHx8fDE3NzAwMTk3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      genre: "레이싱",
      isFavorite: true,
    },
  ];

  const recommendedGames = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1759701547646-acb29362adf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBhY3Rpb24lMjBnYW1lfGVufDF8fHx8MTc3MDAxNzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1759688168277-185a0c623968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwcnBnJTIwZ2FtZXxlbnwxfHx8fDE3Njk5NDA2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1615511678275-bde5f97ecc17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwbmVvbnxlbnwxfHx8fDE3Njk5NjU4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1646577482825-3fb6ff560de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGZhbnRhc3klMjB3YXJyaW9yfGVufDF8fHx8MTc3MDAxNTM2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1738071665033-7ba9885c2c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHNob290ZXIlMjBnYW1lfGVufDF8fHx8MTc2OTk1MDg0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1758862493283-51f1e23b8883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBnYW1lJTIwY2hhcmFjdGVyc3xlbnwxfHx8fDE3NzAwMTk3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1757119163075-fca8444244ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBnYW1lJTIwY2Fyc3xlbnwxfHx8fDE3NzAwMTk3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1759701547646-acb29362adf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBhY3Rpb24lMjBnYW1lfGVufDF8fHx8MTc3MDAxNzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={featuredGame.image}
            alt={featuredGame.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-green-600/20 text-green-400 border-green-600/50 px-4 py-1">
              ⚡ 베타 테스트 진행중
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-green-400">{featuredGame.title.split(':')[0]}:</span>
              <br />
              <span className="text-white">{featuredGame.title.split(':')[1]}</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              {featuredGame.subtitle}
            </p>
            <div className="flex gap-4">
              <Button className="bg-green-600 hover:bg-green-700 px-8">
                지금 플레이
              </Button>
              <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8">
                자세히 보기
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <ChevronDown className="w-6 h-6 text-white animate-bounce" />
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">인기 게임</h2>
          
          {/* Tabs */}
          <Tabs defaultValue="genre" className="w-full">
            <TabsList className="bg-slate-900/50 border border-slate-800">
              <TabsTrigger 
                value="genre" 
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                장르
              </TabsTrigger>
              <TabsTrigger 
                value="toprated"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                최고 평점
              </TabsTrigger>
              <TabsTrigger 
                value="newest"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                최신
              </TabsTrigger>
              <TabsTrigger 
                value="alphatest"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                알파테스트
              </TabsTrigger>
            </TabsList>

            <TabsContent value="genre" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularGames.map((game) => (
                  <Card
                    key={game.id}
                    className="bg-slate-900/50 border-2 border-green-500/30 overflow-hidden hover:border-green-500 transition-all cursor-pointer group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <button className="w-8 h-8 rounded-full bg-slate-950/70 backdrop-blur-sm flex items-center justify-center hover:bg-slate-900 transition-colors">
                          <Heart 
                            className={`w-4 h-4 ${game.isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`}
                          />
                        </button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2">{game.title}</h3>
                      <div className="flex items-center justify-between">
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
                        <span className="text-sm text-slate-400">{game.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="toprated" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...popularGames].sort((a, b) => b.rating - a.rating).map((game) => (
                  <Card
                    key={game.id}
                    className="bg-slate-900/50 border-2 border-green-500/30 overflow-hidden hover:border-green-500 transition-all cursor-pointer group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <button className="w-8 h-8 rounded-full bg-slate-950/70 backdrop-blur-sm flex items-center justify-center hover:bg-slate-900 transition-colors">
                          <Heart 
                            className={`w-4 h-4 ${game.isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`}
                          />
                        </button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2">{game.title}</h3>
                      <div className="flex items-center justify-between">
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
                        <span className="text-sm text-slate-400">{game.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="newest" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...popularGames].reverse().map((game) => (
                  <Card
                    key={game.id}
                    className="bg-slate-900/50 border-2 border-green-500/30 overflow-hidden hover:border-green-500 transition-all cursor-pointer group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <button className="w-8 h-8 rounded-full bg-slate-950/70 backdrop-blur-sm flex items-center justify-center hover:bg-slate-900 transition-colors">
                          <Heart 
                            className={`w-4 h-4 ${game.isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`}
                          />
                        </button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2">{game.title}</h3>
                      <div className="flex items-center justify-between">
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
                        <span className="text-sm text-slate-400">{game.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="alphatest" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularGames.slice(0, 2).map((game) => (
                  <Card
                    key={game.id}
                    className="bg-slate-900/50 border-2 border-green-500/30 overflow-hidden hover:border-green-500 transition-all cursor-pointer group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-orange-600/80 text-white border-0">
                          알파
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <button className="w-8 h-8 rounded-full bg-slate-950/70 backdrop-blur-sm flex items-center justify-center hover:bg-slate-900 transition-colors">
                          <Heart 
                            className={`w-4 h-4 ${game.isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`}
                          />
                        </button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2">{game.title}</h3>
                      <div className="flex items-center justify-between">
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
                        <span className="text-sm text-slate-400">{game.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            <span className="text-green-400">GameUP</span> 추천 게임
          </h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {recommendedGames.map((game) => (
            <div
              key={game.id}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative"
            >
              <ImageWithFallback
                src={game.image}
                alt={`Recommended game ${game.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
