type SkillItemType = "react" | "vue" | "nuxt" | "next";

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
};
