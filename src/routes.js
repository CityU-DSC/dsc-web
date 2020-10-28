import Home from "./components/home.vue";
import ShowProjects from "./components/dsc_projects/showProject.vue";
import ShowEvents from "./components/dsc_events/showEvents.vue";

export const routes = [
  {
    path: "/",
    component: Home,
    name: "home-page",
  },
  {
    path: "/projects/",
    component: ShowProjects,
    name: "dsc-projects",
  },
  {
    path: "/events/",
    component: ShowEvents,
    name: "dsc-events",
  },
];
