import { createRouter, createWebHistory } from "vue-router";

import HazardousWorkPermit from "../components/HazardousWorkPermit.vue";
import HotWorkPermit from "../components/HotWorkPermit.vue";
import EnergyWorkPermit from "../components/EnergyWorkPermit.vue";
import ConfinedSpacePermit from "../components/ConfinedSpacePermit.vue";
import ConfinedSpaceAtmosphereControl from "../components/ConfinedSpaceAtmosphereControl.vue";

const routes = [
  {
    path: "/",
    redirect: "/hazardous-work"
  },
  {
    path: "/hazardous-work",
    name: "HazardousWorkPermit",
    component: HazardousWorkPermit
  },
  {
    path: "/hot-work",
    name: "HotWorkPermit",
    component: HotWorkPermit
  },
  {
    path: "/energy-work",
    name: "EnergyWorkPermit",
    component: EnergyWorkPermit
  },
  {
    path: "/confined-space",
    name: "ConfinedSpacePermit",
    component: ConfinedSpacePermit
  },
  {
    path: "/confined-space-atmosphere",
    name: "ConfinedSpaceAtmosphereControl",
    component: ConfinedSpaceAtmosphereControl
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
