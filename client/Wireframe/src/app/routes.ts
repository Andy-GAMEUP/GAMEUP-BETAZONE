import { createBrowserRouter } from "react-router";
import { Layout } from "@/app/components/Layout";
import { DeveloperLayout } from "@/app/components/DeveloperLayout";
import { Home } from "@/app/pages/Home";
import { Games } from "@/app/pages/Games";
import { HowItWorks } from "@/app/pages/HowItWorks";
import { Community } from "@/app/pages/Community";
import { DeveloperDashboard } from "@/app/pages/developer/Dashboard";
import { GameManagement } from "@/app/pages/developer/GameManagement";
import { GameRegister } from "@/app/pages/developer/GameRegister";
import { TesterManagement } from "@/app/pages/developer/TesterManagement";
import { FeedbackManagement } from "@/app/pages/developer/FeedbackManagement";
import { Analytics } from "@/app/pages/developer/Analytics";
import { Settings } from "@/app/pages/developer/Settings";
import { GameDetail } from "@/app/pages/developer/GameDetail";
import { GameDetailManagement } from "@/app/pages/developer/GameDetailManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "games", Component: Games },
      { path: "how-it-works", Component: HowItWorks },
      { path: "community", Component: Community },
    ],
  },
  {
    path: "/developer",
    Component: DeveloperLayout,
    children: [
      { index: true, Component: DeveloperDashboard },
      { path: "games", Component: GameManagement },
      { path: "games/new", Component: GameRegister },
      { path: "games/:id", Component: GameDetailManagement },
      { path: "testers", Component: TesterManagement },
      { path: "feedback", Component: FeedbackManagement },
      { path: "analytics", Component: Analytics },
      { path: "settings", Component: Settings },
    ],
  },
]);