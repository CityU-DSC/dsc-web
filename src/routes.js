import Home from "./components/home.vue";
import ShowProjects from "./components/dsc_projects/showProject.vue";
import ShowEvents from "./components/dsc_events/showEvents.vue";

export const routes = [
  {
    path: "/",
    component: Home,
    name: "home-page",
    meta: { scrollToTop: true },
  },
  {
    path: "/projects",
    component: ShowProjects,
    name: "dsc-projects",
    meta: { scrollToTop: true },
  },
  {
    path: "/events",
    component: ShowEvents,
    name: "dsc-events",
    meta: { scrollToTop: true },
  },
];
