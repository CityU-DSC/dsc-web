import Home from "./components/home.vue";
import ShowProjects from "./components/dsc_projects/showProject.vue";
import ShowEvents from "./components/dsc_events/showEvents.vue";

export const routes = [
  {
    path: "/dsc-web/",
    component: Home,
    name: "home-page",
  },
  {
    path: "/dsc-web/projects",
    component: ShowProjects,
    name: "dsc-projects",
  },
  {
    path: "/dsc-web/events",
    component: ShowEvents,
    name: "dsc-events",
  },
];
