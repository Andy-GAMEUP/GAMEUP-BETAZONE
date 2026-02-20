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
import FeedbackPage from './pages/FeedbackPage'
import TestersPage from './pages/TestersPage'
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
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/testers" element={<TestersPage />} />
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
