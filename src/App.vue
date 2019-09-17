<template>
  <div id="page-container" class="fade page-sidebar-fixed page-header-fixed has-scroll show">
    <vue-topprogress ref="topProgress"></vue-topprogress>
    <Header />
    <Sidebar />
    <div id="content" class="content">
      <div class="col-lg-12">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "page-container",
  components: {
    HelloWorld,
    Header,
    Sidebar
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
