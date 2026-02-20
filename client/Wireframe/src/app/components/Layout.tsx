import { Outlet, Link, useLocation } from "react-router";
import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "홈" },
    { path: "/games", label: "베타존" },
    { path: "/how-it-works", label: "플랫폼 소개" },
    { path: "/community", label: "커뮤니티" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-green-400">GAME</span>
                <span className="text-white">UP</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? "text-green-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/developer">
                <Button variant="ghost" className="text-slate-300 hover:text-white">
                  개발자 센터
                </Button>
              </Link>
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                로그인
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                가입하기
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-green-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full bg-green-600 hover:bg-green-700">
                가입하기
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <span className="font-bold">
                  <span className="text-green-400">GAME</span>
                  <span className="text-white">UP</span>
                </span>
              </div>
              <p className="text-sm text-slate-400">
                게임의 미래를 함께 만들어가는 베타 테스트 플랫폼
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">플랫폼</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/games" className="hover:text-white transition-colors">
                    베타존
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="hover:text-white transition-colors">
                    플랫폼 소개
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="hover:text-white transition-colors">
                    커뮤니티
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">지원</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    고객센터
                  </a>
                </li>
                <li>
                  <Link to="/developer" className="hover:text-white transition-colors">
                    개발자 센터
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">법적 고지</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    이용약관
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    쿠키 정책
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
            <p>&copy; 2026 GameUP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}