<template>
  <div id="sidebar" class="sidebar">
    <div
      class="slimScrollDiv"
      style="position: relative; overflow: hidden; width: auto; height: 100%;"
    >
      <div
        data-scrollbar="true"
        data-height="100%"
        style="overflow: hidden; width: auto; height: 100%;"
        data-init="true"
      >
        <ul class="nav">
          <li v-bind:class="[has-sub, closed, {active: tabActive === '/home'}]">
            <a href="#" v-on:click="goRoute('/home')">
              <font-awesome-icon class="f-s-14" icon="home" />
              <span>&ensp;Home</span>
            </a>
          </li>
          <li v-bind:class="[has-sub, closed, {active: tabActive === '/novo-todo'}]">
            <a href="#" v-on:click="goRoute('/novo-todo')">
              <font-awesome-icon class="f-s-14" icon="plus-circle" />
              <span>&ensp;Novo todo</span>
            </a>
          </li>
          <li v-bind:class="[has-sub, closed, {active: tabActive === '/todos-atrasados'}]">
            <a href="#" v-on:click="goRoute('/todos-atrasados')">
              <font-awesome-icon class="f-s-14" icon="clock" />
              <span>&ensp;Todo's atrasados</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data: () => ({
    tabActive: "home"
  }),
  methods: {
    goRoute(route) {
      this.$router.push(`${route === "home" ? "/" : route}`);
      this.changeActive(route);
    },
    changeActive(tabActiveId) {
      this.tabActive = this.$route.path;
    }
  }
};
</script>

