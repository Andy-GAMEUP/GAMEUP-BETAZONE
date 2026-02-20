import { Outlet, Link, useLocation } from "react-router";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import {
  LayoutDashboard,
  Gamepad2,
  Users,
  MessageSquare,
  BarChart3,
  Settings,
  Bell,
  Menu,
  X,
  ChevronDown,
  LogOut,
  Plus,
} from "lucide-react";

export function DeveloperLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/developer", label: "대시보드", icon: <LayoutDashboard className="w-5 h-5" /> },
    { path: "/developer/games", label: "게임 관리", icon: <Gamepad2 className="w-5 h-5" /> },
    { path: "/developer/testers", label: "테스터 관리", icon: <Users className="w-5 h-5" /> },
    { path: "/developer/feedback", label: "피드백", icon: <MessageSquare className="w-5 h-5" /> },
    { path: "/developer/analytics", label: "분석", icon: <BarChart3 className="w-5 h-5" /> },
    { path: "/developer/settings", label: "설정", icon: <Settings className="w-5 h-5" /> },
  ];

  const isActive = (path: string) => {
    if (path === "/developer") {
      return location.pathname === "/developer";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 h-screen bg-slate-900 border-r border-slate-800 transition-all duration-300 z-40 ${
          sidebarOpen ? "w-64" : "w-0 lg:w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-slate-800">
            <Link to="/developer" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Gamepad2 className="w-6 h-6" />
              </div>
              {sidebarOpen && (
                <div>
                  <div className="font-bold text-sm">
                    <span className="text-green-400">GAME</span>
                    <span className="text-white">UP</span>
                  </div>
                  <div className="text-xs text-slate-400">개발자 센터</div>
                </div>
              )}
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? "bg-green-600 text-white"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {item.icon}
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              ))}
            </div>
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-green-600">개</AvatarFallback>
              </Avatar>
              {sidebarOpen && (
                <div className="flex-1">
                  <p className="text-sm font-semibold">개발사명</p>
                  <p className="text-xs text-slate-400">developer@game.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-slate-400 hover:text-white"
              >
                {sidebarOpen ? <X /> : <Menu />}
              </button>
              <h1 className="text-xl font-bold">
                {navItems.find((item) => isActive(item.path))?.label || "개발자 센터"}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/developer/games/new">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  게임 등록
                </Button>
              </Link>

              <button className="relative p-2 text-slate-400 hover:text-white">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 text-slate-400 hover:text-white"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-green-600 text-xs">개</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-lg shadow-xl">
                    <div className="p-2">
                      <Link
                        to="/developer/settings"
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded"
                      >
                        설정
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded"
                      >
                        사용자 사이트
                      </Link>
                      <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-800 rounded flex items-center gap-2">
                        <LogOut className="w-4 h-4" />
                        로그아웃
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
