<template>
  <panel title="Visualizar Todo">
    <div class="row">
      <div class="col-md-3">
        <h5>Título</h5>
        <p>{{ todo.titulo }}</p>
      </div>
      <div class="col-md-3">
        <h5>Data</h5>
        <p>{{ todo.data }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <h5>Descrição</h5>
        <p>{{ todo.descricao }}</p>
      </div>
    </div>
    <div class="row">
      <button class="btn mx-2 btn-info" @click="goEdit">Editar</button>
      <button class="btn btn-danger">Excluir</button>
    </div>
  </panel>
</template>
<script>
import Axios from "axios";

export default {
  name: "VisualizarTodo",

  data() {
    return {
      todo: {
        id: 0,
        titulo: "Cozinhar",
        descricao: "Descricao do todo cozinhar, fazer jantar",
        data: "21/05/2019"
      }
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.$http
      .post("/get-todo", { id })
      .then(result => {
        this.todo = result.data[0];
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    goEdit() {
      this.$router.push({ name: "novo-todo", params: { id: this.todo.id } });
    }
  }
};
</script>

