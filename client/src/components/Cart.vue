<template>
<div>
  <table class="table table-hover tbl" >
    <tbody>
      <tr class="table-light" v-for="cart in carts" :key="cart._id">
        <th scope="row"> {{ cart.title }}</th>
        <td> {{ cart.quantity }}</td>
        <td>{{ cart.price }} <i class="fa fa-trash-o" @click="removeItem(cart)"></i> </td>
      </tr>
      <!-- total cart -->
      <tr class="table-primary">
        <td> <button type="button" class="btn btn-info btn-sm wd" @click="checkout">Checkout</button> </td>
        <td> <button type="button" class="btn btn-danger btn-sm" @click="cancel">cancel</button> </td>
        <th scope="row" class="ttl">IDR {{ total }}</th>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'carts',
      'total'
    ])
  },
  methods: {
    ...mapMutations([
      'cancel',
      'removeItem'
    ]),
    ...mapActions([
      'checkout'
    ])
  }
}
</script>

<style>
.tbl {
  margin-top: 2%;
}

.fa {
  font-size:16px;
  color:red;
  cursor: pointer;
}

.wd {
  width: 120%;
}

.ttl {
  padding-left: 0%;
  padding-bottom: 6px;
}
</style>
