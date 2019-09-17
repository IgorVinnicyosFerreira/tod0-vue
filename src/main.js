import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// plugins
import Axios from "axios";

const base_request = Axios.create({
  baseURL: "http://todo/application",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  }
});

Vue.prototype.$http = base_request;

import VueRouter from "vue-router";
Vue.use(VueRouter);
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import vueTopProgress from "vue-top-progress";
Vue.use(vueTopProgress);

// bootrstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// arquivo layout css
import "./assets/css/default/style.min.css";
import "./assets/css/default/style-responsive.min.css";
import "./assets/css/default/theme/default.css";
import "./assets/css/style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faPlusCircle,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faHome, faPlusCircle, faClock);
Vue.component("font-awesome-icon", FontAwesomeIcon);

//components
import Panel from "./components/Panel";
import VueDatepicker from "vuejs-datepicker";

Vue.component("panel", Panel);
Vue.component("datepicker", VueDatepicker);
// paginas
import Home from "./pages/Home.vue";
import NovoTodo from "./pages/NovoTodo.vue";
import TodosAtrasados from "./pages/TodosAtrasados.vue";
import VisualizarTodo from "./pages/VisualizarTodo.vue";

const routes = [
  { path: "/home", component: Home },
  { path: "/novo-todo/:id?", name: "novo-todo", component: NovoTodo },
  { path: "/todos-atrasados", component: TodosAtrasados },
  {
    path: "/visualizar-todo/:id",
    name: "visualizar",
    component: VisualizarTodo
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
