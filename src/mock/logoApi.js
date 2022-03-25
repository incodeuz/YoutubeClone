import HomeA from "../assets/Assets/navbar/leftBlockIcons/1.svg";
import NavigatorA from "../assets/Assets/navbar/leftBlockIcons/2.svg";
import ShortsA from "../assets/Assets/navbar/leftBlockIcons/3.svg";
import SubscribtionsA from "../assets/Assets/navbar/leftBlockIcons/4.svg";
import LibraryA from "../assets/Assets/navbar/leftBlockIcons/5.svg";
import HistoryA from "../assets/Assets/navbar/leftBlockIcons/6.svg";
import YourVideosA from "../assets/Assets/navbar/leftBlockIcons/7.svg";
import WatchLetterA from "../assets/Assets/navbar/leftBlockIcons/8.svg";

import Library from "../pages/Library/index";
import Home from "../Components/Body/index";
import Liked from "../pages/Liked/index";
import Navigator from "../pages/Navigator/index";
import Shorts from "../pages/Shorts/index";
import Subscr from "../pages/Subscribtions/index";
import WatchLetter from "../pages/WatchLetter/index";
import YourVideos from "../pages/YourVideos/index";

export const logoData = [
  {
    title: "Subscribtions",
    icon: ShortsA,
    element: <Subscr />,
    path: "subscribtions",
  },
  {
    title: "Library",
    icon: HomeA,
    element: <Library />,
    path: "library",
  },
  {
    title: "Liked",
    icon: HistoryA,
    element: <Liked />,
    path: "/liked",
  },
  {
    title: "Your Videos",
    icon: YourVideosA,
    element: <YourVideos />,
    path: "/yourvideos",
  },
  {
    title: "Shorts",
    element: <Shorts />,
    path: "shorts",
    icon: SubscribtionsA,
  },
];

export const logoDataTwo = [
  {
    title: "Home",
    icon: WatchLetterA,
    element: <Home />,
    path: "/",
  },
  {
    title: "Navigator",
    icon: NavigatorA,
    element: <Navigator />,
    path: "/navigator",
  },
  {
    title: "Watch Letter",
    icon: LibraryA,
    element: <WatchLetter />,
    path: "/watchletter",
  },
];
