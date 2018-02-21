<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" style="letter-spacing: 5px;" href="#"> E-LUKIS </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto" style="letter-spacing: 2px;">
          <li class="nav-item active">
            <router-link :to="{name: 'Home'}" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item" v-if="login">
            <router-link :to="{name: 'Profile'}" class="nav-link">My Profile</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div class="row col-xs-6">
          <input v-if="login === false" v-model="formData.email" class="form-control form-control-sm mr-sm-2 col-xs-6" placeholder="Email" type="email">
          <input v-if="login === false" v-model="formData.password" class="form-control form-control-sm mr-sm-2 col-xs-6" placeholder="Password" type="password">
          <button v-if="login === false" @click="signin(formData)" class="btn btn-outline-primary btn-sm my-2 my-sm-0" type="submit">Sign In</button>
          <button v-if="login" @click="signout" class="btn btn-primary btn-sm my-2 my-sm-0" type="button">Sign Out</button>
          <router-link :to="{name: 'Signup'}" type="button" class="btn btn-sm btn-link" style="text-decoration: none;" >Sign Up</router-link>
          </div>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState([
      'login'
    ])
  },
  methods: {
    ...mapActions([
      'signin',
      'checkLogin',
      'signout'
    ])
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style>
.navbar {
  padding-top: 10px;
  padding-bottom: 5px;
}
</style>
