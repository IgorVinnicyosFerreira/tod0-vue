<template>
  <div class="table-responsive">
    <Table class="table table-hover">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
      </tbody>
    </Table>
  </div>
</template>
<script>
export default {
  name: "BasicTable",
  props: ["columns", "bodyData"],
  mounted() {
    console.log(123);
  }
};
</script>

