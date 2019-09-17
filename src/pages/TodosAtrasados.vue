<template>
  <panel title="Todo's Atrasados">
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
          <tr class="tr" v-for="(todo, index) in todos" :key="index">
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
  name: "TodosAtrasados",
  data() {
    return {
      todos: [
        {
          titulo: "Aprender Vue.js",
          descricao: "Olhar a documentação do vue.js e desenvolver um app",
          data: "15/07/2019"
        },
        {
          titulo: "Comprar Café",
          descricao:
            "Ir ao mercado união e comprar um café são braz extra forte",
          data: "16/07/2019"
        },
        {
          titulo: "Ir ao cinema",
          descricao: "Ir ao cinema assistir rei leão",
          data: "18/07/2019"
        }
      ]
    };
  }
};
</script>

