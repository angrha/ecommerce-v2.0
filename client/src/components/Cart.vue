<template>
<div>
  <table class="table table-hover tbl" >
    <tbody>
      <tr class="table-light" v-for="cart in carts" :key="cart._id">
        <th scope="row"> {{ cart.title }}</th>
        <td>Count</td>
        <td>{{cart.price}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'carts'
    ])
  }
}
</script>

<style>
.tbl {
  margin-top: 2%;
}
</style>
