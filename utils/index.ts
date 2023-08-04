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
