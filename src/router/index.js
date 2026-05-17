import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventsView from "../views/EventsView.vue";
import CalendarView from "../views/CalendarView.vue";
import AreaView from "../views/AreaView.vue";
import SourcesView from "../views/SourcesView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/events", component: EventsView },
  { path: "/calendar", component: CalendarView },
  { path: "/area", component: AreaView },
  { path: "/sources", component: SourcesView },
  { path: "/contact", component: ContactView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

router.afterEach((to) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: to.fullPath,
    });
  }
});

export default router;
