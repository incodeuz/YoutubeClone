import React from "react";
import Library from "../pages/Library/index";
import Home from "../Components/Body/index";
import Liked from "../pages/Liked/index";
import Navigator from "../pages/Navigator/index";
import Shorts from "../pages/Shorts/index";
import Subscr from "../pages/Subscribtions/index";
import Watch from "../pages/WatchLetter/index";
import YourVideos from "../pages/YourVideos/index";

export const elementData = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Navigator />,
    path: "/navigator",
  },
  {
    element: <Watch />,
    path: "/watchletter",
  },
  {
    element: <Subscr />,
    path: "/subscribtions",
  },
  {
    element: <Library />,
    path: "/library",
  },
  {
    element: <Liked />,
    path: "/liked",
  },
  {
    element: <YourVideos />,
    path: "/yourvideos",
  },
  {
    element: <Shorts />,
    path: "/shorts",
  },
];
