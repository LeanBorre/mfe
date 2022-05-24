import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// mount func to start app
const mount = (e) => {
  const app = createApp(Dashboard);
  app.mount(e);
};

// if deelopment && isolation, mount inmediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// if runnin through container, export mount func
export { mount };
