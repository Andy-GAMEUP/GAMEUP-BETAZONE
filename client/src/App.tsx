import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GameListPage from './pages/GameListPage'
import HowItWorksPage from './pages/HowItWorksPage'
import CommunityPage from './pages/CommunityPage'
import CommunityPostPage from './pages/CommunityPostPage'
import CommunityWritePage from './pages/CommunityWritePage'
import CommunityBookmarksPage from './pages/CommunityBookmarksPage'
import UploadGamePage from './pages/UploadGamePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DeveloperLayout from './components/DeveloperLayout'
import { DashboardPage } from './pages/DashboardPage'
import GamesManagementPage from './pages/GamesManagementPage'
import GameEditPage from './pages/GameEditPage'
import AnalyticsPage from './pages/AnalyticsPage'
import SettingsPage from './pages/SettingsPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import AdminGamesPage from './pages/AdminGamesPage'
import AdminGameMetricsPage from './pages/AdminGameMetricsPage'
import AdminCommunityPage from './pages/AdminCommunityPage'
import AdminUsersPage from './pages/AdminUsersPage'
import AdminAnnouncementsPage from './pages/AdminAnnouncementsPage'
import RequireAdmin from './components/RequireAdmin'
import RequireAuth from './components/RequireAuth'
import PlayerGameDetailPage from './pages/PlayerGameDetailPage'
import PlayerMyPage from './pages/PlayerMyPage'
// ✅ 새 페이지 (와이어프레임에서 추가)
import FeedbackManagementPage from './pages/FeedbackManagementPage'
import TesterManagementPage from './pages/TesterManagementPage'
import GameDetailManagementPage from './pages/GameDetailManagementPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/games" element={<GameListPage />} />
        <Route path="/games/:id" element={<PlayerGameDetailPage />} />
        <Route path="/my" element={<RequireAuth><PlayerMyPage /></RequireAuth>} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/write" element={<RequireAuth><CommunityWritePage /></RequireAuth>} />
        <Route path="/community/edit/:id" element={<RequireAuth><CommunityWritePage /></RequireAuth>} />
        <Route path="/community/bookmarks" element={<RequireAuth><CommunityBookmarksPage /></RequireAuth>} />
        <Route path="/community/:id" element={<CommunityPostPage />} />

        {/* Developer Console Routes */}
        <Route element={<RequireAuth><DeveloperLayout /></RequireAuth>}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/games-management" element={<GamesManagementPage />} />
          <Route path="/games-management/:id/edit" element={<GameEditPage />} />
          {/* ✅ 게임 상세 관리 (미디어/공지/게임샵) */}
          <Route path="/games-management/:id/manage" element={<GameDetailManagementPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          {/* ✅ 피드백 관리 (업그레이드) */}
          <Route path="/feedback" element={<FeedbackManagementPage />} />
          {/* ✅ 테스터 관리 (업그레이드) */}
          <Route path="/testers" element={<TesterManagementPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/upload" element={<UploadGamePage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<RequireAdmin><AdminDashboardPage /></RequireAdmin>} />
        <Route path="/admin/games" element={<RequireAdmin><AdminGamesPage /></RequireAdmin>} />
        <Route path="/admin/metrics/:id" element={<RequireAdmin><AdminGameMetricsPage /></RequireAdmin>} />
        <Route path="/admin/community" element={<RequireAdmin><AdminCommunityPage /></RequireAdmin>} />
        <Route path="/admin/users" element={<RequireAdmin><AdminUsersPage /></RequireAdmin>} />
        <Route path="/admin/announcements" element={<RequireAdmin><AdminAnnouncementsPage /></RequireAdmin>} />
      </Routes>
    </div>
  )
}

export default App