import { createBrowserRouter, redirect } from "react-router-dom";

import BaseLayout from "../layout/BaseLayout";
import SuperBaseLayout from "../layout/SuperBaseLayout";

import HomePage from "../pages/HomePage";
import PlayPage from "../pages/PlayPage";
import ShopPage from "../pages/ShopPage";
import LeaderBoardPage from "../pages/LeaderBoardPage";
import ProfilePage from "../pages/ProfilePage";
import InventoryPage from "../pages/InventoryPage";
import NewsPage from "../pages/NewsPage";
import LoadingScreen from "../components/LoadingScreen";
import LandingPage from "../pages/LandingPage";
import TutorialPage from "../pages/TutorialPage.jsx";
import { EmblaCarousel } from "../components/EmblaCarousel";
import UnregisteredPage from "../pages/UnregisteredPage";

const router = createBrowserRouter([
  {
    element: <SuperBaseLayout />,
    children: [
      {
        element: <BaseLayout />,
        loader: () => {
          const token = localStorage.getItem("access_token");
          if (!token) throw redirect("/");
          return null;
        },
        children: [
          {
            path: "/home",
            element: <HomePage />,
          },
          {
            path: "/leaderboard",
            element: <LeaderBoardPage />,
          },
          {
            path: "/shop",
            element: <ShopPage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
          {
            path: "/inventory",
            element: <InventoryPage />,
          },
          {
            path: "/profile/inventory",
            element: <InventoryPage />,
          },
          {
            path: "/news",
            element: <NewsPage />,
          },
          {
            path: "/tutorial",
            element: <TutorialPage />,
          },
        ],
      },
      { path: "/play", element: <PlayPage /> },
      { path: "/testing", element: <EmblaCarousel /> },
    ],
  },
  {
    path: "/",
    element: <LandingPage />,
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (token) throw redirect("/home");
      return null;
    },
  },
  {
    path: "*",
    element: <UnregisteredPage />,
  },
]);

export default router;
