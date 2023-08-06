import { PagesExperience, PagesHome, PagesMotivation } from "#components";

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
  },
  {
    path: "/say-hello",
  },
];

export const getY = (x: number, maxHeight: number = 50, delay: number = 50) => {
  const val = (100 / maxHeight + (delay / x) ** 10) ** -1 * 100;

  return val;
};
