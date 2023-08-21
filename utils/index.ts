import {
  PagesExperience,
  PagesHome,
  PagesMotivation,
  PagesProjects,
  PagesReachOut,
} from "#components";

export const routeList: RouteListType = [
  {
    path: "/",
    contentComponent: PagesHome,
  },
  {
    path: "/motivation",
    contentComponent: PagesMotivation,
  },
  {
    path: "/experience",
    contentComponent: PagesExperience,
  },
  {
    path: "/projects",
    contentComponent: PagesProjects,
  },
  {
    path: "/reach-out",
    contentComponent: PagesReachOut,
  },
];

export const getY = (x: number, maxHeight: number = 50, delay: number = 50) => {
  const val = (100 / maxHeight + (delay / x) ** 10) ** -1 * 100;

  return val;
};
