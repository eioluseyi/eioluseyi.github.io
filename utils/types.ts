type SkillItemType =
  | "react"
  | "vue"
  | "nuxt"
  | "next"
  | "typescript"
  | "tailwind"
  | "scss";

type RouteType = {
  path: string;
  contentComponent?: Component;
};

type RouteListType = RouteType[];

type ExperienceType = {
  from: string;
  to: string;
  company: string;
  jobTitle: string;
  companyLogo?: string;
  description?: string;
  projectUrl?: string;
};
