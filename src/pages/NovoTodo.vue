<template>
  <panel title="Novo Todo">
    <div v-if="saveSuccess" class="alert alert-success fade show m-b-0">
      <span class="close" data-dismiss="alert">&times;</span>
      <strong>Success!</strong>
      Todo salvo com sucesso.
    </div>
    <br />
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group row col-md-4">
        <label>Título *</label>
        <input
          name="titulo"
          v-model="todo.titulo"
          class="form-control"
          placeholder="Título da tarefa"
        />
      </div>
      <div class="form-group row col-md-4">
        <label>Descricao *</label>
        <textarea
          v-model="todo.descricao"
          name="descricao"
          class="form-control"
          placeholder="Descriçao da tarefa"
          rows="4"
        ></textarea>
      </div>

      <div class="form-group col-md-4">
        <div class="row">
          <label>Data *</label>
        </div>
        <div class="row">
          <datepicker
            v-model="todo.data"
            name="data"
            placeholder="Data da tarefa"
            input-class="form-control bg-white"
          ></datepicker>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn mx-2 btn-success">Cadastrar</button>
      </div>
    </form>
  </panel>
</template>
<script>
import { URLSearchParams } from "url";
export default {
  name: "NovoTodo",
  data() {
    return {
      todo: {
        titulo: "",
        descricao: "",
        data: ""
      },
      saveSuccess: false
    };
  },
  mounted() {
    if (this.$route.params.id) {
      const id = this.$route.params.id;
      this.$http
        .post("/get-todo", { id })
        .then(result => {
          this.todo = {
            ...result.data[0],
            data: new Date(result.data[0].data.replace("-", "/"))
          };
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    onSubmit() {
      const dataFormatada = this.todo.data.toLocaleDateString();
      const edit = this.$route.params.id ? { id: this.$route.params.id } : {};
      this.$http
        .post("/save-todo", { ...this.todo, data: dataFormatada, ...edit })
        .then(() => {
          this.todo = { titulo: "", descricao: "", data: "" };
          this.saveSuccess = true;
        });
    }
  }
};
</script>

