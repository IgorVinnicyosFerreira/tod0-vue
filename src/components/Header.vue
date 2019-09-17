<template>
  <div id="header" class="header navbar-inverse">
    <div class="navbar-brand">
      <b>Todo's App</b>
    </div>
    <ul class="navbar-nav navbar-right">
      <li>
        <form class="navbar-form" v-on:submit="validateForm">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="busca" />
            <button type="submit" class="btn btn-search">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </form>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    validateForm(){
      alert('teste');
    }
  }
};
</script>