<template>
  <div class="latar">
    <span><img src="https://www.californiapaints.com/wp-content/uploads/californiapaints-favicon.png" alt="E-lukis"></span>
    <form>
      <fieldset>
        <div class="form-group">
          <input v-model="formData.first_name" class="form-control" placeholder="Enter First name" type="text">
        </div>
        <div class="form-group">
          <input v-model="formData.last_name" class="form-control" placeholder="Enter Last name" type="text">
        </div>
        <div class="form-group">
          <input v-model="formData.contact" class="form-control" placeholder="Enter Contact" type="text">
        </div>
        <div class="form-group">
          <input v-model="formData.username" class="form-control" placeholder="Enter Username" type="text">
        </div>
        <div class="form-group">
          <input v-model="formData.email" class="form-control" placeholder="Enter Email" type="email">
        </div>
        <div class="form-group">
          <input v-model="formData.password" class="form-control" placeholder="Enter Password" type="password">
        </div>
        <button @click="signup(formData)" type="button" class="btn btn-success btn-block" >SIGN UP</button>
      </fieldset>
    </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        first_name: '',
        last_name: '',
        contact: '',
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'signup'
    ])
  }
}
</script>

<style scoped>
.latar {
  background-color: rgba(238, 220, 220, 0.445);
  border-width: 3px;
  border-style: solid;
  border-color: rgb(102, 72, 61);
  border-radius: 10px;
  margin: auto;
  width: 35%;
  color: white;
  padding: 0% 2% 2% 2%;
  margin-top: 3%;
}

h2 {
  margin: 0%;
  padding: 0%;
  color: black;
}

input {
  width: 100%;
  margin: auto;
  height: 30px;
  padding: 1%;
}

img {
  width: 35%;
  padding: 0%;
  margin: 0%
}
</style>
