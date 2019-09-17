<template>
  <panel title="Home">
    <h4>Todo's cadastrados</h4>
    <div class="table-responsive">
      <Table class="table table-hover">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tr" v-for="(todo, index) in todos" :key="index" @click="visualizar(todo.id)">
            <th>{{ todo.titulo }}</th>
            <th>{{ todo.descricao }}</th>
            <th>{{ todo.data }}</th>
          </tr>
        </tbody>
      </Table>
    </div>
  </panel>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      todos: null
    };
  },
  mounted() {
    this.$http
      .get("/get-all-todos")
      .then(response => {
        this.todos = response.data;
      })
      .catch(erro => console.log(error));
  },
  methods: {
    visualizar(id) {
      this.$router.push({ name: "visualizar", params: { id } });
    }
  }
};
</script>

<style>
.tr {
  cursor: pointer;
}
</style>
